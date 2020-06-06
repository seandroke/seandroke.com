module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/About/About.js":
/*!***********************************!*\
  !*** ./components/About/About.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-countup */ "react-countup");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _about_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about-style */ "./components/About/about-style.js");












function About(props) {
  var classes = Object(_about_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_9__["useText"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      play = _useState2[0],
      setPlay = _useState2[1];

  var countup = function countup(val, isPlay) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, isPlay ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_countup__WEBPACK_IMPORTED_MODULE_3___default.a, {
      end: val
    }) : 0);
  };

  var handlePlay = function handlePlay() {
    setTimeout(function () {
      setPlay(true);
    }, 500);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.counterWrap
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    className: classes.root,
    spacing: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.counterItem
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.text
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    style: {
      textAlign: 'center'
    },
    variant: "h4",
    className: text.title2
  }, "About Me:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h6",
    className: text.subtitle2
  }, "I am 22 years old, born and raised in the Greater Philadelphia Area. For the majority of my life, I have called Medford, New Jersey home. I am the eldest of three boys, born of two math teachers, yet I was always partial to the sciences.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "I'm known to always be looking for a different way to solve something, and not stopping until I find an answer to the problems I face. I have always been fascinated with computers, and I can't think of a career with more new and exciting problems than that which I have found in Computer Science. I am endlessly eager to learn that which I don't know and love to meet and collaborate with new faces along the way.", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "Outside of that, I am well known for falling down deep YouTube rabit holes to satisfy my ever growing curiosity, and I love to embrace my creativity with personal projects just like this site! I enjoy spending quality time with friends and loved ones, and of course, watching my fair share of the Eagles, regardless of how upset they might make me!"))))));
}

About.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["withTranslation"])(['profile-landing'])(About));

/***/ }),

/***/ "./components/About/about-style.js":
/*!*****************************************!*\
  !*** ./components/About/about-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var aboutStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _counterItem;

  return {
    counterWrap: {
      width: '100%',
      backgroundImage: "linear-gradient(90deg, ".concat(theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main, ", ").concat(theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, ")"),
      padding: theme.spacing(7, 0)
    },
    text: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'flex',
      alignItems: 'flex-start'
    }, theme.breakpoints.down('xs'), {
      justifyContent: 'center'
    }),
    counterItem: (_counterItem = {
      width: '100%',
      color: theme.palette.common.white
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_counterItem, theme.breakpoints.up('sm'), {
      paddingLeft: theme.spacing(5)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_counterItem, '& i', {
      marginRight: theme.spacing(2),
      color: theme.palette.common.white,
      fontSize: 40,
      lineHeight: '40px'
    }), _counterItem)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (aboutStyles);

/***/ }),

/***/ "./components/About/index.js":
/*!***********************************!*\
  !*** ./components/About/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About */ "./components/About/About.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _About__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/BannerNav/BannerNav.js":
/*!*******************************************!*\
  !*** ./components/BannerNav/BannerNav.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _SideNavigation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../SideNavigation */ "./components/SideNavigation/index.js");
/* harmony import */ var _static_text_brand__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../static/text/brand */ "./static/text/brand.js");
/* harmony import */ var _static_text_brand__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_static_text_brand__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _banner_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./banner-style */ "./components/BannerNav/banner-style.js");














function BannerNav(props) {
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__["useText"])();
  var classes = Object(_banner_style__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()(theme.breakpoints.up('lg'));
  var onToggleDark = props.onToggleDark,
      onToggleDir = props.onToggleDir; // useEffect(() => {
  //   var camera, scene, renderer;
  //   var mesh;
  //   init();
  //   animate();
  //   function init() {
  //   renderer = new THREE.WebGLRenderer({canvas: document.querySelector("#canvas")});
  //   camera = new THREE.PerspectiveCamera(70, 1, 1, 100);
  //   camera.position.z = 25;
  //   scene = new THREE.Scene();
  //   var geometry = new THREE.SphereGeometry(10, 100, 100);
  //   var material  = new THREE.MeshPhongMaterial();
  //   THREE.ImageUtils.crossOrigin = '';
  //   material.map    = THREE.ImageUtils.loadTexture(earth)
  //     mesh = new THREE.Mesh(geometry, material);
  //     mesh.rotation.x -= 0.5;
  //     scene.add(mesh);
  //     var light1 = new THREE.AmbientLight( 0xffffff );
  //     light1.position.set(100, 50, 100);
  //     scene.add(light1);
  //   }
  //   function resize() {
  //     var width = renderer.domElement.clientWidth;
  //     var height = renderer.domElement.clientHeight;
  //     renderer.setSize(width, height, false);
  //     camera.aspect = width / height;
  //     camera.updateProjectionMatrix(); 
  //   }
  //   function animate() {
  //     resize();
  //     mesh.rotation.y -= 0.0005;
  //     renderer.render(scene, camera);
  //     requestAnimationFrame(animate);
  //   }
  // }) 

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    fixed: isDesktop
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    container: true,
    spacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    lg: 2,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    mdDown: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SideNavigation__WEBPACK_IMPORTED_MODULE_9__["default"], null))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6___default.a, {
    item: true,
    lg: 10,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.banner
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.cover
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.figure
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_text_brand__WEBPACK_IMPORTED_MODULE_10___default.a.profile.cover,
    alt: "cover"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.overlay
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.text
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "h4",
    className: text.title2
  }, "Hi,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "h2",
    className: text.title
  }, "My name is\xA0Sean Droke,", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nobr", null, "Full Stack"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nobr", null, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nobr", null, "Software Engineer")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_5___default.a, {
    smDown: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8___default.a, {
    variant: "h5",
    className: text.subtitle2
  }, "I love to solve new and exciting problems. I am a passionate engineer, creator, and thinker. I am endlessly curious and constantly seeking a new way to do things."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.socmed
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: function onClick() {
      return window.open('https://www.instagram.com/seandroke/?hl=en', "_blank");
    },
    "aria-label": "Delete",
    className: classes.margin,
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-instagram"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: function onClick() {
      return window.open('https://www.linkedin.com/in/seandroke/', "_blank");
    },
    "aria-label": "Delete",
    className: classes.margin,
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-linkedin"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: function onClick() {
      return window.open('https://github.com/seandroke', "_blank");
    },
    "aria-label": "Delete",
    className: classes.margin,
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-github"
  }))))))))));
}

BannerNav.propTypes = {
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (BannerNav);

/***/ }),

/***/ "./components/BannerNav/banner-style.js":
/*!**********************************************!*\
  !*** ./components/BannerNav/banner-style.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);



var bannerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _globe, _banner, _text;

  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      display: 'block'
    }, theme.breakpoints.down('md'), {
      paddingTop: theme.spacing(10),
      '& > div': {
        padding: 0
      }
    }),
    cover: {
      position: 'absolute',
      clip: 'rect(auto,auto, auto, auto)',
      top: 0,
      left: 0,
      height: '100%',
      width: 1080,
      overflow: 'hidden'
    },
    globe: (_globe = {
      height: '99%',
      width: '100%',
      bottom: '20%',
      left: '0%',
      position: 'fixed'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_globe, theme.breakpoints.down('md'), {
      height: '99%',
      width: '100%',
      bottom: '20%'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_globe, theme.breakpoints.down('xs'), {
      left: '0%'
    }), _globe),
    figure: {
      display: 'block',
      width: '100%',
      height: '100%',
      '& img': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        position: 'fixed'
      }, theme.breakpoints.down('xs'), {
        left: '-50%'
      })
    },
    overlay: {
      backgroundImage: "linear-gradient(120deg, ".concat(theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main, ", ").concat(theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, ")"),
      opacity: 0.5,
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0
    },
    banner: (_banner = {
      position: 'relative',
      padding: theme.spacing(10, 3, 0),
      color: theme.palette.common.white,
      height: 500
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_banner, theme.breakpoints.down('sm'), {
      height: 420
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_banner, theme.breakpoints.down('xs'), {
      height: 400
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_banner, theme.breakpoints.up('sm'), {
      padding: theme.spacing(10)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_banner, '& h4', {
      fontFamily: 'Times New Roman'
    }), _banner),
    text: (_text = {
      position: 'relative',
      maxWidth: 720
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_text, theme.breakpoints.down('sm'), {
      textAlign: 'center'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_text, '& h4, & h2, & h5', {
      marginBottom: theme.spacing(3)
    }), _text),
    socmed: {
      marginBottom: theme.spacing(3),
      '& button': {
        margin: theme.spacing(),
        color: theme.palette.primary.dark,
        width: 36,
        height: 36,
        '& i': {
          color: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.common.white, 0.75)
        }
      },
      '& i': {
        fontSize: 24
      }
    },
    bar: {},
    settingIcon: {
      position: 'absolute',
      top: theme.spacing(10),
      right: theme.spacing(10),
      '& svg': {
        fill: theme.palette.common.white
      }
    },
    mobileMenu: {
      marginRight: theme.spacing(),
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    mobileNav: {
      width: 240,
      background: theme.palette.background["default"],
      padding: theme.spacing(10, 2, 4)
    },
    menuList: {
      textTransform: 'capitalize'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (bannerStyles);

/***/ }),

/***/ "./components/BannerNav/index.js":
/*!***************************************!*\
  !*** ./components/BannerNav/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BannerNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BannerNav */ "./components/BannerNav/BannerNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _BannerNav__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Cards/IconText.js":
/*!**************************************!*\
  !*** ./components/Cards/IconText.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Testimonial; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _cards_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards-style */ "./components/Cards/cards-style.js");







function Testimonial(props) {
  var classes = Object(_cards_style__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var textStyle = Object(_theme_common__WEBPACK_IMPORTED_MODULE_5__["useText"])();
  var icon = props.icon,
      text = props.text,
      desc = props.desc;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4___default.a, {
    className: classes.iconText
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.icon
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: icon
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: icon,
    className: classes.imageResizer
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.more
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.name, textStyle.paragraph),
    variant: "h6",
    display: "block"
  }, text), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.desc, textStyle.paragraph),
    display: "block"
  }, desc)));
}
Testimonial.propTypes = {
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  text: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  desc: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};

/***/ }),

/***/ "./components/Cards/cards-style.js":
/*!*****************************************!*\
  !*** ./components/Cards/cards-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);



var cardsStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _iconText, _short, _medium, _long, _post;

  return {
    iconText: (_iconText = {
      position: 'relative',
      textAlign: 'center',
      padding: theme.spacing(2),
      width: 240,
      height: 200,
      transition: 'all 0.3s ease-out'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_iconText, theme.breakpoints.down(1500), {
      width: 200
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_iconText, '&:hover', {
      background: theme.palette.secondary.main,
      '& $more': {
        bottom: 0
      },
      '& $name': {
        color: theme.palette.common.white,
        top: 0,
        '&:after': {
          width: 30
        }
      },
      '& $desc': {
        top: 0,
        opacity: 1
      },
      '& $icon': {
        transform: 'scale(0.5)',
        opacity: 0
      }
    }), _iconText),
    icon: {
      marginBottom: theme.spacing(2),
      transition: 'all 0.3s ease-out',
      '& span': {
        '&:before': {
          fontSize: 130,
          background: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")"),
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
        }
      }
    },
    imageResizer: {
      marginTop: theme.spacing(5),
      width: '100%',
      height: 'auto'
    },
    more: {
      position: 'absolute',
      bottom: 90,
      width: '100%',
      padding: theme.spacing(3),
      left: 0,
      height: 200,
      transition: 'all 0.3s ease-out',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    name: {
      fontWeight: theme.typography.fontWeightBold,
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(4),
      top: 0,
      position: 'relative',
      '&:after': {
        content: '""',
        width: 0,
        transition: 'all 0.5s ease-out',
        display: 'block',
        position: 'relative',
        margin: '0 auto',
        top: theme.spacing(1),
        borderTop: '2px solid #FFF'
      }
    },
    desc: {
      top: 60,
      position: 'relative',
      opacity: 0,
      transition: 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      color: theme.palette.common.white
    },
    figure: {},
    img: {},
    imgThumb: {
      border: "8px solid ".concat(theme.palette.background.paper),
      position: 'relative',
      '& $figure': {
        height: '100%',
        width: '100%',
        position: 'relative',
        margin: 0,
        overflow: 'hidden',
        '-webkit-mask-image': '-webkit-radial-gradient(white, black)',
        '&:after': {
          content: '""',
          position: 'absolute',
          bottom: -80,
          left: -100,
          opacity: 0.8,
          width: 160,
          height: 160,
          transform: 'rotate(-35deg)',
          backgroundImage: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")")
        }
      },
      '& $img': {
        display: 'block',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        transform: 'scale(1.1)',
        transition: 'transform 0.2s ease-out'
      },
      '&:before': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: '""',
        left: -13,
        bottom: -12,
        width: '30%',
        height: '100%',
        border: '4px solid',
        borderImageSource: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")"),
        borderImageSlice: 1,
        borderTop: 0,
        borderRight: 0,
        position: 'absolute'
      }, theme.breakpoints.down('xs'), {
        display: 'none'
      }),
      '&:hover': {
        '& $img': {
          transform: 'scale(1)'
        },
        '& $detail': {
          opacity: 1,
          backgroundPosition: '60% 0',
          '& h6, & a': {
            transform: 'translate(0, 0)'
          }
        }
      }
    },
    detail: {
      position: 'absolute',
      transition: 'opacity 0.3s ease-out, background-position 3s ease-out',
      width: '100%',
      height: '100%',
      bottom: 0,
      opacity: 0,
      background: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.primary.main, 0.55), ")"),
      backgroundSize: '300%',
      backgroundPosition: '0% 0',
      padding: theme.spacing(3),
      color: theme.palette.common.white,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '& > *': {
        transition: 'all 0.4s ease-out'
      },
      '& h6': {
        position: 'relative',
        transform: 'translate(0, 10px)',
        marginBottom: theme.spacing(3),
        lineHeight: '36px'
      },
      '& a': {
        fontSize: 18,
        textDecoration: 'underline',
        color: theme.palette.common.white,
        position: 'relative',
        transform: 'translate(0, 30px)'
      }
    },
    "short": (_short = {
      height: 240
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_short, theme.breakpoints.down('md'), {
      height: 210
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_short, '& $img', {
      width: '100%'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_short, '&:before', {
      width: 80,
      height: 80
    }), _short),
    medium: (_medium = {
      height: 320
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_medium, theme.breakpoints.down('xs'), {
      height: 210
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_medium, '& $img', {
      width: '100%'
    }), _medium),
    "long": (_long = {
      height: 480
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_long, theme.breakpoints.down('xs'), {
      height: 210
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_long, '& $img', {
      height: '100%'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_long, '&:before', {
      width: 190,
      height: 260
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_long, '& $figure', {
      '&:after': {
        width: 300,
        height: 300,
        left: -200,
        bottom: -120
      }
    }), _long),
    post: (_post = {
      height: 380,
      width: 256,
      position: 'relative'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_post, theme.breakpoints.down('sm'), {
      marginBottom: 12
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_post, '& figure', {
      margin: 0,
      width: '100%',
      height: 140,
      overflow: 'hidden',
      '& img': {
        width: '100%',
        minHeight: '100%'
      }
    }), _post),
    text: {
      height: 200,
      padding: theme.spacing(3),
      '& h5': {
        fontWeight: theme.typography.fontWeightBold,
        marginBottom: theme.spacing()
      },
      '& p': {
        color: theme.palette.text.secondary,
        display: '-webkit-box',
        '-webkit-line-clamp': 3,
        '-webkit-box-orient': 'vertical'
      }
    },
    readmore: {
      '& span': {
        fontWeight: theme.typography.fontWeightRegular
      },
      margin: theme.spacing(0, 3),
      lineHeight: '16px !important',
      borderLeft: "3px solid ".concat(theme.palette.primary.main)
    },
    textReadmore: {
      padding: '0px 8px !important'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (cardsStyles);

/***/ }),

/***/ "./components/Contact/Form.js":
/*!************************************!*\
  !*** ./components/Contact/Form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "@material-ui/core/Snackbar");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-material-ui-form-validator */ "react-material-ui-form-validator");
/* harmony import */ var react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _contact_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact-style */ "./components/Contact/contact-style.js");















function Form(props) {
  var classes = Object(_contact_style__WEBPACK_IMPORTED_MODULE_13__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__["useText"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      values = _useState2[0],
      setValues = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      openNotif = _useState6[0],
      setNotif = _useState6[1];

  var handleChange = function handleChange(name) {
    return function (event) {
      setValues(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, values, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, name, event.target.value)));
    };
  };

  var submitForm = function submitForm(ev) {
    ev.preventDefault();
    var form = ev.target;
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
        alert("SUCCESS!");
        window.location.reload();
      } else {
        setStatus("ERROR");
        alert("FAILED TO SEND!");
        window.location.reload();
      }
    };

    xhr.send(data);
  };

  var handleClose = function handleClose() {
    setNotif(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.formWrap
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_10___default.a, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    key: "top right",
    open: openNotif,
    autoHideDuration: 4000,
    onClose: handleClose,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      id: "message-id"
    }, "Message Sent")
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.formBox
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 6
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    lg: 5,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.title, text.title),
    variant: "h3"
  }, "Contact Me.")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    lg: 7,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.form
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["ValidatorForm"], {
    onSubmit: submitForm,
    action: "https://formspree.io/moqkvndr",
    method: "POST",
    onError: function onError(errors) {
      return console.log(errors);
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    className: classes.input,
    label: "What is your name?*",
    onChange: handleChange('name'),
    name: "Name",
    value: values.name,
    validators: ['required'],
    errorMessages: ['this field is required']
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    className: classes.input,
    label: "What is your email?*",
    onChange: handleChange('email'),
    name: "Email",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['this field is required', 'email is not valid']
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_material_ui_form_validator__WEBPACK_IMPORTED_MODULE_12__["TextValidator"], {
    multiline: true,
    rows: "6",
    className: classes.input,
    label: "Write your message here",
    onChange: handleChange('message'),
    name: "Message",
    value: values.message
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.btnArea
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {
    variant: "contained",
    type: "submit",
    color: "primary",
    size: "large"
  }, "Send Message"))))))));
}

Form.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./components/Contact/contact-style.js":
/*!*********************************************!*\
  !*** ./components/Contact/contact-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var contactStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _formBox, _btnArea;

  return {
    formWrap: {
      position: 'relative'
    },
    formBox: (_formBox = {
      padding: theme.spacing(2)
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_formBox, theme.breakpoints.up('sm'), {
      padding: theme.spacing(7)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_formBox, '&:before', {
      content: '""',
      left: -16,
      bottom: -16,
      width: '45%',
      height: '30%',
      border: '16px solid',
      borderImageSource: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")"),
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      position: 'absolute'
    }), _formBox),
    title: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      textAlign: 'left',
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
    }, theme.breakpoints.down('xs'), {
      top: theme.spacing(3),
      position: 'relative'
    }),
    input: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%',
      marginBottom: theme.spacing(5)
    }, theme.breakpoints.down('xs'), {
      marginBottom: theme.spacing(3)
    }),
    form: {
      textAlign: 'left',
      position: 'relative'
    },
    btnArea: (_btnArea = {
      display: 'flex',
      justifyContent: 'space-between',
      margin: theme.spacing(0, 0, 3)
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_btnArea, theme.breakpoints.up('sm'), {
      margin: theme.spacing(3, 0, 0)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_btnArea, '& span', {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }), _btnArea)
  };
});
/* harmony default export */ __webpack_exports__["default"] = (contactStyles);

/***/ }),

/***/ "./components/Education/Education.js":
/*!*******************************************!*\
  !*** ./components/Education/Education.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _static_text_brand__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../static/text/brand */ "./static/text/brand.js");
/* harmony import */ var _static_text_brand__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_static_text_brand__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _education_style__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./education-style */ "./components/Education/education-style.js");















function Education(props) {
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var classes = Object(_education_style__WEBPACK_IMPORTED_MODULE_13__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_12__["useText"])();
  var isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()(theme.breakpoints.down('sm'));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_4___default.a, {
    maxWidth: isMobile ? 'sm' : 'lg'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    container: true,
    spacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    lg: 2,
    xs: 12
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8___default.a, {
    item: true,
    lg: 9,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.about
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.reward
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.item
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h5",
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.title, text.subtitle)
  }, "EDUCATION"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/static/images/profile/education-logo.png",
    alt: "badge"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "p",
    className: text.subtitle
  }, "BS, Computer Science"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "p",
    className: text.subtitle
  }, "2017-2020"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_6___default.a, {
    mdUp: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.socmed
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: function onClick() {
      return window.open('https://www.instagram.com/seandroke/?hl=en', "_blank");
    },
    "aria-label": "Delete",
    className: classes.margin,
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-instagram"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: function onClick() {
      return window.open('https://www.linkedin.com/in/seandroke/', "_blank");
    },
    "aria-label": "Delete",
    className: classes.margin,
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-linkedin"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    onClick: function onClick() {
      return window.open('https://github.com/seandroke', "_blank");
    },
    "aria-label": "Delete",
    className: classes.margin,
    size: "small"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-github"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h5"
  }, "I love to solve new and exciting problems. I am a passionate engineer, creator, and thinker. I am endlessly curious and constantly seeking a new way to do things.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9___default.a, {
    className: classes.photo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_text_brand__WEBPACK_IMPORTED_MODULE_11___default.a.profile.avatar,
    alt: "avatar"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: classes.frame
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.line
  })))));
}

Education.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Education);

/***/ }),

/***/ "./components/Education/education-style.js":
/*!*************************************************!*\
  !*** ./components/Education/education-style.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var gold = '#D6BD96';
var educationStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _about, _reward, _figure, _item, _photo;

  return {
    root: {
      position: 'relative',
      '& > div': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('xs'), {
        padding: 0
      })
    },
    about: (_about = {
      display: 'flex',
      flexDirection: 'column-reverse'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_about, theme.breakpoints.up('md'), {
      flexDirection: 'row',
      justifyContent: 'space-between'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_about, theme.breakpoints.down('sm'), {
      textAlign: 'center',
      '& > h5': {
        fontSize: 18,
        lineHeight: '28px',
        marginTop: theme.spacing(7)
      }
    }), _about),
    line: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      borderTop: 0,
      borderLeft: 0,
      height: 40,
      width: 'calc(100% - 130px)',
      border: '2px solid',
      borderImageSource: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")"),
      borderImageSlice: 1,
      position: 'relative',
      marginTop: theme.spacing(1)
    }, theme.breakpoints.down('md'), {
      display: 'none'
    }),
    reward: (_reward = {
      flex: 1,
      display: 'flex',
      justifyContent: 'left'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reward, theme.breakpoints.up('md'), {
      padding: theme.spacing(0.5, 7, 0, 0)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_reward, theme.breakpoints.down('xs'), {
      overflow: 'auto'
    }), _reward),
    item: (_item = {
      width: '100%',
      textAlign: 'center',
      color: 'black',
      margin: theme.spacing(2)
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_item, theme.breakpoints.up('md'), {
      margin: theme.spacing(4)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_item, theme.breakpoints.down('xs'), {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_item, '& figure', (_figure = {
      height: 75,
      margin: theme.spacing(0, 0, 2)
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_figure, theme.breakpoints.down('sm'), {
      height: 50
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_figure, '& img', {
      height: '100%'
    }), _figure)), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_item, '& p', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontFamily: 'Lato,sans-serif'
    }, theme.breakpoints.down('sm'), {
      fontSize: 16
    })), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_item, '& h5', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontWeight: theme.typography.fontWeightMedium,
      textTransform: 'uppercase'
    }, theme.breakpoints.down('sm'), {//fontSize: 16
    })), _item),
    photo: (_photo = {
      position: 'relative',
      marginTop: -20,
      background: theme.palette.common.white,
      width: 270,
      height: 320
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_photo, theme.breakpoints.down('sm'), {
      width: 200,
      minHeight: 200,
      height: 'auto',
      marginLeft: 'auto',
      marginRight: 'auto'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_photo, '& figure', {
      margin: 0,
      '& img': {
        width: '100%',
        height: '100%',
        border: '2px solid',
        borderImageSource: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")"),
        borderImageSlice: 1
      }
    }), _photo),
    frame: {
      position: 'absolute'
    },
    socmed: {
      display: 'flex',
      justifyContent: 'space-evenly',
      margin: "".concat(theme.spacing(4), "px auto"),
      maxWidth: 600,
      '& button': {
        margin: theme.spacing(1, 2),
        width: 36,
        height: 36,
        '& i': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
        }
      },
      '& i': {
        fontSize: 22
      }
    },
    title: {
      textTransform: 'uppercase',
      marginBottom: theme.spacing(3),
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (educationStyles);

/***/ }),

/***/ "./components/Education/index.js":
/*!***************************************!*\
  !*** ./components/Education/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Education__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Education */ "./components/Education/Education.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Education__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Experience/Experience.js":
/*!*********************************************!*\
  !*** ./components/Experience/Experience.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "@material-ui/core/LinearProgress");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _experience_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./experience-style */ "./components/Experience/experience-style.js");
/* harmony import */ var _static_text_brand__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../static/text/brand */ "./static/text/brand.js");
/* harmony import */ var _static_text_brand__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_text_brand__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_images_cpp_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../static/images/cpp_logo.png */ "./static/images/cpp_logo.png");
/* harmony import */ var _static_images_cpp_logo_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_cpp_logo_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_images_php_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../static/images/php.png */ "./static/images/php.png");
/* harmony import */ var _static_images_php_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_images_php_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_images_java_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../static/images/java.png */ "./static/images/java.png");
/* harmony import */ var _static_images_java_png__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_static_images_java_png__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _static_images_django_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../static/images/django.png */ "./static/images/django.png");
/* harmony import */ var _static_images_django_png__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_static_images_django_png__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _static_images_spring_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../static/images/spring.png */ "./static/images/spring.png");
/* harmony import */ var _static_images_spring_png__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_static_images_spring_png__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _static_images_react_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../static/images/react.png */ "./static/images/react.png");
/* harmony import */ var _static_images_react_png__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_static_images_react_png__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _static_images_bootstrap_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../static/images/bootstrap.png */ "./static/images/bootstrap.png");
/* harmony import */ var _static_images_bootstrap_png__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_static_images_bootstrap_png__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _static_images_mui_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../static/images/mui.png */ "./static/images/mui.png");
/* harmony import */ var _static_images_mui_png__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_static_images_mui_png__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _static_images_mysql_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../static/images/mysql.png */ "./static/images/mysql.png");
/* harmony import */ var _static_images_mysql_png__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_static_images_mysql_png__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _static_images_mssql_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../static/images/mssql.png */ "./static/images/mssql.png");
/* harmony import */ var _static_images_mssql_png__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_static_images_mssql_png__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _static_images_hive_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../static/images/hive.png */ "./static/images/hive.png");
/* harmony import */ var _static_images_hive_png__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_static_images_hive_png__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _static_images_spark_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../static/images/spark.png */ "./static/images/spark.png");
/* harmony import */ var _static_images_spark_png__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_static_images_spark_png__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _static_images_hadoop_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../static/images/hadoop.png */ "./static/images/hadoop.png");
/* harmony import */ var _static_images_hadoop_png__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_static_images_hadoop_png__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _static_images_mongo_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../static/images/mongo.png */ "./static/images/mongo.png");
/* harmony import */ var _static_images_mongo_png__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_static_images_mongo_png__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/Chip */ "@material-ui/core/Chip");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30__);
































function Experience(props) {
  var classes = Object(_experience_style__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_11__["useText"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(null),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      anchorEl = _React$useState2[0],
      setAnchorEl = _React$useState2[1];

  var isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('md'));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      play = _useState2[0],
      setPlay = _useState2[1];

  var handlePlay = function handlePlay() {
    setTimeout(function () {
      setPlay(true);
    }, 200);
  };

  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
  };

  var handleClose = function handleClose() {
    setAnchorEl(null);
  };

  var rightMargin = {
    marginRight: '10px'
  };
  var open = Boolean(anchorEl);
  var id = open ? 'simple-popover' : undefined;
  var settings = {
    dots: true,
    infinite: false,
    arrows: false
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fixed: isDesktop
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    container: true,
    spacing: 0
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    lg: 2,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_7___default.a, {
    mdDown: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h2",
    className: classes.nameDeco
  }, _static_text_brand__WEBPACK_IMPORTED_MODULE_13___default.a.profile.name))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    container: true,
    spacing: 3,
    md: 12,
    lg: 10
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    md: 5,
    sm: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.history
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h5",
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.title, text.subtitle)
  }, "Work Experience"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    style: {
      paddingTop: '10%'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animation: "fadeInLeftShort",
    delay: "0.2s",
    duration: "0.3s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    gutterBottom: true,
    className: text.subtitle2
  }, "Full Stack Software Engineer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    gutterBottom: true
  }, "Comcast", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "Philadelphia, PA")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.time
  }, "February 2020 - Present")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animation: "fadeInLeftShort",
    delay: "0.2s",
    duration: "0.3s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    gutterBottom: true,
    className: text.subtitle2
  }, "Full Stack Web Developer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    gutterBottom: true
  }, "Tierney Communications", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "Philadelphia, PA")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.time
  }, "August 2019 - February 2020")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animation: "fadeInLeftShort",
    offset: 100,
    delay: "0.3s",
    duration: "0.3s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    gutterBottom: true,
    className: text.subtitle2
  }, "Network & Automation Engineer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    gutterBottom: true
  }, "Comcast", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "West Chester, PA")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.time
  }, "May 2019 - August 2019")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animation: "fadeInLeftShort",
    offset: 200,
    delay: "0.4s",
    duration: "0.3s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    gutterBottom: true,
    className: text.subtitle2
  }, "Software Engineering Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    gutterBottom: true
  }, "The Interpublic Group", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "New York City, NY")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.time
  }, "October 2018 - March 2019")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animation: "fadeInLeftShort",
    offset: 300,
    delay: "0.5s",
    duration: "0.3s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    gutterBottom: true,
    className: text.subtitle2
  }, "Systems Administration Intern"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    gutterBottom: true
  }, "Tierney Communications", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "Philadelphia, PA")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.time
  }, "June 2018 - October 2018"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3___default.a, {
    item: true,
    sm: 6,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.progress
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h5",
    style: {
      textAlign: 'center'
    },
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.title, text.subtitle)
  }, "Skill And Expertise"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animation: "fadeIn",
    delay: "0.4s",
    duration: "0.3s",
    callback: handlePlay
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_28___default.a, settings, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.mainList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h4",
    className: classes.category
  }, "Languages"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon1
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    style: rightMargin,
    className: "ion-social-python"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h6",
    className: text.subtitle2
  }, "Python")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "determinate",
    value: play ? 85 : 0,
    classes: {
      root: classes.progressBg,
      bar: classes.bar
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon1
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _static_images_java_png__WEBPACK_IMPORTED_MODULE_16___default.a,
    className: classes.customTimelineLogoJava
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h6",
    className: text.subtitle2
  }, "Java")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "determinate",
    value: play ? 75 : 0,
    classes: {
      root: classes.progressBg,
      bar: classes.bar
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon1
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
    style: rightMargin,
    className: "ion-social-javascript"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h6",
    className: text.subtitle2
  }, "JavaScript")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "determinate",
    value: play ? 65 : 0,
    classes: {
      root: classes.progressBg,
      bar: classes.bar
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon1
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _static_images_cpp_logo_png__WEBPACK_IMPORTED_MODULE_14___default.a,
    className: classes.customTimelineLogo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h6",
    className: text.subtitle2
  }, "C/C++")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "determinate",
    value: play ? 65 : 0,
    classes: {
      root: classes.progressBg,
      bar: classes.bar
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon1
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _static_images_php_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    className: classes.customTimelineLogo
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h6",
    className: text.subtitle2
  }, "PHP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_9___default.a, {
    variant: "determinate",
    value: play ? 55 : 0,
    classes: {
      root: classes.progressBg,
      bar: classes.bar
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.mainList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h4",
    className: classes.category
  }, "Web Frameworks"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'block'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    style: {
      fontWeight: '700'
    },
    gutterBottom: true,
    className: text.subtitle2
  }, "Back End"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      style: {},
      alt: "Natacha",
      src: _static_images_django_png__WEBPACK_IMPORTED_MODULE_17___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Django",
    variant: "outlined"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_spring_png__WEBPACK_IMPORTED_MODULE_18___default.a
    }),
    style: {
      textAlign: 'center',
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Spring Boot",
    variant: "outlined"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'block'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    style: {
      fontWeight: '700'
    },
    gutterBottom: true,
    className: text.subtitle2
  }, "Front End"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    justify: "center",
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_react_png__WEBPACK_IMPORTED_MODULE_19___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "React",
    variant: "outlined"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'block'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    style: {
      fontWeight: '700'
    },
    gutterBottom: true,
    className: text.subtitle2
  }, "CSS"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_bootstrap_png__WEBPACK_IMPORTED_MODULE_20___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Bootstrap",
    variant: "outlined"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_mui_png__WEBPACK_IMPORTED_MODULE_21___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Material UI",
    variant: "outlined"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.mainList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h4",
    className: classes.category
  }, "Data Engineering"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'block'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    style: {
      fontWeight: '700'
    },
    gutterBottom: true,
    className: text.subtitle2
  }, "SQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      style: {},
      alt: "Natacha",
      src: _static_images_mysql_png__WEBPACK_IMPORTED_MODULE_22___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "MySQL",
    variant: "outlined"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_mssql_png__WEBPACK_IMPORTED_MODULE_23___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Microsoft SQL",
    variant: "outlined"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_hive_png__WEBPACK_IMPORTED_MODULE_24___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Hive SQL",
    variant: "outlined"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'block'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    style: {
      fontWeight: '700'
    },
    gutterBottom: true,
    className: text.subtitle2
  }, "Big Data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_spark_png__WEBPACK_IMPORTED_MODULE_25___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Spark",
    variant: "outlined"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_hadoop_png__WEBPACK_IMPORTED_MODULE_26___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "Hadoop",
    variant: "outlined"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
    className: classes.subList
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.textIcon
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: 'block'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    style: {
      fontWeight: '700'
    },
    gutterBottom: true,
    className: text.subtitle2
  }, "NoSQL"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_29___default.a, {
    avatar: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_30___default.a, {
      alt: "Natacha",
      src: _static_images_mongo_png__WEBPACK_IMPORTED_MODULE_27___default.a
    }),
    style: {
      fontSize: '20px',
      fontWeight: '700'
    },
    label: "MongoDB",
    variant: "outlined"
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null)))))))))));
}

