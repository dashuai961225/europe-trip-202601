const CHECKLIST_KEY = 'euro-trip:checklist';
const VIEW_KEY = 'euro-trip:view';
const VALID_VIEWS = new Set(['home', 'itinerary', 'spots', 'checklist']);

const isPlainObject = (value) => value !== null
  && typeof value === 'object'
  && !Array.isArray(value)
  && (Object.getPrototypeOf(value) === Object.prototype || Object.getPrototypeOf(value) === null);

export function createStorageAdapter(storage) {
  let memoryChecklist = {};
  let memoryView = 'home';

  return {
    loadChecklist() {
      let raw;
      try {
        raw = storage?.getItem(CHECKLIST_KEY);
      } catch {
        return memoryChecklist;
      }
      if (raw === null || raw === undefined) return memoryChecklist;
      try {
        const parsed = JSON.parse(raw);
        memoryChecklist = isPlainObject(parsed) ? { ...parsed } : {};
        return memoryChecklist;
      } catch {
        memoryChecklist = {};
        return {};
      }
    },

    saveChecklist(checklist) {
      if (!isPlainObject(checklist)) return;
      memoryChecklist = { ...checklist };
      try {
        storage?.setItem(CHECKLIST_KEY, JSON.stringify(memoryChecklist));
      } catch {
        // The in-memory copy keeps the page usable when storage is unavailable.
      }
    },

    clearChecklist() {
      memoryChecklist = {};
      try {
        storage?.removeItem(CHECKLIST_KEY);
      } catch {
        // Clearing the in-memory copy is sufficient for this session.
      }
    },

    loadView() {
      try {
        const saved = storage?.getItem(VIEW_KEY);
        if (VALID_VIEWS.has(saved)) memoryView = saved;
        return memoryView;
      } catch {
        return memoryView;
      }
    },

    saveView(view) {
      if (!VALID_VIEWS.has(view)) return;
      memoryView = view;
      try {
        storage?.setItem(VIEW_KEY, view);
      } catch {
        // The in-memory copy keeps navigation state for this session.
      }
    },
  };
}
