/*!197
 * {
 *   version: "0.4.0.20170207",
 *   create: "20170207145011",
 *   git: "origin-taobao/u4_v8_shared_sdk_jsfm-feature-0.19--027e045",
 *   digest: "183606afcaf847976fe6e4983ec4dacc"
 * }
 !*/
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(264)
	var __weex_script__ = __webpack_require__(265)

	__weex_define__('@weex-component/4921d4510db0a127687a84f88dda307c', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	})

	__weex_bootstrap__('@weex-component/4921d4510db0a127687a84f88dda307c',undefined,undefined)

/***/ },

/***/ 264:
/***/ function(module, exports) {

	module.exports = {
	  "type": "text",
	  "classList": [
	    "link"
	  ],
	  "shown": function () {return this.href},
	  "events": {
	    "click": "_clickHandler"
	  },
	  "attr": {
	    "value": function () {return this.text}
	  }
	}

/***/ },

/***/ 265:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
	  data: function () {return {
	    text: '',
	    href: ''
	  }},
	  methods: {
	    _clickHandler: function _clickHandler() {
	      this.$call('modal', 'toast', {
	        message: 'click',
	        duration: 1
	      });
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ }

/******/ });