Experience.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Experience);

/***/ }),

/***/ "./components/Experience/experience-style.js":
/*!***************************************************!*\
  !*** ./components/Experience/experience-style.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_imgAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/imgAPI */ "./static/images/imgAPI.js");



var experienceStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _li, _history, _progress;

  return {
    root: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative'
    }, theme.breakpoints.down('md'), {
      paddingTop: theme.spacing(5)
    }),
    nameDeco: {
      margin: 0,
      padding: 0,
      transform: 'rotate(-90deg)',
      transformOrigin: 'top center',
      letterSpacing: -10,
      position: 'absolute',
      fontWeight: theme.typography.fontWeightRegular,
      textTransform: 'uppercase',
      color: theme.palette.common.black,
      top: theme.spacing(30),
      left: theme.spacing(-5),
      fontSize: 72,
      opacity: 0.1,
      zIndex: 20
    },
    title: {
      textTransform: 'uppercase',
      marginBottom: theme.spacing(3),
      color: theme.palette.type === 'dark' ? theme.palette.secondary.light : theme.palette.secondary.dark
    },
    time: {},
    history: (_history = {
      borderLeft: '2px solid',
      position: 'relative',
      padding: theme.spacing(5, 4, 10),
      borderImageSource: "linear-gradient(90deg, ".concat(theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main, ", ").concat(theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, ")"),
      borderImageSlice: 1,
      borderTop: 0,
      borderRight: 0,
      borderBottom: 0
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_history, theme.breakpoints.down('md'), {
      border: 'none'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_history, theme.breakpoints.down('xs'), {
      padding: theme.spacing(0, 0, 5)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_history, '& h3', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontWeight: theme.typography.fontWeightBold
    }, theme.breakpoints.down('xs'), {
      width: '100%'
    })), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_history, '& p', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('xs'), {
      display: 'inline-block',
      marginRight: theme.spacing(2)
    })), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_history, '& ul', {
      margin: 0,
      padding: 0,
      '& li': (_li = {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        position: 'relative'
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_li, theme.breakpoints.down('sm'), {
        paddingLeft: 45
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_li, '&:last-child', {
        marginBottom: 0
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_li, '&:before', Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        content: '""',
        borderRadius: '50%',
        width: 24,
        height: 24,
        background: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
        border: "4px solid ".concat(theme.palette.type === 'dark' ? theme.palette.background["default"] : theme.palette.background.paper),
        position: 'absolute',
        left: -45,
        top: 4
      }, theme.breakpoints.down('sm'), {
        left: 0
      })), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_li, '& $time', {
        color: theme.palette.text.secondary
      }), _li)
    }), _history),
    progress: (_progress = {
      paddingBottom: theme.spacing(8)
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_progress, theme.breakpoints.up('sm'), {
      padding: theme.spacing(5, 0, 10)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_progress, '& ul', {
      margin: 0,
      padding: 0,
      '& li': {
        listStyle: 'none',
        marginBottom: theme.spacing(5),
        '&:last-child': {
          marginBottom: 0
        },
        '& h6': {
          fontWeight: theme.typography.fontWeightBold
        }
      }
    }), _progress),
    textIcon1: {
      marginBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      '& i': {
        color: theme.palette.text.secondary,
        fontSize: 28
      },
      '& h6': {
        marginLeft: theme.spacing()
      }
    },
    textIcon: {
      marginBottom: theme.spacing(1),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& i': {
        color: theme.palette.text.secondary,
        fontSize: 28
      },
      '& h6': {
        marginLeft: theme.spacing()
      }
    },
    customTimelineLogo: {
      width: '30px',
      height: '30px',
      marginRight: '10px',
      WebkitFilter: 'grayscale(100%)',
      filter: 'grayscale(100%)'
    },
    customTimelineLogoDjango: {
      width: '20px',
      height: '20px',
      marginRight: '10px',
      WebkitFilter: 'grayscale(100%)',
      filter: 'grayscale(100%)'
    },
    customTimelineLogoJava: {
      width: '50px',
      height: '50px',
      WebkitFilter: 'grayscale(100%)',
      filter: 'grayscale(100%)'
    },
    customTimelineLogoDevOps: {
      marginRight: '10px',
      width: '40px',
      height: '40px',
      WebkitFilter: 'grayscale(100%)',
      filter: 'grayscale(100%)'
    },
    progressBg: {
      borderRadius: 10,
      background: theme.palette.divider,
      height: 10
    },
    bar: {
      borderRadius: 10,
      backgroundImage: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ");")
    },
    mainList: {
      height: '100%',
      width: '100%',
      marginBottom: '5%',
      textAlign: 'center'
    },
    subList: {
      margin: "10%"
    },
    category: {
      textAlign: "center",
      fontSize: "15",
      paddingTop: "5%"
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (experienceStyles);

/***/ }),

/***/ "./components/Experience/index.js":
/*!****************************************!*\
  !*** ./components/Experience/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Experience__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Experience */ "./components/Experience/Experience.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Experience__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../static/images/profile-logo.png */ "./static/images/profile-logo.png");
/* harmony import */ var _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer-style */ "./components/Footer/footer-style.js");
/* harmony import */ var _Contact_Form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Contact/Form */ "./components/Contact/Form.js");













function Footer(props) {
  var classes = Object(_footer_style__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_9__["useText"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_2___default()(theme.breakpoints.down('sm'));
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.decoration,
    style: {
      display: 'none'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    fill: "#cccccc",
    width: 845,
    height: 1099,
    className: classes.parallaxDot
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "/static/images/decoration/dot-deco.svg#dot"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "lg",
    component: "footer"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    container: true,
    spacing: 6,
    direction: isMobile ? 'column-reverse' : 'row'
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 5
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.logo
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "logo"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h3",
    className: text.title
  }, "Sean Droke"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    variant: "h4",
    className: text.subtitle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nobr", null, "Full Stack"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nobr", null, "Software Engineer"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.socmed
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    "aria-label": "Delete",
    className: classes.margin,
    size: "small",
    onClick: function onClick() {
      return window.open('https://www.linkedin.com/in/seandroke/', "_blank");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-linkedin"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    "aria-label": "Delete",
    className: classes.margin,
    size: "small",
    onClick: function onClick() {
      return window.open('https://www.instagram.com/seandroke/?hl=en', "_blank");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-instagram"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6___default.a, {
    "aria-label": "Delete",
    className: classes.margin,
    size: "small",
    onClick: function onClick() {
      return window.open('https://github.com/seandroke/', "_blank");
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "ion-social-github"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.contact
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: text.paragraph
  }, "My Personal Line", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "+1 609 500 3961"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: classes.divider
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: text.paragraph
  }, "Email Me!", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), "sean.droke@temple.edu"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default.a, {
    item: true,
    xs: 12,
    md: 7
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact_Form__WEBPACK_IMPORTED_MODULE_11__["default"], null)))));
}

Footer.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/footer-style.js":
/*!*******************************************!*\
  !*** ./components/Footer/footer-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var footerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _logo;

  return {
    root: {
      textAlign: 'center',
      paddingBottom: theme.spacing(5)
    },
    decoration: {},
    logo: (_logo = {
      color: theme.palette.text.secondary
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, theme.breakpoints.down('md'), {
      marginTop: theme.spacing(5)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, '& img', {
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      width: 80,
      marginBottom: theme.spacing(2)
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_logo, '& h4', {
      textTransform: 'uppercase'
    }), _logo),
    margin: {
      margin: theme.spacing(2)
    },
    socmed: {
      margin: theme.spacing(3, 0),
      '& button': {
        margin: theme.spacing(),
        width: 36,
        height: 36,
        '& i': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark
        }
      },
      '& i': {
        fontSize: 24
      }
    },
    contact: {
      color: theme.palette.text.secondary
    },
    divider: {
      margin: theme.spacing(1.5),
      border: 'none',
      background: 'none'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (footerStyles);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Fade */ "@material-ui/core/Fade");
/* harmony import */ var _material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../static/images/profile-logo.png */ "./static/images/profile-logo.png");
/* harmony import */ var _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _static_text_link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../static/text/link */ "./static/text/link.js");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../vendors/hamburger-menu.css */ "./vendors/hamburger-menu.css");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _header_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header-style */ "./components/Header/header-style.js");
/* harmony import */ var _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../SideNavigation/menu */ "./components/SideNavigation/menu.js");




















var counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name: name,
    url: url,
    offset: offset
  };
}

var LinkBtn = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
});

function Header(props) {
  // Theme breakpoints
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();
  var isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.up('md'));
  var isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_4___default()(theme.breakpoints.down('md'));

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      fixed = _useState2[0],
      setFixed = _useState2[1];

  var flagFixed = false;

  var handleScroll = function handleScroll() {
    var doc = document.documentElement;
    var scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var newFlagFixed = scroll > 80;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
  }, []);
  var classes = Object(_header_style__WEBPACK_IMPORTED_MODULE_18__["default"])();
  var onToggleDark = props.onToggleDark,
      onToggleDir = props.onToggleDir,
      invert = props.invert,
      t = props.t;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([createData(_SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][0], '#' + _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][0], 0), createData(_SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][1], '#' + _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][1], 150), createData(_SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][2], '#' + _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][2], 50), createData(_SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][3], '#' + _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][3], 100), createData(_SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][4], '#' + _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][4], 80), createData(_SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][5], '#' + _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][5], 80), createData(_SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][6], '#' + _SideNavigation_menu__WEBPACK_IMPORTED_MODULE_19__["default"][6], 10)]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 1),
      menuList = _useState4[0];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      openDrawer = _useState6[0],
      setOpenDrawer = _useState6[1];

  var handleOpenDrawer = function handleOpenDrawer() {
    setOpenDrawer(!openDrawer);
  };

  var handleCloseDrawer = function handleCloseDrawer() {
    setOpenDrawer(false);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_6___default.a, {
    component: "div",
    position: "relative",
    id: "header",
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.header, invert || fixed || isMobile ? classes.fixed : '', openDrawer && classes.openDrawer)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11___default.a, {
    fixed: isDesktop
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.headerContent
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.navLogo, invert && classes.invert)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10___default.a, {
    onClick: handleOpenDrawer,
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()('hamburger hamburger--squeeze', classes.mobileMenu, openDrawer && 'is-active')
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "hamburger-box"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.bar, 'hamburger-inner')
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.logo
  }, invert ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: _static_text_link__WEBPACK_IMPORTED_MODULE_16__["default"].profile.home
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "logo"
  }))) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default.a, {
    href: "#home"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_15___default.a,
    alt: "logo"
  }))))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Fade__WEBPACK_IMPORTED_MODULE_13___default.a, {
    "in": openDrawer
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.paperNav, openDrawer && classes.show)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.mobileNav
  }, openDrawer && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: classes.menu
  }, menuList.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      key: item.id.toString(),
      style: {
        animationDuration: index * 0.15 + 's'
      }
    }, invert ? // eslint-disable-next-line
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
      href: '/' + item.url
    }, t('profile-landing:header_' + item.name)) : // eslint-disable-next-line
    react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9___default.a, {
      component: react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_12___default.a,
      onClick: handleCloseDrawer,
      offset: item.offset || 0,
      href: item.url
    }, t('profile-landing:header_' + item.name)));
  }))))));
}

Header.propTypes = {
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  invert: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  t: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
Header.defaultProps = {
  invert: false
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_14__["withTranslation"])(['profile-landing'])(Header));

/***/ }),

/***/ "./components/Header/header-style.js":
/*!*******************************************!*\
  !*** ./components/Header/header-style.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles/colorManipulator */ "@material-ui/core/styles/colorManipulator");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__);



var headerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _nav;

  return {
    '@keyframes slideRight': {
      from: {
        opacity: 0,
        transform: 'translateX(-100px)'
      },
      to: {
        opacity: 1,
        transform: 'none'
      }
    },
    fixed: {},
    openDrawer: {},
    header: {
      color: theme.palette.text.primary,
      background: 'none',
      boxShadow: 'none',
      position: 'fixed',
      visibility: 'hidden',
      opacity: 0,
      '&$fixed': {
        transition: 'opacity 0.5s ease-out',
        position: 'fixed',
        visibility: 'visible',
        opacity: 1,
        background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.background.paper, 0.8),
        backdropFilter: 'saturate(180%) blur(20px)',
        '& $logo': {
          '& a': {
            color: theme.palette.text.primary
          }
        },
        '& $bar': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('sm'), {
          backgroundColor: theme.palette.text.secondary,
          '&:after, &:before': {
            backgroundColor: theme.palette.text.secondary
          }
        })
      },
      '&$openDrawer': {
        background: 'none',
        backdropFilter: 'none'
      }
    },
    headerContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      '& nav': (_nav = {
        alignItems: 'center',
        padding: theme.spacing(0, 2)
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_nav, theme.breakpoints.down('md'), {
        padding: theme.spacing(2, 0)
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_nav, "display", 'flex'), _nav)
    },
    logo: {
      flex: 1,
      display: 'flex',
      padding: theme.spacing(0, 2),
      justifyContent: 'center',
      '& a': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        textDecoration: 'none',
        display: 'flex',
        fontSize: 22,
        color: theme.palette.text.primary,
        alignItems: 'center',
        fontWeight: 500
      }, theme.breakpoints.down('sm'), {
        color: theme.palette.common.white
      }),
      '& img': {
        transition: 'all 0.3s ease-out',
        width: 48,
        height: 48,
        marginRight: theme.spacing()
      }
    },
    invert: {},
    navLogo: {
      width: '100%',
      '&$invert': {
        '& $logo': {
          '& a': {
            color: theme.palette.text.primary
          }
        },
        '& $mobileMenu': {
          '& $bar': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('sm'), {
            backgroundColor: theme.palette.text.secondary,
            '&:after, &:before': {
              backgroundColor: theme.palette.text.secondary
            }
          })
        }
      }
    },
    titleMenu: {
      textTransform: 'capitalize'
    },
    bar: {},
    menu: {},
    menuOpen: {},
    show: {},
    paperNav: {
      background: Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_2__["fade"])(theme.palette.background.paper, 0.8),
      backdropFilter: 'saturate(180%) blur(20px)',
      width: '100%',
      position: 'fixed',
      zIndex: 50,
      height: '100%'
    },
    mobileMenu: {
      margin: theme.spacing(0, 1),
      '& $bar': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }, theme.breakpoints.down('sm'), {
        backgroundColor: theme.palette.common.white,
        '&:after, &:before': {
          backgroundColor: theme.palette.common.white
        }
      })
    },
    mobileNav: {
      '& $menu': {
        padding: theme.spacing(0, 2),
        overflow: 'auto',
        top: 80,
        width: '100%',
        position: 'absolute',
        height: 'calc(100% - 80px)',
        listStyle: 'none',
        '& li': {
          textAlign: 'center',
          animationName: '$slideRight',
          animationTimingFunction: 'ease',
          '& a': {
            fontSize: 24,
            padding: theme.spacing(1, 4),
            marginBottom: theme.spacing(),
            '&:before': {
              content: '""',
              position: 'absolute',
              left: theme.spacing(-2),
              top: 5,
              opacity: 0.2,
              background: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")"),
              height: '75%',
              width: 0,
              transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
            },
            '&:hover': {
              color: theme.palette.primary.main,
              background: 'none',
              '&:before': {
                width: '110%'
              }
            }
          }
        }
      }
    },
    menuList: {
      textTransform: 'capitalize',
      '& span': {
        fontSize: 24
      }
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (headerStyles);

/***/ }),

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Location/Location.js":
/*!*****************************************!*\
  !*** ./components/Location/Location.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-wow */ "react-wow");
/* harmony import */ var react_wow__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_wow__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Popover */ "@material-ui/core/Popover");
/* harmony import */ var _material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Avatar */ "@material-ui/core/Avatar");
/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _locationData__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./locationData */ "./components/Location/locationData.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _location_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./location-style */ "./components/Location/location-style.js");



















function AvatarBuble(props) {
  var classes = Object(_location_style__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var avatar = props.avatar,
      name = props.name,
      x = props.x,
      y = props.y,
      openPopover = props.openPopover,
      closePopover = props.closePopover;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.person,
    style: {
      left: x,
      top: y
    }
  }, avatar ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default.a, {
    alt: name,
    src: avatar,
    className: classes.avatar,
    onMouseEnter: function onMouseEnter(e) {
      return openPopover(e);
    },
    onMouseLeave: closePopover
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: classes.dot,
    onMouseEnter: function onMouseEnter(e) {
      return openPopover(e);
    },
    onMouseLeave: closePopover
  }));
}

AvatarBuble.propTypes = {
  avatar: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  image: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.image,
  x: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  y: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  openPopover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  closePopover: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
AvatarBuble.defaultProps = {
  avatar: ''
};

function Location(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      anchorEl = _useState2[0],
      setAnchorEl = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      popupData = _useState4[0],
      setPopupData = _useState4[1];

  var classes = Object(_location_style__WEBPACK_IMPORTED_MODULE_17__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_14__["useText"])();
  var open = Boolean(anchorEl);

  var firsthChar = function firsthChar(txt) {
    return txt.charAt(0);
  };

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    arrows: false
  };

  function handlePopoverOpen(event, item) {
    setAnchorEl(event.currentTarget);
    setPopupData(item);
  }

  function handlePopoverClose() {
    setAnchorEl(null);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Popover__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "mouse-over-popover",
    className: classes.popover,
    classes: {
      paper: classes.paper
    },
    open: open,
    anchorEl: anchorEl,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    onClose: handlePopoverClose
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.paperBlock
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h6"
  }, popupData.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    className: classes.title
  }, popupData.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    gutterBottom: true,
    display: "block"
  }, popupData.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: popupData.image,
    className: classes.CardImage
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_16__["default"], {
    dark: true
  }, "Where \xA0", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Am I?")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    container: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    md: 7,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.worldMap
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
    xsDown: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.avatarWrap
  }, _locationData__WEBPACK_IMPORTED_MODULE_15__["default"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AvatarBuble, {
      key: index.toString(),
      avatar: item.avatar,
      name: item.name,
      x: item.x,
      y: item.y,
      openPopover: function openPopover(e) {
        return handlePopoverOpen(e, item);
      },
      closePopover: handlePopoverClose
    });
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
    smUp: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_4___default.a, settings, _locationData__WEBPACK_IMPORTED_MODULE_15__["default"].map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.itemCarousel,
      key: index.toString()
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_6___default.a, {
      className: classes.card
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: classes.name
    }, item.avatar ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default.a, {
      alt: item.name,
      src: item.avatar,
      className: classes.avatar
    }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_12___default.a, {
      alt: item.name,
      className: classes.avatar
    }, firsthChar(item.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
      variant: "caption"
    }, item.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
      variant: "body1",
      display: "block"
    }, item.text), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: item.image,
      className: classes.CardImage
    })));
  }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9___default.a, {
    item: true,
    md: 5,
    xs: 12
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.text
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animation: "fadeInUpShort",
    offset: -200,
    delay: "0.2s",
    duration: "0.3s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    variant: "h3",
    className: clsx__WEBPACK_IMPORTED_MODULE_5___default()(classes.titleSerif, text.title2)
  }, "Let's work together.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_wow__WEBPACK_IMPORTED_MODULE_3___default.a, {
    animation: "fadeInUpShort",
    offset: -200,
    delay: "0.3s",
    duration: "0.3s"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {
    component: "p",
    className: text.paragraph
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", null, "Current Availability:"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, " Part Time"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), "Right now, I am fully employed as a Software Engineer. However, I am actively seeking part time, freelance/contract work, outside of traditional working hours. I am always open to chat about all possible opportunities!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13___default.a, {
    color: "secondary",
    target: "None",
    href: "https://www.linkedin.com/in/seandroke/",
    size: "large",
    className: classes.button,
    variant: "contained"
  }, "Hire Me"))))))));
}

Location.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Location);

/***/ }),

/***/ "./components/Location/index.js":
/*!**************************************!*\
  !*** ./components/Location/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Location__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Location */ "./components/Location/Location.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Location__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Location/location-style.js":
/*!***********************************************!*\
  !*** ./components/Location/location-style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var locationStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    root: {
      backgroundImage: "linear-gradient(90deg, ".concat(theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main, ", ").concat(theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main, ")"),
      padding: theme.spacing(10, 0),
      color: theme.palette.common.white,
      position: 'relative',
      zIndex: 10
    },
    button: {},
    avatarWrap: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    text: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      paddingTop: theme.spacing(5),
      '& h3': {
        marginBottom: theme.spacing(3)
      },
      '& p': {
        marginBottom: theme.spacing(3),
        fontSize: 18,
        lineHeight: '32px'
      },
      '& $button': {
        minWidth: 160
      }
    }, theme.breakpoints.down('sm'), {
      textAlign: 'center'
    }),
    worldMap: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      background: 'url(/static/images/profile/worldMap.svg) no-repeat center center',
      backgroundSize: '100%',
      position: 'relative',
      margin: '0 auto'
    }, theme.breakpoints.up('sm'), {
      height: 360,
      width: 580
    }),
    titleSerif: {
      fontFamily: 'Times New Roman'
    },
    person: {
      position: 'absolute'
    },
    avatar: {
      transition: 'all 0.3s ease-out',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    },
    dot: {
      borderRadius: '50%',
      display: 'block',
      width: 12,
      height: 12,
      background: theme.palette.secondary.main,
      border: '2px solid #FFF',
      boxShadow: '0 1.5px 24.5px 4.5px rgba(0, 0, 0, 0.06)',
      transition: 'all 0.3s ease-out',
      '&:hover': {
        transform: 'scale(1.2)'
      }
    },
    title: {
      color: theme.palette.text.secondary
    },
    popover: {
      pointerEvents: 'none'
    },
    paper: {
      width: 300,
      borderRadius: 0,
      background: 'none',
      boxShadow: 'none'
    },
    paperBlock: {
      background: theme.palette.background.paper,
      padding: theme.spacing(3),
      marginBottom: 30,
      boxShadow: '0 1.5px 24.5px 4.5px rgba(0, 0, 0, 0.06)',
      '& h6': {
        marginTop: theme.spacing(1),
        fontSize: 14
      },
      '& $title': {
        fontStyle: 'italic',
        fontSize: 12
      },
      '&:before': {
        content: '""',
        borderTop: "15px solid ".concat(theme.palette.background.paper),
        borderLeft: '25px solid transparent',
        borderRight: '25px solid transparent',
        position: 'absolute',
        left: 'calc(50% - 25px)',
        bottom: 15
      }
    },
    itemCarousel: {
      padding: theme.spacing(2)
    },
    card: {
      padding: theme.spacing(3),
      '& avatar': {
        width: 30,
        height: 30
      }
    },
    name: {
      display: 'flex',
      marginTop: theme.spacing(),
      alignItems: 'center',
      '& span': {
        display: 'inline-block',
        marginLeft: theme.spacing()
      }
    },
    CardImage: {
      width: '100%',
      height: 'auto',
      paddingTop: '5%'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (locationStyles);

/***/ }),

/***/ "./components/Location/locationData.js":
/*!*********************************************!*\
  !*** ./components/Location/locationData.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _static_images_imgAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../static/images/imgAPI */ "./static/images/imgAPI.js");
/* harmony import */ var _static_images_icons8_map_pin_48_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/images/icons8-map-pin-48.png */ "./static/images/icons8-map-pin-48.png");
/* harmony import */ var _static_images_icons8_map_pin_48_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_images_icons8_map_pin_48_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_love_park_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/love-park.jpg */ "./static/images/love-park.jpg");
/* harmony import */ var _static_images_love_park_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_love_park_jpg__WEBPACK_IMPORTED_MODULE_2__);



var locationData = [{
  avatar: _static_images_icons8_map_pin_48_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  name: 'Philadelphia, PA',
  title: 'Present',
  text: 'I am currently living and working in Philly!',
  image: _static_images_love_park_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  x: 125,
  y: 110
}];
/* harmony default export */ __webpack_exports__["default"] = (locationData);

/***/ }),

/***/ "./components/PageNav/PageNav.js":
/*!***************************************!*\
  !*** ./components/PageNav/PageNav.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Fab */ "@material-ui/core/Fab");
/* harmony import */ var _material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/ArrowUpward */ "@material-ui/icons/ArrowUpward");
/* harmony import */ var _material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _pagenav_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pagenav-style */ "./components/PageNav/pagenav-style.js");










var LinkBtn = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var flagShow = false;

  var handleScroll = function handleScroll() {
    var doc = document.documentElement;
    var scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  var classes = Object(_pagenav_style__WEBPACK_IMPORTED_MODULE_9__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_4___default()(classes.pageNav, show && classes.show)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_8___default.a, {
    title: "To Top",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Fab__WEBPACK_IMPORTED_MODULE_6___default.a, {
    color: "primary",
    "aria-label": "To top",
    component: LinkBtn,
    href: "#home",
    className: classes.fab
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_icons_ArrowUpward__WEBPACK_IMPORTED_MODULE_7___default.a, null))));
}

PageNav.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (PageNav);

/***/ }),

/***/ "./components/PageNav/index.js":
/*!*************************************!*\
  !*** ./components/PageNav/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageNav */ "./components/PageNav/PageNav.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PageNav__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/PageNav/pagenav-style.js":
/*!*********************************************!*\
  !*** ./components/PageNav/pagenav-style.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

var pagenav = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    show: {},
    fab: {
      transform: 'scale(0.5)',
      transition: 'all 0.5s ease',
      opacity: 0,
      background: '#212121',
      fontWeight: theme.typography.fontWeightBold,
      borderRadius: 0,
      '& svg': {
        fill: '#FFF',
        width: 40,
        height: 40
      },
      '&:hover': {
        '& svg': {
          fill: theme.palette.primary.light
        }
      }
    },
    pageNav: {
      zIndex: 200,
      position: 'fixed',
      bottom: 40,
      right: 40,
      '& nav': {
        transition: 'height 0.5s ease',
        transitionDelay: '0.5s',
        height: 0,
        overflow: 'hidden'
      },
      '&$show': {
        '& $fab': {
          opacity: 1,
          transform: 'scale(1)'
        }
      },
      '& ul': {
        margin: '0 0 16px 22px',
        padding: 0,
        position: 'relative'
      },
      '& li': {
        marginBottom: theme.spacing(3),
        listStyle: 'none',
        opacity: 0,
        position: 'relative',
        transition: 'all 0.4s ease',
        '& a': {
          width: 12,
          height: 12,
          boxShadow: theme.shadows[1],
          background: theme.palette.background.paper,
          border: "1px solid ".concat(theme.palette.text.secondary),
          display: 'block',
          transition: 'all 0.4s ease'
        },
        '&[class="active"] a': {
          background: theme.palette.text.primary,
          border: "1px solid ".concat(theme.palette.primary.light)
        }
      },
      '&:hover': {
        '& li': {
          opacity: 1,
          top: '0 !important'
        },
        '& nav': {
          transitionDelay: '0s',
          height: '100%'
        }
      }
    },
    tooltip: {
      textTransform: 'capitalize',
      background: '#212121',
      color: theme.palette.common.white,
      borderRadius: 0,
      fontSize: 14
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (pagenav);

/***/ }),

/***/ "./components/Parallax/Decoration.js":
/*!*******************************************!*\
  !*** ./components/Parallax/Decoration.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ParallaxDeco; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-parallax */ "react-scroll-parallax");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parallax-style */ "./components/Parallax/parallax-style.js");




function ParallaxDeco() {
  var classes = Object(_parallax_style__WEBPACK_IMPORTED_MODULE_3__["default"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.parallaxWrap
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.bannerParallaxWrap
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [-40, 40],
    tagOuter: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    fill: "#cccccc",
    width: 845,
    height: 1099,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.parallaxVertical, classes.parallaxDot)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "/static/images/decoration/dot-deco.svg#dot"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [-50, 50],
    tagOuter: "figure"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    fill: "#cccccc",
    width: 902,
    height: 1042,
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.parallaxVertical, classes.parallaxTriangle)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
    xlinkHref: "/static/images/decoration/triangle-deco.svg#triangle"
  }))))));
}

/***/ }),

/***/ "./components/Parallax/parallax-style.js":
/*!***********************************************!*\
  !*** ./components/Parallax/parallax-style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var featureStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _parallaxWrap, _parallaxVertical;

  return {
    parallaxWrap: (_parallaxWrap = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      top: 0,
      left: 0,
      zIndex: 0
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_parallaxWrap, theme.breakpoints.down('md'), {
      display: 'none'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_parallaxWrap, '& figure > div', {
      height: 1000,
      width: '100%',
      position: 'relative',
      top: 500
    }), _parallaxWrap),
    bannerParallaxWrap: {
      height: 800,
      width: '100%',
      position: 'absolute',
      display: 'block',
      '& figure': {
        height: 800,
        width: '100%',
        display: 'block',
        position: 'absolute'
      },
      '& figure > div': {
        height: 800,
        width: '100%',
        display: 'block',
        position: 'absolute',
        top: 0
      }
    },
    parallaxVertical: (_parallaxVertical = {
      width: '100%',
      height: '100%',
      position: 'absolute'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_parallaxVertical, theme.breakpoints.up('lg'), {
      transform: 'scale(0.5)'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_parallaxVertical, theme.breakpoints.up('xl'), {
      display: 'none'
    }), _parallaxVertical),
    parallaxDot: {
      top: -20,
      fill: theme.palette.text.hint,
      width: 845,
      height: 1099,
      opacity: 0.2,
      left: 200
    },
    parallaxTriangle: {
      top: 300,
      outline: theme.palette.text.hint,
      opacity: 0.1,
      width: 902,
      height: 1042,
      stroke: theme.palette.text.hint,
      fill: 'transparent',
      strokeWidth: 50,
      right: -100
    },
    parallaxCircle: {
      top: 250,
      width: 600,
      height: 570,
      opacity: 0.1,
      stroke: theme.palette.text.hint,
      fill: 'transparent',
      strokeWidth: 40,
      right: 40
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (featureStyles);

/***/ }),

/***/ "./components/Projects/Projects.js":
/*!*****************************************!*\
  !*** ./components/Projects/Projects.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/useMediaQuery */ "@material-ui/core/useMediaQuery");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _theme_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../theme/common */ "./theme/common.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Title */ "./components/Title/index.js");
/* harmony import */ var _Cards_IconText__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Cards/IconText */ "./components/Cards/IconText.js");
/* harmony import */ var _projects_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./projects-style */ "./components/Projects/projects-style.js");
/* harmony import */ var _static_images_comcast_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../static/images/comcast.png */ "./static/images/comcast.png");
/* harmony import */ var _static_images_comcast_png__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_static_images_comcast_png__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _static_images_tierney_logo_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../static/images/tierney_logo.png */ "./static/images/tierney_logo.png");
/* harmony import */ var _static_images_tierney_logo_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_static_images_tierney_logo_png__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _static_images_ipg_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../static/images/ipg.png */ "./static/images/ipg.png");
/* harmony import */ var _static_images_ipg_png__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_static_images_ipg_png__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16__);

















