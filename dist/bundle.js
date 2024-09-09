/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchListing: () => (/* binding */ fetchListing),\n/* harmony export */   fetchListings: () => (/* binding */ fetchListings)\n/* harmony export */ });\nconst API_URL = \"https://cd-static.bamgrid.com\";\nconst fetchListings = async () => {\n  const response = await fetch(`${API_URL}/dp-117731241344/home.json`);\n  return await response.json();\n};\nconst fetchListing = async refId => {\n  const response = await fetch(`${API_URL}/dp-117731241344/sets/${refId}.json`);\n  return await response.json();\n};\n\n//# sourceURL=webpack://disney/./src/api/index.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Input: () => (/* reexport safe */ _input_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Listing: () => (/* reexport safe */ _listing_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _listing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./listing.js */ \"./src/components/listing.js\");\n/* harmony import */ var _input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.js */ \"./src/components/input.js\");\n\n\n\n\n//# sourceURL=webpack://disney/./src/components/index.js?");

/***/ }),

/***/ "./src/components/input.js":
/*!*********************************!*\
  !*** ./src/components/input.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _listing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./listing */ \"./src/components/listing.js\");\n\n\n\nconst ARROW_RIGHT = \"ArrowRight\";\nconst ARROW_LEFT = \"ArrowLeft\";\nconst ARROW_DOWN = \"ArrowDown\";\nconst ARROW_UP = \"ArrowUp\";\nconst SPACE = \" \";\nconst directionKeys = [ARROW_RIGHT, ARROW_LEFT, ARROW_DOWN, ARROW_UP];\nconst Input = () => {\n  document.addEventListener(\"keydown\", ({\n    key,\n    ...event\n  }) => {\n    if (directionKeys.includes(key)) {\n      const titleIndex = Number(_store__WEBPACK_IMPORTED_MODULE_0__.store.titleIndex);\n      const setIndex = Number(_store__WEBPACK_IMPORTED_MODULE_0__.store.setIndex);\n      if (key === ARROW_RIGHT) {\n        _store__WEBPACK_IMPORTED_MODULE_0__.store.updateTitleIndex((0,_utils__WEBPACK_IMPORTED_MODULE_1__.bound)(titleIndex + 1, 0, 10));\n      } else if (key === ARROW_LEFT) {\n        _store__WEBPACK_IMPORTED_MODULE_0__.store.updateTitleIndex((0,_utils__WEBPACK_IMPORTED_MODULE_1__.bound)(titleIndex - 1, 0, 10));\n      } else if (key === ARROW_DOWN) {\n        _store__WEBPACK_IMPORTED_MODULE_0__.store.updateSetIndex((0,_utils__WEBPACK_IMPORTED_MODULE_1__.bound)(setIndex + 1, 0, 10));\n      } else if (key === ARROW_UP) {\n        _store__WEBPACK_IMPORTED_MODULE_0__.store.updateSetIndex((0,_utils__WEBPACK_IMPORTED_MODULE_1__.bound)(setIndex - 1, 0, 10));\n      }\n      (0,_listing__WEBPACK_IMPORTED_MODULE_2__.updateHighlight)(_store__WEBPACK_IMPORTED_MODULE_0__.store.setIndex, _store__WEBPACK_IMPORTED_MODULE_0__.store.titleIndex);\n      event?.preventDefault();\n      return false;\n    }\n    if (key === SPACE) {\n      const titleIndex = Number(_store__WEBPACK_IMPORTED_MODULE_0__.store.titleIndex);\n      const setIndex = Number(_store__WEBPACK_IMPORTED_MODULE_0__.store.setIndex);\n      _store__WEBPACK_IMPORTED_MODULE_0__.store.toggleSelected();\n      if (_store__WEBPACK_IMPORTED_MODULE_0__.store.selected) (0,_listing__WEBPACK_IMPORTED_MODULE_2__.showTheater)(setIndex, titleIndex);else (0,_listing__WEBPACK_IMPORTED_MODULE_2__.hideTheater)();\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);\n\n//# sourceURL=webpack://disney/./src/components/input.js?");

