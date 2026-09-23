import { TRIP, DAYS, CHECKLIST_GROUPS, PHOTO_SPOTS } from './itinerary.js';
import { getTripPhase, getActiveDay, getPageReminder } from './reminders.js';
import { createStorageAdapter } from './storage.js';
import { renderHome, renderItinerary, renderSpots, renderChecklist } from './render.js';

const VIEWS = ['home', 'itinerary', 'spots', 'checklist'];

document.addEventListener('DOMContentLoaded', () => {
  let browserStorage;
  try {
    browserStorage = window.localStorage;
  } catch {
    browserStorage = undefined;
  }
  const storage = createStorageAdapter(browserStorage);
  let checked = storage.loadChecklist();
  let activeView = storage.loadView();
  let renderedActiveDayId;

  const getIncompleteCount = () => CHECKLIST_GROUPS
    .flatMap((group) => group.items)
    .filter((item) => checked[item.id] !== true).length;

  const getNextEvent = (now, activeDay, phase) => {
    if (phase === 'after') return null;
    if (phase === 'before') return DAYS[0].events[0];
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    return activeDay.events.find((event) => {
      const [hours, minutes] = event.time.split(':').map(Number);
      return hours * 60 + minutes >= currentMinutes;
    }) ?? null;
  };

  const renderTimeViews = () => {
    const now = new Date();
    const activeDay = getActiveDay(now, DAYS);
    const phaseInfo = getTripPhase(now, TRIP);
    const phaseLabel = phaseInfo.phase === 'before'
      ? `距出发 ${phaseInfo.daysUntil} 天`
      : phaseInfo.phase === 'after' ? '旅程已完成' : `旅程第 ${activeDay.dayNumber} 天`;
    document.querySelector('#view-home').innerHTML = renderHome({
      phaseLabel,
      city: activeDay?.city ?? TRIP.title,
      reminder: getPageReminder(now, TRIP, DAYS, getIncompleteCount()),
      nextEvent: getNextEvent(now, activeDay, phaseInfo.phase),
    });
    if (renderedActiveDayId !== activeDay?.id) {
      document.querySelector('#view-itinerary').innerHTML = renderItinerary(DAYS, activeDay?.id);
      renderedActiveDayId = activeDay?.id;
    }
  };

  const renderChecklistView = () => {
    document.querySelector('#view-checklist').innerHTML = renderChecklist(CHECKLIST_GROUPS, checked);
  };

  document.querySelector('#view-spots').innerHTML = renderSpots(PHOTO_SPOTS);
  renderTimeViews();
  renderChecklistView();

  const showView = (view, { focus = false } = {}) => {
    if (!VIEWS.includes(view)) view = 'home';
    activeView = view;
    storage.saveView(view);
    for (const name of VIEWS) document.querySelector(`#view-${name}`).hidden = name !== view;
    document.querySelectorAll('[data-view]').forEach((button) => {
      if (button.dataset.view === view) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    if (focus) document.querySelector(`#${view}-heading`)?.focus();
  };

  document.querySelector('.bottom-nav').addEventListener('click', (event) => {
    const button = event.target.closest('[data-view]');
    if (button) showView(button.dataset.view, { focus: true });
  });

  document.querySelector('#main-content').addEventListener('click', (event) => {
    const shortcut = event.target.closest('[data-view-target]');
    if (shortcut) showView(shortcut.dataset.viewTarget, { focus: true });
    if (event.target.closest('#clear-checklist')) {
      checked = {};
      storage.clearChecklist();
      renderTimeViews();
      renderChecklistView();
    }
  });

  document.querySelector('#view-checklist').addEventListener('change', (event) => {
    const input = event.target.closest('[data-checklist-id]');
    if (!input) return;
    const changedId = input.dataset.checklistId;
    checked = { ...checked, [input.dataset.checklistId]: input.checked };
    storage.saveChecklist(checked);
    renderTimeViews();
    renderChecklistView();
    document.getElementById(`check-${changedId}`)?.focus();
  });

  const connectivity = document.querySelector('#connectivity-status');
  const updateConnectivity = () => {
    connectivity.textContent = navigator.onLine ? '' : '当前处于离线状态，核心行程仍可查看，地图链接需要联网。';
  };
  window.addEventListener('online', updateConnectivity);
  window.addEventListener('offline', updateConnectivity);
  window.addEventListener('pageshow', renderTimeViews);
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') renderTimeViews();
  });
  window.setInterval(renderTimeViews, 60_000);
  updateConnectivity();

  let installPrompt;
  const installButton = document.querySelector('#install-app');
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });
  installButton.addEventListener('click', async () => {
    if (!installPrompt) return;
    await installPrompt.prompt();
    installPrompt = null;
    installButton.hidden = true;
  });

  const isIos = /iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone = window.matchMedia?.('(display-mode: standalone)').matches || navigator.standalone === true;
  document.querySelector('#ios-install-help').hidden = !(isIos && !isStandalone);

  if ('serviceWorker' in navigator && window.isSecureContext) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }

  showView(activeView);
});