var services = [{
  icon: _static_images_comcast_png__WEBPACK_IMPORTED_MODULE_13___default.a,
  name: 'Comcast',
  desc: 'Full Stack Software Engineer',
  projectOverview: [{
    projectNumber: 1,
    projectName: 'Big Data Natural Language Parser',
    projectDescription: 'Built a python parser for automating the identification of specific elements within a teradata database based on user defined parameters. Project involved optimizing existing queries to be as time/space efficient as possible on larger data sets (100TB+) as well as integrating results with a tensorflow based natural language processor to identify elements of relevant meaning with an acceptable degree of confidence.'
  }, {
    projectNumber: 2,
    projectName: 'PySpark Translations',
    projectDescription: 'Currently working on translating existing Hive SQL queries, used to aggregate data marts referenced by business facing web applications, to the PySpark/DataFrame syntax. PySpark enables for increased developer readability, advanced data science integration, and increased performance due to better optimized CI/CD.'
  }]
}, {
  icon: _static_images_tierney_logo_png__WEBPACK_IMPORTED_MODULE_14___default.a,
  name: 'Tierney Communications',
  desc: 'Full Stack Developer',
  projectOverview: [{
    projectNumber: 1,
    projectName: 'Development Practice Overhaul',
    projectDescription: 'Promoted to assist in development of internal business process applications, customer facing full stack web projects, refactoring of the existing agency codebase, designing new coding standards, and leading an agile initiative. Day to day responsibilities included client facing site maintenance and feature implementation, working closely with project managers and product owners on new and existing business, and implementing new development strategies to increase personal and team productivity. Began an iteration of a better organized SDLC to redesign the agency website with a more capable back end interface with CMS integration.'
  }]
}, {
  icon: _static_images_comcast_png__WEBPACK_IMPORTED_MODULE_13___default.a,
  name: 'Comcast',
  desc: 'Network & Automation Engineering Intern',
  projectOverview: [{
    projectNumber: 1,
    projectName: 'Pre-Configuration Template Generator',
    projectDescription: 'Built a full stack, React/Django, web application for automating template based, network device configuration file development. Created a user friendly form based UI to reduce errors made in the configuration process thereby reducing network outages and limiting necessary quality assurance.'
  }, {
    projectNumber: 2,
    projectName: 'Multi-Device Change Deployment Tool',
    projectDescription: 'Built an additional React/Django full stack web app to replace an internal tool used for automating the deployment of changes to multiple network devices at scale. Tool enables the internal change control team to automate company wide changes via a streamlined user interface thereby lessening engineer time spent and eliminating the pre-existing software sources of error.'
  }]
}, {
  icon: _static_images_ipg_png__WEBPACK_IMPORTED_MODULE_15___default.a,
  name: 'The Interpublic Group',
  desc: 'Software Engineering Intern',
  projectOverview: [{
    projectNumber: 1,
    projectName: 'Encrypted Device Reporting Tool',
    projectDescription: 'Trained as a full stack developer working primarily on back end projects related to an internal IT Management and Reporting platform. Technology stack of JavaScript, PHP, SQL Server, and C/C++. Experience with the agile workflow, wireframing, test driven development, Unix based server manipulation, internal code standards, and design documentation. Notable contributions to back end PHP benefitting an Encrypted Device reporting tool for upper level administrators to oversee subsidiary compliance.'
  }]
}];

function Projects(props) {
  var classes = Object(_projects_style__WEBPACK_IMPORTED_MODULE_12__["default"])();
  var text = Object(_theme_common__WEBPACK_IMPORTED_MODULE_9__["useText"])();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  var isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_3___default()(theme.breakpoints.up('md'));
  var slider = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      toggler = _useState2[0],
      setToggler = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      renderContent = _useState4[0],
      setRenderContent = _useState4[1];

  var detailedWork = null;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (theme.direction === 'rtl') {
      var lastSlide = Math.floor(services.length - 2);
      slider.current.slickGoTo(lastSlide);
    }
  }, []);

  if (toggler) {
    detailedWork = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.SubInfo
    }, renderContent.map(function (item, index) {
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
        style: {
          paddingTop: '5%'
        },
        className: text.subtitle2
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b", null, "Project Name: ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", null, item.projectName))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        className: text.paragraph
      }, item.projectDescription));
    }));
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.inBetween
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.floatingTitle
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Title__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", null, "Projects")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {
    className: text.paragraph
  }, "An overview of what I have accomplished at these great organizations.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.sliderWrap
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classes.carousel
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.nav, classes.prev),
    onClick: function onClick() {
      return slider.current.slickPrev();
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "ion-ios-arrow-back"
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    ref: slider
  }, settings), isDesktop && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.item, classes.itemPropsFirst)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null)), services.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      key: index.toString(),
      className: classes.item
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Cards_IconText__WEBPACK_IMPORTED_MODULE_11__["default"], {
      icon: item.icon,
      text: item.name,
      desc: item.desc
    })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: classes.CenterButton
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_16___default.a, {
      onClick: function onClick() {
        setToggler(!toggler);
        setRenderContent(item.projectOverview);
      }
    }, "Read More")));
  }), isDesktop && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.item, classes.itemPropsLast)
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_7___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_8___default()(classes.nav, classes.next),
    onClick: function onClick() {
      return slider.current.slickNext();
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("i", {
    className: "ion-ios-arrow-forward"
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, detailedWork)));
}

Projects.propTypes = {};
/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./components/Projects/index.js":
/*!**************************************!*\
  !*** ./components/Projects/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects */ "./components/Projects/Projects.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Projects__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Projects/projects-style.js":
/*!***********************************************!*\
  !*** ./components/Projects/projects-style.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var testiStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _nav;

  return {
    root: {
      width: '100%',
      paddingBottom: theme.spacing(2),
      position: 'relative',
      '& > div': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('md'), {
        padding: 0
      })
    },
    props: {
      width: 240,
      height: 240,
      '&:focus': {
        outline: 'none'
      }
    },
    floatingTitle: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      textAlign: 'center',
      padding: theme.spacing(0, 2)
    }, theme.breakpoints.up('md'), {
      position: 'relative',
      left: theme.spacing(12),
      top: theme.spacing(22),
      width: 240
    }),
    carousel: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      position: 'relative'
    }, theme.breakpoints.down('sm'), {
      marginTop: theme.spacing(3)
    }),
    item: {
      padding: theme.spacing(0, 1),
      marginBottom: theme.spacing(),
      '&:focus': {
        outline: 'none'
      }
    },
    CenterButton: {
      marginTop: theme.spacing(2),
      textAlign: 'center'
    },
    nav: (_nav = {
      position: 'absolute',
      top: '45%',
      width: 36,
      height: 36,
      padding: 0,
      minWidth: 0,
      background: theme.palette.background["default"],
      border: 'none',
      boxShadow: 'none',
      zIndex: 3,
      transform: "scale(2.5) ".concat(theme.direction === 'rtl' ? 'rotate(180deg)' : 'rotate(0deg)')
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_nav, theme.breakpoints.down('sm'), {
      display: 'none'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_nav, '& i', {
      transform: 'scale(1.2)',
      color: theme.palette.type === 'dark' ? theme.palette.divider : theme.palette.text.primary
    }), _nav),
    prev: {
      left: 6
    },
    next: {
      right: 6
    },
    itemPropsFirst: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      '& div': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        width: theme.direction === 'rtl' ? 400 : 350
      }, theme.breakpoints.down(1500), {
        width: theme.direction === 'rtl' ? 500 : 300
      })
    }, theme.breakpoints.down('md'), {
      display: 'none'
    }),
    itemPropsLast: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: theme.direction === 'rtl' ? 350 : 400,
      '& div': Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down(1500), {
        width: theme.direction === 'rtl' ? 300 : 500
      })
    }, theme.breakpoints.down('md'), {
      display: 'none'
    }),
    SubInfo: {
      width: '80%',
      marginLeft: '10%',
      marginRight: '10%',
      marginTop: '5%'
    },
    inBetween: {
      maxWidth: '1280px',
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (testiStyles);

/***/ }),

/***/ "./components/SideNavigation/SideNavigation.js":
/*!*****************************************************!*\
  !*** ./components/SideNavigation/SideNavigation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "@material-ui/core/Container");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-scrollspy */ "react-scrollspy");
/* harmony import */ var react_scrollspy__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_scrollspy__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../static/images/profile-logo.png */ "./static/images/profile-logo.png");
/* harmony import */ var _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n */ "./i18n.js");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _sidenav_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidenav-style */ "./components/SideNavigation/sidenav-style.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu */ "./components/SideNavigation/menu.js");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../vendors/hamburger-menu.css */ "./vendors/hamburger-menu.css");
/* harmony import */ var _vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_vendors_hamburger_menu_css__WEBPACK_IMPORTED_MODULE_13__);














var counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name: name,
    url: url,
    offset: offset
  };
}

function SideNavigation(props) {
  var classes = Object(_sidenav_style__WEBPACK_IMPORTED_MODULE_11__["default"])();
  var t = props.t;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([createData(_menu__WEBPACK_IMPORTED_MODULE_12__["default"][0], '#' + _menu__WEBPACK_IMPORTED_MODULE_12__["default"][0], 0), createData(_menu__WEBPACK_IMPORTED_MODULE_12__["default"][1], '#' + _menu__WEBPACK_IMPORTED_MODULE_12__["default"][1], 80), createData(_menu__WEBPACK_IMPORTED_MODULE_12__["default"][2], '#' + _menu__WEBPACK_IMPORTED_MODULE_12__["default"][2], -250), createData(_menu__WEBPACK_IMPORTED_MODULE_12__["default"][3], '#' + _menu__WEBPACK_IMPORTED_MODULE_12__["default"][3]), createData(_menu__WEBPACK_IMPORTED_MODULE_12__["default"][4], '#' + _menu__WEBPACK_IMPORTED_MODULE_12__["default"][4]), createData(_menu__WEBPACK_IMPORTED_MODULE_12__["default"][5], '#' + _menu__WEBPACK_IMPORTED_MODULE_12__["default"][5]), createData(_menu__WEBPACK_IMPORTED_MODULE_12__["default"][6], '#' + _menu__WEBPACK_IMPORTED_MODULE_12__["default"][6])]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      menuList = _useState2[0];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classes.navigation
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6___default.a, {
    fixed: true
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("nav", {
    className: classes.navMenu
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_7___default.a, {
    href: "#home",
    className: classes.logo
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _static_images_profile_logo_png__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "logo"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {
    component: "nav",
    className: classes.menu
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_scrollspy__WEBPACK_IMPORTED_MODULE_8___default.a, {
    items: _menu__WEBPACK_IMPORTED_MODULE_12__["default"],
    currentClassName: "active"
  }, menuList.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {
      key: item.id.toString(),
      button: true,
      component: react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_7___default.a,
      offset: item.offset || 0,
      href: item.url,
      classes: {
        root: classes.link
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_5___default.a, {
      classes: {
        root: classes.text
      },
      primary: t('profile-landing:header_' + item.name)
    }));
  }))))));
}

SideNavigation.propTypes = {
  t: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_i18n__WEBPACK_IMPORTED_MODULE_10__["withTranslation"])(['profile-landing'])(SideNavigation));

/***/ }),

/***/ "./components/SideNavigation/index.js":
/*!********************************************!*\
  !*** ./components/SideNavigation/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SideNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SideNavigation */ "./components/SideNavigation/SideNavigation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _SideNavigation__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/SideNavigation/menu.js":
/*!*******************************************!*\
  !*** ./components/SideNavigation/menu.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var menu = ['home', 'education', 'experience', 'projects', 'about', 'location', 'contact'];
/* harmony default export */ __webpack_exports__["default"] = (menu);

/***/ }),

/***/ "./components/SideNavigation/sidenav-style.js":
/*!****************************************************!*\
  !*** ./components/SideNavigation/sidenav-style.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

var sideNavStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(function (theme) {
  return {
    navigation: {},
    fixed: {},
    navMenu: {},
    bar: {},
    mobileMenu: {
      marginRight: theme.spacing(),
      '& $bar': {
        backgroundColor: theme.palette.text.secondary,
        '&:after, &:before': {
          backgroundColor: theme.palette.text.secondary
        }
      }
    },
    mobileNav: {
      width: 240,
      background: theme.palette.background["default"],
      padding: theme.spacing(10, 2, 4)
    },
    logo: {
      display: 'block',
      margin: theme.spacing(3, 0, 1),
      position: 'relative',
      padding: theme.spacing(0, 2),
      '& img': {
        height: theme.spacing(10)
      }
    },
    text: {
      '& span': {
        fontSize: 18,
        textTransform: 'Capitalize',
        fontWeight: theme.typography.fontWeightBold
      }
    },
    link: {},
    active: {},
    menu: {
      '& ul': {
        padding: 0,
        margin: 0
      },
      '& $link': {
        margin: theme.spacing(2, 0),
        paddingTop: 0,
        paddingBottom: 0,
        background: 'none !important',
        '&:before': {
          content: '""',
          position: 'absolute',
          left: theme.spacing(-2),
          top: 5,
          opacity: 0.2,
          background: "linear-gradient(120deg, ".concat(theme.palette.secondary.main, ", ").concat(theme.palette.primary.main, ")"),
          height: '75%',
          width: 0,
          transition: 'all 0.2s cubic-bezier(0, 0, 0.14, 0.97)'
        },
        '&:hover': {
          '&:before': {
            width: '110%'
          },
          '& $text': {
            color: theme.palette.primary.main
          }
        }
      },
      '& $text': {
        transition: 'all 0.3s ease-in',
        position: 'relative'
      }
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (sideNavStyles);

/***/ }),

/***/ "./components/Title/Title.js":
/*!***********************************!*\
  !*** ./components/Title/Title.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Title; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _title_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title-style */ "./components/Title/title-style.js");





function Title(props) {
  var classes = Object(_title_style__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var children = props.children,
      dark = props.dark;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_2___default()(classes.title, dark && classes.dark)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {
    variant: "h4"
  }, children));
}
Title.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired,
  dark: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Title.defaultProps = {
  dark: false
};

/***/ }),

/***/ "./components/Title/index.js":
/*!***********************************!*\
  !*** ./components/Title/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Title */ "./components/Title/Title.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Title__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Title/title-style.js":
/*!*****************************************!*\
  !*** ./components/Title/title-style.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_images_profile_titleDecoLight_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/images/profile/titleDecoLight.png */ "./static/images/profile/titleDecoLight.png");
/* harmony import */ var _static_images_profile_titleDecoLight_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_images_profile_titleDecoLight_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_images_profile_titleDecoDark_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/images/profile/titleDecoDark.png */ "./static/images/profile/titleDecoDark.png");
/* harmony import */ var _static_images_profile_titleDecoDark_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_images_profile_titleDecoDark_png__WEBPACK_IMPORTED_MODULE_3__);




var titleStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _h;

  return {
    dark: {},
    title: {
      display: 'block',
      position: 'relative',
      marginBottom: theme.spacing(3),
      textAlign: 'center',
      height: theme.spacing(8),
      padding: theme.spacing(2, 0),
      '& h4': (_h = {
        color: theme.palette.text.primary,
        verticalAlign: 'middle',
        fontWeight: theme.typography.fontWeightRegular,
        textTransform: 'capitalize',
        fontSize: 36,
        lineHeight: '56px'
      }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, theme.breakpoints.down('md'), {
        fontSize: 32,
        lineHeight: '48px'
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, theme.breakpoints.down('xs'), {
        fontSize: 24,
        lineHeight: '36px'
      }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_h, '& strong', {
        fontWeight: theme.typography.fontWeightBold
      }), _h),
      '&$dark': {
        '& h4': {
          color: theme.palette.common.white
        }
      }
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (titleStyles);

/***/ }),

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/commonjs/index.js")["default"];

module.exports = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de', 'ar', 'id', 'zh', 'pt'],
  fallbackLng: 'en',
  localeSubpaths: {
    en: 'en',
    ar: 'ar',
    de: 'de',
    id: 'id',
    pt: 'pt',
    zh: 'zh'
  }
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectSpread.js":
/*!*************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectSpread.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./node_modules/i18next/dist/cjs/i18next.js":
/*!**************************************************!*\
  !*** ./node_modules/i18next/dist/cjs/i18next.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _typeof = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));
var _objectSpread = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));
var _classCallCheck = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));
var _createClass = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));
var _possibleConstructorReturn = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));
var _getPrototypeOf = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));
var _assertThisInitialized = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));
var _inherits = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));
var _toConsumableArray = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));
var _slicedToArray = _interopDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var consoleLogger = {
  type: 'logger',
  log: function log(args) {
    this.output('log', args);
  },
  warn: function warn(args) {
    this.output('warn', args);
  },
  error: function error(args) {
    this.output('error', args);
  },
  output: function output(type, args) {
    var _console;

    /* eslint no-console: 0 */
    if (console && console[type]) (_console = console)[type].apply(_console, _toConsumableArray(args));
  }
};

var Logger =
/*#__PURE__*/
function () {
  function Logger(concreteLogger) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Logger);

    this.init(concreteLogger, options);
  }

  _createClass(Logger, [{
    key: "init",
    value: function init(concreteLogger) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this.prefix = options.prefix || 'i18next:';
      this.logger = concreteLogger || consoleLogger;
      this.options = options;
      this.debug = options.debug;
    }
  }, {
    key: "setDebug",
    value: function setDebug(bool) {
      this.debug = bool;
    }
  }, {
    key: "log",
    value: function log() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this.forward(args, 'log', '', true);
    }
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this.forward(args, 'warn', '', true);
    }
  }, {
    key: "error",
    value: function error() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return this.forward(args, 'error', '');
    }
  }, {
    key: "deprecate",
    value: function deprecate() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
  }, {
    key: "forward",
    value: function forward(args, lvl, prefix, debugOnly) {
      if (debugOnly && !this.debug) return null;
      if (typeof args[0] === 'string') args[0] = "".concat(prefix).concat(this.prefix, " ").concat(args[0]);
      return this.logger[lvl](args);
    }
  }, {
    key: "create",
    value: function create(moduleName) {
      return new Logger(this.logger, _objectSpread({}, {
        prefix: "".concat(this.prefix, ":").concat(moduleName, ":")
      }, this.options));
    }
  }]);

  return Logger;
}();

var baseLogger = new Logger();

var EventEmitter =
/*#__PURE__*/
function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    this.observers = {};
  }

  _createClass(EventEmitter, [{
    key: "on",
    value: function on(events, listener) {
      var _this = this;

      events.split(' ').forEach(function (event) {
        _this.observers[event] = _this.observers[event] || [];

        _this.observers[event].push(listener);
      });
      return this;
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      var _this2 = this;

      if (!this.observers[event]) {
        return;
      }

      this.observers[event].forEach(function () {
        if (!listener) {
          delete _this2.observers[event];
        } else {
          var index = _this2.observers[event].indexOf(listener);

          if (index > -1) {
            _this2.observers[event].splice(index, 1);
          }
        }
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (this.observers[event]) {
        var cloned = [].concat(this.observers[event]);
        cloned.forEach(function (observer) {
          observer.apply(void 0, args);
        });
      }

      if (this.observers['*']) {
        var _cloned = [].concat(this.observers['*']);

        _cloned.forEach(function (observer) {
          observer.apply(observer, [event].concat(args));
        });
      }
    }
  }]);

  return EventEmitter;
}();

// http://lea.verou.me/2016/12/resolve-promises-externally-with-this-one-weird-trick/
function defer() {
  var res;
  var rej;
  var promise = new Promise(function (resolve, reject) {
    res = resolve;
    rej = reject;
  });
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}
function makeString(object) {
  if (object == null) return '';
  /* eslint prefer-template: 0 */

  return '' + object;
}
function copy(a, s, t) {
  a.forEach(function (m) {
    if (s[m]) t[m] = s[m];
  });
}

function getLastOfPath(object, path, Empty) {
  function cleanKey(key) {
    return key && key.indexOf('###') > -1 ? key.replace(/###/g, '.') : key;
  }

  function canNotTraverseDeeper() {
    return !object || typeof object === 'string';
  }

  var stack = typeof path !== 'string' ? [].concat(path) : path.split('.');

  while (stack.length > 1) {
    if (canNotTraverseDeeper()) return {};
    var key = cleanKey(stack.shift());
    if (!object[key] && Empty) object[key] = new Empty();
    object = object[key];
  }

  if (canNotTraverseDeeper()) return {};
  return {
    obj: object,
    k: cleanKey(stack.shift())
  };
}

function setPath(object, path, newValue) {
  var _getLastOfPath = getLastOfPath(object, path, Object),
      obj = _getLastOfPath.obj,
      k = _getLastOfPath.k;

  obj[k] = newValue;
}
function pushPath(object, path, newValue, concat) {
  var _getLastOfPath2 = getLastOfPath(object, path, Object),
      obj = _getLastOfPath2.obj,
      k = _getLastOfPath2.k;

  obj[k] = obj[k] || [];
  if (concat) obj[k] = obj[k].concat(newValue);
  if (!concat) obj[k].push(newValue);
}
function getPath(object, path) {
  var _getLastOfPath3 = getLastOfPath(object, path),
      obj = _getLastOfPath3.obj,
      k = _getLastOfPath3.k;

  if (!obj) return undefined;
  return obj[k];
}
function deepExtend(target, source, overwrite) {
  /* eslint no-restricted-syntax: 0 */
  for (var prop in source) {
    if (prop in target) {
      // If we reached a leaf string in target or source then replace with source or skip depending on the 'overwrite' switch
      if (typeof target[prop] === 'string' || target[prop] instanceof String || typeof source[prop] === 'string' || source[prop] instanceof String) {
        if (overwrite) target[prop] = source[prop];
      } else {
        deepExtend(target[prop], source[prop], overwrite);
      }
    } else {
      target[prop] = source[prop];
    }
  }

  return target;
}
function regexEscape(str) {
  /* eslint no-useless-escape: 0 */
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
/* eslint-disable */

var _entityMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;'
};
/* eslint-enable */

function escape(data) {
  if (typeof data === 'string') {
    return data.replace(/[&<>"'\/]/g, function (s) {
      return _entityMap[s];
    });
  }

  return data;
}

var ResourceStore =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(ResourceStore, _EventEmitter);

  function ResourceStore(data) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      ns: ['translation'],
      defaultNS: 'translation'
    };

    _classCallCheck(this, ResourceStore);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ResourceStore).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.data = data || {};
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    return _this;
  }

  _createClass(ResourceStore, [{
    key: "addNamespaces",
    value: function addNamespaces(ns) {
      if (this.options.ns.indexOf(ns) < 0) {
        this.options.ns.push(ns);
      }
    }
  }, {
    key: "removeNamespaces",
    value: function removeNamespaces(ns) {
      var index = this.options.ns.indexOf(ns);

      if (index > -1) {
        this.options.ns.splice(index, 1);
      }
    }
  }, {
    key: "getResource",
    value: function getResource(lng, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var path = [lng, ns];
      if (key && typeof key !== 'string') path = path.concat(key);
      if (key && typeof key === 'string') path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
      }

      return getPath(this.data, path);
    }
  }, {
    key: "addResource",
    value: function addResource(lng, ns, key, value) {
      var options = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
        silent: false
      };
      var keySeparator = this.options.keySeparator;
      if (keySeparator === undefined) keySeparator = '.';
      var path = [lng, ns];
      if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        value = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      setPath(this.data, path, value);
      if (!options.silent) this.emit('added', lng, ns, key, value);
    }
  }, {
    key: "addResources",
    value: function addResources(lng, ns, resources) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
        silent: false
      };

      /* eslint no-restricted-syntax: 0 */
      for (var m in resources) {
        if (typeof resources[m] === 'string' || Object.prototype.toString.apply(resources[m]) === '[object Array]') this.addResource(lng, ns, m, resources[m], {
          silent: true
        });
      }

      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "addResourceBundle",
    value: function addResourceBundle(lng, ns, resources, deep, overwrite) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {
        silent: false
      };
      var path = [lng, ns];

      if (lng.indexOf('.') > -1) {
        path = lng.split('.');
        deep = resources;
        resources = ns;
        ns = path[1];
      }

      this.addNamespaces(ns);
      var pack = getPath(this.data, path) || {};

      if (deep) {
        deepExtend(pack, resources, overwrite);
      } else {
        pack = _objectSpread({}, pack, resources);
      }

      setPath(this.data, path, pack);
      if (!options.silent) this.emit('added', lng, ns, resources);
    }
  }, {
    key: "removeResourceBundle",
    value: function removeResourceBundle(lng, ns) {
      if (this.hasResourceBundle(lng, ns)) {
        delete this.data[lng][ns];
      }

      this.removeNamespaces(ns);
      this.emit('removed', lng, ns);
    }
  }, {
    key: "hasResourceBundle",
    value: function hasResourceBundle(lng, ns) {
      return this.getResource(lng, ns) !== undefined;
    }
  }, {
    key: "getResourceBundle",
    value: function getResourceBundle(lng, ns) {
      if (!ns) ns = this.options.defaultNS; // COMPATIBILITY: remove extend in v2.1.0

      if (this.options.compatibilityAPI === 'v1') return _objectSpread({}, {}, this.getResource(lng, ns));
      return this.getResource(lng, ns);
    }
  }, {
    key: "getDataByLanguage",
    value: function getDataByLanguage(lng) {
      return this.data[lng];
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.data;
    }
  }]);

  return ResourceStore;
}(EventEmitter);

var postProcessor = {
  processors: {},
  addPostProcessor: function addPostProcessor(module) {
    this.processors[module.name] = module;
  },
  handle: function handle(processors, value, key, options, translator) {
    var _this = this;

    processors.forEach(function (processor) {
      if (_this.processors[processor]) value = _this.processors[processor].process(value, key, options, translator);
    });
    return value;
  }
};

var Translator =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Translator, _EventEmitter);

  function Translator(services) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Translator);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Translator).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    copy(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat'], services, _assertThisInitialized(_this));
    _this.options = options;

    if (_this.options.keySeparator === undefined) {
      _this.options.keySeparator = '.';
    }

    _this.logger = baseLogger.create('translator');
    return _this;
  }

  _createClass(Translator, [{
    key: "changeLanguage",
    value: function changeLanguage(lng) {
      if (lng) this.language = lng;
    }
  }, {
    key: "exists",
    value: function exists(key) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        interpolation: {}
      };
      var resolved = this.resolve(key, options);
      return resolved && resolved.res !== undefined;
    }
  }, {
    key: "extractFromKey",
    value: function extractFromKey(key, options) {
      var nsSeparator = options.nsSeparator || this.options.nsSeparator;
      if (nsSeparator === undefined) nsSeparator = ':';
      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator;
      var namespaces = options.ns || this.options.defaultNS;

      if (nsSeparator && key.indexOf(nsSeparator) > -1) {
        var parts = key.split(nsSeparator);
        if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
        key = parts.join(keySeparator);
      }

      if (typeof namespaces === 'string') namespaces = [namespaces];
      return {
        key: key,
        namespaces: namespaces
      };
    }
  }, {
    key: "translate",
    value: function translate(keys, options) {
      var _this2 = this;

      if (_typeof(options) !== 'object' && this.options.overloadTranslationOptionHandler) {
        /* eslint prefer-rest-params: 0 */
        options = this.options.overloadTranslationOptionHandler(arguments);
      }

      if (!options) options = {}; // non valid keys handling

      if (keys === undefined || keys === null) return '';
      if (!Array.isArray(keys)) keys = [String(keys)]; // separators

      var keySeparator = options.keySeparator !== undefined ? options.keySeparator : this.options.keySeparator; // get namespace(s)

      var _this$extractFromKey = this.extractFromKey(keys[keys.length - 1], options),
          key = _this$extractFromKey.key,
          namespaces = _this$extractFromKey.namespaces;

      var namespace = namespaces[namespaces.length - 1]; // return key on CIMode

      var lng = options.lng || this.language;
      var appendNamespaceToCIMode = options.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;

      if (lng && lng.toLowerCase() === 'cimode') {
        if (appendNamespaceToCIMode) {
          var nsSeparator = options.nsSeparator || this.options.nsSeparator;
          return namespace + nsSeparator + key;
        }

        return key;
      } // resolve from store


      var resolved = this.resolve(keys, options);
      var res = resolved && resolved.res;
      var resUsedKey = resolved && resolved.usedKey || key;
      var resExactUsedKey = resolved && resolved.exactUsedKey || key;
      var resType = Object.prototype.toString.apply(res);
      var noObject = ['[object Number]', '[object Function]', '[object RegExp]'];
      var joinArrays = options.joinArrays !== undefined ? options.joinArrays : this.options.joinArrays; // object

      var handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
      var handleAsObject = typeof res !== 'string' && typeof res !== 'boolean' && typeof res !== 'number';

      if (handleAsObjectInI18nFormat && res && handleAsObject && noObject.indexOf(resType) < 0 && !(typeof joinArrays === 'string' && resType === '[object Array]')) {
        if (!options.returnObjects && !this.options.returnObjects) {
          this.logger.warn('accessing an object - but returnObjects options is not enabled!');
          return this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, res, options) : "key '".concat(key, " (").concat(this.language, ")' returned an object instead of string.");
        } // if we got a separator we loop over children - else we just return object as is
        // as having it set to false means no hierarchy so no lookup for nested values


        if (keySeparator) {
          var resTypeIsArray = resType === '[object Array]';
          var copy$$1 = resTypeIsArray ? [] : {}; // apply child translation on a copy

          /* eslint no-restricted-syntax: 0 */

          var newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;

          for (var m in res) {
            if (Object.prototype.hasOwnProperty.call(res, m)) {
              var deepKey = "".concat(newKeyToUse).concat(keySeparator).concat(m);
              copy$$1[m] = this.translate(deepKey, _objectSpread({}, options, {
                joinArrays: false,
                ns: namespaces
              }));
              if (copy$$1[m] === deepKey) copy$$1[m] = res[m]; // if nothing found use orginal value as fallback
            }
          }

          res = copy$$1;
        }
      } else if (handleAsObjectInI18nFormat && typeof joinArrays === 'string' && resType === '[object Array]') {
        // array special treatment
        res = res.join(joinArrays);
        if (res) res = this.extendTranslation(res, keys, options);
      } else {
        // string, empty or null
        var usedDefault = false;
        var usedKey = false; // fallback value

        if (!this.isValidLookup(res) && options.defaultValue !== undefined) {
          usedDefault = true;

          if (options.count !== undefined) {
            var suffix = this.pluralResolver.getSuffix(lng, options.count);
            res = options["defaultValue".concat(suffix)];
          }

          if (!res) res = options.defaultValue;
        }

        if (!this.isValidLookup(res)) {
          usedKey = true;
          res = key;
        } // save missing


        var updateMissing = options.defaultValue && options.defaultValue !== res && this.options.updateMissing;

        if (usedKey || usedDefault || updateMissing) {
          this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? options.defaultValue : res);
          var lngs = [];
          var fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, options.lng || this.language);

          if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
            for (var i = 0; i < fallbackLngs.length; i++) {
              lngs.push(fallbackLngs[i]);
            }
          } else if (this.options.saveMissingTo === 'all') {
            lngs = this.languageUtils.toResolveHierarchy(options.lng || this.language);
          } else {
            lngs.push(options.lng || this.language);
          }

          var send = function send(l, k) {
            if (_this2.options.missingKeyHandler) {
              _this2.options.missingKeyHandler(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            } else if (_this2.backendConnector && _this2.backendConnector.saveMissing) {
              _this2.backendConnector.saveMissing(l, namespace, k, updateMissing ? options.defaultValue : res, updateMissing, options);
            }

            _this2.emit('missingKey', l, namespace, k, res);
          };

          if (this.options.saveMissing) {
            var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';

            if (this.options.saveMissingPlurals && needsPluralHandling) {
              lngs.forEach(function (l) {
                var plurals = _this2.pluralResolver.getPluralFormsOfKey(l, key);

                plurals.forEach(function (p) {
                  return send([l], p);
                });
              });
            } else {
              send(lngs, key);
            }
          }
        } // extend


        res = this.extendTranslation(res, keys, options, resolved); // append namespace if still key

        if (usedKey && res === key && this.options.appendNamespaceToMissingKey) res = "".concat(namespace, ":").concat(key); // parseMissingKeyHandler

        if (usedKey && this.options.parseMissingKeyHandler) res = this.options.parseMissingKeyHandler(res);
      } // return


      return res;
    }
  }, {
    key: "extendTranslation",
    value: function extendTranslation(res, key, options, resolved) {
      var _this3 = this;

      if (this.i18nFormat && this.i18nFormat.parse) {
        res = this.i18nFormat.parse(res, options, resolved.usedLng, resolved.usedNS, resolved.usedKey, {
          resolved: resolved
        });
      } else if (!options.skipInterpolation) {
        // i18next.parsing
        if (options.interpolation) this.interpolator.init(_objectSpread({}, options, {
          interpolation: _objectSpread({}, this.options.interpolation, options.interpolation)
        })); // interpolate

        var data = options.replace && typeof options.replace !== 'string' ? options.replace : options;
        if (this.options.interpolation.defaultVariables) data = _objectSpread({}, this.options.interpolation.defaultVariables, data);
        res = this.interpolator.interpolate(res, data, options.lng || this.language, options); // nesting

        if (options.nest !== false) res = this.interpolator.nest(res, function () {
          return _this3.translate.apply(_this3, arguments);
        }, options);
        if (options.interpolation) this.interpolator.reset();
      } // post process


      var postProcess = options.postProcess || this.options.postProcess;
      var postProcessorNames = typeof postProcess === 'string' ? [postProcess] : postProcess;

      if (res !== undefined && res !== null && postProcessorNames && postProcessorNames.length && options.applyPostProcessor !== false) {
        res = postProcessor.handle(postProcessorNames, res, key, options, this);
      }

      return res;
    }
  }, {
    key: "resolve",
    value: function resolve(keys) {
      var _this4 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var found;
      var usedKey; // plain key

      var exactUsedKey; // key with context / plural

      var usedLng;
      var usedNS;
      if (typeof keys === 'string') keys = [keys]; // forEach possible key

      keys.forEach(function (k) {
        if (_this4.isValidLookup(found)) return;

        var extracted = _this4.extractFromKey(k, options);

        var key = extracted.key;
        usedKey = key;
        var namespaces = extracted.namespaces;
        if (_this4.options.fallbackNS) namespaces = namespaces.concat(_this4.options.fallbackNS);
        var needsPluralHandling = options.count !== undefined && typeof options.count !== 'string';
        var needsContextHandling = options.context !== undefined && typeof options.context === 'string' && options.context !== '';
        var codes = options.lngs ? options.lngs : _this4.languageUtils.toResolveHierarchy(options.lng || _this4.language, options.fallbackLng);
        namespaces.forEach(function (ns) {
          if (_this4.isValidLookup(found)) return;
          usedNS = ns;
          codes.forEach(function (code) {
            if (_this4.isValidLookup(found)) return;
            usedLng = code;
            var finalKey = key;
            var finalKeys = [finalKey];

            if (_this4.i18nFormat && _this4.i18nFormat.addLookupKeys) {
              _this4.i18nFormat.addLookupKeys(finalKeys, key, code, ns, options);
            } else {
              var pluralSuffix;
              if (needsPluralHandling) pluralSuffix = _this4.pluralResolver.getSuffix(code, options.count); // fallback for plural if context not found

              if (needsPluralHandling && needsContextHandling) finalKeys.push(finalKey + pluralSuffix); // get key for context if needed

              if (needsContextHandling) finalKeys.push(finalKey += "".concat(_this4.options.contextSeparator).concat(options.context)); // get key for plural if needed

              if (needsPluralHandling) finalKeys.push(finalKey += pluralSuffix);
            } // iterate over finalKeys starting with most specific pluralkey (-> contextkey only) -> singularkey only


            var possibleKey;
            /* eslint no-cond-assign: 0 */

            while (possibleKey = finalKeys.pop()) {
              if (!_this4.isValidLookup(found)) {
                exactUsedKey = possibleKey;
                found = _this4.getResource(code, ns, possibleKey, options);
              }
            }
          });
        });
      });
      return {
        res: found,
        usedKey: usedKey,
        exactUsedKey: exactUsedKey,
        usedLng: usedLng,
        usedNS: usedNS
      };
    }
  }, {
    key: "isValidLookup",
    value: function isValidLookup(res) {
      return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
  }, {
    key: "getResource",
    value: function getResource(code, ns, key) {
      var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      if (this.i18nFormat && this.i18nFormat.getResource) return this.i18nFormat.getResource(code, ns, key, options);
      return this.resourceStore.getResource(code, ns, key, options);
    }
  }]);

  return Translator;
}(EventEmitter);

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

