// Simple ad-hoc store keeping data in window.
export const store = {
  selected: false || "",
  setIndex: window.setIndex || "0",
  titleIndex: window.titleIndex || "0",
  toggleSelected: () => (store.selected = window.selected = !window.selected),
  updateSetIndex: (index) => (store.setIndex = window.setIndex = `${index}`),
  updateTitleIndex: (index) =>
    (store.titleIndex = window.titleIndex = `${index}`),
};
