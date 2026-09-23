const escapeHtml = (value) => String(value ?? '')
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#39;');

const formatDate = (date) => {
  const [, month, day] = date.split('-');
  return `${Number(month)} 月 ${Number(day)} 日`;
};

export function renderHome({ phaseLabel, city, reminder, nextEvent }) {
  const next = nextEvent
    ? `<section class="next-event" aria-labelledby="next-event-title">
        <p class="eyebrow">下一项</p>
        <h3 id="next-event-title">${escapeHtml(nextEvent.time)} · ${escapeHtml(nextEvent.title)}</h3>
        <p>${escapeHtml(nextEvent.detail)}</p>
        ${nextEvent.leadMinutes ? `<p class="lead-time">建议提前 ${escapeHtml(nextEvent.leadMinutes)} 分钟准备</p>` : ''}
      </section>`
    : '<p class="empty-state">现在没有待进行的安排，安心享受旅程吧。</p>';

  return `<div class="hero-card">
      <p class="eyebrow">2026 欧洲秋日旅行</p>
      <h2 id="home-heading" tabindex="-1">${escapeHtml(phaseLabel)}</h2>
      <p class="hero-city">${escapeHtml(city)}</p>
    </div>
    <aside class="reminder reminder--${escapeHtml(reminder.tone)}" aria-labelledby="reminder-title">
      <h3 id="reminder-title">${escapeHtml(reminder.title)}</h3>
      <p>${escapeHtml(reminder.text)}</p>
    </aside>
    ${next}
    <div class="quick-actions" aria-label="快捷入口">
      <button type="button" data-view-target="itinerary">查看今日行程</button>
      <button type="button" data-view-target="checklist">查看行前清单</button>
    </div>
    <p class="reminder-note">页面提醒不是系统闹钟，请同时关注车票、航司和预约通知。</p>`;
}

export function renderItinerary(days, activeDayId) {
  return `<h2 id="itinerary-heading" tabindex="-1">每日行程</h2>
    <div class="timeline">${days.map((day) => `<details class="day-card"${day.id === activeDayId ? ' open' : ''}>
      <summary>
        <span class="day-number">Day ${escapeHtml(day.dayNumber)}</span>
        <span><strong>${escapeHtml(day.title)}</strong><small>${escapeHtml(formatDate(day.date))} · ${escapeHtml(day.city)}</small></span>
      </summary>
      <div class="day-content">
        <p>${escapeHtml(day.summary)}</p>
        <ol class="event-list">${day.events.map((event) => `<li class="event event--${escapeHtml(event.kind)}">
          <time datetime="${escapeHtml(`${day.date}T${event.time}`)}">${escapeHtml(event.time)}</time>
          <div><h3>${escapeHtml(event.title)}</h3><p>${escapeHtml(event.detail)}</p>${event.leadMinutes ? `<p class="lead-time">建议提前 ${escapeHtml(event.leadMinutes)} 分钟准备</p>` : ''}</div>
        </li>`).join('')}</ol>
        ${day.tips.length ? `<div class="day-tips"><h3>今日提示</h3><ul>${day.tips.map((tip) => `<li>${escapeHtml(tip)}</li>`).join('')}</ul></div>` : ''}
      </div>
    </details>`).join('')}</div>`;
}

export function renderSpots(spots) {
  const groups = new Map();
  spots.forEach((spot) => groups.set(spot.city, [...(groups.get(spot.city) ?? []), spot]));
  return `<h2 id="spots-heading" tabindex="-1">拍照打卡</h2>
    <p class="section-intro">按城市查看推荐时段、构图方式和顺路提示。地图链接需要联网。</p>
    ${[...groups].map(([city, citySpots]) => `<section class="spot-group" aria-labelledby="spots-${escapeHtml(city)}">
      <h3 id="spots-${escapeHtml(city)}">${escapeHtml(city)}</h3>
      <div class="spot-grid">${citySpots.map((spot) => `<article class="spot-card">
        <h4>${escapeHtml(spot.name)}</h4>
        <p><strong>推荐时段：</strong>${escapeHtml(spot.bestTime)}</p>
        <p><strong>怎么拍：</strong>${escapeHtml(spot.composition)}</p>
        <p><strong>顺路提示：</strong>${escapeHtml(spot.routeNote)}</p>
        <a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(spot.mapQuery)}" target="_blank" rel="noopener noreferrer">在地图中搜索<span class="sr-only"> ${escapeHtml(spot.name)}</span></a>
      </article>`).join('')}</div>
    </section>`).join('')}`;
}

export function renderChecklist(groups, checked = {}) {
  const items = groups.flatMap((group) => group.items);
  const complete = items.filter((item) => checked[item.id] === true).length;
  return `<div class="section-heading-row">
      <div><h2 id="checklist-heading" tabindex="-1">行前清单</h2><p>${complete} / ${items.length} 项已完成</p></div>
      <button type="button" id="clear-checklist">全部重置</button>
    </div>
    <progress value="${complete}" max="${items.length}" aria-label="行前清单完成进度：${complete} / ${items.length}">${complete} / ${items.length}</progress>
    ${groups.map((group) => `<fieldset class="checklist-group"><legend>${escapeHtml(group.title)}</legend>
      ${group.items.map((item) => `<label class="checklist-item" for="check-${escapeHtml(item.id)}">
        <input type="checkbox" id="check-${escapeHtml(item.id)}" data-checklist-id="${escapeHtml(item.id)}"${checked[item.id] === true ? ' checked' : ''}>
        <span>${escapeHtml(item.label)}</span>
      </label>`).join('')}
    </fieldset>`).join('')}`;
}