var LanguageUtil =
/*#__PURE__*/
function () {
  function LanguageUtil(options) {
    _classCallCheck(this, LanguageUtil);

    this.options = options;
    this.whitelist = this.options.whitelist || false;
    this.logger = baseLogger.create('languageUtils');
  }

  _createClass(LanguageUtil, [{
    key: "getScriptPartFromCode",
    value: function getScriptPartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return null;
      var p = code.split('-');
      if (p.length === 2) return null;
      p.pop();
      return this.formatLanguageCode(p.join('-'));
    }
  }, {
    key: "getLanguagePartFromCode",
    value: function getLanguagePartFromCode(code) {
      if (!code || code.indexOf('-') < 0) return code;
      var p = code.split('-');
      return this.formatLanguageCode(p[0]);
    }
  }, {
    key: "formatLanguageCode",
    value: function formatLanguageCode(code) {
      // http://www.iana.org/assignments/language-tags/language-tags.xhtml
      if (typeof code === 'string' && code.indexOf('-') > -1) {
        var specialCases = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
        var p = code.split('-');

        if (this.options.lowerCaseLng) {
          p = p.map(function (part) {
            return part.toLowerCase();
          });
        } else if (p.length === 2) {
          p[0] = p[0].toLowerCase();
          p[1] = p[1].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
        } else if (p.length === 3) {
          p[0] = p[0].toLowerCase(); // if lenght 2 guess it's a country

          if (p[1].length === 2) p[1] = p[1].toUpperCase();
          if (p[0] !== 'sgn' && p[2].length === 2) p[2] = p[2].toUpperCase();
          if (specialCases.indexOf(p[1].toLowerCase()) > -1) p[1] = capitalize(p[1].toLowerCase());
          if (specialCases.indexOf(p[2].toLowerCase()) > -1) p[2] = capitalize(p[2].toLowerCase());
        }

        return p.join('-');
      }

      return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
  }, {
    key: "isWhitelisted",
    value: function isWhitelisted(code) {
      if (this.options.load === 'languageOnly' || this.options.nonExplicitWhitelist) {
        code = this.getLanguagePartFromCode(code);
      }

      return !this.whitelist || !this.whitelist.length || this.whitelist.indexOf(code) > -1;
    }
  }, {
    key: "getFallbackCodes",
    value: function getFallbackCodes(fallbacks, code) {
      if (!fallbacks) return [];
      if (typeof fallbacks === 'string') fallbacks = [fallbacks];
      if (Object.prototype.toString.apply(fallbacks) === '[object Array]') return fallbacks;
      if (!code) return fallbacks["default"] || []; // asume we have an object defining fallbacks

      var found = fallbacks[code];
      if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
      if (!found) found = fallbacks[this.formatLanguageCode(code)];
      if (!found) found = fallbacks["default"];
      return found || [];
    }
  }, {
    key: "toResolveHierarchy",
    value: function toResolveHierarchy(code, fallbackCode) {
      var _this = this;

      var fallbackCodes = this.getFallbackCodes(fallbackCode || this.options.fallbackLng || [], code);
      var codes = [];

      var addCode = function addCode(c) {
        if (!c) return;

        if (_this.isWhitelisted(c)) {
          codes.push(c);
        } else {
          _this.logger.warn("rejecting non-whitelisted language code: ".concat(c));
        }
      };

      if (typeof code === 'string' && code.indexOf('-') > -1) {
        if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
        if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
        if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
      } else if (typeof code === 'string') {
        addCode(this.formatLanguageCode(code));
      }

      fallbackCodes.forEach(function (fc) {
        if (codes.indexOf(fc) < 0) addCode(_this.formatLanguageCode(fc));
      });
      return codes;
    }
  }]);

  return LanguageUtil;
}();

/* eslint-disable */

var sets = [{
  lngs: ['ach', 'ak', 'am', 'arn', 'br', 'fil', 'gun', 'ln', 'mfe', 'mg', 'mi', 'oc', 'pt', 'pt-BR', 'tg', 'ti', 'tr', 'uz', 'wa'],
  nr: [1, 2],
  fc: 1
}, {
  lngs: ['af', 'an', 'ast', 'az', 'bg', 'bn', 'ca', 'da', 'de', 'dev', 'el', 'en', 'eo', 'es', 'et', 'eu', 'fi', 'fo', 'fur', 'fy', 'gl', 'gu', 'ha', 'hi', 'hu', 'hy', 'ia', 'it', 'kn', 'ku', 'lb', 'mai', 'ml', 'mn', 'mr', 'nah', 'nap', 'nb', 'ne', 'nl', 'nn', 'no', 'nso', 'pa', 'pap', 'pms', 'ps', 'pt-PT', 'rm', 'sco', 'se', 'si', 'so', 'son', 'sq', 'sv', 'sw', 'ta', 'te', 'tk', 'ur', 'yo'],
  nr: [1, 2],
  fc: 2
}, {
  lngs: ['ay', 'bo', 'cgg', 'fa', 'id', 'ja', 'jbo', 'ka', 'kk', 'km', 'ko', 'ky', 'lo', 'ms', 'sah', 'su', 'th', 'tt', 'ug', 'vi', 'wo', 'zh'],
  nr: [1],
  fc: 3
}, {
  lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
  nr: [1, 2, 5],
  fc: 4
}, {
  lngs: ['ar'],
  nr: [0, 1, 2, 3, 11, 100],
  fc: 5
}, {
  lngs: ['cs', 'sk'],
  nr: [1, 2, 5],
  fc: 6
}, {
  lngs: ['csb', 'pl'],
  nr: [1, 2, 5],
  fc: 7
}, {
  lngs: ['cy'],
  nr: [1, 2, 3, 8],
  fc: 8
}, {
  lngs: ['fr'],
  nr: [1, 2],
  fc: 9
}, {
  lngs: ['ga'],
  nr: [1, 2, 3, 7, 11],
  fc: 10
}, {
  lngs: ['gd'],
  nr: [1, 2, 3, 20],
  fc: 11
}, {
  lngs: ['is'],
  nr: [1, 2],
  fc: 12
}, {
  lngs: ['jv'],
  nr: [0, 1],
  fc: 13
}, {
  lngs: ['kw'],
  nr: [1, 2, 3, 4],
  fc: 14
}, {
  lngs: ['lt'],
  nr: [1, 2, 10],
  fc: 15
}, {
  lngs: ['lv'],
  nr: [1, 2, 0],
  fc: 16
}, {
  lngs: ['mk'],
  nr: [1, 2],
  fc: 17
}, {
  lngs: ['mnk'],
  nr: [0, 1, 2],
  fc: 18
}, {
  lngs: ['mt'],
  nr: [1, 2, 11, 20],
  fc: 19
}, {
  lngs: ['or'],
  nr: [2, 1],
  fc: 2
}, {
  lngs: ['ro'],
  nr: [1, 2, 20],
  fc: 20
}, {
  lngs: ['sl'],
  nr: [5, 1, 2, 3],
  fc: 21
}, {
  lngs: ['he'],
  nr: [1, 2, 20, 21],
  fc: 22
}];
var _rulesPluralsTypes = {
  1: function _(n) {
    return Number(n > 1);
  },
  2: function _(n) {
    return Number(n != 1);
  },
  3: function _(n) {
    return 0;
  },
  4: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  5: function _(n) {
    return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
  },
  6: function _(n) {
    return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
  },
  7: function _(n) {
    return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  8: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
  },
  9: function _(n) {
    return Number(n >= 2);
  },
  10: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
  },
  11: function _(n) {
    return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
  },
  12: function _(n) {
    return Number(n % 10 != 1 || n % 100 == 11);
  },
  13: function _(n) {
    return Number(n !== 0);
  },
  14: function _(n) {
    return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
  },
  15: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
  },
  16: function _(n) {
    return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
  },
  17: function _(n) {
    return Number(n == 1 || n % 10 == 1 ? 0 : 1);
  },
  18: function _(n) {
    return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
  },
  19: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
  },
  20: function _(n) {
    return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
  },
  21: function _(n) {
    return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
  },
  22: function _(n) {
    return Number(n === 1 ? 0 : n === 2 ? 1 : (n < 0 || n > 10) && n % 10 == 0 ? 2 : 3);
  }
};
/* eslint-enable */

function createRules() {
  var rules = {};
  sets.forEach(function (set) {
    set.lngs.forEach(function (l) {
      rules[l] = {
        numbers: set.nr,
        plurals: _rulesPluralsTypes[set.fc]
      };
    });
  });
  return rules;
}

var PluralResolver =
/*#__PURE__*/
function () {
  function PluralResolver(languageUtils) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, PluralResolver);

    this.languageUtils = languageUtils;
    this.options = options;
    this.logger = baseLogger.create('pluralResolver');
    this.rules = createRules();
  }

  _createClass(PluralResolver, [{
    key: "addRule",
    value: function addRule(lng, obj) {
      this.rules[lng] = obj;
    }
  }, {
    key: "getRule",
    value: function getRule(code) {
      return this.rules[code] || this.rules[this.languageUtils.getLanguagePartFromCode(code)];
    }
  }, {
    key: "needsPlural",
    value: function needsPlural(code) {
      var rule = this.getRule(code);
      return rule && rule.numbers.length > 1;
    }
  }, {
    key: "getPluralFormsOfKey",
    value: function getPluralFormsOfKey(code, key) {
      var _this = this;

      var ret = [];
      var rule = this.getRule(code);
      if (!rule) return ret;
      rule.numbers.forEach(function (n) {
        var suffix = _this.getSuffix(code, n);

        ret.push("".concat(key).concat(suffix));
      });
      return ret;
    }
  }, {
    key: "getSuffix",
    value: function getSuffix(code, count) {
      var _this2 = this;

      var rule = this.getRule(code);

      if (rule) {
        // if (rule.numbers.length === 1) return ''; // only singular
        var idx = rule.noAbs ? rule.plurals(count) : rule.plurals(Math.abs(count));
        var suffix = rule.numbers[idx]; // special treatment for lngs only having singular and plural

        if (this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          if (suffix === 2) {
            suffix = 'plural';
          } else if (suffix === 1) {
            suffix = '';
          }
        }

        var returnSuffix = function returnSuffix() {
          return _this2.options.prepend && suffix.toString() ? _this2.options.prepend + suffix.toString() : suffix.toString();
        }; // COMPATIBILITY JSON
        // v1


        if (this.options.compatibilityJSON === 'v1') {
          if (suffix === 1) return '';
          if (typeof suffix === 'number') return "_plural_".concat(suffix.toString());
          return returnSuffix();
        } else if (
        /* v2 */
        this.options.compatibilityJSON === 'v2') {
          return returnSuffix();
        } else if (
        /* v3 - gettext index */
        this.options.simplifyPluralSuffix && rule.numbers.length === 2 && rule.numbers[0] === 1) {
          return returnSuffix();
        }

        return this.options.prepend && idx.toString() ? this.options.prepend + idx.toString() : idx.toString();
      }

      this.logger.warn("no plural rule found for: ".concat(code));
      return '';
    }
  }]);

  return PluralResolver;
}();

var Interpolator =
/*#__PURE__*/
function () {
  function Interpolator() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Interpolator);

    this.logger = baseLogger.create('interpolator');
    this.options = options;

    this.format = options.interpolation && options.interpolation.format || function (value) {
      return value;
    };

    this.init(options);
  }
  /* eslint no-param-reassign: 0 */


  _createClass(Interpolator, [{
    key: "init",
    value: function init() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (!options.interpolation) options.interpolation = {
        escapeValue: true
      };
      var iOpts = options.interpolation;
      this.escape = iOpts.escape !== undefined ? iOpts.escape : escape;
      this.escapeValue = iOpts.escapeValue !== undefined ? iOpts.escapeValue : true;
      this.useRawValueToEscape = iOpts.useRawValueToEscape !== undefined ? iOpts.useRawValueToEscape : false;
      this.prefix = iOpts.prefix ? regexEscape(iOpts.prefix) : iOpts.prefixEscaped || '{{';
      this.suffix = iOpts.suffix ? regexEscape(iOpts.suffix) : iOpts.suffixEscaped || '}}';
      this.formatSeparator = iOpts.formatSeparator ? iOpts.formatSeparator : iOpts.formatSeparator || ',';
      this.unescapePrefix = iOpts.unescapeSuffix ? '' : iOpts.unescapePrefix || '-';
      this.unescapeSuffix = this.unescapePrefix ? '' : iOpts.unescapeSuffix || '';
      this.nestingPrefix = iOpts.nestingPrefix ? regexEscape(iOpts.nestingPrefix) : iOpts.nestingPrefixEscaped || regexEscape('$t(');
      this.nestingSuffix = iOpts.nestingSuffix ? regexEscape(iOpts.nestingSuffix) : iOpts.nestingSuffixEscaped || regexEscape(')');
      this.maxReplaces = iOpts.maxReplaces ? iOpts.maxReplaces : 1000; // the regexp

      this.resetRegExp();
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.options) this.init(this.options);
    }
  }, {
    key: "resetRegExp",
    value: function resetRegExp() {
      // the regexp
      var regexpStr = "".concat(this.prefix, "(.+?)").concat(this.suffix);
      this.regexp = new RegExp(regexpStr, 'g');
      var regexpUnescapeStr = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
      this.regexpUnescape = new RegExp(regexpUnescapeStr, 'g');
      var nestingRegexpStr = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
      this.nestingRegexp = new RegExp(nestingRegexpStr, 'g');
    }
  }, {
    key: "interpolate",
    value: function interpolate(str, data, lng, options) {
      var _this = this;

      var match;
      var value;
      var replaces;
      var defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

      var combindedData = _objectSpread({}, defaultData, data);

      function regexSafe(val) {
        return val.replace(/\$/g, '$$$$');
      }

      var handleFormat = function handleFormat(key) {
        if (key.indexOf(_this.formatSeparator) < 0) return getPath(combindedData, key);
        var p = key.split(_this.formatSeparator);
        var k = p.shift().trim();
        var f = p.join(_this.formatSeparator).trim();
        return _this.format(getPath(combindedData, k), f, lng);
      };

      this.resetRegExp();
      var missingInterpolationHandler = options && options.missingInterpolationHandler || this.options.missingInterpolationHandler;
      replaces = 0; // unescape if has unescapePrefix/Suffix

      /* eslint no-cond-assign: 0 */

      while (match = this.regexpUnescape.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var temp = missingInterpolationHandler(str, match, options);
            value = typeof temp === 'string' ? temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        str = str.replace(match[0], regexSafe(value));
        this.regexpUnescape.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      replaces = 0; // regular escape on demand

      while (match = this.regexp.exec(str)) {
        value = handleFormat(match[1].trim());

        if (value === undefined) {
          if (typeof missingInterpolationHandler === 'function') {
            var _temp = missingInterpolationHandler(str, match, options);

            value = typeof _temp === 'string' ? _temp : '';
          } else {
            this.logger.warn("missed to pass in variable ".concat(match[1], " for interpolating ").concat(str));
            value = '';
          }
        } else if (typeof value !== 'string' && !this.useRawValueToEscape) {
          value = makeString(value);
        }

        value = this.escapeValue ? regexSafe(this.escape(value)) : regexSafe(value);
        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
        replaces++;

        if (replaces >= this.maxReplaces) {
          break;
        }
      }

      return str;
    }
  }, {
    key: "nest",
    value: function nest(str, fc) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var match;
      var value;

      var clonedOptions = _objectSpread({}, options);

      clonedOptions.applyPostProcessor = false; // avoid post processing on nested lookup
      // if value is something like "myKey": "lorem $(anotherKey, { "count": {{aValueInOptions}} })"

      function handleHasOptions(key, inheritedOptions) {
        if (key.indexOf(',') < 0) return key;
        var p = key.split(',');
        key = p.shift();
        var optionsString = p.join(',');
        optionsString = this.interpolate(optionsString, clonedOptions);
        optionsString = optionsString.replace(/'/g, '"');

        try {
          clonedOptions = JSON.parse(optionsString);
          if (inheritedOptions) clonedOptions = _objectSpread({}, inheritedOptions, clonedOptions);
        } catch (e) {
          this.logger.error("failed parsing options string in nesting for key ".concat(key), e);
        }

        return key;
      } // regular escape on demand


      while (match = this.nestingRegexp.exec(str)) {
        value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions); // is only the nesting key (key1 = '$(key2)') return the value without stringify

        if (value && match[0] === str && typeof value !== 'string') return value; // no string to include or empty

        if (typeof value !== 'string') value = makeString(value);

        if (!value) {
          this.logger.warn("missed to resolve ".concat(match[1], " for nesting ").concat(str));
          value = '';
        } // Nested keys should not be escaped by default #854
        // value = this.escapeValue ? regexSafe(utils.escape(value)) : regexSafe(value);


        str = str.replace(match[0], value);
        this.regexp.lastIndex = 0;
      }

      return str;
    }
  }]);

  return Interpolator;
}();

function remove(arr, what) {
  var found = arr.indexOf(what);

  while (found !== -1) {
    arr.splice(found, 1);
    found = arr.indexOf(what);
  }
}

var Connector =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(Connector, _EventEmitter);

  function Connector(backend, store, services) {
    var _this;

    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

    _classCallCheck(this, Connector);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Connector).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.backend = backend;
    _this.store = store;
    _this.languageUtils = services.languageUtils;
    _this.options = options;
    _this.logger = baseLogger.create('backendConnector');
    _this.state = {};
    _this.queue = [];

    if (_this.backend && _this.backend.init) {
      _this.backend.init(services, options.backend, options);
    }

    return _this;
  }

  _createClass(Connector, [{
    key: "queueLoad",
    value: function queueLoad(languages, namespaces, options, callback) {
      var _this2 = this;

      // find what needs to be loaded
      var toLoad = [];
      var pending = [];
      var toLoadLanguages = [];
      var toLoadNamespaces = [];
      languages.forEach(function (lng) {
        var hasAllNamespaces = true;
        namespaces.forEach(function (ns) {
          var name = "".concat(lng, "|").concat(ns);

          if (!options.reload && _this2.store.hasResourceBundle(lng, ns)) {
            _this2.state[name] = 2; // loaded
          } else if (_this2.state[name] < 0) ; else if (_this2.state[name] === 1) {
            if (pending.indexOf(name) < 0) pending.push(name);
          } else {
            _this2.state[name] = 1; // pending

            hasAllNamespaces = false;
            if (pending.indexOf(name) < 0) pending.push(name);
            if (toLoad.indexOf(name) < 0) toLoad.push(name);
            if (toLoadNamespaces.indexOf(ns) < 0) toLoadNamespaces.push(ns);
          }
        });
        if (!hasAllNamespaces) toLoadLanguages.push(lng);
      });

      if (toLoad.length || pending.length) {
        this.queue.push({
          pending: pending,
          loaded: {},
          errors: [],
          callback: callback
        });
      }

      return {
        toLoad: toLoad,
        pending: pending,
        toLoadLanguages: toLoadLanguages,
        toLoadNamespaces: toLoadNamespaces
      };
    }
  }, {
    key: "loaded",
    value: function loaded(name, err, data) {
      var _name$split = name.split('|'),
          _name$split2 = _slicedToArray(_name$split, 2),
          lng = _name$split2[0],
          ns = _name$split2[1];

      if (err) this.emit('failedLoading', lng, ns, err);

      if (data) {
        this.store.addResourceBundle(lng, ns, data);
      } // set loaded


      this.state[name] = err ? -1 : 2; // consolidated loading done in this run - only emit once for a loaded namespace

      var loaded = {}; // callback if ready

      this.queue.forEach(function (q) {
        pushPath(q.loaded, [lng], ns);
        remove(q.pending, name);
        if (err) q.errors.push(err);

        if (q.pending.length === 0 && !q.done) {
          // only do once per loaded -> this.emit('loaded', q.loaded);
          Object.keys(q.loaded).forEach(function (l) {
            if (!loaded[l]) loaded[l] = [];

            if (q.loaded[l].length) {
              q.loaded[l].forEach(function (ns) {
                if (loaded[l].indexOf(ns) < 0) loaded[l].push(ns);
              });
            }
          });
          /* eslint no-param-reassign: 0 */

          q.done = true;

          if (q.errors.length) {
            q.callback(q.errors);
          } else {
            q.callback();
          }
        }
      }); // emit consolidated loaded event

      this.emit('loaded', loaded); // remove done load requests

      this.queue = this.queue.filter(function (q) {
        return !q.done;
      });
    }
  }, {
    key: "read",
    value: function read(lng, ns, fcName) {
      var _this3 = this;

      var tried = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var wait = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 250;
      var callback = arguments.length > 5 ? arguments[5] : undefined;
      if (!lng.length) return callback(null, {}); // noting to load

      return this.backend[fcName](lng, ns, function (err, data) {
        if (err && data
        /* = retryFlag */
        && tried < 5) {
          setTimeout(function () {
            _this3.read.call(_this3, lng, ns, fcName, tried + 1, wait * 2, callback);
          }, wait);
          return;
        }

        callback(err, data);
      });
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "prepareLoading",
    value: function prepareLoading(languages, namespaces) {
      var _this4 = this;

      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var callback = arguments.length > 3 ? arguments[3] : undefined;

      if (!this.backend) {
        this.logger.warn('No backend was added via i18next.use. Will not load resources.');
        return callback && callback();
      }

      if (typeof languages === 'string') languages = this.languageUtils.toResolveHierarchy(languages);
      if (typeof namespaces === 'string') namespaces = [namespaces];
      var toLoad = this.queueLoad(languages, namespaces, options, callback);

      if (!toLoad.toLoad.length) {
        if (!toLoad.pending.length) callback(); // nothing to load and no pendings...callback now

        return null; // pendings will trigger callback
      }

      toLoad.toLoad.forEach(function (name) {
        _this4.loadOne(name);
      });
    }
  }, {
    key: "load",
    value: function load(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {}, callback);
    }
  }, {
    key: "reload",
    value: function reload(languages, namespaces, callback) {
      this.prepareLoading(languages, namespaces, {
        reload: true
      }, callback);
    }
  }, {
    key: "loadOne",
    value: function loadOne(name) {
      var _this5 = this;

      var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var _name$split3 = name.split('|'),
          _name$split4 = _slicedToArray(_name$split3, 2),
          lng = _name$split4[0],
          ns = _name$split4[1];

      this.read(lng, ns, 'read', null, null, function (err, data) {
        if (err) _this5.logger.warn("".concat(prefix, "loading namespace ").concat(ns, " for language ").concat(lng, " failed"), err);
        if (!err && data) _this5.logger.log("".concat(prefix, "loaded namespace ").concat(ns, " for language ").concat(lng), data);

        _this5.loaded(name, err, data);
      });
    }
  }, {
    key: "saveMissing",
    value: function saveMissing(languages, namespace, key, fallbackValue, isUpdate) {
      var options = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};

      if (this.backend && this.backend.create) {
        this.backend.create(languages, namespace, key, fallbackValue, null
        /* unused callback */
        , _objectSpread({}, options, {
          isUpdate: isUpdate
        }));
      } // write to store to avoid resending


      if (!languages || !languages[0]) return;
      this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
  }]);

  return Connector;
}(EventEmitter);

function get() {
  return {
    debug: false,
    initImmediate: true,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: false,
    // string or array of namespaces
    whitelist: false,
    // array with whitelisted languages
    nonExplicitWhitelist: false,
    load: 'all',
    // | currentOnly | languageOnly
    preload: false,
    // array with preload languages
    simplifyPluralSuffix: true,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: false,
    // allow bundling certain languages that are not remotely fetched
    saveMissing: false,
    // enable to send missing values
    updateMissing: false,
    // enable to update default values if different from translated value (only useful on initial development, or when keeping code as source of truth)
    saveMissingTo: 'fallback',
    // 'current' || 'all'
    saveMissingPlurals: true,
    // will save all forms not only singular key
    missingKeyHandler: false,
    // function(lng, ns, key, fallbackValue) -> override if prefer on handling
    missingInterpolationHandler: false,
    // function(str, match)
    postProcess: false,
    // string or array of postProcessor names
    returnNull: true,
    // allows null value as valid translation
    returnEmptyString: true,
    // allows empty string value as valid translation
    returnObjects: false,
    joinArrays: false,
    // or string to join array
    returnedObjectHandler: false,
    // function(key, value, options) triggered if key returns object but returnObjects is set to false
    parseMissingKeyHandler: false,
    // function(key) parsed a key that was not found in t() before returning
    appendNamespaceToMissingKey: false,
    appendNamespaceToCIMode: false,
    overloadTranslationOptionHandler: function handle(args) {
      var ret = {};
      if (_typeof(args[1]) === 'object') ret = args[1];
      if (typeof args[1] === 'string') ret.defaultValue = args[1];
      if (typeof args[2] === 'string') ret.tDescription = args[2];

      if (_typeof(args[2]) === 'object' || _typeof(args[3]) === 'object') {
        var options = args[3] || args[2];
        Object.keys(options).forEach(function (key) {
          ret[key] = options[key];
        });
      }

      return ret;
    },
    interpolation: {
      escapeValue: true,
      format: function format(value, _format, lng) {
        return value;
      },
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      // prefixEscaped: '{{',
      // suffixEscaped: '}}',
      // unescapeSuffix: '',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      // nestingPrefixEscaped: '$t(',
      // nestingSuffixEscaped: ')',
      // defaultVariables: undefined // object that can have values to interpolate on - extends passed in interpolation data
      maxReplaces: 1000 // max replaces to prevent endless loop

    }
  };
}
/* eslint no-param-reassign: 0 */

function transformOptions(options) {
  // create namespace object if namespace is passed in as string
  if (typeof options.ns === 'string') options.ns = [options.ns];
  if (typeof options.fallbackLng === 'string') options.fallbackLng = [options.fallbackLng];
  if (typeof options.fallbackNS === 'string') options.fallbackNS = [options.fallbackNS]; // extend whitelist with cimode

  if (options.whitelist && options.whitelist.indexOf('cimode') < 0) {
    options.whitelist = options.whitelist.concat(['cimode']);
  }

  return options;
}

function noop() {}

