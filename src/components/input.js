import { store } from "../store/index.js";
import { bound } from "../utils.js";
import { updateHighlight, showTheater, hideTheater } from "./listing.js";

const ARROW_RIGHT = "ArrowRight";
const ARROW_LEFT = "ArrowLeft";
const ARROW_DOWN = "ArrowDown";
const ARROW_UP = "ArrowUp";
const SPACE = " ";
const directionKeys = [ARROW_RIGHT, ARROW_LEFT, ARROW_DOWN, ARROW_UP];

const Input = () => {
  document.addEventListener("keydown", ({ key, ...event }) => {
    if (directionKeys.includes(key)) {
      const titleIndex = Number(store.titleIndex);
      const setIndex = Number(store.setIndex);

      if (key === ARROW_RIGHT) {
        store.updateTitleIndex(bound(titleIndex + 1, 0, 10));
      } else if (key === ARROW_LEFT) {
        store.updateTitleIndex(bound(titleIndex - 1, 0, 10));
      } else if (key === ARROW_DOWN) {
        store.updateSetIndex(bound(setIndex + 1, 0, 10));
      } else if (key === ARROW_UP) {
        store.updateSetIndex(bound(setIndex - 1, 0, 10));
      }

      updateHighlight(store.setIndex, store.titleIndex);
      event?.preventDefault();
      return false;
    }
    if (key === SPACE) {
      const titleIndex = Number(store.titleIndex);
      const setIndex = Number(store.setIndex);
      store.toggleSelected();
      if (store.selected) showTheater(setIndex, titleIndex);
      else hideTheater();
    }
  });
};

export default Input;