/***/ }),

/***/ "./src/components/listing.js":
/*!***********************************!*\
  !*** ./src/components/listing.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   hideTheater: () => (/* binding */ hideTheater),\n/* harmony export */   showTheater: () => (/* binding */ showTheater),\n/* harmony export */   updateHighlight: () => (/* binding */ updateHighlight)\n/* harmony export */ });\nconst Listing = ({\n  highlighted,\n  titleIndex,\n  setIndex,\n  title,\n  imageUrl,\n  videoArt\n}) => {\n  const div = document.createElement(\"div\");\n  const image = document.createElement(\"img\");\n  const player = document.createElement(\"video\");\n  const source = document.createElement(\"source\");\n  const titleHeader = document.createElement(\"div\");\n  titleHeader.textContent = title;\n  titleHeader.classList.add(\"titleHeader\");\n  div.className = \"title\";\n  div.id = highlighted ? \"highlighted\" : \"\";\n  div.dataset.titleIndex = titleIndex;\n  div.dataset.setIndex = setIndex;\n  div.dataset.videoArt = videoArt;\n  div.dataset.title = title;\n  image.src = imageUrl;\n  image.classList.add(\"image\");\n  if (videoArt) {\n    player.id = videoArt;\n    player.className = \"video\";\n    player.width = \"200\";\n    player.autoplay = true;\n    player.loop = true;\n    source.src = videoArt;\n    player.appendChild(source);\n    div.appendChild(player);\n  } else {\n    const backupImage = document.createElement(\"img\");\n    backupImage.src = imageUrl;\n    backupImage.classList.add(\"backup-image\");\n    div.appendChild(backupImage);\n  }\n  div.appendChild(image);\n  div.appendChild(titleHeader);\n  return div;\n};\nconst updateHighlight = (setIndex, titleIndex) => {\n  const highlighted = document.getElementById(\"highlighted\");\n  const video = highlighted.querySelector(\"video\");\n  highlighted.removeAttribute(\"id\");\n  const newHighlight = document.querySelector(`[data-set-index='${setIndex}'][data-title-index='${titleIndex}']`);\n  newHighlight.id = \"highlighted\";\n  newHighlight?.scrollIntoView({\n    behavior: \"smooth\",\n    block: \"end\",\n    inline: \"nearest\"\n  });\n  video.play();\n};\nconst showTheater = (setIndex, titleIndex) => {\n  const selectedVideo = document.querySelector(`[data-set-index='${setIndex}'][data-title-index='${titleIndex}']`);\n  const videoArt = selectedVideo.dataset?.[\"videoArt\"];\n  const player = document.getElementById(\"player\");\n  const source = document.createElement(\"source\");\n  source.src = videoArt;\n  player.appendChild(source);\n  player.style.zIndex = \"1\";\n  player.play();\n};\nconst hideTheater = () => {\n  const player = document.getElementById(\"player\");\n  const root = document.getElementById(\"root\");\n\n  // Recreate player at root to remove video\n  root.removeChild(player);\n  const newPlayer = document.createElement(\"video\");\n  newPlayer.id = \"player\";\n  root.appendChild(newPlayer);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Listing);\n\n//# sourceURL=webpack://disney/./src/components/listing.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./src/api/index.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ \"./src/components/index.js\");\n\n\n\nconst handleInput = () => {\n  (0,_components__WEBPACK_IMPORTED_MODULE_2__.Input)();\n};\n(async () => {\n  const listings = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchListings)();\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__.render)(listings);\n  handleInput();\n})();\n\n//# sourceURL=webpack://disney/./src/index.js?");

/***/ }),