var I18n =
/*#__PURE__*/
function (_EventEmitter) {
  _inherits(I18n, _EventEmitter);

  function I18n() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, I18n);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(I18n).call(this));
    EventEmitter.call(_assertThisInitialized(_this)); // <=IE10 fix (unable to call parent constructor)

    _this.options = transformOptions(options);
    _this.services = {};
    _this.logger = baseLogger;
    _this.modules = {
      external: []
    };

    if (callback && !_this.isInitialized && !options.isClone) {
      // https://github.com/i18next/i18next/issues/879
      if (!_this.options.initImmediate) {
        _this.init(options, callback);

        return _possibleConstructorReturn(_this, _assertThisInitialized(_this));
      }

      setTimeout(function () {
        _this.init(options, callback);
      }, 0);
    }

    return _this;
  }

  _createClass(I18n, [{
    key: "init",
    value: function init() {
      var _this2 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;

      if (typeof options === 'function') {
        callback = options;
        options = {};
      }

      this.options = _objectSpread({}, get(), this.options, transformOptions(options));
      this.format = this.options.interpolation.format;
      if (!callback) callback = noop;

      function createClassOnDemand(ClassOrObject) {
        if (!ClassOrObject) return null;
        if (typeof ClassOrObject === 'function') return new ClassOrObject();
        return ClassOrObject;
      } // init services


      if (!this.options.isClone) {
        if (this.modules.logger) {
          baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
        } else {
          baseLogger.init(null, this.options);
        }

        var lu = new LanguageUtil(this.options);
        this.store = new ResourceStore(this.options.resources, this.options);
        var s = this.services;
        s.logger = baseLogger;
        s.resourceStore = this.store;
        s.languageUtils = lu;
        s.pluralResolver = new PluralResolver(lu, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix
        });
        s.interpolator = new Interpolator(this.options);
        s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options); // pipe events from backendConnector

        s.backendConnector.on('*', function (event) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });

        if (this.modules.languageDetector) {
          s.languageDetector = createClassOnDemand(this.modules.languageDetector);
          s.languageDetector.init(s, this.options.detection, this.options);
        }

        if (this.modules.i18nFormat) {
          s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
          if (s.i18nFormat.init) s.i18nFormat.init(this);
        }

        this.translator = new Translator(this.services, this.options); // pipe events from translator

        this.translator.on('*', function (event) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }

          _this2.emit.apply(_this2, [event].concat(args));
        });
        this.modules.external.forEach(function (m) {
          if (m.init) m.init(_this2);
        });
      } // append api


      var storeApi = ['getResource', 'addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'];
      storeApi.forEach(function (fcName) {
        _this2[fcName] = function () {
          var _this2$store;

          return (_this2$store = _this2.store)[fcName].apply(_this2$store, arguments);
        };
      });
      var deferred = defer();

      var load = function load() {
        _this2.changeLanguage(_this2.options.lng, function (err, t) {
          _this2.isInitialized = true;

          _this2.logger.log('initialized', _this2.options);

          _this2.emit('initialized', _this2.options);

          deferred.resolve(t); // not rejecting on err (as err is only a loading translation failed warning)

          callback(err, t);
        });
      };

      if (this.options.resources || !this.options.initImmediate) {
        load();
      } else {
        setTimeout(load, 0);
      }

      return deferred;
    }
    /* eslint consistent-return: 0 */

  }, {
    key: "loadResources",
    value: function loadResources() {
      var _this3 = this;

      var callback = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : noop;

      if (!this.options.resources || this.options.partialBundledLanguages) {
        if (this.language && this.language.toLowerCase() === 'cimode') return callback(); // avoid loading resources for cimode

        var toLoad = [];

        var append = function append(lng) {
          if (!lng) return;

          var lngs = _this3.services.languageUtils.toResolveHierarchy(lng);

          lngs.forEach(function (l) {
            if (toLoad.indexOf(l) < 0) toLoad.push(l);
          });
        };

        if (!this.language) {
          // at least load fallbacks in this case
          var fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
          fallbacks.forEach(function (l) {
            return append(l);
          });
        } else {
          append(this.language);
        }

        if (this.options.preload) {
          this.options.preload.forEach(function (l) {
            return append(l);
          });
        }

        this.services.backendConnector.load(toLoad, this.options.ns, callback);
      } else {
        callback(null);
      }
    }
  }, {
    key: "reloadResources",
    value: function reloadResources(lngs, ns, callback) {
      var deferred = defer();
      if (!lngs) lngs = this.languages;
      if (!ns) ns = this.options.ns;
      if (!callback) callback = noop;
      this.services.backendConnector.reload(lngs, ns, function (err) {
        deferred.resolve(); // not rejecting on err (as err is only a loading translation failed warning)

        callback(err);
      });
      return deferred;
    }
  }, {
    key: "use",
    value: function use(module) {
      if (module.type === 'backend') {
        this.modules.backend = module;
      }

      if (module.type === 'logger' || module.log && module.warn && module.error) {
        this.modules.logger = module;
      }

      if (module.type === 'languageDetector') {
        this.modules.languageDetector = module;
      }

      if (module.type === 'i18nFormat') {
        this.modules.i18nFormat = module;
      }

      if (module.type === 'postProcessor') {
        postProcessor.addPostProcessor(module);
      }

      if (module.type === '3rdParty') {
        this.modules.external.push(module);
      }

      return this;
    }
  }, {
    key: "changeLanguage",
    value: function changeLanguage(lng, callback) {
      var _this4 = this;

      var deferred = defer();
      this.emit('languageChanging', lng);

      var done = function done(err, l) {
        _this4.translator.changeLanguage(l);

        if (l) {
          _this4.emit('languageChanged', l);

          _this4.logger.log('languageChanged', l);
        }

        deferred.resolve(function () {
          return _this4.t.apply(_this4, arguments);
        });
        if (callback) callback(err, function () {
          return _this4.t.apply(_this4, arguments);
        });
      };

      var setLng = function setLng(l) {
        if (l) {
          _this4.language = l;
          _this4.languages = _this4.services.languageUtils.toResolveHierarchy(l);
          if (!_this4.translator.language) _this4.translator.changeLanguage(l);
          if (_this4.services.languageDetector) _this4.services.languageDetector.cacheUserLanguage(l);
        }

        _this4.loadResources(function (err) {
          done(err, l);
        });
      };

      if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
        setLng(this.services.languageDetector.detect());
      } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
        this.services.languageDetector.detect(setLng);
      } else {
        setLng(lng);
      }

      return deferred;
    }
  }, {
    key: "getFixedT",
    value: function getFixedT(lng, ns) {
      var _this5 = this;

      var fixedT = function fixedT(key, opts) {
        var options;

        if (_typeof(opts) !== 'object') {
          for (var _len3 = arguments.length, rest = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
            rest[_key3 - 2] = arguments[_key3];
          }

          options = _this5.options.overloadTranslationOptionHandler([key, opts].concat(rest));
        } else {
          options = _objectSpread({}, opts);
        }

        options.lng = options.lng || fixedT.lng;
        options.lngs = options.lngs || fixedT.lngs;
        options.ns = options.ns || fixedT.ns;
        return _this5.t(key, options);
      };

      if (typeof lng === 'string') {
        fixedT.lng = lng;
      } else {
        fixedT.lngs = lng;
      }

      fixedT.ns = ns;
      return fixedT;
    }
  }, {
    key: "t",
    value: function t() {
      var _this$translator;

      return this.translator && (_this$translator = this.translator).translate.apply(_this$translator, arguments);
    }
  }, {
    key: "exists",
    value: function exists() {
      var _this$translator2;

      return this.translator && (_this$translator2 = this.translator).exists.apply(_this$translator2, arguments);
    }
  }, {
    key: "setDefaultNamespace",
    value: function setDefaultNamespace(ns) {
      this.options.defaultNS = ns;
    }
  }, {
    key: "loadNamespaces",
    value: function loadNamespaces(ns, callback) {
      var _this6 = this;

      var deferred = defer();

      if (!this.options.ns) {
        callback && callback();
        return Promise.resolve();
      }

      if (typeof ns === 'string') ns = [ns];
      ns.forEach(function (n) {
        if (_this6.options.ns.indexOf(n) < 0) _this6.options.ns.push(n);
      });
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "loadLanguages",
    value: function loadLanguages(lngs, callback) {
      var deferred = defer();
      if (typeof lngs === 'string') lngs = [lngs];
      var preloaded = this.options.preload || [];
      var newLngs = lngs.filter(function (lng) {
        return preloaded.indexOf(lng) < 0;
      }); // Exit early if all given languages are already preloaded

      if (!newLngs.length) {
        if (callback) callback();
        return Promise.resolve();
      }

      this.options.preload = preloaded.concat(newLngs);
      this.loadResources(function (err) {
        deferred.resolve();
        if (callback) callback(err);
      });
      return deferred;
    }
  }, {
    key: "dir",
    value: function dir(lng) {
      if (!lng) lng = this.languages && this.languages.length > 0 ? this.languages[0] : this.language;
      if (!lng) return 'rtl';
      var rtlLngs = ['ar', 'shu', 'sqr', 'ssh', 'xaa', 'yhd', 'yud', 'aao', 'abh', 'abv', 'acm', 'acq', 'acw', 'acx', 'acy', 'adf', 'ads', 'aeb', 'aec', 'afb', 'ajp', 'apc', 'apd', 'arb', 'arq', 'ars', 'ary', 'arz', 'auz', 'avl', 'ayh', 'ayl', 'ayn', 'ayp', 'bbz', 'pga', 'he', 'iw', 'ps', 'pbt', 'pbu', 'pst', 'prp', 'prd', 'ur', 'ydd', 'yds', 'yih', 'ji', 'yi', 'hbo', 'men', 'xmn', 'fa', 'jpr', 'peo', 'pes', 'prs', 'dv', 'sam'];
      return rtlLngs.indexOf(this.services.languageUtils.getLanguagePartFromCode(lng)) >= 0 ? 'rtl' : 'ltr';
    }
    /* eslint class-methods-use-this: 0 */

  }, {
    key: "createInstance",
    value: function createInstance() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 ? arguments[1] : undefined;
      return new I18n(options, callback);
    }
  }, {
    key: "cloneInstance",
    value: function cloneInstance() {
      var _this7 = this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : noop;

      var mergedOptions = _objectSpread({}, this.options, options, {
        isClone: true
      });

      var clone = new I18n(mergedOptions);
      var membersToCopy = ['store', 'services', 'language'];
      membersToCopy.forEach(function (m) {
        clone[m] = _this7[m];
      });
      clone.translator = new Translator(clone.services, clone.options);
      clone.translator.on('*', function (event) {
        for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
          args[_key4 - 1] = arguments[_key4];
        }

        clone.emit.apply(clone, [event].concat(args));
      });
      clone.init(mergedOptions, callback);
      clone.translator.options = clone.options; // sync options

      return clone;
    }
  }]);

  return I18n;
}(EventEmitter);

var i18next = new I18n();

module.exports = i18next;


/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/Link.js":
/*!********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/Link.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

__webpack_require__(/*! core-js/modules/es6.object.assign */ "core-js/modules/es6.object.assign");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _link = _interopRequireDefault(__webpack_require__(/*! next/link */ "./node_modules/next/link.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

/*
  This `Link` component is a wrap of the standard
  NextJs `Link` component, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  This component automatically provides this functionality:
  <Link href="/product?slug=something" as="/products/something">

  Wherein `slug` is actually our i18n lang, and it gets
  pulled automatically.

  Very important: if you import `Link` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var removeWithTranslationProps = function removeWithTranslationProps(props) {
  var strippedProps = Object.assign({}, props);
  delete strippedProps.defaultNS;
  delete strippedProps.i18n;
  delete strippedProps.i18nOptions;
  delete strippedProps.lng;
  delete strippedProps.reportNS;
  delete strippedProps.t;
  delete strippedProps.tReady;
  return strippedProps;
};

var Link =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Link, _React$Component);

  function Link() {
    (0, _classCallCheck2["default"])(this, Link);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));
  }

  (0, _createClass2["default"])(Link, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          as = _this$props.as,
          children = _this$props.children,
          href = _this$props.href,
          i18n = _this$props.i18n,
          nextI18NextInternals = _this$props.nextI18NextInternals,
          props = (0, _objectWithoutProperties2["default"])(_this$props, ["as", "children", "href", "i18n", "nextI18NextInternals"]);
      var config = nextI18NextInternals.config;
      var language = i18n.language;

      if ((0, _utils.subpathIsRequired)(config, language)) {
        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: href
        }, language),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _react["default"].createElement(_link["default"], (0, _extends2["default"])({
          href: correctedHref,
          as: correctedAs
        }, removeWithTranslationProps(props)), children);
      }

      return _react["default"].createElement(_link["default"], (0, _extends2["default"])({
        href: href,
        as: as
      }, removeWithTranslationProps(props)), children);
    }
  }]);
  return Link;
}(_react["default"].Component);
/*
  Usage of `withTranslation` here is just to
  force `Link` to rerender on language change
*/


(0, _defineProperty2["default"])(Link, "propTypes", {
  as: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired,
  href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
  nextI18NextInternals: _propTypes["default"].shape({
    config: _propTypes["default"].shape({
      defaultLanguage: _propTypes["default"].string.isRequired,
      localeSubpaths: _propTypes["default"].object.isRequired
    }).isRequired
  }).isRequired
});
(0, _defineProperty2["default"])(Link, "defaultProps", {
  as: undefined
});

var _default = (0, _reactI18next.withTranslation)()(Link);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var NextStaticProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(NextStaticProvider, _React$Component);

  function NextStaticProvider() {
    (0, _classCallCheck2["default"])(this, NextStaticProvider);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(NextStaticProvider).apply(this, arguments));
  }

  (0, _createClass2["default"])(NextStaticProvider, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          tReady = _this$props.tReady;
      return tReady ? children : null;
    }
  }]);
  return NextStaticProvider;
}(_react["default"].Component);

(0, _defineProperty2["default"])(NextStaticProvider, "propTypes", {
  children: _propTypes["default"].node.isRequired,
  tReady: _propTypes["default"].bool
});
(0, _defineProperty2["default"])(NextStaticProvider, "defaultProps", {
  tReady: true
});

var _default = (0, _reactI18next.withTranslation)()(NextStaticProvider);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/components/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/components/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Link", {
  enumerable: true,
  get: function get() {
    return _Link["default"];
  }
});
Object.defineProperty(exports, "NextStaticProvider", {
  enumerable: true,
  get: function get() {
    return _NextStaticProvider["default"];
  }
});

var _Link = _interopRequireDefault(__webpack_require__(/*! ./Link */ "./node_modules/next-i18next/dist/commonjs/components/Link.js"));

var _NextStaticProvider = _interopRequireDefault(__webpack_require__(/*! ./NextStaticProvider */ "./node_modules/next-i18next/dist/commonjs/components/NextStaticProvider.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/config/create-config.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/config/create-config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

__webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _defaultConfig = _interopRequireDefault(__webpack_require__(/*! ./default-config */ "./node_modules/next-i18next/dist/commonjs/config/default-config.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var deepMergeObjects = ['backend', 'detection'];

var _default = function _default(userConfig) {
  if (typeof userConfig.localeSubpaths === 'string') {
    throw new Error('The localeSubpaths option has been changed to an object. Please refer to documentation.');
  } // Initial merge of default and user-provided config


  var combinedConfig = (0, _objectSpread2["default"])({}, _defaultConfig["default"], userConfig); // Sensible defaults to prevent user duplication

  combinedConfig.allLanguages = combinedConfig.otherLanguages.concat([combinedConfig.defaultLanguage]);
  combinedConfig.whitelist = combinedConfig.allLanguages;
  var allLanguages = combinedConfig.allLanguages,
      defaultLanguage = combinedConfig.defaultLanguage,
      localeExtension = combinedConfig.localeExtension,
      localePath = combinedConfig.localePath,
      localeStructure = combinedConfig.localeStructure;

  if ((0, _utils.isServer)()) {
    var fs = eval("require('fs')");

    var path = __webpack_require__(/*! path */ "path"); // Validate defaultNS
    // https://github.com/isaachinman/next-i18next/issues/358


    if ( true && typeof combinedConfig.defaultNS === 'string') {
      var defaultNSPath = path.join(process.cwd(), "".concat(localePath, "/").concat(defaultLanguage, "/").concat(combinedConfig.defaultNS, ".").concat(localeExtension));
      var defaultNSExists = fs.existsSync(defaultNSPath);

      if (!defaultNSExists) {
        throw new Error("Default namespace not found at ".concat(defaultNSPath));
      }
    } // Set server side backend


    combinedConfig.backend = {
      loadPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension)),
      addPath: path.join(process.cwd(), "".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)) // Set server side preload (languages and namespaces)

    };
    combinedConfig.preload = allLanguages;

    if (!combinedConfig.ns) {
      var getAllNamespaces = function getAllNamespaces(p) {
        return fs.readdirSync(p).map(function (file) {
          return file.replace(".".concat(localeExtension), '');
        });
      };

      combinedConfig.ns = getAllNamespaces(path.join(process.cwd(), "".concat(localePath, "/").concat(defaultLanguage)));
    }
  } else {
    // Set client side backend
    combinedConfig.backend = {
      loadPath: "/".concat(localePath, "/").concat(localeStructure, ".").concat(localeExtension),
      addPath: "/".concat(localePath, "/").concat(localeStructure, ".missing.").concat(localeExtension)
    };
    combinedConfig.ns = [combinedConfig.defaultNS];
  } // Set fallback language to defaultLanguage in production


  if (!userConfig.fallbackLng) {
    combinedConfig.fallbackLng =  false ? undefined : false;
  } // Deep merge with overwrite - goes last


  deepMergeObjects.forEach(function (obj) {
    if (userConfig[obj]) {
      combinedConfig[obj] = (0, _objectSpread2["default"])({}, _defaultConfig["default"][obj], userConfig[obj]);
    }
  });
  return combinedConfig;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/config/default-config.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/config/default-config.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var DEFAULT_LANGUAGE = 'en';
var OTHER_LANGUAGES = [];
var DEFAULT_NAMESPACE = 'common';
var LOCALE_PATH = 'static/locales';
var LOCALE_STRUCTURE = '{{lng}}/{{ns}}';
var LOCALE_EXTENSION = 'json';
var config = {
  defaultLanguage: DEFAULT_LANGUAGE,
  otherLanguages: OTHER_LANGUAGES,
  load: 'currentOnly',
  localePath: LOCALE_PATH,
  localeStructure: LOCALE_STRUCTURE,
  localeExtension: LOCALE_EXTENSION,
  localeSubpaths: {},
  use: [],
  defaultNS: DEFAULT_NAMESPACE,
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
    format: function format(value, _format) {
      return _format === 'uppercase' ? value.toUpperCase() : value;
    }
  },
  browserLanguageDetection: true,
  serverLanguageDetection: true,
  ignoreRoutes: ['/_next/', '/static/'],
  customDetectors: [],
  detection: {
    lookupCookie: 'next-i18next',
    order: ['cookie', 'header', 'querystring'],
    caches: ['cookie']
  },
  react: {
    wait: true,
    useSuspense: false
  },
  strictMode: true,
  errorStackTraceLimit: 0,

  get initImmediate() {
    return !(0, _utils.isServer)();
  }

};
var _default = config;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/create-i18next-client.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/create-i18next-client.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

var _detectNode = _interopRequireDefault(__webpack_require__(/*! detect-node */ "detect-node"));

var _i18next = _interopRequireDefault(__webpack_require__(/*! i18next */ "./node_modules/i18next/dist/cjs/i18next.js"));

var _i18nextXhrBackend = _interopRequireDefault(__webpack_require__(/*! i18next-xhr-backend */ "i18next-xhr-backend"));

var _i18nextBrowserLanguagedetector = _interopRequireDefault(__webpack_require__(/*! i18next-browser-languagedetector */ "i18next-browser-languagedetector"));

var _default = function _default(config) {
  if (!_i18next["default"].isInitialized) {
    if (_detectNode["default"]) {
      var i18nextNodeBackend = eval("require('i18next-node-fs-backend')");
      var i18nextMiddleware = eval("require('i18next-express-middleware')");

      _i18next["default"].use(i18nextNodeBackend);

      if (config.serverLanguageDetection) {
        var serverDetectors = new i18nextMiddleware.LanguageDetector();
        config.customDetectors.forEach(function (detector) {
          return serverDetectors.addDetector(detector);
        });

        _i18next["default"].use(serverDetectors);
      }
    } else {
      _i18next["default"].use(_i18nextXhrBackend["default"]);

      if (config.browserLanguageDetection) {
        var browserDetectors = new _i18nextBrowserLanguagedetector["default"]();
        config.customDetectors.forEach(function (detector) {
          return browserDetectors.addDetector(detector);
        });

        _i18next["default"].use(browserDetectors);
      }
    }

    config.use.forEach(function (x) {
      return _i18next["default"].use(x);
    });

    _i18next["default"].init(config);
  }

  return _i18next["default"];
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

__webpack_require__(/*! core-js/modules/es6.date.to-json */ "core-js/modules/es6.date.to-json");

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

__webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");

__webpack_require__(/*! core-js/modules/es6.array.is-array */ "core-js/modules/es6.array.is-array");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

__webpack_require__(/*! core-js/modules/es7.object.entries */ "core-js/modules/es7.object.entries");

__webpack_require__(/*! regenerator-runtime/runtime */ "regenerator-runtime/runtime");

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js"));

__webpack_require__(/*! core-js/modules/es6.function.bind */ "core-js/modules/es6.function.bind");

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

__webpack_require__(/*! core-js/modules/es6.array.filter */ "core-js/modules/es6.array.filter");

__webpack_require__(/*! core-js/modules/es6.array.map */ "core-js/modules/es6.array.map");

__webpack_require__(/*! core-js/modules/es6.promise */ "core-js/modules/es6.promise");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");

__webpack_require__(/*! core-js/modules/es6.string.iterator */ "core-js/modules/es6.string.iterator");

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! next/router */ "next/router");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var _components = __webpack_require__(/*! ../components */ "./node_modules/next-i18next/dist/commonjs/components/index.js");

function _default(WrappedComponent) {
  var WrappedComponentWithSSR = (0, _reactI18next.withSSR)()(WrappedComponent);
  var config = this.config,
      consoleMessage = this.consoleMessage,
      i18n = this.i18n;

  var clientLoadNamespaces = function clientLoadNamespaces(lng, namespaces) {
    return Promise.all(namespaces.filter(function (ns) {
      return !i18n.hasResourceBundle(lng, ns);
    }).map(function (ns) {
      return i18n.reloadResources(lng, ns);
    }));
  };

  var AppWithTranslation =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(AppWithTranslation, _React$Component);

    function AppWithTranslation(props) {
      var _this;

      (0, _classCallCheck2["default"])(this, AppWithTranslation);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AppWithTranslation).call(this, props));

      if (!(0, _utils.isServer)()) {
        var changeLanguageCallback = function changeLanguageCallback(prevLng, newLng) {
          var router = props.router;
          var pathname = router.pathname,
              asPath = router.asPath,
              query = router.query;
          var routeInfo = {
            pathname: pathname,
            query: query
          };

          if (i18n.initializedLanguageOnce && typeof newLng === 'string' && prevLng !== newLng) {
            var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
              as: asPath,
              href: routeInfo
            }, newLng),
                as = _lngPathCorrector.as,
                href = _lngPathCorrector.href;

            router.replace(href, as);
          }
        };

        var changeLanguage = i18n.changeLanguage.bind(i18n);

        i18n.changeLanguage =
        /*#__PURE__*/
        function () {
          var _ref = (0, _asyncToGenerator2["default"])(
          /*#__PURE__*/
          _regenerator["default"].mark(function _callee(newLng) {
            var callback,
                prevLng,
                usedNamespaces,
                _args = arguments;
            return _regenerator["default"].wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    callback = _args.length > 1 && _args[1] !== undefined ? _args[1] : function () {
                      return null;
                    };
                    prevLng = i18n.language;

                    if (!(typeof newLng === 'string' && i18n.initializedLanguageOnce === true)) {
                      _context.next = 6;
                      break;
                    }

                    usedNamespaces = Object.entries(i18n.reportNamespaces.usedNamespaces).filter(function (x) {
                      return x[1] === true;
                    }).map(function (x) {
                      return x[0];
                    });
                    _context.next = 6;
                    return clientLoadNamespaces(newLng, usedNamespaces);

                  case 6:
                    return _context.abrupt("return", changeLanguage(newLng, function () {
                      changeLanguageCallback(prevLng, newLng);
                      callback();
                    }));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }();
      }

      return _this;
    }

    (0, _createClass2["default"])(AppWithTranslation, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            initialLanguage = _this$props.initialLanguage,
            initialI18nStore = _this$props.initialI18nStore,
            i18nServerInstance = _this$props.i18nServerInstance;
        return _react["default"].createElement(_reactI18next.I18nextProvider, {
          i18n: i18nServerInstance || i18n
        }, _react["default"].createElement(_components.NextStaticProvider, null, _react["default"].createElement(WrappedComponentWithSSR, (0, _extends2["default"])({
          initialLanguage: initialLanguage,
          initialI18nStore: initialI18nStore
        }, this.props))));
      }
    }], [{
      key: "getInitialProps",
      value: function () {
        var _getInitialProps = (0, _asyncToGenerator2["default"])(
        /*#__PURE__*/
        _regenerator["default"].mark(function _callee2(ctx) {
          var wrappedComponentProps, req, initialI18nStore, initialLanguage, i18nServerInstance, namespacesRequired, fallbackLng, languagesToLoad;
          return _regenerator["default"].wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  wrappedComponentProps = {
                    pageProps: {}
                  };

                  if (!WrappedComponent.getInitialProps) {
                    _context2.next = 5;
                    break;
                  }

                  _context2.next = 4;
                  return WrappedComponent.getInitialProps(ctx);

                case 4:
                  wrappedComponentProps = _context2.sent;

                case 5:
                  if (typeof wrappedComponentProps.pageProps === 'undefined') {
                    consoleMessage('error', 'If you have a getInitialProps method in your custom _app.js file, you must explicitly return pageProps. For more information, see: https://github.com/zeit/next.js#custom-app');
                  } // Initiate vars to return


                  req = ctx.ctx.req;
                  initialI18nStore = {};
                  initialLanguage = null;
                  i18nServerInstance = null; // Step 1: Determine initial language

                  if (!(req && req.i18n)) {
                    _context2.next = 16;
                    break;
                  }

                  initialLanguage = (0, _utils.lngFromReq)(req); // Perform a lang change in case we're not on the right lang

                  _context2.next = 14;
                  return req.i18n.changeLanguage(initialLanguage);

                case 14:
                  _context2.next = 17;
                  break;

                case 16:
                  if (Array.isArray(i18n.languages) && i18n.languages.length > 0) {
                    initialLanguage = i18n.language;
                  }

                case 17:
                  // Step 2: Determine namespace dependencies
                  namespacesRequired = config.ns;

                  if (Array.isArray(wrappedComponentProps.pageProps.namespacesRequired)) {
                    namespacesRequired = wrappedComponentProps.pageProps.namespacesRequired;
                  } else {
                    consoleMessage('warn', "You have not declared a namespacesRequired array on your page-level component: ".concat(ctx.Component.displayName || ctx.Component.name || 'Component', ". This will cause all namespaces to be sent down to the client, possibly negatively impacting the performance of your app. For more info, see: https://github.com/isaachinman/next-i18next#4-declaring-namespace-dependencies"));
                  } // We must always send down the defaultNS, otherwise
                  // the client will trigger a request for it and issue
                  // the "Did not expect server HTML to contain a <h1> in <div>"
                  // error


                  if (typeof config.defaultNS === 'string' && !namespacesRequired.includes(config.defaultNS)) {
                    namespacesRequired.push(config.defaultNS);
                  } // Step 3: Perform data fetching, depending on environment


                  if (!(req && req.i18n)) {
                    _context2.next = 26;
                    break;
                  }

                  // Detect the languages to load based upon the fallbackLng configuration
                  fallbackLng = config.fallbackLng;
                  languagesToLoad = (0, _utils.lngsToLoad)(initialLanguage, fallbackLng, config.otherLanguages); // Initialise the store with the languagesToLoad and
                  // necessary namespaces needed to render this specific tree

                  languagesToLoad.forEach(function (lng) {
                    initialI18nStore[lng] = {};
                    namespacesRequired.forEach(function (ns) {
                      initialI18nStore[lng][ns] = (req.i18n.services.resourceStore.data[lng] || {})[ns] || {};
                    });
                  });
                  _context2.next = 30;
                  break;

                case 26:
                  if (!(Array.isArray(i18n.languages) && i18n.languages.length > 0)) {
                    _context2.next = 30;
                    break;
                  }

                  _context2.next = 29;
                  return clientLoadNamespaces(i18n.languages[0], namespacesRequired);

                case 29:
                  initialI18nStore = i18n.store.data;

                case 30:
                  // Step 4: Overwrite i18n.toJSON method to be able to serialize the instance
                  if (req && req.i18n) {
                    req.i18n.toJSON = function () {
                      return null;
                    };

                    i18nServerInstance = req.i18n;
                  } // `pageProps` will get serialized automatically by NextJs


                  return _context2.abrupt("return", (0, _objectSpread2["default"])({
                    initialI18nStore: initialI18nStore,
                    initialLanguage: initialLanguage,
                    i18nServerInstance: i18nServerInstance
                  }, wrappedComponentProps));

                case 32:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        return function getInitialProps(_x2) {
          return _getInitialProps.apply(this, arguments);
        };
      }()
    }]);
    return AppWithTranslation;
  }(_react["default"].Component);

  return (0, _hoistNonReactStatics["default"])((0, _router.withRouter)(AppWithTranslation), WrappedComponent, {
    getInitialProps: true
  });
}

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "appWithTranslation", {
  enumerable: true,
  get: function get() {
    return _appWithTranslation["default"];
  }
});
Object.defineProperty(exports, "withInternals", {
  enumerable: true,
  get: function get() {
    return _withInternals["default"];
  }
});

var _appWithTranslation = _interopRequireDefault(__webpack_require__(/*! ./app-with-translation */ "./node_modules/next-i18next/dist/commonjs/hocs/app-with-translation.js"));

var _withInternals = _interopRequireDefault(__webpack_require__(/*! ./with-internals */ "./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js":
/*!************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/hocs/with-internals.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _default = function _default(WrappedComponent, config) {
  var WithInternals =
  /*#__PURE__*/
  function (_React$Component) {
    (0, _inherits2["default"])(WithInternals, _React$Component);

    function WithInternals() {
      (0, _classCallCheck2["default"])(this, WithInternals);
      return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithInternals).apply(this, arguments));
    }

    (0, _createClass2["default"])(WithInternals, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(WrappedComponent, (0, _extends2["default"])({}, this.props, {
          nextI18NextInternals: config
        }));
      }
    }]);
    return WithInternals;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(WithInternals, "displayName", "withnextI18NextInternals(".concat(WrappedComponent.displayName || WrappedComponent.name || 'Component', ")"));
  return WithInternals;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _reactI18next.withTranslation;
  }
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.function.bind */ "core-js/modules/es6.function.bind");

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _reactI18next = __webpack_require__(/*! react-i18next */ "./node_modules/react-i18next/dist/commonjs/index.js");

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__(/*! hoist-non-react-statics */ "hoist-non-react-statics"));

var _createConfig = _interopRequireDefault(__webpack_require__(/*! ./config/create-config */ "./node_modules/next-i18next/dist/commonjs/config/create-config.js"));

var _createI18nextClient = _interopRequireDefault(__webpack_require__(/*! ./create-i18next-client */ "./node_modules/next-i18next/dist/commonjs/create-i18next-client.js"));

var _hocs = __webpack_require__(/*! ./hocs */ "./node_modules/next-i18next/dist/commonjs/hocs/index.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var _components = __webpack_require__(/*! ./components */ "./node_modules/next-i18next/dist/commonjs/components/index.js");

var _router = __webpack_require__(/*! ./router */ "./node_modules/next-i18next/dist/commonjs/router/index.js");

var NextI18Next = function NextI18Next(userConfig) {
  (0, _classCallCheck2["default"])(this, NextI18Next);
  (0, _defineProperty2["default"])(this, "Trans", void 0);
  (0, _defineProperty2["default"])(this, "Link", void 0);
  (0, _defineProperty2["default"])(this, "Router", void 0);
  (0, _defineProperty2["default"])(this, "i18n", void 0);
  (0, _defineProperty2["default"])(this, "config", void 0);
  (0, _defineProperty2["default"])(this, "useTranslation", void 0);
  (0, _defineProperty2["default"])(this, "withTranslation", void 0);
  (0, _defineProperty2["default"])(this, "appWithTranslation", void 0);
  (0, _defineProperty2["default"])(this, "consoleMessage", void 0);
  (0, _defineProperty2["default"])(this, "withNamespaces", void 0);
  this.config = (0, _createConfig["default"])(userConfig);
  this.consoleMessage = _utils.consoleMessage.bind(this);
  /* Validation */

  if (this.config.otherLanguages.length <= 0) {
    throw new Error('To properly initialise a next-i18next instance you must provide one or more locale codes in config.otherLanguages.');
  }

  this.withNamespaces = function () {
    throw new Error('next-i18next has upgraded to react-i18next v10 - please rename withNamespaces to withTranslation.');
  };

  this.i18n = (0, _createI18nextClient["default"])(this.config);
  this.appWithTranslation = _hocs.appWithTranslation.bind(this);

  this.withTranslation = function (namespace, options) {
    return function (Component) {
      return (0, _hoistNonReactStatics["default"])((0, _reactI18next.withTranslation)(namespace, options)(Component), Component);
    };
  };

  var nextI18NextInternals = {
    config: this.config,
    i18n: this.i18n
  };
  this.Link = (0, _hocs.withInternals)(_components.Link, nextI18NextInternals);
  this.Router = (0, _router.wrapRouter)(nextI18NextInternals);
  /* Directly export `react-i18next` methods */

  this.Trans = _reactI18next.Trans;
  this.useTranslation = _reactI18next.useTranslation;
};

exports["default"] = NextI18Next;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/router/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/router/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "wrapRouter", {
  enumerable: true,
  get: function get() {
    return _wrapRouter["default"];
  }
});

