var App =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/main.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/main.css":
/*!****************************!*\
  !*** ./src/pages/main.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack://App/./src/pages/main.css?");

/***/ }),

/***/ "./src/pages/main.jsx":
/*!****************************!*\
  !*** ./src/pages/main.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.css */ \"./src/pages/main.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_main_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nvar API = \"http://lab.isaaclin.cn\";\n\nvar request = function request(path) {\n  return Promise.resolve().then(function () {\n    return fetch(API + path);\n  }).then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    if (res.success) return res.results;\n    throw res;\n  });\n};\n\nvar Header = function Header() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"\\u65B0\\u578B\\u51A0\\u72B6\\u75C5\\u6BD2 \\u80BA\\u708E\\u75AB\\u60C5\\u5B9E\\u65F6\\u52A8\\u6001\"));\n};\n\nvar Overview = function Overview() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({}),\n      _useState2 = _slicedToArray(_useState, 2),\n      data = _useState2[0],\n      setData = _useState2[1];\n\n  var fetchData = function fetchData() {\n    return Promise.resolve().then(function () {\n      return request('/nCoV/api/overall');\n    }).then(function (_ref) {\n      var _ref2 = _slicedToArray(_ref, 1),\n          result = _ref2[0];\n\n      return result;\n    }).then(setData);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchData();\n  }, []);\n  var confirmedCount = data.confirmedCount,\n      suspectedCount = data.suspectedCount,\n      curedCount = data.curedCount,\n      deadCount = data.deadCount;\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n    className: \"overview\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, confirmedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u786E\\u8BCA\\u75C5\\u4F8B\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, suspectedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u7591\\u4F3C\\u75C5\\u4F8B\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, curedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u6CBB\\u6108\\u4EBA\\u6570\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"em\", null, deadCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u6B7B\\u4EA1\\u4EBA\\u6570\")));\n};\n\nvar AreaMap = function AreaMap() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n};\n\nvar Trending = function Trending() {\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n};\n\nvar AreaDetail = function AreaDetail() {\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      area = _useState4[0],\n      setData = _useState4[1];\n\n  var fetchData = function fetchData() {\n    return Promise.resolve().then(function () {\n      return request(\"/nCoV/api/area\");\n    }).then(setData);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchData();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"table\", {\n    className: \"area-detail\"\n  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"thead\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u5730\\u533A\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u7591\\u4F3C\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u786E\\u8BCA\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u6CBB\\u6108\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"th\", null, \"\\u6B7B\\u4EA1\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tbody\", null, area.sort(function (a, b) {\n    return b.confirmedCount - a.confirmedCount;\n  }).map(function (p) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"tr\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.provinceShortName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.suspectedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.confirmedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.curedCount), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"td\", null, p.deadCount));\n  })));\n};\n\nvar News = function News() {\n  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref3$num = _ref3.num,\n      num = _ref3$num === void 0 ? '10' : _ref3$num;\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState6 = _slicedToArray(_useState5, 2),\n      list = _useState6[0],\n      setData = _useState6[1];\n\n  var fetchData = function fetchData() {\n    return Promise.resolve().then(function () {\n      return request(\"/nCoV/api/news?num=\".concat(num));\n    }).then(setData);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchData();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, list.map(function (news) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, news.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, news.summary), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"time\", null, news.pubDate), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: news.sourceUrl\n    }, news.infoSource));\n  }));\n};\n\nvar Rumors = function Rumors() {\n  var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},\n      _ref4$num = _ref4.num,\n      num = _ref4$num === void 0 ? '10' : _ref4$num;\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState8 = _slicedToArray(_useState7, 2),\n      list = _useState8[0],\n      setData = _useState8[1];\n\n  var fetchData = function fetchData() {\n    return Promise.resolve().then(function () {\n      return request(\"/nCoV/api/rumors?num=\".concat(num));\n    }).then(setData);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    fetchData();\n  }, []);\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", null, list.map(function (rumor) {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", {\n      id: \"rumor-\".concat(rumor.id)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, rumor.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n      href: rumor.sourceUrl\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, rumor.mainSummary)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, rumor.body));\n  }));\n};\n\nvar App =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Overview, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AreaMap, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Trending, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AreaDetail, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Rumors, null));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById('app'));\n\n//# sourceURL=webpack://App/./src/pages/main.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = React;\n\n//# sourceURL=webpack://App/external_%22React%22?");

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = ReactDOM;\n\n//# sourceURL=webpack://App/external_%22ReactDOM%22?");

/***/ })

/******/ });