/***/ "./src/render/index.js":
/*!*****************************!*\
  !*** ./src/render/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: () => (/* binding */ render),\n/* harmony export */   renderSet: () => (/* binding */ renderSet)\n/* harmony export */ });\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ \"./src/api/index.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/utils.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ \"./src/components/index.js\");\n\n\n\n\nconst render = listings => {\n  const listingIds = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRefIds)(listings);\n  const backgroundPlayer = document.createElement(\"video\");\n  backgroundPlayer.id = \"player\";\n  document.getElementById(\"root\").appendChild(backgroundPlayer);\n\n  // Render each section with loading state\n  listingIds.forEach((_, setIndex) => {\n    const collectionRowView = document.createElement(\"div\");\n    collectionRowView.id = `set-${setIndex}`;\n    collectionRowView.classList.add(\"row\");\n    collectionRowView.classList.add(\"loading\");\n    document.getElementById(\"root\").appendChild(collectionRowView);\n  });\n\n  // Fetch API assets on render and render when loaded.\n  Promise.all(listingIds.map(async (id, setIndex) => (0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchListing)(id).then(set => renderSet(set, setIndex))));\n};\nconst renderSet = (set, setIndex) => {\n  const collectionRowView = document.getElementById(`set-${setIndex}`);\n  const setTitle = set?.data?.CuratedSet?.text?.title?.full?.set?.default?.content || \"You might like...\";\n  const titles = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getTitles)(set);\n  const itemViews = titles.map(({\n    title,\n    imageUrl,\n    videoArt\n  }, titleIndex) => {\n    const highlighted = _store__WEBPACK_IMPORTED_MODULE_2__.store.setIndex === `${setIndex}` && _store__WEBPACK_IMPORTED_MODULE_2__.store.titleIndex === `${titleIndex}`;\n    return (0,_components__WEBPACK_IMPORTED_MODULE_3__.Listing)({\n      highlighted,\n      titleIndex,\n      setIndex,\n      title,\n      imageUrl,\n      videoArt\n    });\n  });\n  collectionRowView.classList.remove(\"loading\");\n  const titleRow = document.createElement(\"div\");\n  titleRow.className = \"title-row\";\n  titleRow.innerText = setTitle;\n  collectionRowView.insertBefore(titleRow, collectionRowView.firstChild);\n  const clipContainer = document.createElement(\"div\");\n  clipContainer.className = \"clip-container\";\n  itemViews.forEach(title => clipContainer.appendChild(title));\n  collectionRowView.appendChild(clipContainer);\n};\n\n//# sourceURL=webpack://disney/./src/render/index.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   store: () => (/* binding */ store)\n/* harmony export */ });\n// Simple ad-hoc store keeping data in window.\nconst store = {\n  selected:  false || \"\",\n  setIndex: window.setIndex || \"0\",\n  titleIndex: window.titleIndex || \"0\",\n  toggleSelected: () => store.selected = window.selected = !window.selected,\n  updateSetIndex: index => store.setIndex = window.setIndex = `${index}`,\n  updateTitleIndex: index => store.titleIndex = window.titleIndex = `${index}`\n};\n\n//# sourceURL=webpack://disney/./src/store/index.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   bound: () => (/* binding */ bound),\n/* harmony export */   getRefIds: () => (/* binding */ getRefIds),\n/* harmony export */   getTitles: () => (/* binding */ getTitles)\n/* harmony export */ });\nconst bound = (value, min, max) => Math.min(Math.max(value, min), max);\nconst getTitles = set => {\n  const data = Object.entries(set.data);\n  const titleSet = data.map(([_, set]) => set.items.map(item => item));\n  return titleSet.map(titles => titles.map(({\n    image: {\n      tile\n    },\n    videoArt,\n    text: {\n      title: {\n        full\n      }\n    }\n  }) => ({\n    imageUrl: tile?.[\"1.78\"]?.series ? tile?.[\"1.78\"]?.series?.default?.url : tile?.[\"1.78\"]?.program?.default?.url,\n    title: full?.series ? full?.series?.default?.content : full?.program?.default?.content,\n    videoArt: videoArt?.[0]?.mediaMetadata?.urls?.[0]?.url\n  })))[0];\n};\nconst getRefIds = listings => {\n  let listingIds = [];\n  listings?.data?.StandardCollection?.containers.map(listing => {\n    if (listing?.set?.refId) {\n      listingIds.push(listing.set.refId);\n    }\n  });\n  return listingIds;\n};\n\n//# sourceURL=webpack://disney/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;