var _wrapRouter = _interopRequireDefault(__webpack_require__(/*! ./wrap-router */ "./node_modules/next-i18next/dist/commonjs/router/wrap-router.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/router/wrap-router.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/router/wrap-router.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

var _router = _interopRequireDefault(__webpack_require__(/*! next/router */ "next/router"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

/*
  This `Router` is a wrap of the standard
  NextJs `Router`, with some simple lang
  redirect logic in place.

  If you haven't already, read this issue comment:
  https://github.com/zeit/next.js/issues/2833#issuecomment-414919347

  Very important: if you import `Router` from NextJs directly,
  and not this file, your lang subpath routing will break.
*/
var propertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'events'];
var coreMethods = ['reload', 'back', 'beforePopState', 'ready', 'prefetch'];
var wrappedMethods = ['push', 'replace'];

function _default(nextI18NextInternals) {
  var Router = {};
  propertyFields.forEach(function (field) {
    Object.defineProperty(Router, field, {
      get: function get() {
        return _router["default"][field];
      }
    });
  });
  coreMethods.forEach(function (method) {
    Router[method] = function () {
      return _router["default"][method].apply(_router["default"], arguments);
    };
  });
  wrappedMethods.forEach(function (method) {
    Router[method] = function (path, as, options) {
      var config = nextI18NextInternals.config,
          i18n = nextI18NextInternals.i18n;

      if ((0, _utils.subpathIsRequired)(config, i18n.languages[0])) {
        var _lngPathCorrector = (0, _utils.lngPathCorrector)(config, {
          as: as,
          href: path
        }, i18n.languages[0]),
            correctedAs = _lngPathCorrector.as,
            correctedHref = _lngPathCorrector.href;

        return _router["default"][method](correctedHref, correctedAs, options);
      }

      return _router["default"][method](path, as, options);
    };
  });
  return Router;
}

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/add-subpath.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/add-subpath.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

var _default = function _default(url, subpath) {
  return url.replace('/', "/".concat(subpath, "/")).replace(/(https?:\/\/)|(\/)+/g, "$1$2").replace(/\/$/, '');
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/console-message.js":
/*!**************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/console-message.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createConsoleLog;

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

__webpack_require__(/*! core-js/modules/es6.function.name */ "core-js/modules/es6.function.name");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");

__webpack_require__(/*! core-js/modules/es7.object.values */ "core-js/modules/es7.object.values");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

__webpack_require__(/*! core-js/modules/es6.object.freeze */ "core-js/modules/es6.object.freeze");

/* eslint-disable no-console */

/**
  * @readonly
  * @enum {String} A console.log type
  */
var messageTypes = {
  error: 'error',
  info: 'info',
  warn: 'warn'
};
Object.freeze(messageTypes);
/**
 *  Logs a custom message to console
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 */

function logMessage(messageType, message) {
  if (Object.values(messageTypes).includes(messageType)) {
    console[messageType](message);
  } else {
    console.info(message);
  }
}
/**
 * Create a console log with specified log type, a message and options
 * @param {messageTypes} messageType One of: error, warn or info
 * @param {String} message
 * @param {Object} options
 */


function createConsoleLog(messageType, message) {
  var _this$config = this.config,
      errorStackTraceLimit = _this$config.errorStackTraceLimit,
      strictMode = _this$config.strictMode;
  var prevStackLimit = Error.stackTraceLimit;
  Error.stackTraceLimit = errorStackTraceLimit;
  var util;

  if (!strictMode) {
    return;
  }

  if (true) {
    util = __webpack_require__(/*! util */ "util");
  } else {}
  /* Temporarily set the stacktrace to 0 or errorStackTraceLimit,
     in order to only display a message */


  Error.errorStackTraceLimit = errorStackTraceLimit; // Make room for new message

  console.log(); // Make sure the message is a string

  if (typeof message !== 'string') {
    var metaError = new Error();
    metaError.name = 'Meta';
    metaError.message = "Param message needs to be of type: string. Instead, '".concat((0, _typeof2["default"])(message), "' was provided.\n\n------------------------------------------------\n\n\u200B\n        The provided ").concat((0, _typeof2["default"])(message), ":\n\n\u200B\n          ").concat(util.inspect(message, true, 8, true), "\n\u200B\n------------------------------------------------\n\n    ");
    console.error(metaError);
    return;
  } // Log the message to console


  logMessage(messageType, message); // Reset stack limit

  Error.stackTraceLimit = prevStackLimit;
}

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "addSubpath", {
  enumerable: true,
  get: function get() {
    return _addSubpath["default"];
  }
});
Object.defineProperty(exports, "consoleMessage", {
  enumerable: true,
  get: function get() {
    return _consoleMessage["default"];
  }
});
Object.defineProperty(exports, "isServer", {
  enumerable: true,
  get: function get() {
    return _isServer["default"];
  }
});
Object.defineProperty(exports, "lngFromReq", {
  enumerable: true,
  get: function get() {
    return _lngFromReq["default"];
  }
});
Object.defineProperty(exports, "lngPathCorrector", {
  enumerable: true,
  get: function get() {
    return _lngPathCorrector["default"];
  }
});
Object.defineProperty(exports, "lngsToLoad", {
  enumerable: true,
  get: function get() {
    return _lngsToLoad["default"];
  }
});
Object.defineProperty(exports, "redirectWithoutCache", {
  enumerable: true,
  get: function get() {
    return _redirectWithoutCache["default"];
  }
});
Object.defineProperty(exports, "removeSubpath", {
  enumerable: true,
  get: function get() {
    return _removeSubpath["default"];
  }
});
Object.defineProperty(exports, "subpathFromLng", {
  enumerable: true,
  get: function get() {
    return _subpathFromLng["default"];
  }
});
Object.defineProperty(exports, "subpathIsPresent", {
  enumerable: true,
  get: function get() {
    return _subpathIsPresent["default"];
  }
});
Object.defineProperty(exports, "subpathIsRequired", {
  enumerable: true,
  get: function get() {
    return _subpathIsRequired["default"];
  }
});

var _addSubpath = _interopRequireDefault(__webpack_require__(/*! ./add-subpath */ "./node_modules/next-i18next/dist/commonjs/utils/add-subpath.js"));

var _consoleMessage = _interopRequireDefault(__webpack_require__(/*! ./console-message */ "./node_modules/next-i18next/dist/commonjs/utils/console-message.js"));

var _isServer = _interopRequireDefault(__webpack_require__(/*! ./is-server */ "./node_modules/next-i18next/dist/commonjs/utils/is-server.js"));

var _lngFromReq = _interopRequireDefault(__webpack_require__(/*! ./lng-from-req */ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js"));

var _lngPathCorrector = _interopRequireDefault(__webpack_require__(/*! ./lng-path-corrector */ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js"));

var _lngsToLoad = _interopRequireDefault(__webpack_require__(/*! ./lngs-to-load */ "./node_modules/next-i18next/dist/commonjs/utils/lngs-to-load.js"));

var _redirectWithoutCache = _interopRequireDefault(__webpack_require__(/*! ./redirect-without-cache */ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js"));

var _removeSubpath = _interopRequireDefault(__webpack_require__(/*! ./remove-subpath */ "./node_modules/next-i18next/dist/commonjs/utils/remove-subpath.js"));

var _subpathFromLng = _interopRequireDefault(__webpack_require__(/*! ./subpath-from-lng */ "./node_modules/next-i18next/dist/commonjs/utils/subpath-from-lng.js"));

var _subpathIsPresent = _interopRequireDefault(__webpack_require__(/*! ./subpath-is-present */ "./node_modules/next-i18next/dist/commonjs/utils/subpath-is-present.js"));

var _subpathIsRequired = _interopRequireDefault(__webpack_require__(/*! ./subpath-is-required */ "./node_modules/next-i18next/dist/commonjs/utils/subpath-is-required.js"));

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/is-server.js":
/*!********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/is-server.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _detectNode = _interopRequireDefault(__webpack_require__(/*! detect-node */ "detect-node"));

var _default = function _default() {
  return _detectNode["default"] && "undefined" === 'undefined';
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-from-req.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

__webpack_require__(/*! core-js/modules/es6.array.find */ "core-js/modules/es6.array.find");

var _default = function _default(req) {
  if (!req.i18n) {
    return null;
  }

  var _req$i18n$options = req.i18n.options,
      allLanguages = _req$i18n$options.allLanguages,
      defaultLanguage = _req$i18n$options.defaultLanguage,
      fallbackLng = _req$i18n$options.fallbackLng;
  var fallback = fallbackLng || defaultLanguage;

  if (!req.i18n.languages) {
    return typeof fallback === 'string' ? fallback : null;
  }

  var language = req.i18n.languages.find(function (l) {
    return allLanguages.includes(l);
  }) || fallback;

  if (typeof language === 'string') {
    return language;
  }

  return null;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lng-path-corrector.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

__webpack_require__(/*! core-js/modules/web.dom.iterable */ "core-js/modules/web.dom.iterable");

__webpack_require__(/*! core-js/modules/es6.array.iterator */ "core-js/modules/es6.array.iterator");

__webpack_require__(/*! core-js/modules/es6.object.to-string */ "core-js/modules/es6.object.to-string");

__webpack_require__(/*! core-js/modules/es7.object.values */ "core-js/modules/es7.object.values");

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

__webpack_require__(/*! core-js/modules/es6.regexp.search */ "core-js/modules/es6.regexp.search");

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

var _objectSpread2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _url = __webpack_require__(/*! url */ "url");

var _index = __webpack_require__(/*! ./index */ "./node_modules/next-i18next/dist/commonjs/utils/index.js");

var _subpathIsRequired = _interopRequireDefault(__webpack_require__(/*! ./subpath-is-required */ "./node_modules/next-i18next/dist/commonjs/utils/subpath-is-required.js"));

var _subpathFromLng = _interopRequireDefault(__webpack_require__(/*! ./subpath-from-lng */ "./node_modules/next-i18next/dist/commonjs/utils/subpath-from-lng.js"));

var parseAs = function parseAs(originalAs, href) {
  var asType = (0, _typeof2["default"])(originalAs);
  var as;

  if (asType === 'undefined') {
    as = (0, _url.format)(href, {
      unicode: true
    });
  } else if (asType === 'string') {
    as = originalAs;
  } else {
    throw new Error("'as' type must be 'string', but it is ".concat(asType));
  }

  return as;
};

var parseHref = function parseHref(originalHref) {
  var hrefType = (0, _typeof2["default"])(originalHref);
  var href;

  if (hrefType === 'string') {
    href = (0, _url.parse)(originalHref, true
    /* parseQueryString */
    );
  } else if (hrefType === 'object') {
    href = (0, _objectSpread2["default"])({}, originalHref);
    href.query = originalHref.query ? (0, _objectSpread2["default"])({}, originalHref.query) : {};
  } else {
    throw new Error("'href' type must be either 'string' or 'object', but it is ".concat(hrefType));
  }

  return href;
};

var _default = function _default(config, currentRoute, currentLanguage) {
  var allLanguages = config.allLanguages,
      localeSubpaths = config.localeSubpaths;
  var originalAs = currentRoute.as,
      originalHref = currentRoute.href;

  if (!allLanguages.includes(currentLanguage)) {
    throw new Error('Invalid configuration: Current language is not included in all languages array');
  }

  var href = parseHref(originalHref);
  var as = parseAs(originalAs, href);
  /*
    url.format prefers the 'url.search' string over
    the 'url.query' object, so remove the search
    string to ensure the query object is used.
  */

  delete href.search;
  /*
    Strip any/all subpaths from the `as` value
  */

  Object.values(localeSubpaths).forEach(function (subpath) {
    if ((0, _index.subpathIsPresent)(as, subpath)) {
      as = (0, _index.removeSubpath)(as, subpath);
    }
  });

  if ((0, _subpathIsRequired["default"])(config, currentLanguage)) {
    var basePath = "".concat(href.protocol, "//").concat(href.host);
    var currentAs = as.replace(basePath, '');
    var subpath = (0, _subpathFromLng["default"])(config, currentLanguage);
    as = "/".concat(subpath).concat(currentAs).replace(/\/$/, '');
    href.query.lng = currentLanguage;
    href.query.subpath = subpath;
  }

  return {
    as: as,
    href: href
  };
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/lngs-to-load.js":
/*!***********************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/lngs-to-load.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.array.for-each */ "core-js/modules/es6.array.for-each");

__webpack_require__(/*! core-js/modules/es6.regexp.split */ "core-js/modules/es6.regexp.split");

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

__webpack_require__(/*! core-js/modules/es7.array.includes */ "core-js/modules/es7.array.includes");

__webpack_require__(/*! core-js/modules/es6.string.includes */ "core-js/modules/es6.string.includes");

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js"));

__webpack_require__(/*! core-js/modules/es6.array.is-array */ "core-js/modules/es6.array.is-array");

var _default = function _default(initialLng, fallbackLng, otherLanguages) {
  var languages = [];

  if (initialLng) {
    languages.push(initialLng);
  }

  if (fallbackLng) {
    if (typeof fallbackLng === 'string' && fallbackLng !== initialLng) {
      languages.push(fallbackLng);
    }

    if (Array.isArray(fallbackLng)) {
      languages.push.apply(languages, (0, _toConsumableArray2["default"])(fallbackLng));
    } else if (initialLng) {
      if (typeof fallbackLng[initialLng] === 'string') {
        languages.push(fallbackLng[initialLng]);
      } else if (Array.isArray(fallbackLng[initialLng])) {
        languages.push.apply(languages, (0, _toConsumableArray2["default"])(fallbackLng[initialLng]));
      }
    }

    if (fallbackLng["default"]) {
      languages.push(fallbackLng["default"]);
    }
  }

  if (initialLng && initialLng.includes('-') && Array.isArray(otherLanguages)) {
    var _initialLng$split = initialLng.split('-'),
        _initialLng$split2 = (0, _slicedToArray2["default"])(_initialLng$split, 1),
        languageFromLocale = _initialLng$split2[0];

    otherLanguages.forEach(function (otherLanguage) {
      if (otherLanguage === languageFromLocale) {
        languages.push(otherLanguage);
      }
    });
  }

  return languages;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/redirect-without-cache.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(res, redirectLocation) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  res.redirect(302, redirectLocation);
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/remove-subpath.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/remove-subpath.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.regexp.replace */ "core-js/modules/es6.regexp.replace");

var _default = function _default(url, subpath) {
  return url.replace(subpath, '').replace(/(https?:\/\/)|(\/)+/g, "$1$2");
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/subpath-from-lng.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/subpath-from-lng.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(config, language) {
  if (typeof language !== 'string') {
    return null;
  }

  var subpath = config.localeSubpaths[language];

  if (typeof subpath !== 'string') {
    return null;
  }

  return subpath;
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/subpath-is-present.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/subpath-is-present.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

__webpack_require__(/*! core-js/modules/es6.string.starts-with */ "core-js/modules/es6.string.starts-with");

var _url = __webpack_require__(/*! url */ "url");

var _default = function _default(url, subpath) {
  if (typeof url !== 'string' || typeof subpath !== 'string') {
    return false;
  }

  var _parseUrl = (0, _url.parse)(url),
      pathname = _parseUrl.pathname;

  return pathname.length === subpath.length + 1 && pathname === "/".concat(subpath) || pathname.startsWith("/".concat(subpath, "/"));
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next-i18next/dist/commonjs/utils/subpath-is-required.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next-i18next/dist/commonjs/utils/subpath-is-required.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es6.object.define-property */ "core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _default = function _default(config, language) {
  return typeof config.localeSubpaths[language] === 'string';
};

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/I18nextProvider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.I18nextProvider = I18nextProvider;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

function I18nextProvider(_ref) {
  var i18n = _ref.i18n,
      defaultNS = _ref.defaultNS,
      children = _ref.children;
  (0, _context.usedI18nextProvider)(true);
  return _react["default"].createElement(_context.I18nContext.Provider, {
    value: {
      i18n: i18n,
      defaultNS: defaultNS
    }
  }, children);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Trans.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Trans.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodesToString = nodesToString;
exports.Trans = Trans;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _htmlParseStringify = _interopRequireDefault(__webpack_require__(/*! html-parse-stringify2 */ "html-parse-stringify2"));

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function hasChildren(node) {
  return node && (node.children || node.props && node.props.children);
}

function getChildren(node) {
  if (!node) return [];
  return node && node.children ? node.children : node.props && node.props.children;
}

function hasValidReactChildren(children) {
  if (Object.prototype.toString.call(children) !== '[object Array]') return false;
  return children.every(function (child) {
    return _react["default"].isValidElement(child);
  });
}

function nodesToString(mem, children, index, i18nOptions) {
  if (!children) return '';
  if (Object.prototype.toString.call(children) !== '[object Array]') children = [children];
  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  children.forEach(function (child, i) {
    // const isElement = React.isValidElement(child);
    // const elementKey = `${index !== 0 ? index + '-' : ''}${i}:${typeof child.type === 'function' ? child.type.name : child.type || 'var'}`;
    var elementKey = "".concat(i);

    if (typeof child === 'string') {
      mem = "".concat(mem).concat(child);
    } else if (hasChildren(child)) {
      var elementTag = keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 1 && typeof hasChildren(child) === 'string' ? child.type : elementKey;

      if (child.props && child.props.i18nIsDynamicList) {
        // we got a dynamic list like "<ul>{['a', 'b'].map(item => ( <li key={item}>{item}</li> ))}</ul>""
        // the result should be "<0></0>" and not "<0><0>a</0><1>b</1></0>"
        mem = "".concat(mem, "<").concat(elementTag, "></").concat(elementTag, ">");
      } else {
        // regular case mapping the inner children
        mem = "".concat(mem, "<").concat(elementTag, ">").concat(nodesToString('', getChildren(child), i + 1, i18nOptions), "</").concat(elementTag, ">");
      }
    } else if (_react["default"].isValidElement(child)) {
      if (keepArray.indexOf(child.type) > -1 && Object.keys(child.props).length === 0) {
        mem = "".concat(mem, "<").concat(child.type, "/>");
      } else {
        mem = "".concat(mem, "<").concat(elementKey, "></").concat(elementKey, ">");
      }
    } else if ((0, _typeof2["default"])(child) === 'object') {
      var clone = _objectSpread({}, child);

      var format = clone.format;
      delete clone.format;
      var keys = Object.keys(clone);

      if (format && keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], ", ").concat(format, "}}");
      } else if (keys.length === 1) {
        mem = "".concat(mem, "{{").concat(keys[0], "}}");
      } else {
        // not a valid interpolation object (can only contain one value plus format)
        (0, _utils.warn)("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", child);
      }
    } else {
      (0, _utils.warn)("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", child);
    }
  });
  return mem;
}

function renderNodes(children, targetString, i18n, i18nOptions, combinedTOpts) {
  if (targetString === '') return []; // check if contains tags we need to replace from html string to react nodes

  var keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  var emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.join('|')).test(targetString); // no need to replace tags in the targetstring

  if (!children && !emptyChildrenButNeedsHandling) return [targetString]; // v2 -> interpolates upfront no need for "some <0>{{var}}</0>"" -> will be just "some {{var}}" in translation file

  var data = {};

  function getData(childs) {
    if (Object.prototype.toString.call(childs) !== '[object Array]') childs = [childs];
    childs.forEach(function (child) {
      if (typeof child === 'string') return;
      if (hasChildren(child)) getData(getChildren(child));else if ((0, _typeof2["default"])(child) === 'object' && !_react["default"].isValidElement(child)) Object.assign(data, child);
    });
  }

  getData(children);
  targetString = i18n.services.interpolator.interpolate(targetString, _objectSpread({}, data, {}, combinedTOpts), i18n.language); // parse ast from string with additional wrapper tag
  // -> avoids issues in parser removing prepending text nodes

  var ast = _htmlParseStringify["default"].parse("<0>".concat(targetString, "</0>"));

  function mapAST(reactNodes, astNodes) {
    if (Object.prototype.toString.call(reactNodes) !== '[object Array]') reactNodes = [reactNodes];
    if (Object.prototype.toString.call(astNodes) !== '[object Array]') astNodes = [astNodes];
    return astNodes.reduce(function (mem, node, i) {
      var translationContent = node.children && node.children[0] && node.children[0].content;

      if (node.type === 'tag') {
        var child = reactNodes[parseInt(node.name, 10)] || {};

        var isElement = _react["default"].isValidElement(child);

        if (typeof child === 'string') {
          mem.push(child);
        } else if (hasChildren(child)) {
          var childs = getChildren(child);
          var mappedChildren = mapAST(childs, node.children);
          var inner = hasValidReactChildren(childs) && mappedChildren.length === 0 ? childs : mappedChildren;
          if (child.dummy) child.children = inner; // needed on preact!

          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          }), inner));
        } else if (emptyChildrenButNeedsHandling && (0, _typeof2["default"])(child) === 'object' && child.dummy && !isElement) {
          // we have a empty Trans node (the dummy element) with a targetstring that contains html tags needing
          // conversion to react nodes
          // so we just need to map the inner stuff
          var _inner = mapAST(reactNodes
          /* wrong but we need something */
          , node.children);

          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          }), _inner));
        } else if (isNaN(node.name)) {
          if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(_react["default"].createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }));
            } else {
              var _inner2 = mapAST(reactNodes
              /* wrong but we need something */
              , node.children);

              mem.push(_react["default"].createElement(node.name, {
                key: "".concat(node.name, "-").concat(i)
              }, _inner2));
            }
          } else if (node.voidElement) {
            mem.push("<".concat(node.name, " />"));
          } else {
            var _inner3 = mapAST(reactNodes
            /* wrong but we need something */
            , node.children);

            mem.push("<".concat(node.name, ">").concat(_inner3, "</").concat(node.name, ">"));
          }
        } else if ((0, _typeof2["default"])(child) === 'object' && !isElement) {
          var content = node.children[0] ? translationContent : null; // v1
          // as interpolation was done already we just have a regular content node
          // in the translation AST while having an object in reactNodes
          // -> push the content no need to interpolate again

          if (content) mem.push(content);
        } else if (node.children.length === 1 && translationContent) {
          // If component does not have children, but translation - has
          // with this in component could be components={[<span class='make-beautiful'/>]} and in translation - 'some text <0>some highlighted message</0>'
          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          }), translationContent));
        } else {
          mem.push(_react["default"].cloneElement(child, _objectSpread({}, child.props, {
            key: i
          })));
        }
      } else if (node.type === 'text') {
        mem.push(node.content);
      }

      return mem;
    }, []);
  } // call mapAST with having react nodes nested into additional node like
  // we did for the string ast from translation
  // return the children of that extra node to get expected result


  var result = mapAST([{
    dummy: true,
    children: children
  }], ast);
  return getChildren(result[0]);
}

function Trans(_ref) {
  var children = _ref.children,
      count = _ref.count,
      parent = _ref.parent,
      i18nKey = _ref.i18nKey,
      tOptions = _ref.tOptions,
      values = _ref.values,
      defaults = _ref.defaults,
      components = _ref.components,
      ns = _ref.ns,
      i18nFromProps = _ref.i18n,
      tFromProps = _ref.t,
      additionalProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "count", "parent", "i18nKey", "tOptions", "values", "defaults", "components", "ns", "i18n", "t"]);

  var _ref2 = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) || {} : {},
      i18nFromContext = _ref2.i18n,
      defaultNSFromContext = _ref2.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using i18nextReactModule');
    return children;
  }

  var t = tFromProps || i18n.t.bind(i18n) || function (k) {
    return k;
  };

  var reactI18nextOptions = _objectSpread({}, (0, _context.getDefaults)(), {}, i18n.options && i18n.options.react);

  var useAsParent = parent !== undefined ? parent : reactI18nextOptions.defaultTransParent; // prepare having a namespace

  var namespaces = ns || t.ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation'];
  var defaultValue = defaults || nodesToString('', children, 0, reactI18nextOptions) || reactI18nextOptions.transEmptyNodeValue;
  var hashTransKey = reactI18nextOptions.hashTransKey;
  var key = i18nKey || (hashTransKey ? hashTransKey(defaultValue) : defaultValue);
  var interpolationOverride = values ? {} : {
    interpolation: {
      prefix: '#$?',
      suffix: '?$#'
    }
  };

  var combinedTOpts = _objectSpread({}, tOptions, {}, values, {}, interpolationOverride, {
    defaultValue: defaultValue,
    count: count,
    ns: namespaces
  });

  var translation = key ? t(key, combinedTOpts) : defaultValue;
  if (!useAsParent) return renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts);
  return _react["default"].createElement(useAsParent, additionalProps, renderNodes(components || children, translation, i18n, reactI18nextOptions, combinedTOpts));
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/Translation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/Translation.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Translation = Translation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useTranslation3 = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

function Translation(props) {
  var ns = props.ns,
      children = props.children,
      options = (0, _objectWithoutProperties2["default"])(props, ["ns", "children"]);

  var _useTranslation = (0, _useTranslation3.useTranslation)(ns, options),
      _useTranslation2 = (0, _slicedToArray2["default"])(_useTranslation, 3),
      t = _useTranslation2[0],
      i18n = _useTranslation2[1],
      ready = _useTranslation2[2];

  return children(t, {
    i18n: i18n,
    lng: i18n.language
  }, ready);
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/context.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usedI18nextProvider = usedI18nextProvider;
exports.getHasUsedI18nextProvider = getHasUsedI18nextProvider;
exports.setDefaults = setDefaults;
exports.getDefaults = getDefaults;
exports.setI18n = setI18n;
exports.getI18n = getI18n;
exports.composeInitialProps = composeInitialProps;
exports.getInitialProps = getInitialProps;
exports.initReactI18next = exports.ReportNamespaces = exports.I18nContext = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var defaultOptions = {
  bindI18n: 'languageChanging languageChanged',
  bindI18nStore: '',
  // nsMode: 'fallback' // loop through all namespaces given to hook, HOC, render prop for key lookup
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  // hashTransKey: key => key // calculate a key for Trans component based on defaultValue
  useSuspense: true
};
var i18nInstance;
var hasUsedI18nextProvider;

var I18nContext = _react["default"].createContext();

exports.I18nContext = I18nContext;

function usedI18nextProvider(used) {
  hasUsedI18nextProvider = used;
}

function getHasUsedI18nextProvider() {
  return hasUsedI18nextProvider;
}

function setDefaults() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  defaultOptions = _objectSpread({}, defaultOptions, {}, options);
}

function getDefaults() {
  return defaultOptions;
}

var ReportNamespaces =
/*#__PURE__*/
function () {
  function ReportNamespaces() {
    (0, _classCallCheck2["default"])(this, ReportNamespaces);
    this.usedNamespaces = {};
  }

  (0, _createClass2["default"])(ReportNamespaces, [{
    key: "addUsedNamespaces",
    value: function addUsedNamespaces(namespaces) {
      var _this = this;

      namespaces.forEach(function (ns) {
        if (!_this.usedNamespaces[ns]) _this.usedNamespaces[ns] = true;
      });
    }
  }, {
    key: "getUsedNamespaces",
    value: function getUsedNamespaces() {
      return Object.keys(this.usedNamespaces);
    }
  }]);
  return ReportNamespaces;
}();

exports.ReportNamespaces = ReportNamespaces;

function setI18n(instance) {
  i18nInstance = instance;
}

function getI18n() {
  return i18nInstance;
}

var initReactI18next = {
  type: '3rdParty',
  init: function init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
exports.initReactI18next = initReactI18next;

function composeInitialProps(ForComponent) {
  return function (ctx) {
    return new Promise(function (resolve) {
      var i18nInitialProps = getInitialProps();

      if (ForComponent.getInitialProps) {
        ForComponent.getInitialProps(ctx).then(function (componentsInitialProps) {
          resolve(_objectSpread({}, componentsInitialProps, {}, i18nInitialProps));
        });
      } else {
        resolve(i18nInitialProps);
      }
    });
  }; // Avoid async for now - so we do not need to pull in regenerator
  // return async ctx => {
  //   const componentsInitialProps = ForComponent.getInitialProps
  //     ? await ForComponent.getInitialProps(ctx)
  //     : {};
  //   const i18nInitialProps = getInitialProps();
  //   return {
  //     ...componentsInitialProps,
  //     ...i18nInitialProps,
  //   };
  // };
}

function getInitialProps() {
  var i18n = getI18n();
  var namespaces = i18n.reportNamespaces ? i18n.reportNamespaces.getUsedNamespaces() : [];
  var ret = {};
  var initialI18nStore = {};
  i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Trans", {
  enumerable: true,
  get: function get() {
    return _Trans.Trans;
  }
});
Object.defineProperty(exports, "useTranslation", {
  enumerable: true,
  get: function get() {
    return _useTranslation.useTranslation;
  }
});
Object.defineProperty(exports, "withTranslation", {
  enumerable: true,
  get: function get() {
    return _withTranslation.withTranslation;
  }
});
Object.defineProperty(exports, "Translation", {
  enumerable: true,
  get: function get() {
    return _Translation.Translation;
  }
});
Object.defineProperty(exports, "I18nextProvider", {
  enumerable: true,
  get: function get() {
    return _I18nextProvider.I18nextProvider;
  }
});
Object.defineProperty(exports, "withSSR", {
  enumerable: true,
  get: function get() {
    return _withSSR.withSSR;
  }
});
Object.defineProperty(exports, "useSSR", {
  enumerable: true,
  get: function get() {
    return _useSSR.useSSR;
  }
});
Object.defineProperty(exports, "I18nContext", {
  enumerable: true,
  get: function get() {
    return _context.I18nContext;
  }
});
Object.defineProperty(exports, "initReactI18next", {
  enumerable: true,
  get: function get() {
    return _context.initReactI18next;
  }
});
Object.defineProperty(exports, "setDefaults", {
  enumerable: true,
  get: function get() {
    return _context.setDefaults;
  }
});
Object.defineProperty(exports, "getDefaults", {
  enumerable: true,
  get: function get() {
    return _context.getDefaults;
  }
});
Object.defineProperty(exports, "setI18n", {
  enumerable: true,
  get: function get() {
    return _context.setI18n;
  }
});
Object.defineProperty(exports, "getI18n", {
  enumerable: true,
  get: function get() {
    return _context.getI18n;
  }
});
Object.defineProperty(exports, "composeInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.composeInitialProps;
  }
});
Object.defineProperty(exports, "getInitialProps", {
  enumerable: true,
  get: function get() {
    return _context.getInitialProps;
  }
});

var _Trans = __webpack_require__(/*! ./Trans */ "./node_modules/react-i18next/dist/commonjs/Trans.js");

var _useTranslation = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

var _withTranslation = __webpack_require__(/*! ./withTranslation */ "./node_modules/react-i18next/dist/commonjs/withTranslation.js");

var _Translation = __webpack_require__(/*! ./Translation */ "./node_modules/react-i18next/dist/commonjs/Translation.js");

var _I18nextProvider = __webpack_require__(/*! ./I18nextProvider */ "./node_modules/react-i18next/dist/commonjs/I18nextProvider.js");

var _withSSR = __webpack_require__(/*! ./withSSR */ "./node_modules/react-i18next/dist/commonjs/withSSR.js");

var _useSSR = __webpack_require__(/*! ./useSSR */ "./node_modules/react-i18next/dist/commonjs/useSSR.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/useSSR.js":
/*!************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/useSSR.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSSR = useSSR;

var _react = __webpack_require__(/*! react */ "react");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

function useSSR(initialI18nStore, initialLanguage) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var i18nFromProps = props.i18n;

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) : {},
      i18nFromContext = _ref.i18n;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)(); // opt out if is a cloned instance, eg. created by i18next-express-middleware on request
  // -> do not set initial stuff on server side

  if (i18n.options && i18n.options.isClone) return; // nextjs / SSR: getting data from next.js or other ssr stack

  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.initializedStoreOnce = true;
  }

  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/useTranslation.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/useTranslation.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTranslation = useTranslation;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = __webpack_require__(/*! react */ "react");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function useTranslation(ns) {
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // assert we have the needed i18nInstance
  var i18nFromProps = props.i18n;

  var _ref = (0, _context.getHasUsedI18nextProvider)() ? (0, _react.useContext)(_context.I18nContext) || {} : {},
      i18nFromContext = _ref.i18n,
      defaultNSFromContext = _ref.defaultNS;

  var i18n = i18nFromProps || i18nFromContext || (0, _context.getI18n)();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new _context.ReportNamespaces();

  if (!i18n) {
    (0, _utils.warnOnce)('You will need pass in an i18next instance by using initReactI18next');
    var retNotReady = [function (k) {
      return k;
    }, {}, false];

    retNotReady.t = function (k) {
      return k;
    };

    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }

  var i18nOptions = _objectSpread({}, (0, _context.getDefaults)(), {}, i18n.options.react);

  var _props$useSuspense = props.useSuspense,
      useSuspense = _props$useSuspense === void 0 ? i18nOptions.useSuspense : _props$useSuspense; // prepare having a namespace

  var namespaces = ns || defaultNSFromContext || i18n.options && i18n.options.defaultNS;
  namespaces = typeof namespaces === 'string' ? [namespaces] : namespaces || ['translation']; // report namespaces as used

  if (i18n.reportNamespaces.addUsedNamespaces) i18n.reportNamespaces.addUsedNamespaces(namespaces); // are we ready? yes if all namespaces in first language are loaded already (either with data or empty object on failed load)

  var ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(function (n) {
    return (0, _utils.hasLoadedNamespace)(n, i18n);
  }); // binding t function to namespace (acts also as rerender trigger)

  function getT() {
    return {
      t: i18n.getFixedT(null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0])
    };
  }

  var _useState = (0, _react.useState)(getT()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      t = _useState2[0],
      setT = _useState2[1]; // seems we can't have functions as value -> wrap it in obj


  (0, _react.useEffect)(function () {
    var isMounted = true;
    var bindI18n = i18nOptions.bindI18n,
        bindI18nStore = i18nOptions.bindI18nStore; // if not ready and not using suspense load the namespaces
    // in side effect and do not call resetT if unmounted

    if (!ready && !useSuspense) {
      (0, _utils.loadNamespaces)(i18n, namespaces, function () {
        if (isMounted) setT(getT());
      });
    }

    function boundReset() {
      if (isMounted) setT(getT());
    } // bind events to trigger change, like languageChanged


    if (bindI18n && i18n) i18n.on(bindI18n, boundReset);
    if (bindI18nStore && i18n) i18n.store.on(bindI18nStore, boundReset); // unbinding on unmount

    return function () {
      isMounted = false;
      if (bindI18n && i18n) bindI18n.split(' ').forEach(function (e) {
        return i18n.off(e, boundReset);
      });
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(function (e) {
        return i18n.store.off(e, boundReset);
      });
    };
  }, [namespaces.join()]); // re-run effect whenever list of namespaces changes

  var ret = [t.t, i18n, ready];
  ret.t = t.t;
  ret.i18n = i18n;
  ret.ready = ready; // return hook stuff if ready

  if (ready) return ret; // not yet loaded namespaces -> load them -> and return if useSuspense option set false

  if (!ready && !useSuspense) return ret; // not yet loaded namespaces -> load them -> and trigger suspense

  throw new Promise(function (resolve) {
    (0, _utils.loadNamespaces)(i18n, namespaces, function () {
      setT(getT());
      resolve();
    });
  });
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/utils.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/utils.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = warn;
exports.warnOnce = warnOnce;
exports.loadNamespaces = loadNamespaces;
exports.hasLoadedNamespace = hasLoadedNamespace;
exports.getDisplayName = getDisplayName;

function warn() {
  if (console && console.warn) {
    var _console;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (typeof args[0] === 'string') args[0] = "react-i18next:: ".concat(args[0]);

    (_console = console).warn.apply(_console, args);
  }
}

var alreadyWarned = {};

function warnOnce() {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  if (typeof args[0] === 'string' && alreadyWarned[args[0]]) return;
  if (typeof args[0] === 'string') alreadyWarned[args[0]] = new Date();
  warn.apply(void 0, args);
} // not needed right now
//
// export function deprecated(...args) {
//   if (process && process.env && (!process.env.NODE_ENV || process.env.NODE_ENV === 'development')) {
//     if (typeof args[0] === 'string') args[0] = `deprecation warning -> ${args[0]}`;
//     warnOnce(...args);
//   }
// }


function loadNamespaces(i18n, ns, cb) {
  i18n.loadNamespaces(ns, function () {
    // delay ready if not yet initialized i18n instance
    if (i18n.isInitialized) {
      cb();
    } else {
      var initialized = function initialized() {
        // due to emitter removing issue in i18next we need to delay remove
        setTimeout(function () {
          i18n.off('initialized', initialized);
        }, 0);
        cb();
      };

      i18n.on('initialized', initialized);
    }
  });
}

function hasLoadedNamespace(ns, i18n) {
  if (!i18n.languages || !i18n.languages.length) {
    warnOnce('i18n.languages were undefined or empty', i18n.languages);
    return true;
  }

  var lng = i18n.languages[0];
  var fallbackLng = i18n.options ? i18n.options.fallbackLng : false;
  var lastLng = i18n.languages[i18n.languages.length - 1]; // we're in cimode so this shall pass

  if (lng.toLowerCase() === 'cimode') return true;

  var loadNotPending = function loadNotPending(l, n) {
    var loadState = i18n.services.backendConnector.state["".concat(l, "|").concat(n)];
    return loadState === -1 || loadState === 2;
  }; // loaded -> SUCCESS


  if (i18n.hasResourceBundle(lng, ns)) return true; // were not loading at all -> SEMI SUCCESS

  if (!i18n.services.backendConnector.backend) return true; // failed loading ns - but at least fallback is not pending -> SEMI SUCCESS

  if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
  return false;
}

function getDisplayName(Component) {
  return Component.displayName || Component.name || (typeof Component === 'string' && Component.length > 0 ? Component : 'Unknown');
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/withSSR.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/withSSR.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withSSR = withSSR;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useSSR = __webpack_require__(/*! ./useSSR */ "./node_modules/react-i18next/dist/commonjs/useSSR.js");

var _context = __webpack_require__(/*! ./context */ "./node_modules/react-i18next/dist/commonjs/context.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withSSR() {
  return function Extend(WrappedComponent) {
    function I18nextWithSSR(_ref) {
      var initialI18nStore = _ref.initialI18nStore,
          initialLanguage = _ref.initialLanguage,
          rest = (0, _objectWithoutProperties2["default"])(_ref, ["initialI18nStore", "initialLanguage"]);
      (0, _useSSR.useSSR)(initialI18nStore, initialLanguage);
      return _react["default"].createElement(WrappedComponent, _objectSpread({}, rest));
    }

    I18nextWithSSR.getInitialProps = (0, _context.composeInitialProps)(WrappedComponent);
    I18nextWithSSR.displayName = "withI18nextSSR(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithSSR.WrappedComponent = WrappedComponent;
    return I18nextWithSSR;
  };
}

/***/ }),

