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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  font-family: 'Poppins', sans-serif;\\n  box-sizing: border-box;\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nheader {\\n  position: fixed;\\n  width: 100%;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 30px 50px;\\n  background-color: rgba(0, 0, 0, 0.285);\\n  max-height: 100px;\\n}\\n\\nheader #logo h2 {\\n  font-size: 45px;\\n  color: #00f;\\n}\\n\\nul li {\\n  list-style-type: none;\\n  padding: 0;\\n}\\n\\nheader #logo h2 span {\\n  color: #fff;\\n  font-style: italic;\\n  font-size: 35px;\\n}\\n\\nheader nav ul {\\n  list-style: none;\\n}\\n\\nheader nav ul li {\\n  font-size: 20px;\\n  font-weight: 700;\\n  cursor: pointer;\\n  color: #fff;\\n}\\n\\nheader nav ul li:hover {\\n  text-decoration: underline;\\n  color: #00f;\\n}\\n\\n.main-container {\\n  padding: 130px 5%;\\n  display: grid;\\n  grid-template-columns: auto auto auto;\\n  grid-column-gap: 50px;\\n}\\n\\n.card {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 20px;\\n  padding: 30px 0;\\n  border-radius: 25px;\\n  border: 1px solid rgb(200, 200, 200);\\n  margin: 50px;\\n}\\n\\n.card:hover {\\n  background-color: rgb(250, 250, 250);\\n  box-shadow: 5px 10px rgb(229, 228, 228);\\n}\\n\\n.card .card-img {\\n  width: 210px;\\n  height: 295px;\\n}\\n\\n.card-details {\\n  display: flex;\\n  gap: 70px;\\n}\\n\\n.card .like-section {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.card .like-section i {\\n  cursor: pointer;\\n}\\n\\n.comment-btn {\\n  padding: 10px 25px;\\n  border: none;\\n  background-color: rgb(44, 44, 223);\\n  color: #fff;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  font-size: 15px;\\n}\\n\\n.liked {\\n  color: #f00;\\n}\\n\\n.footer {\\n  background-color: rgb(51, 46, 46);\\n  padding: 20px 30px;\\n  position: relative;\\n  bottom: 0;\\n  width: 100%;\\n  color: #fff;\\n  height: 5vh;\\n}\\n\\n/* comment section */\\n.comment-section-container {\\n  background-color: rgb(201, 195, 195);\\n  width: 100%;\\n  height: 100vh;\\n  position: fixed;\\n  padding: 100px 100px;\\n  top: 0;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  overflow-y: scroll;\\n}\\n\\n.dn {\\n  display: none;\\n}\\n\\n.fa-times {\\n  font-size: 30px;\\n  position: absolute;\\n  right: 50px;\\n  top: 20px;\\n}\\n\\n.commentForm {\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 10px;\\n  position: relative;\\n  padding-bottom: 20px;\\n  align-items: center;\\n  width: 60%;\\n}\\n\\nform h3,\\n.display-comment h3,\\n.showName {\\n  padding: 50px 0 30px;\\n}\\n\\n.name-input {\\n  padding: 5px;\\n  margin: 10px 0;\\n  border-radius: 5px;\\n}\\n\\n.insignt {\\n  padding: 5px;\\n  margin: 10px 0;\\n  border-radius: 5px;\\n  margin-bottom: 20px;\\n  margin-bottom: 50px;\\n}\\n\\n.submit {\\n  padding: 5px 30px;\\n  background-color: rgb(100, 100, 100);\\n  border-radius: 5px;\\n  outline: none;\\n  color: #fff;\\n}\\n\\nform {\\n  width: 100%;\\n  position: relative;\\n}\\n\\n.comment-username {\\n  font-weight: 900;\\n}\\n\\n.submitBtn {\\n  position: absolute;\\n  bottom: 0;\\n  left: 40%;\\n  margin: 10px 0;\\n  padding: 5px 15px;\\n  background-color: rgb(44, 44, 223);\\n  color: #fff;\\n  outline: none;\\n  border: none;\\n  border-radius: 5px;\\n}\\n\\n.info-container {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 60%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://first-microverse-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://first-microverse-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://first-microverse-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_tvShow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tvShow.js */ \"./src/modules/tvShow.js\");\n\n\n\nconst shows = new _modules_tvShow_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n\nwindow.onload = async () => {\n  await shows.getShows();\n};\n\n\n//# sourceURL=webpack://first-microverse-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/apiOperations.js":
/*!**************************************!*\
  !*** ./src/modules/apiOperations.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createComment\": () => (/* binding */ createComment),\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"getLikes\": () => (/* binding */ getLikes),\n/* harmony export */   \"getShows\": () => (/* binding */ getShows),\n/* harmony export */   \"likeShowOps\": () => (/* binding */ likeShowOps)\n/* harmony export */ });\n/* harmony import */ var _default_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default.js */ \"./src/modules/default.js\");\n\n\nconst getShows = async () => {\n  const res = await fetch(`${_default_js__WEBPACK_IMPORTED_MODULE_0__.SHOW_BASE_URL}/shows`, { method: 'GET' });\n  const shows = await res.json();\n  return shows;\n};\n\nconst getLikes = async () => {\n  const res = await fetch(`${_default_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_BASE_URL}/likes`, { method: 'GET' });\n  const likes = await res.json();\n  return likes;\n};\n\nconst likeShowOps = async (showId) => {\n  const formData = {\n    item_id: showId,\n  };\n\n  const res = await fetch(`${_default_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_BASE_URL}/likes`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(formData),\n  });\n  return res;\n};\n\nconst createComment = async (id, name, comment) => {\n  const formData = {\n    item_id: id,\n    username: name,\n    comment,\n  };\n  const res = await fetch(`${_default_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_BASE_URL}/comments?item_id=${id}`, {\n    method: 'POST',\n    headers: {\n      'Content-Type': 'application/json',\n    },\n    body: JSON.stringify(formData),\n  });\n  return res;\n};\n\nconst getComments = async (id) => {\n  const res = await fetch(`${_default_js__WEBPACK_IMPORTED_MODULE_0__.INVOLVEMENT_API_BASE_URL}/comments?item_id=${id}`, { method: 'GET' });\n  const comments = await res.json();\n  return comments;\n};\n\n//# sourceURL=webpack://first-microverse-webapp/./src/modules/apiOperations.js?");