/***/ "./node_modules/react-i18next/dist/commonjs/withTranslation.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-i18next/dist/commonjs/withTranslation.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withTranslation = withTranslation;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _useTranslation3 = __webpack_require__(/*! ./useTranslation */ "./node_modules/react-i18next/dist/commonjs/useTranslation.js");

var _utils = __webpack_require__(/*! ./utils */ "./node_modules/react-i18next/dist/commonjs/utils.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function withTranslation(ns) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function Extend(WrappedComponent) {
    function I18nextWithTranslation(props, ref) {
      var _useTranslation = (0, _useTranslation3.useTranslation)(ns, props),
          _useTranslation2 = (0, _slicedToArray2["default"])(_useTranslation, 3),
          t = _useTranslation2[0],
          i18n = _useTranslation2[1],
          ready = _useTranslation2[2];

      var passDownProps = _objectSpread({}, props, {
        t: t,
        i18n: i18n,
        tReady: ready
      });

      if (options.withRef && ref) {
        passDownProps.ref = ref;
      }

      return _react["default"].createElement(WrappedComponent, passDownProps);
    }

    I18nextWithTranslation.displayName = "withI18nextTranslation(".concat((0, _utils.getDisplayName)(WrappedComponent), ")");
    I18nextWithTranslation.WrappedComponent = WrappedComponent;
    return options.withRef ? _react["default"].forwardRef(I18nextWithTranslation) : I18nextWithTranslation;
  };
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Hidden */ "@material-ui/core/Hidden");
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
/* harmony import */ var _components_BannerNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/BannerNav */ "./components/BannerNav/index.js");
/* harmony import */ var _components_Education__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Education */ "./components/Education/index.js");
/* harmony import */ var _components_Experience__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Experience */ "./components/Experience/index.js");
/* harmony import */ var _components_About__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/About */ "./components/About/index.js");
/* harmony import */ var _components_Projects__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Projects */ "./components/Projects/index.js");
/* harmony import */ var _components_Location__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Location */ "./components/Location/index.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _components_PageNav__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/PageNav */ "./components/PageNav/index.js");
/* harmony import */ var _components_Parallax_Decoration__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/Parallax/Decoration */ "./components/Parallax/Decoration.js");




















var sectionMargin = function sectionMargin(margin) {
  return margin * 20;
};

var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    mainWrap: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      background: theme.palette.type === 'dark' ? theme.palette.background.dark : theme.palette.background.paper
    },
    greyBg: {
      paddingTop: theme.spacing(10)
    },
    spaceBottom: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      marginBottom: sectionMargin(6)
    }, theme.breakpoints.down('sm'), {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }),
    spaceBottomShort: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    },
    spaceTop: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({
      marginTop: sectionMargin(6)
    }, theme.breakpoints.down('sm'), {
      marginTop: sectionMargin(3)
    }),
    spaceTopShort: {
      marginTop: sectionMargin(theme.spacing() / 2)
    },
    containerWrap: {
      marginTop: -40,
      '& > section': {
        position: 'relative'
      }
    },
    parallaxWrap: {
      position: 'relative'
    },
    bottomDeco: {
      top: -200,
      position: 'absolute',
      width: '100%',
      height: 'calc(100% + 200px)'
    },
    education: {
      '&::before': {
        height: '700px',
        content: '""',
        display: 'none'
      }
    }
  };
});

function Landing(props) {
  var classes = useStyles();
  var onToggleDark = props.onToggleDark,
      onToggleDir = props.onToggleDir;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("title", null, "Sean Droke")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7___default.a, null), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    id: "home"
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.mainWrap
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onToggleDark: onToggleDark,
    onToggleDir: onToggleDir
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    id: "home"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_BannerNav__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onToggleDark: onToggleDark,
    onToggleDir: onToggleDir
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    className: classes.education,
    id: "education"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Education__WEBPACK_IMPORTED_MODULE_11__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    id: "experience"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Experience__WEBPACK_IMPORTED_MODULE_12__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    id: "projects"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Projects__WEBPACK_IMPORTED_MODULE_14__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.greyBg
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.parallaxWrap
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    id: "about"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_About__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Parallax_Decoration__WEBPACK_IMPORTED_MODULE_18__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    id: "location"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Location__WEBPACK_IMPORTED_MODULE_15__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.parallaxWrap
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.bottomDeco
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Parallax_Decoration__WEBPACK_IMPORTED_MODULE_18__["default"], null)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("section", {
    id: "contact",
    className: classes.spaceTop
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_16__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_8___default.a, {
    smDown: true
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_components_PageNav__WEBPACK_IMPORTED_MODULE_17__["default"], null))));
}

Landing.getInitialProps =
/*#__PURE__*/
Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
/*#__PURE__*/
_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", {
            namespacesRequired: ['common', 'profile-landing']
          });

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
Landing.propTypes = {
  onToggleDark: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired,
  onToggleDir: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./static/images/bootstrap.png":
/*!*************************************!*\
  !*** ./static/images/bootstrap.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/bootstrap-8b8ece6a20441242711a041acd01ba85.png";

/***/ }),

/***/ "./static/images/comcast.png":
/*!***********************************!*\
  !*** ./static/images/comcast.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/comcast-ee5d272ae3cc51baca5755d4514734e3.png";

/***/ }),

/***/ "./static/images/cpp_logo.png":
/*!************************************!*\
  !*** ./static/images/cpp_logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cpp_logo-614e81bd92afc62be8127beac5e1b9af.png";

/***/ }),

/***/ "./static/images/django.png":
/*!**********************************!*\
  !*** ./static/images/django.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOwAAAEsCAYAAADATF8UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAB79SURBVHhe7Z0LnBxFncc3PAKccFHEBxCCwCfL9mMn5OMD4cwpGgV8oLnjISB4fM4gQmJIslPVkyy7gfOBiqfhVILgRRIy3TWzeZIExRcfvENQORAx4AvkYQBFCO+Qx2fv/6+pjckySbZ7NttTNb/v5/MjyTI709Vd36mq7urqNmAHQSL/Pewr9QdKWpmwGvX7SvwtXBK91hRpz6Gm7EX7a224bE7dbbEhetupDFwWUypgExA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUQFiQNxA2BRAW5A2ETQGEBXkDYVMAYUHeQNgUUCX3E/mTwtp5/Z0rL7MyvO1cBghrKRA2BVNY2OibQV/pV1Tp77ExtW2PvsllMaUCNgFh0zFxwYJ9xi7s2W/cmvmjbQxvO5fBFAfYBoQFwCIgLAAWAWEBsAgIC4BFQFgALALCAmAREBYAi4CwAFgEhAXAIiAsABYBYQGwCAgLgEVAWAAsAsICYBEQFgCLgLAAWASEBcAiICwAFgFhAbAICAvAEDleXbq/H88dW1haCoKkdGKoSpP9JDrdr0Tn+BX5yTCWMohlKUyiaHCospZCJabT68/h0N8/SK99d1ju6vTjWWPHrZk+2nzMLoGwAGzHBFU6hCrU24NYTAn65GcDJeb7Si6jn91JUv7eT+QTQSKeo2xhcTpX9fQX1syj9PYXVg8h+rXz+sNlc3UFpvd+vvae8nf0GT/1YrHYq8qSXy2ezttx1OJpB5lN09DrzoOwoCVpLxcPpZZuMrd8JOD1VKFupzxKeblzZXdNwpt6SEqzsPOKbi1auHROv5aGKl9QqV8xd5tKRJW3VHsvek9+b/0Z9Hn8ufyZtE0b6QvjQarg36NcQS31qSTsXK70dd/TgkBYMGT85XPH+uXiR6hV+w+qNLdSBVrP0m0Tk4QJl5OQLCMJNbiyjWhYaG7BaXtYXt5Glpu2+4W6r7ckEBbslIkLpu5TqEbv8FVRUCW5hfIkC8ldUy0nt5Y2tVa0rTZ3hzkQFuxIf1tbZ7X0Lr8iPkcV4+5QyY1aUGql9Lgx75azxQNhgcZfJjqoqytojHcHjSu36HEgjzktb5FcS+7CdreNClXp3KBSujxIxDzbEq7svsKLxSmmNHbR0dOzL3V3P0JdRUWSbtjW1YWkTZvchdWPoIxum3DLFa8+g29BJt76hf4gltea0tgBX3rxlLiIJP05n4jhE0b8Z70KgjRXmkNYe58ZW1jd0+8n4mumNM1NUC690deTEMSD+hIIRV9aqVMwpDkDYRuLFcKOXzLz9X5FzxZ6iK9T8plenDyyMxC2sTS1sOPmTx/tV0oXkpzr9HVSFrVOIRB7AmEbS9MKG5bFZL8qf6q7viu66248Yl8gbGNpOmF5IryfyOv40oyenoeur1OBsI2lqYT1VXR+UI0e1Gd9cWnGyUDYxtIUwoaLxeG+kjfwySSMU90OhG0suQsbxF3vDyqlB7hVxSUa9wNhG0t+wvaTrEqWaKy6CSeVWicQtrHkIuzRavohoZIx33OKGUqtFQjbWEZcWD/Wk/R/3nlTL84At2AgbGMZUWG9RE4iSR/Rl2vqbAzifiBsYxkxYf2y+NegWnoa49XWDoRtLCMirKfEGUE1egmXbBAI21j2uLB0cD4V9pU22rqDkOENhG0se1TYIBFnUTf4ZZwJRgYCYRvLHhM2iItnQlZkcCBsY9kjwvpq9kkk6/PoBiODA2Eby7ALG94owkBF6/VN5nU+EGntQNjGMqzC1laGEHfzDKZ6H4YgELaxDJuwvGi3H4uVBUyKQHYRCNtYhk3YoFy8XC+KhumGyC4CYRvLsAjrxV2nBdXSVtweh+wuELaxNCzs0fGssfRGjww8PhFBdhUI21gaEra7u3uUl4gVOMmEDDUQtrE0JCz94oV6fjDGrcgQA2EbS2Zh22N5JL3Bk1gsDUkTCNtYMgsbJGKJPitc500RZGeBsI0lk7D60f2049EVRtIGwjaW1MJOXNl7AP3CPTgrjGQJhG0sqYX1EzmtcznOCqcK9US4ovJ4v25aqLcCYRtLKmHbb4gOJmEfwS1zdcJS0n7hs+Y8ttcP4F07r18/CZ6/4FhKJTZRZdm8Y8RmlpZfw6/Vv0O/q58pRO+l97VDMkPYxpJKWPqFEtZk+nu0aLQ/tJQkGH2ZvUA786FART8ME3mdH8vLSNKLgqR0lsfj/qR0ohcX37V9/Ir8J6pAH+bX8Gv5d/h3+T34vfg99RcAfwZ9Vk3g+ttjQyBsYxmysPzUc6o8T3AlrfdGrRItqWlBfSVfpJ/9MqiK+Z6S54ZKhG++duoBZpc1DL8Xvye/N3+G/iwln7P52UMQtrEMWVhqCWQrj135ALOk1D19hVrC2/xYzOwoy+PaurtHmV2056HP8lXJoxZ4Gm3Dn8KqfdJC2MYyJGHbl9HYNRaPhktbr3XV41Je9DwRT1EWUEt3gtktuUIH7SYbKx2EbSxDEjZIos+0WuvKrVeBRKVu799oKPBlT808xuyO/LG40kHYxrJbYcfNnz6advDdthYwS/SJNRKWyv1dfrSI2RXNA4TNjuvCUjfwA0Ffi1wnpDKax17eH8RiitkFzQeEzY7rwlKXsNwKl3IGLtFweTsWX/pmU/zmBMJmx2Vh/Yo8ggq3wfWVJPjEkqlI3abozQ2EzY7LwoZKTHf9eThmJtGmUBUvMMVufiBsdpxuYWP5o06HJ/mzrH41esWLi58wRbYDCJsdV4WlFqed/scLzp5s4kkH1WhrkHSdZ4psDxA2O64K6yt5qbPd4QpVHD5gcbFkimsXEDY7TgrbzzNp5PddFZbnAgeJWGRKax8QNjsuCutXPnsECfuMi2eHazfeiweOVqVDTHHtA8Jmx0lhlTjbybtyeDxejTZ1lMVkU1Q7gbDZcVFYGuN9y8XJElwmLxELTDHtBcJmxzVhx62ZPpoKdJ9rLSyXx1fycX/5rLGmqPYCYbPjmrCFOBpPP3jJtcs5IU87jC2ZybQ7IGx2XBOWCnOeo63rY1afaNoeCJsd14T14+J/ujZ+1a1rInpMEe0HwmbHOWGVvMXWwtQNV5BEbOBHi5gi2g+EzY5Lwnpq5utoZz7OO7Xei20MT/7wY1nWBXQFCJsdl4QNysW3BonY6MwJJyoHj187yl0f0wV0BQibHZeEpR15dsiyWrzu7fbRJ5ti8eiRy2eM0QV0BQibHbeElZe5dMJJlyWRC3XhXALCZsclYblyO7M6It+Roy/niPN14VwCwmbHrRZW3KpXYKjzQuvCFSMWL3qLmmh50uECwmbHFWEn/bh3b9qRf3Bl0kTYN4crxt0dPT37mkPlDhA2O64IW1g4Y0ygxAbeofVeaFv0+LUirzWHyS0gbHZcETZcMutYP5GvuHJJh+975UXkzGFyCwibHXeEjd6pZXVBWC5DIrZ4VXGKOUxuAWGz44qwQRx9KHTmDLGuFC8cu7jYbg6TW0DY7DgjrIrO7FzVU/dFtoUfZEWF+vMJ1xcPNIfJLSBsdlwR1lPRpyesvbzui2yLvv6aRL8Yu7BnP3OY3ALCZscVYf1ETptwsyPC0sGg8qwa0YctjyQQNjvOCBvLK/kf9V5kW/RsLRenJA4AYbPjirBeLOY7I2zthvXa9C0XgbDZcaaFpf84I+zKy/pDl1aYGAyEzQ6Ebb7olf2V7DWHyD0gbHYgbPMFwjZvIGxjgbA2AmGzA2GbLxC2eQNhGwuEtREImx0I23xhYXGWuDkDYRvLNmE95dB1WBa2Ij5nDpF7QNjsONTCfq6wprfui2yLWZfK/qfU7QwImx1XhA2UuMiZucS8eHgiE3OI3APCZscZYZPiZ1ya/B8k0Q/bfty7tzlMbgFhs+OOsOIsZ+6H1bfXiQeOV1ftbw6TW0DY7LgibJhEp3JXst6LbIuuFIl8xqt0vckcJreAsNlxpoWN557Aa/k6tKbTxo4lXe80h8ktIGx2XBHWj0WHrxxZNdHlVf8ZCJsdV4Sd8J3SIfSX53UrW+eFtqVzZTdVDHmlOUxuAWGz44qwHZWefamCP8ILmNV7oW0xjxz5AR8gc6jcAcJmxxVh2/rb2ugH/+vKs3XMyol/aV8WHWwOlTtA2Ow4IyxBLWzZlTPFZiy+JUjEB3ThXALCZsclYYMk+qK508WJmOfDXqUL5xIQNjtOtbCVaKozj5ukcFn8WNw9ccHUfXQBXQHCZscpYZU8if6xyYlLO5xaOTZ7cfFduoCuAGGz45KwxywWh9M/NrhyaYdjusVf1wV0BQibHZeE5a4jtbK/DJe6cWmHox9QnYg/H62mH6IL6QIQNjsuCcuQsNfpVqnOi21NJ99uV5aXmiLaD4TNjmvChhU5zdbC7Cz65FMi1nVULn6NKabdQNjsuCZskHSdSD/Y7MyJJ5Pa83bEDFNMu4Gw2XFN2MLC3jFUoPW8Y+v9gq0J++gAJfLRwtLZbzBFtRcImx3XhOUpijSO7eNxX71fsDl6bB4XrzEltRcImx3nhCW46+iisNzNpwqzxUuiU01R7QTCZsdFYTuS4kT6oRv3xg6KOVAPhYvF4aa49gFhs+OisOPWTB/tJ/Iel67Hbh8zX3otl9MU2S4gbHZcFJahH37Jteux24el9SviWzxmtw4Imx1XhfUSOSmoyC0udot1qFxa2tjCVSkgbHZcFXbswvP3o27xb1y6e+dV4ZNQdOCoAr16BzQzEDY7rgrL0I69wjz2wtlwBdItrRLfLSycMcYUvbmBsNmp7bs1TgobKhHycqHOdosHwt3jm3roT3l7kMwsmOI3LxA2Oz/u3ZufCmFrz3GXwupJFIn8vpPXZOukcxW1tFX5N37OUFt/9yizF5oPCJuZidf2HuArea++i6vO9jV7di0sQa3sGU6PYweFJehcQV9QFfmDpr3xHcJmxnlh+Q4XamXvbyVpdReZWlv6+2Yq+w1Uwd5udkdzAGEz47ywDHURZ7t8TXZn4YNa4LFtInkcvyxU8mPtK4oHmt2SHxA2My0hbPsN0cHU0jzcUq3sdhkQVz93Vsl1QSK+6vVF7ztqce9BZheNOCTsCgibnpYQlqEXl1qxld0hVNn4BJx+Uj11m6niPUgHv8w3S9BYf/LEpXPezE9QMLts2OCle7hlL8TR+CApvacjkefRQVtnY6WDsI1lyMK233AJtbKiZVvZweEnC3CLyzuwsJoE5p8n8in6816qkCuDpHi1XylJ2mcX0r/PJqk/4Jdnn0SVZcfQz/T/S6JzPCXP9VV0id+nf+9r9HvfpdfcTD+7m/7+OL3uOfqMrfzFaes879yFrch/pN7iE7wd9bav2TNkYRn6hc+2fCu7k2iB9Rnm7n5+MDa3woWbL9fXd/Xkk11dy+aTXPx7FJaff0//Pv2dT35pQZfN1Uvd6JZhV+/V5MlbWP5c+hJ8uiWEDRfN/gf6hr+PK0+9N0PqpMLh+3BJ6F1ES2ixiENNcwhLn98KwjLhkuJHdXesBSoXMvzJW9iJ18p/pO14qmWEZfyk2MfPX633hgiyq+QtrHfj7HH0+RtCSxucTMJ6i6JjAiX+ihNQSNrkLWywSBaowr9oaw8xk7CMH0eX7PZkCoIMSt7CTigLnz7/hZYTtq2/n6QVy1x6PCWy55N7C5tEb6Pe4Us2C+slxatNcdLhx3PH0ps8hLPGyFCTt7C+ik4OEmHtSip8uY/2X7cpTnp81XVyUC29YuvMEWRkk3sLW43eb7OwE26+vN9T0adNcbLhx1LqCRUYzyK7Se7CxtGZYSXaWm/bbAgL6yt5sSlOduggfJtn+NT7EAQZSP5d4tKnbO4NDpuwx6ur9ud5r5034SQUsvPk3sIqcZHNlyNrwopLTHEa4+jvTD8kqMifmZu/EeRVyVvYUMnLbL6yUVg7jy/rXGiK0zjt5eKhfiW6G5d7kHrJv4WVn7d2ll6ltsJnkMh/McUZHsIls46lD/gdxrTI4DSBsAusXbp3TwnLeCo6hsa0d+rlQ+t9ONKSyVtYT8nFfB9zvW1r+hhh/SQ63RRnePEWdr2JBvm31db8xSUfJGdh+7tHUetk5VpYOrTveJIST/4wJRp+eN2jQEWqsOoyOliYXNHqyVPYcWvmjyZh77B3tQ7abtp/QSxOMEXaM0zqnbQ3dY+v1CsmYBpjSydPYXkBBr1kr6XXYbWwfVG/F5dGZr1sOlDnU9f4aVz2ad3kKSw/O4laWGtvXucvGmr4NvEjdEyR9jwdZXlcUCn9jMe1mH/cesm1hV0SHaUXsrP0fIr2JZEvh0suPcoUaWTQK9cp8bXaWS+sXNFKyVNYHvuRsNY+3K0mrHhpQiyPNEUaWcIkOpUG0ffy6oBYvaI1kqewXixPo23Yaq2w5Ajtu6c7vnHxa0yRRp7xS2a+3k/kl/mmYn35x9LxBTK05CksT+mzuWGobbv468Rrpx5gipQfQbn4Vr8iV+u1fXk2B67bOplcheUHlFs8ZZZnaPlKruNn3Joi5Y9fjU4Pq6U7BxbQhrhuJV9h5XXWTkuksA++iu5q6+9vrmcXc5PvKXERbeS9/I2oT0xBXCeSm7BT7H3i30C4EaPh4/dNiZqPoxZPOyhU0adJ1rv4IVS4FGR/8hJ24sreA0jY39pcf/gJitRL6DNFal7GzZ8+OlSlM2ij1wYVuUmfVeYJ3Gh1rUtewvJtn4ESG2w+qakXYEvkdaZIdhBUxQm08VfThj+ix7mrqNXFJSFrwvN4qZV43rtu5uvMIR0R+Bqsn4hXbP6S16tNJOJLpkh2EZRLb/Qr8pPU4q6mPDPwpDc9RuEHUNUpMDKCITG4+8k9IT4Pwd05biF4aEMt3YP8jBtzKEcEatXPt304VVgzj//sMkWyl1AV24NEzKBv7h8EKnqKx7o6VDlwh9AeDn05ajGXsZh/f9SmPkGiJLdoj9Cft5Mw3w6VmB7ExQ+FfdHITq0jfBVdYfusOv3YUSUvMEVyA33jfCL+jcS9kQr5EH/TD1QgCNxAuMWkoYc++cdn7rnF5GfZ6hMhYlOQyPWU/6MvTkV/Xk77/8zORBzPE2PMocmP7u5RfhIttf1OMR7/B0vkh02p3KOwfMYYLy6+11NiDn3L30x5mAuuBeYWmCoed6H1jhi0c1ox/GW2g5T0JcePhuD9pW+cTsQL1J39Ewl6J/25mFqtbsrH+bzCceXioWa3Nx1jF56/n5/IdbZ3iWn/b/aq0TtMsdzHUzNfF6jiP5O4F1NLsIh2wF3UGjw50Apza6Fb4oEnnvMBtvgkxfbhLyWWUXddqXw1IUnGgZaSUiur2ECt44O0f35BYlaDJPoi/fkpL4lO9W7smlBY3jvG7E5r4Kct6i8by48llyFcKg43xWpN2mN5JLfCfiWaSpX1KyTwGtox6yhP0rfyZn3CZJvMRmiu7MuN1CzBwEoAdXbycEeLx+Fx44CA3CJuk3CQiGbbefv4gJN8j9P7PEBfWndS+fqozPPp3126pUyK7/HVbI/vpjK7xwlo7HwGybrV9pORdOwe7qj05Dfxv1mZuGDqPiwyXwqgQf7H/Kq8mCr4ldTq3Eh//oh23K+osv+R/v0k5TnamVtZWi3JmnnbWqxt4Z8PNdwFHfz7LB2/L/1//cXASeTLlGfNNvyJtud+EvIe2rZb6O8x/ey//Fhexs9hoSHBGbTdJ3mVrgl+RR4xdmHPfqaoLQHtiy/yF9pgASzMHZOaaR6xTbyFWiG+L5Hv/vcSOYm6jO/jedDcUvHsrDAREQkjwiSKSKyrSZhv7C70Xt+kg/J5qmBF+rfgZxb5sZhJEp7N78vv71VpTE49gqA6560dyeyAt6F9WXQwffPuazYNbI+ashftv1ttnpI4EKoDS02pAHCT8WrmYfTF94zNM5y2JetzYQGwBR7SaFldOHkYF+2fNAHAruBWyYnxK3/hVMUUUywA3ON4den+AS9rauk6xDuEhA2rpU5TNADcI0i6TiRhN7vQHdaTWnK46R+AEcNX8kpHLufoa+58xtsUDQC3OEx3h8V9XNHrCWBb+IvHFA0A9/DLXSfrGWgunB2m8Gw2UzQA3MNT4sbOFY48x0l/6YgtpmgAuEX7Qnmkn0irl4PZIVQOPxEbTPEAcAuq5L02L2c6ODwO95W40xQPAHfQz21KxMO23/u6fcyZ7mtMEQFwB+oKT9Mratap+LZGt7BxNNUUEQA34HWsqXX9gyuXcnT4hFNS3FhISoEpJgBu4CkxPXRkosRAuGvvK/kbXpvbFBMA+wlXR6+l1vVBp1pXCo9fqZv/LVNMANwgSMQ8V6YhbgtP+Ncnz4pnmmICYD/HxrPGUwV/OnDozLCOuf5aUDMPM0UFwH58JarOta6U2tlucZMpJgD2w+td6XGrI3OGt4++nJOIC01RAbAbXqOXRH3MtRNNOjytMpbPejfOHmeKC4DFdHePou7iche7whz9WBklV5nSAmA3XiKKtWcE16/wVocfMKZ7DcVPmOICYC9eLE4JKqWXA77ftV6Ftzz6Uk4s1vOjZUyRAbATXjydxnfrO5e5NV94++hufiKxBjGwG35CHlXoX7s6btWp6GuvmzqT4kRTbADsY4IqHRIk4jZ+4Ffdiu5I+GQTta5rTbEBsI/Cotlv0LKu6qlbyZ2JmYoYKvFBU3QA7IJl9ZX8qfOyUvRDs2NxZxueUAdshCdGkKz/w8+8rVfBXQs/Yc9PonNM8QGwh44bZh0X9EW/dn3MOhDduibirkkt9uxe4AC+Kn7EV9ETnSsdPhs8KLWJEhFuowMW0c8rHorZQUW+Ejq06uHuwmeG+aHTbb0YuwJLaC8XD6VKq7hVdXIy/87CdxlVo62U95tdAUBz41XFKVRh1xVu6qlV4HoV29GYSSDLzK4AoHnhxyfyE+ZI0k1Oz17aSfjZP34lej5IZMHsEgCak46ymEyi/pJbVZcW/U4TfQY8EV8wuwSA5sOrdL0pUGK+X5GbWuks8ODwzQvUu/htYXnvGLNrAGgiurtHhVV5AYn6+1ZuVXXMFEQvKX3U7B0AmofORE7yq9HNPE5txbHq4NS6wnKh2T0ANAd+LDqCJLo+4O4vzwVusTPA9dLJ0w+VfIDnSJvdBEC+6MXRVPQVP5HPFFb3tnb3d7vo/VCNNnUmXe8zuwqA/GBRPSV7qXI+pkVtpQkQuwv1Lrgr7MXFXrO7AMgHP541NlBiHnX1HuvkE0p6Aew6lbaFw3cc+YlYPkWpvcxuA2Bk8SvyiCCRl5Oof4aoOw+faPMr0b2Fpb0Yt4KRJ0iitwUV8VVfice1qA4viNZo9L6pRI+HSoRm9wEwgqgpe/mxlGE12jjhe1fU1iBycW3gYYiR9SUat77X7D0A8sGP544NqqVSUI3+yOMzfX0Vl222RZ9wq0YvB4k4y+wyAPKHF7smUT9DlfQ+PTGCJwW0uLi81Av1QF6mlhU3pIPmpH1F8cCwWjqXKuwd3LroiRL8QKc6FdrlsKxBX/SSr4ofN7sGgOalo9Kzr1eVp1FX8If8KA19UqpFJk7o8XyVZE2Kp5vdAYA9eNXie30ll1E2uz7hXw8FqqW/eHHXaab4ANhJEIsTAhX9N4n7Yu0ykEMzoCokK5WJ/v47LqcpMgD2E5ZLnZ4S80Mln9Itru2XhGiMrtdMrsifjF80+y2mmAC4RRB3HU0t7jyq8I/yySkbLwlxL6GztrLjNTRuf40pGgDuoldK7Itmkrj38xhQr0Bhgbi6Va1Gz/qJnGaKAkDrUFg4Y0xYnXMByXoXn2k1QtSVJc/wSTM9Xq1Ev+hIxPFm8wFoTQ5Tl+7vK3E2dZdvHZCDVxasJ89Ix3Tbt9J49etHLZ52kNlkAADPVw4S+eEglqu5i5zntdxtraqS93XgMZAA7Bq/LE/ylSyTMBtH9KZ4/qLQ0yzlFvr31eOXzHy92SQAwO7gW/o8Ja8heZ7VLe4evKWP31uPo5X8WajEZLMJAIC0+Krk+Sq6MqxG6wure4b19j7u/urHhfRF6/2KnHU8janNxwIAGsHrmzsuUNEcyh+5xW3oWq6eAKHHqZsp3/FUdIz5GADAcHLUotlvoNZ2Oon7q9q1XB53DlFcM06tda/FLUEs323eFgCwJ2m/vnggdWM/SeLezlMeucUkkV8tqRa1dpmmNq0w+rmnxBnmbQAAI8nEBVP38avR6WFFfo+7ujvcJWRENePUe/xKNHXitb0HmF8FAOSJr6KTfSX7qLu7pbBm3kCL+ls+oXTkwhl4CBUAzUhHWR4XVEtXcYva8Y2LHZio39b2/6f3jPhjUweVAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/hadoop.png":
/*!**********************************!*\
  !*** ./static/images/hadoop.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hadoop-fe1e4ccb5702b63dc60065ea19580984.png";

/***/ }),

/***/ "./static/images/hive.png":
/*!********************************!*\
  !*** ./static/images/hive.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/hive-c8933c6db28113b90e415218f6af3369.png";

/***/ }),

/***/ "./static/images/icons8-map-pin-48.png":
/*!*********************************************!*\
  !*** ./static/images/icons8-map-pin-48.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAACMElEQVRoge2Zz0sUYRyHn3dmKTLQWbcfdNkyhKKtjiF4ErSLQSeJztmhW4TQHxESEV42PS4pnoPYhQ5Cl2DBLhYktAURSRIuS2o7M98OY2jqLq7vO7we3uc0P97vfN5n5n1fXhhw2EWZfqDc7S8Qx+PACHBh63INoYx402p+eclknjEBGSscw9uYBHkA+C2aRYhMEfROqGK1aSLXiEDS+fVXwDC+D31XIX8ZenKwtgpv5nYVUCHIjpqQyOg+ACB58wxz4iQM3obg9PY9kb3tFSOs/XoCPNSN1v4CW2P+Pb7vM3Qn6fx6AxYXYKUGzZYvOYToupr78kEn39MpBiCO7wM+fde2O18pwbdP7ToPkAF/XDdeXyBZbSB/KTlbXIA/GwetvakbbkIgD0B3LjlbqXVSe1433MQkTmZpfTWZsO2Hzf61GpgQ+AoU9iyVB6/VQn8ICeXD16rXuvEGBLxpIDpEZYgfzejGawuo+eUlRKY6LhSeq5e1j7r5JlYhCHonECodVJQJso9NRBsRUMVqkyA7CjwDwjZNQ4Sn9GRvHanN3E5krP8KXnzv96mLj47XvwOw2X2Orp+fJyGc0d067Ma4wD/evvvx3xo/eONsKllm5oBFnIBtnIBtnIBtnIBtnIBtnIBtnIBtnIBtnIBtnIBtnEArlKK637Fp0vwCL3YcF9MKSU1gs0uVgDpCw4sys2nlpCYwVDjTAGYFSgMDuXpaOWb+E7cgjr3Uho7jqPAXHziYp4fwTesAAAAASUVORK5CYII="

/***/ }),

/***/ "./static/images/imgAPI.js":
/*!*********************************!*\
  !*** ./static/images/imgAPI.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var imgAPI = {
  avatar: ['/static/images/avatars/pp_girl.svg', '/static/images/avatars/pp_girl2.svg', '/static/images/avatars/pp_girl3.svg', '/static/images/avatars/pp_girl4.svg', '/static/images/avatars/pp_girl5.svg', '/static/images/avatars/pp_girl.svg', '/static/images/avatars/pp_boy.svg', '/static/images/avatars/pp_boy2.svg', '/static/images/avatars/pp_boy3.svg', '/static/images/avatars/pp_boy4.svg', '/static/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  profile: ['/static/images/philadelphia.jpg', '/static/images/seandroke.jpg', '/static/images/profile/pc.jpg', 'https://via.placeholder.com/400x400/4e5467/FFFFFF', 'https://via.placeholder.com/400x266/2f5ef3/FFFFFF', 'https://via.placeholder.com/400x266/dedafd/757575', 'https://via.placeholder.com/400x400/ea6f23/FFFFFF', 'https://via.placeholder.com/400x400/b79136/FFFFFF', 'https://via.placeholder.com/400x266/94fbf7/757575', '/static/images/profile/pc-dark.jpg']
};
/* harmony default export */ __webpack_exports__["default"] = (imgAPI);

/***/ }),

/***/ "./static/images/ipg.png":
/*!*******************************!*\
  !*** ./static/images/ipg.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/ipg-cc1c5ab725b3d00900bb0c3b6ec0499a.png";

/***/ }),

/***/ "./static/images/java.png":
/*!********************************!*\
  !*** ./static/images/java.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/java-d11a048456a51609f854dec58ee1f8ea.png";

/***/ }),

/***/ "./static/images/love-park.jpg":
/*!*************************************!*\
  !*** ./static/images/love-park.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/love-park-1c5f2fc0361372e6747e62916b35f93a.jpg";

/***/ }),

/***/ "./static/images/mongo.png":
/*!*********************************!*\
  !*** ./static/images/mongo.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mongo-beb6efb5a1e5fbc39a9bafb2741298f1.png";

/***/ }),

/***/ "./static/images/mssql.png":
/*!*********************************!*\
  !*** ./static/images/mssql.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mssql-c746da501cd070fb6e2c88ce82136115.png";

/***/ }),

/***/ "./static/images/mui.png":
/*!*******************************!*\
  !*** ./static/images/mui.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mui-d2b1e19091a3530dfb8bec06b5a926dc.png";

/***/ }),

/***/ "./static/images/mysql.png":
/*!*********************************!*\
  !*** ./static/images/mysql.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/mysql-af0dad0aff317476578e26326f7e565a.png";

/***/ }),

/***/ "./static/images/php.png":
/*!*******************************!*\
  !*** ./static/images/php.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/php-382de6398374fbfa0788e5bbad673e7a.png";

/***/ }),

/***/ "./static/images/profile-logo.png":
/*!****************************************!*\
  !*** ./static/images/profile-logo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/profile-logo-fa9608d9fb58b310eecd77c5de7ced25.png";

/***/ }),

/***/ "./static/images/profile/titleDecoDark.png":
/*!*************************************************!*\
  !*** ./static/images/profile/titleDecoDark.png ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAA9CAYAAAGivrWBAAAABGdBTUEAALGPC/xhBQAACM9JREFUeAHVW2uTFTUQZVFAQUQFRUURlocioFX6za/+fkurAEUKRC3k/RQQkcd6TpgOPZlO0pOZu3dJ1d0kne7OyZlM0pOZ3bRpSlpbW/sWvxXLx2ZLCNk3lrzngV6V0nOUr62srFwWWfQMxVURdvkHzCF/R+RRGYJ3Rajykyhvl3pQTrpn2x5RYI72j5lrz6xbid4nJgNO8NjrXpSQf5j2FxXRuFU17kN9J36xPRaglAL/DrLoOSjCUl8lOo40oc1FUexlc8kbXTOJ1xe1zF8o7TecZbRfiHuzL9VMnWEm/pDqWHXNZq89dchGLUM5kNcz6iomUm1sGUF2ReT6PooyKUjucCiX+gxseINuSh33kFYcUnc3nah0E+WAWjsOTuHsDTQeV8pp8S0IqGOlNQhPdw3X4fzpChwegeBtS7uTyXALKqHpVKfwuKbIK76rqqQUstNJ6RxW5Wqx6BDoTtAD8vQmzzouOoTVNrGE07jiiszKsw4NVMcsB6ks6zBVZB2dfN7letXsqZoODXRixHnJtAc65j0+cAjF917Y2H/R/r20oDyY9AOHUD4oBpn8dSUfdN5ziB6/UspWUe6cuNTDZq9W7DlEwxbdWCnv6Npf03rRIXqqTV5BJ/arUoBtvEDBIQS9JU0UVZ6bJlxcQhIfgtAMhUQZeW5F0lf5I+pz+wyRjzJOi4MrmSjoC7SDCD9NFNKqjCKVW/VRS53lIMgwSoabvemTVW5oqF3gqksCVEr3sb2cU/VZis0gAY73lnXDPgPQn2ZB1zlpAgmAjNBXS0AA1BV9lXxI25gJHGwA8AAKRYBUTKYBRSFBvlPK3nwUk+iAt3FuIcr1+SNYDUEc7GXVewrZ9ZxBKneDzDGTOszUz0I+WEoA9HJGvyd2gZwIkH3sxo/MXev1jooHaBEkwLG9tm2k/eo6VwDN4CPUz2sFlmtAsyABkFFeCB1Tp856LnTXYbt2xZOBZ1ogZRMkAHLL/0yUGnIuUb14w/BxypDdBdB/UvkAJAAeglI8vkgNHPU0pimZWED/BdDb2qgHEgC/RqOOEbWupzwGoPiLz5kiQP4cQK9KPYIEQL0HS/uYvAWg+L+IwgOpSA6gYYkKICcC5K5Vi+Wk31J+C42DdVOAlgxdbRikXmZcNl6l0ft26hjgGEOOelxOfZTqkwHC+SfsAED3lzpqbZsEEKCOqo7fV+XZis0AAY43WS/MgmzKjmQOqhkgvHH9TNM2gBzz5JvaD+pNAAGCJzO57c16dBh07BU0AYTz4kkPBmAd8nsx9fRGA0Tn8Yi856lfWe1X22ujAaKrfZ7uMJADqR5kuWmRqsb6KIDoIJy3RetygVF2mvbChyVP9WLdDRCOqSvnd9FBqQAbPoyFhPKbXZF3egxWOlk2cwOEB2tZyTruGrYCzNaurG8czzwOZi6A6IQndS7dDozOTsJeg2MbD+1d66W30y90jw3lcA6X2Lm2xipAjFQeyhP/7ipvCvM4D76rc7oKEM6t0XvRcVmRG8KKdnKnoNF/ESBGWNwxopd8Qc89M6hFH8VHhixAGHL0rrchGXz6LFhUrAHzTheWRS/mWYDQaFlWomMUrPnFp0dZdrRudtkxAWJEjPOyo9KeM2Xzcna61m7EZccCnl3bdKScwVAU19Y4PTfFkTkXBwxiJOEZQ6wacrOjxI/ZB/oe3NUDgHA05aR/zAmFdR40mLc9gBjBl8lIx1bHnPEM2GJnwNDbYSJANHBZkYhjLDDqt9hahGwBlogrFtDB1GVFXv2NGRxJ4flkmuKyEwACMemesqyMubQpGHPFAKYAXBg8klqNrI+5OSzXVpQdZHwTaUYalpeMzLOsZEyj2IyYgG0XGay9Ko1ejMJU5rTLg7rSlXdMmXeGvzYRmCIOuaN/xrkgD+BfmbR0EkEgZ8oJ/LjqMPEtxWkQ+TTUXoE/SyURBHIPkhmY0sUZyXdXGz4tjUQQyG3oUIWhCyDybkVn6c1LIREEMv40A1iDkUsg8poh3zCidScRBDKwHrud3wSRf2wY1hIg60oiCGQ02HuZkeApVRfy+VGpQ2/bupAI8hjr8TNh84ndCxZ6/+F3BrMyfCMzwm6hqgsnEQTy9IEhjDx2TB0QCWQI9GSqo7nsF0oiCNwOoMfmApv4+QVEDj4o0Tron8dDDKPCh+66bc7ywkjEAPilw8E5wRq+LoLI24acByzcvPTycQu69Y/7LWcV2UJIxAB4Mm8+DFfwtDRfBjlXxBB9c0x81pYnIGlifg+6D7VgjvLsJGIQnH1zfG8zZny3Qc5F9E3iSGBpXA+he2+M85puqbOa7aAdg+CbtZbTuoGvBgF37ltOu8cg0qtbdTkLiSCPOy934Np7gCqgRgW+XuJJOA8tzuLnOQXiQQc3HI8uVPNpMokgkIs3Y8C5Qpg8WruFM587sCSS8it+nhCIuiSShDanSSSCQF5961VYM6CRhjyL1zuwNr+ASjEEUso3QKSHdGXysthMIgjkufiBl67WvcQY0NqBNZBLqNzRgkL5DohsOnprIhEE8pul+IqmAGwRTcTM3d+L/QZ0rzqB8Pn8vlM3qnmBRAMQuIqK9aI46iywwJnX0jdDmj+duB6BSO/sDS7dJII86jKE4aPcMhLXPvP1rxMMb9XzTt0nIJIz2JVcJIJAzgCGMHO+OXMB7JS4+3IXnpq4CzME8pwCUYc7d1W3SiII5Jvf4/hVdaGziMQIgHHgXIlhzTn8GJx7UvZffMS4SAwI5AHqUVFeQs6vjBYVwP8G397n6OLhRZZEEMjPTPYvgTjpkjvwogP4v9CHeQokIFRu/i8X200SQSBfIvFl0jISiVvPA4yb6C+eAlUG/ABr5N+pzoBEEHgYSryNlpG4cU35oqcVM2PD353G+X/aA3kklC/S51zEnbiCGjew1pdYY/rJ6fLAlhuOJ/Ggg4+K4fAizEQQyBnAEKb2GOXpoEWHseey4k+Nl+EMQyDPgQR1QwjEb2Y58xjCLCtx9nEWbqTEGel9lXDjfyCrYmYEEEVnAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/profile/titleDecoLight.png":
/*!**************************************************!*\
  !*** ./static/images/profile/titleDecoLight.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAB6CAYAAAFLmLjPAAAABGdBTUEAALGPC/xhBQAAEH9JREFUeAHtnWvb5DYNhhcoh9ICLfCBD/z/X9fDlra0UE6+h1ezjuODZMuJZzK+rtlJbFmWH8uypGTefffupPKzMO4fLWP/XEH8uYJmQ4IUtZJK+FWNWNo0kgot35/GN6XrGtNUSnj8KmL05+h6c1ljuiGMbnKDRc3v3pUwbXWMhfliwzHcxI3SlquTNr4/e/tI3U6AHAM61UraJ73fTX83asI9bX8ftd9h2I0SEWkusyoWM02lSJnm2j+KiO4qFjON2k2X8RrctEmY5qSIObfahfZPXMD5F+HzB24KRcswXrQCq4nVWilvIgiWJXk+fmtQM9UyhG+L9jZ2jSiVKlaVN8H3XzWGe2rFuVRimEqXMmeX3HdK3FhiGNOk13+JKn4dXd8ucwxb0sVG4ncthp+kBMm9DBYv0GbqqYS7KSQM41u27a7EDGX0HdFbRdoeT/cuZcywxKhWH0/9RicM09FTJq126G9SCsOUQXz/2/gmcx1L+QkMW6P/JsOkVPVxdqVK1JV6hEK4nyo03U0lj8XCMEVN5SlaBhgVMhVQxnYVdETIkoDugmp2jQwq30ysJSC0JZrYtgrP6rcVSba5ZWcyeLz0d6sX6u9uJ0S1YhGyhEyNv7R9Ey5ysZ1KUK2QIwIiKP0xT99zk5SmoBohPQSM5Xof37xdVwVtGXNvAZEJnf7xTTj5Qtd/kJv0uybkiIAI8vt0sOi+JOh/A82/IrrbZW65MUvxYZz2ad2zQXJ8c/1yS4+gX8bEKbNPQ2OcVohpNdc96OcEZay7nsZC9gwQCz7S/7vAaLfMIqgIOTIAgo72h8e/w+dbLpJyRzSpN9+OqEh1sJ5zO8cQPZ5SaqZHO6AsMeFQave0PIp0owjGGZ9RXlkhR5mmBlrQzA7WUzkiYCpcz/jNPiMCxssbD+SKYu8maQnxnyAxtm24jCBYG7yVMan13bT1INhCTwbIeTHSpv62IvhLNee8h0PsEscvTXZWAeP0UJN5INCiXeRlEbCWvy4OEBrEKYmRi69rfXWJ3DcOPfpKVxzaHBC5urehPnzJ7D7U5K9Gl4p0+T8yrJvulGoWGcaWKjwdyeen/Zo6rRFwFD3xFXM63EwItwQU5unMtffx5ErqVN0wLQG9HVFz9FgT0MwsgTVGL2na3RZRrAlYa9uNkFTU+pYmnjVj2cowmGX2iWy321y2K6VLw012+t9TotpMU1rtfdN0BEY4Ermy2+k5AUfR0zoUuaXe9U0FbNql3LSjutHJwWqzYVIB3RzNSOjaZQ7FDX0soEaxN52TGw/0hOUdxVjAkqWXTrXvUgBV6yNtJRRv+igCjs5+NATNORO3HY2AI8iBws40CDSG79Lm/BwBR3WvZOwN8t1Ic0vtxdsqS5Ye4z2qalnGsytHVdBLPvZZbAy+8mJ8BJ8VQGSr5uR4H+rJ9Cxfzt7PbN8cgADH9iZV5pIug+GsciaIGvtHhImM/5wFgAffkhZ48C7xYEzracu2ZnsvWY4GkcNjxFlb8sA5EsSe92FymrcckEeBiDfuaX+/Dvx4xWCJIvHUTGE4QDwBRFZsqoYnSkJ0O1VZNIIEGbqL5gTuZY4LVHtiSNQtBximhBe7pvidM0GcCWDA41ZwgTisUheI3Haa3wZ0dl5KG6rGygw1R9BcoD4mab039hE7SWltdZx3ob11GP3HG0S2kCZTPCp3qb/Fxn9RYmKt9wSRPG4pn2WVq4dezIfFKXcB0gtEtq9FC3pAqvURAIXmUCA9DhYm4LUYAoL2m4WTEzjuwyHCaazxJTm5eTivoQ1k+zIKYqoB+xHm1WA6aiGkmJb0MWJOIvL+uD8a2l3/ERDPBJDDC21rFdyfnAuU6yfuUu6VkRz9va5nG57hwtwFDhds3x65tXaSbf1lPGDr2ioMW+Top6nxHEa1XwskY6pPbguIRACjr+HEgFivRwGU8dyB1IL4WZBgJRdGAOn9tgDJ1q6e3JqDBQ3Qgt07qVI/5Mu5MCV6bT2HEiexJiGBC0S8XaRtgei1hYIM5oLbgQmZVTBNKIfGrRFPIPsL5JKGUT9DA7SA4P/hmhxRSEjkfliUGxvAd6YgByLaSSb6rHKW9u/AqQCwOblTEFFbbMBZ5SwAZb5dQMYgEgXs3gkU7gd8nw2gTNEMpIDYGwXIwCPfyHCm/c3J/k2orLo1Uaelnj6e6chHmNgvz3SgU2lxZ8SVSNuWvl8FRInHzzzUuhdqFRAl98dEajnC7onO7LgCiJ8lE8TJlgMvaVrz9mwQGT8nQwrsmui9SZWbwJECl8BCE48K+4bneyaILZfmYWxjK4szvEoVBtr4XJNlqQwzv+ksTdSmuHK/vpmPinGEs0BsbeV4Gstv6zNALB0mMXDx9fIuz9EgMl7PmKslKOJF7prQhoHxxqqFMftlXZ4erYgnZrmOQztLP6Fd1jYeCaIkGQSUnu8lExRHgah1aVrALpkqOwJEQjiLS9MCUuukt/i4tR8B4shhkpsoUZY2ywOdljY3lqpuNoiWCasEfiPSujzQaWkt429oZ4M4c+u1nkyygMyPz9QcwUwQR12azWpnbnjEWyuxBsbXtT5dbTNB9HBpWpMquTy5xEWursVf1T4LxJaWqIRTEJVcntwC5uoUQ7RJZoDIadiyV23J9BSp3U3vY061tpjOdD0DRG+XpjUhOUCgay0gi+vu8niDOMulaQEpC6d5n0dD0xpv0+4N4pTtspG4fIN91GgZNK4ZIU8QS0a+PG3flr8a2InmGrqUST1BLLkb5dH9WsR9schgoa1K6gXiUS5NaTICoiXRsRSIrROxNHGv+jRZm97XxnHZ1h6a6CJIbaaNtvSQYE6aAwa2Lg/BRkF0EaIBUq255K5YvITbf8lZG6TVNgqiZeu0ZLG2pxqY9rdETRbadJyhp31izHdMD6poLaAlVrZo7m56I5p4Jojak1VLBzAW0DdA9oLY0oLNIBNutI69xeXpVooeEN3DJiPI1q1nWfCu5G0PiF0DGYEqkbOA1lQ/c9S6PHFGqCTDrt4KYutE3A3gXNG7gBbtLblNxalYQbRsjeKgnQ1DbkgY02IfLbQmF6fb8HaClnYbjc8tJ7VJWSyaeCaI3e5HshIWPupXX7QgmlYmEdzj1uvxq8UkaN0o1XY+26XxTnBYFEJ1yGg0sfdE9NBAFlAjo2Us+GldHmib47cILOpvmYiWdtYCuro8LRBHT0QtWDk6k5uRY9Cos/Cv2uQaiBaXoCFvV7P6dOzibvtbF1VlqoGoPp06J1HrNhtAGdvi8hSBLIFosRkikOe3ZauNjGux+cUtnQORk8sa5I9MJO3r7dKk/NN7i8JkXZ4ciLNOxFT43D3y5GTK0XrVWdwoZNspWCqwRb29JhHzOVoLZWyLA75TshTEovGU0SZ+F23OxDFj1pbxN4duDOLZLo3lpIwn73VtSbBsvIcYxA26XpIp+Zy5A2IRLQt5NwECouWEigf1uj7bFss8LHLght1icEDksztxhOsB3ztDfcCYtSEsCnVzeQDwrBORibB42owK9EcUi8sD7UerTeAIkFpjgIlo4zfhWvvX61p8X+0VBF6KuAUH64YSCi4oIcpY/MPGoe1VHBAQwB1YPTwLXku4e37JbP4W7pf/E0eJzA91e6ZzuBJQeM21kImg+iH+e9+VQLXI8lLEd+9IOmjiZcm0vyyjRcOUtFdXRBTQkrgiN4Efmf0/HJSYv8gyCFzZR8Qf7H1dFauI3/gqTghcURGZM5Exlm2kEEm/0jsjCEZ9r6aIM5LP7wOer/ROpFQ9l1fyETmGJVHdg1WpDz7mtP8BvjTos9VfRRFJv9TSM6PrCn+sIimeV+lA4AqKSHrmiPdiXumdDgWULs+uiLxsZEnPCC6936R3wJT/7/RVDAg8syKSnrG8k2SArUoKpoxr/p/eq1yfvPEZo2av9Mzo0r/SOwYEn00RZ6RnDHBmSV/pnSws28pnOpo5DmekZ7aI2e/wUXkS88o1VrB7FkUkfbL5FURlzmc0vdI7DdSfQRFJzRyRnmlA2WyWH2h4vjCBteVnCljbh34r6NEVESuItXmUwtMdMPdI7/DmkLy+NkPJD8X0URVRIuMz0jOjCwTmKM6IMpKaSvOjYIGiP2Ta6BGjZmTmOHpE2YPY98LvYYioLT/OkrnXDAiPGa1870KddfFoi8kCrBgZj6wfr5JpnlGTmvo8fDRrhnJ/HT4PE6nXdlaYx1KFo6f046alBDUKo0nvsE78iFqjhAwPHc/YOaYtFjeQn1MeRRFZrJXTM6OrR8CFwuQiX/xJXJGegjLCU2Nxe/i79XkERSQ1A6DPXrD4WLI4vcO8R19fqyn5MpiurogswiOlZ0YXlqiXDxE1J4BXfhSrio85EqmH7vOK1ueYJ0GeM3LhD66+UfLSj9eSH/xhnM2OA9aW4Gi5sqIisnOJjFeU7YgFxB8EA3xGfinoHWwQSRNRe/MNLPvLaouNBXy29Ix2dVgLlDBdE5TROw2DEi6V3lnp6MOPecb0TJhWs7AOOSWkIz4yUa+nMqLsBEL4jJ58A7u+sooikp6R56Z9M3ncXpoNCA1WzDsNA+7w9OYbWNrKCoqIAl4hPZNbGeat3YCkd/Ad4/ROjqe1TrIS3nxNcpytiBzF7PYrFtIzWCRLYb0kvWPp16JFyeF9WnrnLEUUx/ys8VsLM7udDcji9xSsIpvX+y0bFHwGX9Ucz1AEgJQUhUrIJyNi7qO4s5E5Ur0tGGuDlf4xfA4taapg9uDsuqtGxrIBvTH+NjCcEWyQ3pnBNzv/0Z2ZZVqoxOyPPjctsF6+mg04Kz86I70DoARSBDCHpHeOUkRLdAgIz1RQlNkbUAK+3Ns7I1hyTKOI3nx3Mh2hiD3R4U7QB6048oddWF3W0zsNg5LjwnnzDSw/lNmKOBIdfpDyMa/OeHOI9UQhvYMYInz4ekfqgeX/yyxFvHp6Bn+QhTujzErvoCu4GVOUcUbUPCs6PGNRrWPKBpyBq1UW6Gf8aeUpL0x4W0SswKzosGchjuwDlqUXF46UIx6LYAPfzvOVLzYZwafrCxOeinhEdBjmv2TBh1o1P8q6EPl65wRRcrffw3gp4pHRYZj/UoUFWf2HXWwULJl3GgYlx9oO8/VQRBYBga5YHunNIdwm1ts7DUN6h7hgKFIfUUR2GP5g78P70PWhC+kZSSQ/ykRYb9ZrSGkyk0XJ4dsdUfdGd/RbzTHP4DOt6tFf2uA4nfEjKnzRr8PHHBz1KCK76qqRMXjxZz+epcz4PQzYfBU+pmfU1qMZ87tqdAgAMwvHD5bwmQq+PYGGSWkUAJhfmLAoIkKvHh0qMOoiYe6zX1zoEsyhE37urPQOfFURtVYRr5yeucLcOelwO1RKE+i0Rf3ChEYRz3h4r53obLorzX1Wegclh3c1oq4pIjuEoAQmVyxXfHMIfUBxvNM78MU6FpWxFDWToEQJS+2h6WkLc75yaoqFJf0y48+dwJf0zi44yika2nvV9MyV3xwKy74rs9I7KOPm2Xd6NF85PcPcr7oBdxr4VjEzvUNgdFfGWBEf4eF9CbDR+ivPvYUdvh1H6l1pWh2U7Sg5fG+RuijiIz28V85TTXbluWtB4rTAbZn2wgQ+IikKBrpiufLce9YbRfy+p2Ojz0//AxpiN6tuc+9fAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/images/react.png":
/*!*********************************!*\
  !*** ./static/images/react.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/react-638be90904f9f9248d3c69cb2992c562.png";

/***/ }),

/***/ "./static/images/spark.png":
/*!*********************************!*\
  !*** ./static/images/spark.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/spark-782cc65c11a19ddf7fee7d74de57d950.png";

/***/ }),

/***/ "./static/images/spring.png":
/*!**********************************!*\
  !*** ./static/images/spring.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/spring-0881daccb5178410b18a1a36984da095.png";

/***/ }),

/***/ "./static/images/tierney_logo.png":
/*!****************************************!*\
  !*** ./static/images/tierney_logo.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/tierney_logo-65385e1ce85dddfb465dfa24d352182f.png";

/***/ }),

/***/ "./static/text/brand.js":
/*!******************************!*\
  !*** ./static/text/brand.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _imgAPI = _interopRequireDefault(__webpack_require__(/*! ../images/imgAPI.js */ "./static/images/imgAPI.js"));

module.exports = {
  profile: {
    name: 'Sean Droke',
    title: 'Full Stack Software Engineer',
    desc: 'Personal Website & Professional Portfolio',
    prefix: 'SJD',
    footerText: 'Sean Droke 2020',
    logoText: 'SD_Logo',
    projectName: 'Portfolio',
    url: 'seandroke.com',
    img: '/static/images/seandroke-logo.png',
    avatar: _imgAPI["default"].profile[1],
    cover: _imgAPI["default"].profile[0],
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ }),

/***/ "./static/text/link.js":
/*!*****************************!*\
  !*** ./static/text/link.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var link = {
  profile: {
    home: '/'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (link);

/***/ }),

/***/ "./theme/common.js":
/*!*************************!*\
  !*** ./theme/common.js ***!
  \*************************/
/*! exports provided: useTextAlign, useFloat, useText, useHidden */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTextAlign", function() { return useTextAlign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useFloat", function() { return useFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useText", function() { return useText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useHidden", function() { return useHidden; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);


var useTextAlign = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});
var useFloat = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])({
  floatLeft: {
    "float": 'left'
  },
  floatRight: {
    "float": 'right'
  }
});
var useText = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  var _title, _title2, _subtitle, _subtitle2;

  return {
    title: (_title = {
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 48,
      lineHeight: '72px'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, theme.breakpoints.down('md'), {
      fontSize: 38,
      lineHeight: '60px'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, theme.breakpoints.down('xs'), {
      fontSize: 28,
      lineHeight: '44px'
    }), _title),
    title2: (_title2 = {
      fontSize: 36,
      lineHeight: '56px',
      fontWeight: theme.typography.fontWeightBold
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title2, theme.breakpoints.down('md'), {
      fontSize: 32,
      lineHeight: '48px'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title2, theme.breakpoints.down('xs'), {
      fontSize: 24,
      lineHeight: '36px'
    }), _title2),
    subtitle: (_subtitle = {
      fontWeight: theme.typography.fontWeightMedium,
      fontSize: 28,
      lineHeight: '44px'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, theme.breakpoints.down('md'), {
      fontSize: 24,
      lineHeight: '36px'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle, theme.breakpoints.down('xs'), {
      fontSize: 18,
      lineHeight: '28px'
    }), _subtitle),
    subtitle2: (_subtitle2 = {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 22,
      lineHeight: '32px'
    }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle2, theme.breakpoints.down('md'), {
      fontSize: 20,
      lineHeight: '32px'
    }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_subtitle2, theme.breakpoints.down('xs'), {
      fontSize: 16,
      lineHeight: '24px'
    }), _subtitle2),
    paragraph: {
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 16,
      lineHeight: '24px'
    },
    caption: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: 16,
      lineHeight: '24px'
    }, theme.breakpoints.down('xs'), {
      fontSize: 14,
      lineHeight: '22px'
    })
  };
});
var useHidden = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__["makeStyles"])(function (theme) {
  return {
    lgDown: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('lg'), {
      display: 'none'
    }),
    mdDown: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('md'), {
      display: 'none'
    }),
    smDown: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('sm'), {
      display: 'none'
    }),
    xsDown: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.down('xs'), {
      display: 'none'
    }),
    lgUp: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('lg'), {
      display: 'none'
    }),
    mdUp: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('md'), {
      display: 'none'
    }),
    smUp: Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, theme.breakpoints.up('sm'), {
      display: 'none'
    })
  };
});

/***/ }),

/***/ "./vendors/hamburger-menu.css":
/*!************************************!*\
  !*** ./vendors/hamburger-menu.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sean.droke/Development/seandroke.com/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Chip":
/*!*****************************************!*\
  !*** external "@material-ui/core/Chip" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Chip");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Fab":
/*!****************************************!*\
  !*** external "@material-ui/core/Fab" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "@material-ui/core/Fade":
/*!*****************************************!*\
  !*** external "@material-ui/core/Fade" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fade");

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Hidden":
/*!*******************************************!*\
  !*** external "@material-ui/core/Hidden" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/LinearProgress":
/*!***************************************************!*\
  !*** external "@material-ui/core/LinearProgress" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/LinearProgress");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Popover":
/*!********************************************!*\
  !*** external "@material-ui/core/Popover" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "@material-ui/core/Snackbar":
/*!*********************************************!*\
  !*** external "@material-ui/core/Snackbar" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/core/styles/colorManipulator":
/*!************************************************************!*\
  !*** external "@material-ui/core/styles/colorManipulator" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "@material-ui/core/useMediaQuery":
/*!**************************************************!*\
  !*** external "@material-ui/core/useMediaQuery" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "@material-ui/icons/ArrowUpward":
/*!*************************************************!*\
  !*** external "@material-ui/icons/ArrowUpward" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/modules/es6.array.filter":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.array.filter" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.filter");

/***/ }),

/***/ "core-js/modules/es6.array.find":
/*!*************************************************!*\
  !*** external "core-js/modules/es6.array.find" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.find");

/***/ }),

/***/ "core-js/modules/es6.array.for-each":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.for-each" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.for-each");

/***/ }),

/***/ "core-js/modules/es6.array.is-array":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.is-array" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.is-array");

/***/ }),

/***/ "core-js/modules/es6.array.iterator":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.array.iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.iterator");

/***/ }),

/***/ "core-js/modules/es6.array.map":
/*!************************************************!*\
  !*** external "core-js/modules/es6.array.map" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.array.map");

/***/ }),

/***/ "core-js/modules/es6.date.to-json":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.date.to-json" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.date.to-json");

/***/ }),

/***/ "core-js/modules/es6.function.bind":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.bind" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.bind");

/***/ }),

/***/ "core-js/modules/es6.function.name":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.function.name" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.function.name");

/***/ }),

/***/ "core-js/modules/es6.object.assign":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.assign" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.assign");

/***/ }),

/***/ "core-js/modules/es6.object.define-property":
/*!*************************************************************!*\
  !*** external "core-js/modules/es6.object.define-property" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.define-property");

/***/ }),

/***/ "core-js/modules/es6.object.freeze":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.object.freeze" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.freeze");

/***/ }),

/***/ "core-js/modules/es6.object.to-string":
/*!*******************************************************!*\
  !*** external "core-js/modules/es6.object.to-string" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.object.to-string");

/***/ }),

/***/ "core-js/modules/es6.promise":
/*!**********************************************!*\
  !*** external "core-js/modules/es6.promise" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.promise");

/***/ }),

/***/ "core-js/modules/es6.regexp.replace":
/*!*****************************************************!*\
  !*** external "core-js/modules/es6.regexp.replace" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.replace");

/***/ }),

/***/ "core-js/modules/es6.regexp.search":
/*!****************************************************!*\
  !*** external "core-js/modules/es6.regexp.search" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.search");

/***/ }),

/***/ "core-js/modules/es6.regexp.split":
/*!***************************************************!*\
  !*** external "core-js/modules/es6.regexp.split" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.regexp.split");

/***/ }),

/***/ "core-js/modules/es6.string.includes":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.includes" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.includes");

/***/ }),

/***/ "core-js/modules/es6.string.iterator":
/*!******************************************************!*\
  !*** external "core-js/modules/es6.string.iterator" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.iterator");

/***/ }),

/***/ "core-js/modules/es6.string.starts-with":
/*!*********************************************************!*\
  !*** external "core-js/modules/es6.string.starts-with" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es6.string.starts-with");

/***/ }),

/***/ "core-js/modules/es7.array.includes":
/*!*****************************************************!*\
  !*** external "core-js/modules/es7.array.includes" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.array.includes");

/***/ }),

/***/ "core-js/modules/es7.object.entries":
/*!*****************************************************!*\
  !*** external "core-js/modules/es7.object.entries" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.entries");

/***/ }),

/***/ "core-js/modules/es7.object.values":
/*!****************************************************!*\
  !*** external "core-js/modules/es7.object.values" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/es7.object.values");

/***/ }),

/***/ "core-js/modules/web.dom.iterable":
/*!***************************************************!*\
  !*** external "core-js/modules/web.dom.iterable" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/modules/web.dom.iterable");

/***/ }),

/***/ "detect-node":
/*!******************************!*\
  !*** external "detect-node" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("detect-node");

/***/ }),

/***/ "hoist-non-react-statics":
/*!******************************************!*\
  !*** external "hoist-non-react-statics" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),

/***/ "html-parse-stringify2":
/*!****************************************!*\
  !*** external "html-parse-stringify2" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("html-parse-stringify2");

/***/ }),

/***/ "i18next-browser-languagedetector":
/*!***************************************************!*\
  !*** external "i18next-browser-languagedetector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),

/***/ "i18next-xhr-backend":
/*!**************************************!*\
  !*** external "i18next-xhr-backend" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "react-countup":
/*!********************************!*\
  !*** external "react-countup" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "react-material-ui-form-validator":
/*!***************************************************!*\
  !*** external "react-material-ui-form-validator" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-material-ui-form-validator");

/***/ }),

/***/ "react-scroll-parallax":
/*!****************************************!*\
  !*** external "react-scroll-parallax" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "react-scrollspy":
/*!**********************************!*\
  !*** external "react-scrollspy" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-wow":
/*!****************************!*\
  !*** external "react-wow" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "regenerator-runtime/runtime":
/*!**********************************************!*\
  !*** external "regenerator-runtime/runtime" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime/runtime");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map