/***/ }),

/***/ "./src/modules/default.js":
/*!********************************!*\
  !*** ./src/modules/default.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"INVOLVEMENT_API_BASE_URL\": () => (/* binding */ INVOLVEMENT_API_BASE_URL),\n/* harmony export */   \"SHOW_BASE_URL\": () => (/* binding */ SHOW_BASE_URL)\n/* harmony export */ });\nconst SHOW_BASE_URL = 'https://api.tvmaze.com';\nconst INVOLVEMENT_API_BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/byKI6ktvAz0XLfyKJBXi';\n\n//# sourceURL=webpack://first-microverse-webapp/./src/modules/default.js?");

/***/ }),

/***/ "./src/modules/tvShow.js":
/*!*******************************!*\
  !*** ./src/modules/tvShow.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TvShows)\n/* harmony export */ });\n/* harmony import */ var _apiOperations_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiOperations.js */ \"./src/modules/apiOperations.js\");\n\n\nclass TvShows {\n  displayCard(show, like) {\n    let likeCount = 0;\n    if (like.length > 0) {\n      likeCount = like[0].likes;\n    }\n\n    const card = document.createRange().createContextualFragment(`\n    <div class=\"card\">\n      <img src=\"${show.image.medium}\" alt=\"${show.name}\" class=\"card-img\">\n      <div class=\"card-details\">\n      <h3>${show.name.toUpperCase()}</h3>\n      <div class=\"like-section\">\n      <span data-id=\"${show.id}\" id=\"like_btn_${show.id}\">\n      <i class=\"fa-regular fa-heart fa-2x\"></i>\n      </span>\n      <p id=\"likeCount_displayed_${show.id}\">${likeCount} ${likeCount > 1 ? 'Likes' : 'Like'}</p>\n      </div>\n      </div>\n      <div class=\"card-btns\">\n      <button data-id=\"${show.id}\" id= \"btnId-${show.id}\" class=\"comment-btn\" type=\"button\">Comments</button>\n      </div>\n      </div>`);\n    const cardContainer = document.querySelector('.main-container');\n    cardContainer.append(card);\n\n    const likeBtnEvent = document.querySelector(`#like_btn_${show.id}`);\n    const likeCountDisplayed = document.querySelector(`#likeCount_displayed_${show.id}`);\n    likeBtnEvent.addEventListener('click', async () => {\n      const id = likeBtnEvent.getAttribute('data-id');\n      const child = likeBtnEvent.childNodes;\n      child[1].classList.add('liked');\n      await this.likeShow(id);\n      const currentLike = parseInt(likeCountDisplayed.innerHTML.split(' ')[0], 10);\n      const newLike = currentLike + 1;\n      if (newLike > 1) {\n        likeCountDisplayed.innerHTML = `${newLike} Likes`;\n      } else {\n        likeCountDisplayed.innerHTML = `${newLike} Like`;\n      }\n      child[1].classList.remove('liked');\n    });\n\n    const commentBtn = document.querySelector(`#btnId-${show.id}`);\n    const commentWrapper = document.querySelector('#commentCont');\n    commentBtn.addEventListener('click', () => {\n      commentWrapper.innerHTML = '';\n      this.renderPopUp(show);\n    });\n  }\n\n  async getShows() {\n    const shows = await (0,_apiOperations_js__WEBPACK_IMPORTED_MODULE_0__.getShows)();\n    const likes = await (0,_apiOperations_js__WEBPACK_IMPORTED_MODULE_0__.getLikes)();\n    const showCount = document.querySelector('#show_count');\n    showCount.innerHTML = this.countShows(shows);\n    shows.forEach((show) => {\n      const like = likes.filter((like) => {\n        if (parseInt(like.item_id, 10) === parseInt(show.id, 10)) {\n          return like;\n        }\n        return false;\n      });\n      this.displayCard(show, like);\n    });\n  }\n\n  countShows(shows) {\n    this.length = shows.length;\n    return this.length;\n  }\n\n  countComments(comments) {\n    this.length = comments.length;\n    return this.length;\n  }\n\n  async likeShow(showId) {\n    this.res = await (0,_apiOperations_js__WEBPACK_IMPORTED_MODULE_0__.likeShowOps)(showId);\n  }\n\n  async commentShow(id) {\n    this.res = await (0,_apiOperations_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(id);\n  }\n\n  async createComment(id, name, comment) {\n    document.querySelector('.name-input').value = '';\n    document.querySelector('.insignt').value = '';\n    this.res = await (0,_apiOperations_js__WEBPACK_IMPORTED_MODULE_0__.createComment)(id, name, comment);\n  }\n\n  async renderPopUp(show) {\n    const comments = await (0,_apiOperations_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(show.id);\n    let html = `\n    <div class=\"comment-section-container\">\n      <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n      <div class=\"image-container\" id=\"\">\n        <img  src=\"${show.image.medium}\">\n      </div>\n      <div class=\"info-container\">\n        <h3 class=\"showName\">${show.name.toUpperCase()}</h3>\n        <p class=\"desc\">${show.summary}</p>\n      </div>\n      <div class=\"display-comment\">\n        <h3>Comments (<span id= \"comments-count\">${comments.length ? comments.length : 0}</span>)</h3>\n        <ul class= \"listItems\" >`;\n    if (Array.isArray(comments) && comments.length > 0) {\n      comments.forEach((comment) => {\n        html += `<li>${comment.creation_date} <span class=\"comment-username\">${comment.username}:</span> ${comment.comment}</li>`;\n      });\n    }\n    html += `</ul> \n      </div>\n      <form action=\"#\" class=\"commentForm\">\n        <h3>Add Comment</h3>\n        <div><input type=\"text\" class=\"name-input\" placeholder=\"Your Name\" required></div>\n        <div><textarea name=\"insight\" id=\"insignt\" class=\"insignt\" cols=\"30\" placeholder=\"Your Insight\" rows=\"8\"></textarea></div>\n        <input type=\"submit\" class=\"submitBtn\" value=\"Submit\" id=\"${show.id}\">\n      </form>\n    </div>`;\n    const commentCont = document.getElementById('commentCont');\n    commentCont.innerHTML += html;\n\n    const form = document.querySelector('.commentForm');\n    form.addEventListener('submit', async (e) => {\n      e.preventDefault();\n      const itemId = document.querySelector('.submitBtn').getAttribute('id');\n      const username = document.querySelector('.name-input').value;\n      const comment = document.querySelector('.insignt').value;\n      await this.createComment(itemId, username, comment);\n      const comments = await (0,_apiOperations_js__WEBPACK_IMPORTED_MODULE_0__.getComments)(show.id);\n      const commentsCount = document.querySelector('#comments-count');\n      commentsCount.innerHTML = '';\n      commentsCount.innerHTML = comments.length;\n      const listItems = document.querySelector('.listItems');\n      listItems.innerHTML = '';\n      let lists = '';\n      comments.forEach((comment) => {\n        lists += `<li>${comment.creation_date} <span class=\"comment-username\">${comment.username}:</span> ${comment.comment}</li>`;\n      });\n      listItems.innerHTML = lists;\n    });\n    const commentWrapper = document.querySelector('.comment-section-container');\n    commentCont.classList.remove('dn');\n    const close = document.querySelector('.fa.fa-times');\n    close.addEventListener('click', (e) => {\n      e.preventDefault();\n      commentWrapper.classList.add('dn');\n    });\n  }\n}\n\n//# sourceURL=webpack://first-microverse-webapp/./src/modules/tvShow.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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