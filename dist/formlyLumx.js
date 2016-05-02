/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	(function () {
	  'use strict';
	  var USING_TEMPLATES = true;
	  /* Custom validation message defaults here */
	  var VALIDATION_MESSAGES = [{
	    name: 'required', message: 'Dit is een verplicht veld'
	  }, {
	    name: 'maxlength', message: 'Dit veld is te lang.'
	  }, {
	    name: 'minlength', message: 'Dit veld is te kort.'
	  }];
	  /* Module Templates + Data */
	  var MODULE_NAME = 'formlyLumx';
	  var PREFIX = 'lx';
	  var FIELDS = [{
	    name: 'checkbox',
	    template: __webpack_require__(1),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string,
	          description: check.string,
	          checked: check.boolean,
	          required: check.boolean
	        }
	      };
	    }
	  }, {
	    name: 'date-picker',
	    template: __webpack_require__(2),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          'label': check.string,
	          'required': check.boolean
	        }
	      };
	    }
	    //}, {
	    //  name: 'dropdown',
	    //  template: require('./fields/lx-dropdown.html')
	  }, {
	    name: 'flex',
	    template: __webpack_require__(3),
	    apiCheck: function apiCheck(check) {
	      return {};
	    }
	  }, {
	    name: 'input',
	    template: __webpack_require__(4),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string,
	          icon: check.string,
	          fixedLabel: check.boolean,
	          disabled: check.boolean,
	          className: check.string,
	          theme: check.oneOf(['light', 'dark']),
	          type: check.oneOf(['text', 'number', 'email', 'password', 'url', 'tel']),
	          required: check.boolean
	        }
	      };
	    }
	  }, {
	    name: 'radio',
	    template: __webpack_require__(5),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string,
	          description: check.string,
	          options: check.arrayOf({
	            name: check.string,
	            value: check.oneOfType([check.string, check.number]),
	            disabled: check.boolean
	          }),
	          inline: check.boolean,
	          required: check.boolean
	        }
	      };
	    }
	  }, {
	    name: 'select',
	    template: __webpack_require__(6),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string,
	          placeholder: check.string,
	          'min-length': check.number,
	          'allow-clear': check.boolean,
	          'ng-attr-multiple': check.boolean,
	          selected: check.string,
	          selected2: check.string,
	          choice: check.string,
	          choice2: check.string,
	          choices: check.array,
	          required: check.boolean
	        }
	      };
	    }
	    //}, {
	    //	name: 'select-async',
	    //	template: require('./fields/lx-select-async.html')
	  }, {
	    name: 'select-img',
	    template: __webpack_require__(7),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string,
	          placeholder: check.string,
	          'min-length': check.number,
	          'allow-clear': check.boolean,
	          'ng-attr-multiple': check.boolean,
	          selected: check.string,
	          selected2: check.string,
	          choice: check.string,
	          choice2: check.string,
	          choices: check.array,
	          required: check.boolean
	        }
	      };
	    }
	    //}, {
	    //	name: 'select-async',
	    //	template: require('./fields/lx-select-async.html')
	  }, {
	    name: 'switch',
	    template: __webpack_require__(8),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string,
	          description: check.string,
	          checked: check.boolean,
	          required: check.boolean
	        }
	      };
	    }
	  }, {
	    name: 'textarea',
	    template: __webpack_require__(9),
	    apiCheck: function apiCheck(check) {
	      return {
	        templateOptions: {
	          label: check.string,
	          icon: check.string,
	          theme: check.oneOf(['light', 'dark']),
	          required: check.boolean,
	          rows: check.number,
	          cols: check.number
	        }
	      };
	    }
	  }];
	  var WRAPPERS = [{
	    name: 'wrapper-div',
	    template: __webpack_require__(10)
	  }, {
	    name: 'wrapper-errors',
	    template: __webpack_require__(11)
	  }, {
	    name: 'wrapper-flex',
	    template: __webpack_require__(12)
	  }, {
	    name: 'wrapper-inline',
	    template: __webpack_require__(13)
	  }];
	
	  function _prefixer(name) {
	    return PREFIX + '-' + name;
	  }
	
	  function _wrapperTemplateUrl(name) {
	    return 'wrappers/formly-wrappers-' + _prefixer(name) + '.html';
	  }
	
	  function _fieldTemplateUrl(name) {
	    return 'fields/formly-fields-' + _prefixer(name) + '.html';
	  }
	
	  /*@ngInject*/
	  function setWrappers(formlyConfigProvider) {
	    if (USING_TEMPLATES) {
	      WRAPPERS.map(function (wrapper) {
	        formlyConfigProvider.setWrapper({
	          name: _prefixer(wrapper.name),
	          templateUrl: _wrapperTemplateUrl(wrapper.name)
	        });
	        return _prefixer(wrapper.name);
	      });
	    }
	  }
	  setWrappers.$inject = ["formlyConfigProvider"];
	
	  /*@ngInject*/
	  function setFields(formlyConfig, formlyApiCheck) {
	    var c = formlyApiCheck;
	    if (USING_TEMPLATES) {
	      FIELDS.map(function (field) {
	        formlyConfig.setType({
	          name: _prefixer(field.name),
	          templateUrl: _fieldTemplateUrl(field.name),
	          apiCheck: function apiCheck(c) {
	            return field.apiCheck;
	          }
	        });
	      });
	    }
	  }
	  setFields.$inject = ["formlyConfig", "formlyApiCheck"];
	
	  function setDefaults(formlyConfig, formlyValidationMessages) {
	    formlyConfig.extras.ngModelAttrsManipulatorPreferBound = true;
	    VALIDATION_MESSAGES.map(function (validation) {
	      formlyValidationMessages.addStringMessage(validation.name, validation.message);
	    });
	    formlyValidationMessages.messages.pattern = function (viewValue, modelValue) {
	      return (viewValue || modelValue) + ' is invalid';
	    };
	  }
	  setDefaults.$inject = ["formlyConfig", "formlyValidationMessages"];
	
	  function cacheTemplates($templateCache) {
	    if (USING_TEMPLATES) {
	      FIELDS.map(function (field) {
	        $templateCache.put(_fieldTemplateUrl(field.name), field.template);
	      });
	      WRAPPERS.map(function (wrapper) {
	        $templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template);
	      });
	    }
	  }
	  cacheTemplates.$inject = ["$templateCache"];
	
	  angular.module(MODULE_NAME, ['formly']).config(setWrappers).run(setFields).run(setDefaults).run(cacheTemplates);
	})();

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = "<div class=\"p+\">\r\n\t<lx-checkbox ng-model=\"model[options.key]\">\r\n\t\t<lx-checkbox-label>{{to.label}}</lx-checkbox-label>\r\n\t\t<lx-checkbox-help ng-if=\"::to.description\">{{::to.description}}</lx-checkbox-help>\r\n\t</lx-checkbox>\r\n</div>"

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = "<lx-date-picker model=\"model[options.key]\"\r\n                aria-label=\"{{::to.label}}\"\r\n                label=\"{{::to.label}} {{::to.required ? '*' : ''}}\">\r\n</lx-date-picker>\r\n"

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aftl-flex-fields\"\r\n     model=\"$parent.model\"\r\n     flex-container=\"{{::to.flex.container || 'row'}}\"\r\n     flex-align=\"{{::to.flex.align || 'space-between'}}\"\r\n     flex-gutter=\"{{::to.flex.gutter || '24'}}\">\r\n\t<div formly-field\r\n\t     ng-repeat=\"field in to.fields track by $index\"\r\n\t     ng-if=\"!field.hide\"\r\n\t     class=\"formly-field {{::field.type ? 'formly-field-' + field.type : ''}}\"\r\n\t     ng-style=\"::to.flex.style\"\r\n\t     options=\"field\"\r\n\t     model=\"field.model || model\"\r\n\t     fields=\"fields\"\r\n\t     form=\"form\"\r\n\t     form-id=\"formId\"\r\n\t     form-state=\"options.formState\"\r\n\t     index=\"$index\"\r\n\t     flex-item=\"{{::to.flex.item || '1'}}\"\r\n\t     flex-order=\"{{::to.flex.order}}\">\r\n\t</div>\r\n</div>"

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\r\n               icon=\"{{::to.icon}}\"\r\n               fixed-label=\"::to.fixedLabel\"\r\n               theme=\"{{::to.theme}}\"\r\n               disabled=\"to.disabled\"\r\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\r\n               valid=\"fc.$valid && fc.$touched\"\r\n               error=\"fc.$invalid && fc.$touched\">\r\n\t<input ng-model=\"model[options.key]\"\r\n\t       type=\"{{::to.type}}\"\r\n\t       aria-label=\"{{::to.label}}\"\r\n\t       ng-class=\"::to.className\"/>\r\n</lx-text-field>"

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = "<div class=\"radio-group\">\r\n\t<h3 ng-if=\"::to.label\"><label>{{::to.label}}</label></h3>\r\n\r\n\t<div class=\"radio-button\"\r\n\t     ng-class=\"{'radio-button__inline': to.inline}\"\r\n\t     ng-repeat=\"o in to.options\">\r\n\t\t<input ng-model=\"$parent.model[$parent.options.key]\"\r\n\t\t       id=\"{{::id + '_' + $index}}\"\r\n\t\t       type=\"radio\"\r\n\t\t       ng-disabled=\"::o.disabled\"\r\n\t\t       class=\"radio-button__input\"\r\n\t\t       ng-value=\"::o.value\"\r\n\t\t       aria-labelledby=\"{{::id + '_' + $index + '_radioButton'}}\">\r\n\t\t<label for=\"{{::id + '_' + $index}}\"\r\n\t\t       class=\"radio-button__label\">{{::o.name}}</label>\r\n      <span ng-if=\"::o.description\" class=\"radio-button__help\">{{::o.description}}\r\n      </span>\r\n\t</div>\r\n</div>\r\n"

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aftl-select\">\r\n\t<h3 ng-if=\"::to.label\"><label>\r\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\r\n\t</label></h3>\r\n\t<lx-select ng-model=\"model[options.key]\"\r\n\t           lx-choices=\"to.choices\"\r\n\t           lx-label=\"{{::to.placeholder}}\"\r\n\t           min-length=\"::to.minLength\"\r\n\t           allow-clear=\"::to.allowClear\"\r\n\t           ng-attr-multiple=\"{{::to.multiple}}\">\r\n\r\n\t\t<lx-select-selected>\r\n\t\t\t{{$selected[to.selected] || $selected}} {{::to.selected2 ? ' - ' +\r\n\t\t\t$selected[to.selected2] : ''}}\r\n\t\t</lx-select-selected>\r\n\r\n\t\t<lx-select-choices>\r\n\t\t\t{{$choice[to.choice] || $choice}} {{::to.choice2 ? ' - ' +\r\n\t\t\t$choice[to.choice2] : ''}}\r\n\t\t</lx-select-choices>\r\n\r\n\t</lx-select>\r\n</div>\r\n"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"aftl-select\">\r\n\t<h3 ng-if=\"::to.label\"><label>\r\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\r\n\t</label></h3>\r\n\t<lx-select ng-model=\"model[options.key]\" lx-choices=\"to.choices\" lx-label=\"{{::to.placeholder}}\" min-length=\"::to.minLength\"\r\n\t\tallow-clear=\"::to.allowClear\" ng-attr-multiple=\"{{::to.multiple}}\" style=\"float:left; width:90%;\">\r\n\r\n\t\t<lx-select-selected>\r\n\t\t\t{{ $selected}}\r\n\t\t</lx-select-selected>\r\n\r\n\t\t<lx-select-choices>\r\n\t\t\t<div class=\"block imagePicker\">\r\n\t\t\t\t<img ng-src=\"{{filepath }}{{$choice}}\" height=\"50\" class=\"selectimg\" err-src=\"img/placeholder_img.svg\"\r\n\t\t\t\t/>\r\n\t\t\t\t<h5>{{ $choice }}</h5>\r\n\t\t\t</div>\r\n\t\t</lx-select-choices>\r\n\r\n\t</lx-select>\r\n\t<img style=\"float:right; width:10%; margin-bottom:40px; margin-top:14px;\" ng-src=\"{{filepath }}{{model[options.key]}}\"\r\n\t\twidth=\"50\" height=\"50\" class=\"img\" err-src=\"img/placeholder_img.svg\">\r\n</div>"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\r\n\t<input ng-model=\"model[options.key]\"\r\n\t       type=\"checkbox\"\r\n\t       role=\"checkbox\"\r\n\t       class=\"switch__input\"/>\r\n\t<label for=\"{{::id}}\" class=\"switch__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\r\n\t<span ng-if=\"::to.description\"\r\n\t      class=\"switch__help\">{{::to.description}}</span>\r\n</div>\r\n\r\n"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\r\n               fixed-label=\"::to.fixedLabel\"\r\n               icon=\"{{::to.icon}}\"\r\n               theme=\"{{::to.theme}}\"\r\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\r\n               valid=\"fc.$valid && fc.$touched\"\r\n               error=\"fc.$invalid && fc.$touched\">\r\n    <textarea ng-model=\"model[options.key]\"\r\n              aria-label=\"{{::to.label}}\"\r\n              rows=\"{{::to.rows}}\" cols=\"{{::to.cols}}\">\r\n    </textarea>\r\n</lx-text-field>\r\n"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\r\n\tng-style=\"::to.div.style\">\r\n\t<formly-transclude></formly-transclude>\r\n</div>"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<formly-transclude></formly-transclude>\r\n\t<ul class=\"form-error\" ng-messages=\"fc.$error\"\r\n\t    ng-show=\"options.validation.errorExistsAndShouldBeVisible\">\r\n\t\t<li ng-repeat=\"(name, message) in ::options.validation.messages\"\r\n\t\t    ng-message={{::name}}>\r\n\t\t\t{{message(fc.$viewValue, fc.$modelValue, this)}}\r\n\t\t</li>\r\n\t</ul>\r\n\t<span class=\"form-pending\"\r\n\t      ng-if=\"to.pending && fc.$pending && fc.$touched\">\r\n\t{{::to.pending || 'Checking...'}}\r\n\t</span>\r\n</div>\r\n"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\r\n     ng-style=\"::to.div.style || {}\"\r\n     flex-item=\"::to.flex.item\"\r\n     flex-order=\"::to.flex-order\">\r\n\t<formly-transclude></formly-transclude>\r\n</div>"

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = "<span class=\"inline-wrapper\">\r\n\t<span class=\"inline--before\">{{::to.inline.before}}</span>\r\n\t<span class=\"inline--content\">\r\n\t\t<formly-transclude></formly-transclude>\r\n\t</span>\r\n\t<span class=\"inline--after\">{{::to.inline.after}}</span>\r\n</span>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY1MTZmZTAyMDc3ZDA2YjYzNGEiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MzA5MCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZmxleC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1yYWRpby5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc2VsZWN0LWltZy5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zd2l0Y2guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1pbmxpbmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUNBQSxFQUFDLFlBQVk7R0FDWDtHQUNBLElBQUksa0JBQWtCOztHQUV0QixJQUFJLHNC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LCtCQUErQixZQUFZLCtCQUErQixVQUFVLEdBQUcsMEJBQTBCLGlNQUFpTSxZQUFZLDZCQUE2QixXQUFXLFlBQVksV0FBVywrQzs7Ozs7O0FDQTFoQixpSjs7Ozs7O0FDQUEsdVNBQXNTLFFBQVEsYUFBYSw4Q0FBOEMsaUlBQWlJLCtCQUErQiw0Qjs7Ozs7O0FDQXpnQiwrRkFBOEYsdUk7Ozs7OztBQ0E5Rix5RkFBd0Ysb0JBQW9CLCtJQUErSSxtQkFBbUIsbUIiLCJmaWxlIjoiZm9ybWx5THVteC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMGY1MTZmZTAyMDc3ZDA2YjYzNGFcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcbiAgdmFyIFVTSU5HX1RFTVBMQVRFUyA9IHRydWU7XG4gIC8qIEN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgZGVmYXVsdHMgaGVyZSAqL1xuICB2YXIgVkFMSURBVElPTl9NRVNTQUdFUyA9IFt7XG4gICAgbmFtZTogJ3JlcXVpcmVkJywgbWVzc2FnZTogJ0RpdCBpcyBlZW4gdmVycGxpY2h0IHZlbGQnXG4gIH0sIHtcbiAgICBuYW1lOiAnbWF4bGVuZ3RoJywgbWVzc2FnZTogJ0RpdCB2ZWxkIGlzIHRlIGxhbmcuJ1xuICB9LCB7XG4gICAgbmFtZTogJ21pbmxlbmd0aCcsIG1lc3NhZ2U6ICdEaXQgdmVsZCBpcyB0ZSBrb3J0LidcbiAgfV07XG4gIC8qIE1vZHVsZSBUZW1wbGF0ZXMgKyBEYXRhICovXG4gIHZhciBNT0RVTEVfTkFNRSA9ICdmb3JtbHlMdW14JztcbiAgdmFyIFBSRUZJWCA9ICdseCc7XG4gIHZhciBGSUVMRFMgPSBbe1xuICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2RhdGUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgJ2xhYmVsJzogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICdyZXF1aXJlZCc6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy8gIG5hbWU6ICdkcm9wZG93bicsXG4gICAgLy8gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kcm9wZG93bi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdmbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZmxleC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2lucHV0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtaW5wdXQuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZml4ZWRMYWJlbDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBjbGFzc05hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgIHR5cGU6IGNoZWNrLm9uZU9mKFsndGV4dCcsICdudW1iZXInLCAnZW1haWwnLCAncGFzc3dvcmQnLCAndXJsJywgJ3RlbCddKSxcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdyYWRpbycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXJhZGlvLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKHtcbiAgICAgICAgICAgIG5hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBjaGVjay5vbmVPZlR5cGUoW2NoZWNrLnN0cmluZywgY2hlY2subnVtYmVyXSksXG4gICAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhblxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlubGluZTogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxuICAgICAgICAgICdhbGxvdy1jbGVhcic6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgJ25nLWF0dHItbXVsdGlwbGUnOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgc2VsZWN0ZWQyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZXM6IGNoZWNrLmFycmF5LFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vfSwge1xuICAgIC8vXHRuYW1lOiAnc2VsZWN0LWFzeW5jJyxcbiAgICAvL1x0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1hc3luYy5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdzZWxlY3QtaW1nJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWltZy5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2U6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxuICAgIC8vXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWFzeW5jLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3N3aXRjaCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXN3aXRjaC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcm93czogY2hlY2subnVtYmVyLFxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfV07XG4gIHZhciBXUkFQUEVSUyA9IFt7XG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxuICB9XTtcblxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBzZXRGaWVsZHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksXG4gICAgICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5hcGlDaGVjaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICBmb3JtbHlDb25maWcuZXh0cmFzLm5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyQm91bmQgPSB0cnVlO1xuICAgIFZBTElEQVRJT05fTUVTU0FHRVMubWFwKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuYWRkU3RyaW5nTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzLnBhdHRlcm4gPSBmdW5jdGlvbiAodmlld1ZhbHVlLCBtb2RlbFZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlKSArICcgaXMgaW52YWxpZCc7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLCBmaWVsZC50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpLCB3cmFwcGVyLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKE1PRFVMRV9OQU1FLCBbJ2Zvcm1seSddKS5jb25maWcoc2V0V3JhcHBlcnMpLnJ1bihzZXRGaWVsZHMpLnJ1bihzZXREZWZhdWx0cykucnVuKGNhY2hlVGVtcGxhdGVzKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBVU0lOR19URU1QTEFURVMgPSB0cnVlO1xyXG4gIC8qIEN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgZGVmYXVsdHMgaGVyZSAqL1xyXG4gIHZhciBWQUxJREFUSU9OX01FU1NBR0VTID0gW3tcclxuICAgIG5hbWU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdEaXQgaXMgZWVuIHZlcnBsaWNodCB2ZWxkJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdtYXhsZW5ndGgnLCBtZXNzYWdlOiAnRGl0IHZlbGQgaXMgdGUgbGFuZy4nXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ21pbmxlbmd0aCcsIG1lc3NhZ2U6ICdEaXQgdmVsZCBpcyB0ZSBrb3J0LidcclxuICB9XTtcclxuICAvKiBNb2R1bGUgVGVtcGxhdGVzICsgRGF0YSAqL1xyXG4gIHZhciBNT0RVTEVfTkFNRSA9ICdmb3JtbHlMdW14JztcclxuICB2YXIgUFJFRklYID0gJ2x4JztcclxuICB2YXIgRklFTERTID0gW3tcclxuICAgIG5hbWU6ICdjaGVja2JveCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBuYW1lOiAnZGF0ZS1waWNrZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgJ2xhYmVsJzogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgJ3JlcXVpcmVkJzogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAvL30sIHtcclxuICAvLyAgbmFtZTogJ2Ryb3Bkb3duJyxcclxuICAvLyAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRyb3Bkb3duLmh0bWwnKVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdmbGV4JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1mbGV4Lmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2lucHV0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1pbnB1dC5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBmaXhlZExhYmVsOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICBjbGFzc05hbWU6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXHJcbiAgICAgICAgICB0eXBlOiBjaGVjay5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3VybCcsICd0ZWwnXSksXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBuYW1lOiAncmFkaW8nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXJhZGlvLmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZih7XHJcbiAgICAgICAgICAgIG5hbWU6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IGNoZWNrLm9uZU9mVHlwZShbY2hlY2suc3RyaW5nLCBjaGVjay5udW1iZXJdKSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgaW5saW5lOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXHJcbiAgICAgICAgICAnYWxsb3ctY2xlYXInOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgJ25nLWF0dHItbXVsdGlwbGUnOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIHNlbGVjdGVkMjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaG9pY2VzOiBjaGVjay5hcnJheSxcclxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy99LCB7XHJcbiAgICAvL1x0bmFtZTogJ3NlbGVjdC1hc3luYycsXHJcbiAgICAvL1x0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1hc3luYy5odG1sJylcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnc2VsZWN0LWltZycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWltZy5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxyXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgICduZy1hdHRyLW11bHRpcGxlJzogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNob2ljZTogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vfSwge1xyXG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxyXG4gICAgLy9cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QtYXN5bmMuaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3N3aXRjaCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3RleHRhcmVhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIsXHJcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfV07XHJcbiAgdmFyIFdSQVBQRVJTID0gW3tcclxuICAgIG5hbWU6ICd3cmFwcGVyLWRpdicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnd3JhcHBlci1lcnJvcnMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3dyYXBwZXItZmxleCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3dyYXBwZXItaW5saW5lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxyXG4gIH1dO1xyXG5cclxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xyXG4gICAgcmV0dXJuIFBSRUZJWCArICctJyArIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfd3JhcHBlclRlbXBsYXRlVXJsKG5hbWUpIHtcclxuICAgIHJldHVybiAnd3JhcHBlcnMvZm9ybWx5LXdyYXBwZXJzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2ZpZWxkVGVtcGxhdGVVcmwobmFtZSkge1xyXG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcclxuICB9XHJcblxyXG4gIC8qQG5nSW5qZWN0Ki9cclxuICBmdW5jdGlvbiBzZXRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xyXG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcclxuICAgICAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRXcmFwcGVyKHtcclxuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpLFxyXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKkBuZ0luamVjdCovXHJcbiAgZnVuY3Rpb24gc2V0RmllbGRzKGZvcm1seUNvbmZpZywgZm9ybWx5QXBpQ2hlY2spIHtcclxuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XHJcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XHJcbiAgICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogX3ByZWZpeGVyKGZpZWxkLm5hbWUpLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksXHJcbiAgICAgICAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmaWVsZC5hcGlDaGVjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMpIHtcclxuICAgIGZvcm1seUNvbmZpZy5leHRyYXMubmdNb2RlbEF0dHJzTWFuaXB1bGF0b3JQcmVmZXJCb3VuZCA9IHRydWU7XHJcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xyXG4gICAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuYWRkU3RyaW5nTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlKSArICcgaXMgaW52YWxpZCc7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FjaGVUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcclxuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcclxuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksIGZpZWxkLnRlbXBsYXRlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSksIHdyYXBwZXIudGVtcGxhdGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKE1PRFVMRV9OQU1FLCBbXHJcbiAgICAnZm9ybWx5J1xyXG4gIF0pLmNvbmZpZyhzZXRXcmFwcGVycykucnVuKHNldEZpZWxkcykucnVuKHNldERlZmF1bHRzKS5ydW4oY2FjaGVUZW1wbGF0ZXMpO1xyXG59KCkpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJwK1xcXCI+XFxyXFxuXFx0PGx4LWNoZWNrYm94IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiPlxcclxcblxcdFxcdDxseC1jaGVja2JveC1sYWJlbD57e3RvLmxhYmVsfX08L2x4LWNoZWNrYm94LWxhYmVsPlxcclxcblxcdFxcdDxseC1jaGVja2JveC1oZWxwIG5nLWlmPVxcXCI6OnRvLmRlc2NyaXB0aW9uXFxcIj57ezo6dG8uZGVzY3JpcHRpb259fTwvbHgtY2hlY2tib3gtaGVscD5cXHJcXG5cXHQ8L2x4LWNoZWNrYm94PlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC1kYXRlLXBpY2tlciBtb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiPlxcclxcbjwvbHgtZGF0ZS1waWNrZXI+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWZ0bC1mbGV4LWZpZWxkc1xcXCJcXHJcXG4gICAgIG1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsXFxcIlxcclxcbiAgICAgZmxleC1jb250YWluZXI9XFxcInt7Ojp0by5mbGV4LmNvbnRhaW5lciB8fCAncm93J319XFxcIlxcclxcbiAgICAgZmxleC1hbGlnbj1cXFwie3s6OnRvLmZsZXguYWxpZ24gfHwgJ3NwYWNlLWJldHdlZW4nfX1cXFwiXFxyXFxuICAgICBmbGV4LWd1dHRlcj1cXFwie3s6OnRvLmZsZXguZ3V0dGVyIHx8ICcyNCd9fVxcXCI+XFxyXFxuXFx0PGRpdiBmb3JtbHktZmllbGRcXHJcXG5cXHQgICAgIG5nLXJlcGVhdD1cXFwiZmllbGQgaW4gdG8uZmllbGRzIHRyYWNrIGJ5ICRpbmRleFxcXCJcXHJcXG5cXHQgICAgIG5nLWlmPVxcXCIhZmllbGQuaGlkZVxcXCJcXHJcXG5cXHQgICAgIGNsYXNzPVxcXCJmb3JtbHktZmllbGQge3s6OmZpZWxkLnR5cGUgPyAnZm9ybWx5LWZpZWxkLScgKyBmaWVsZC50eXBlIDogJyd9fVxcXCJcXHJcXG5cXHQgICAgIG5nLXN0eWxlPVxcXCI6OnRvLmZsZXguc3R5bGVcXFwiXFxyXFxuXFx0ICAgICBvcHRpb25zPVxcXCJmaWVsZFxcXCJcXHJcXG5cXHQgICAgIG1vZGVsPVxcXCJmaWVsZC5tb2RlbCB8fCBtb2RlbFxcXCJcXHJcXG5cXHQgICAgIGZpZWxkcz1cXFwiZmllbGRzXFxcIlxcclxcblxcdCAgICAgZm9ybT1cXFwiZm9ybVxcXCJcXHJcXG5cXHQgICAgIGZvcm0taWQ9XFxcImZvcm1JZFxcXCJcXHJcXG5cXHQgICAgIGZvcm0tc3RhdGU9XFxcIm9wdGlvbnMuZm9ybVN0YXRlXFxcIlxcclxcblxcdCAgICAgaW5kZXg9XFxcIiRpbmRleFxcXCJcXHJcXG5cXHQgICAgIGZsZXgtaXRlbT1cXFwie3s6OnRvLmZsZXguaXRlbSB8fCAnMSd9fVxcXCJcXHJcXG5cXHQgICAgIGZsZXgtb3JkZXI9XFxcInt7Ojp0by5mbGV4Lm9yZGVyfX1cXFwiPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgaWNvbj1cXFwie3s6OnRvLmljb259fVxcXCJcXHJcXG4gICAgICAgICAgICAgICBmaXhlZC1sYWJlbD1cXFwiOjp0by5maXhlZExhYmVsXFxcIlxcclxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICBkaXNhYmxlZD1cXFwidG8uZGlzYWJsZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxcIlxcclxcbiAgICAgICAgICAgICAgIHZhbGlkPVxcXCJmYy4kdmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgZXJyb3I9XFxcImZjLiRpbnZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIj5cXHJcXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHQgICAgICAgdHlwZT1cXFwie3s6OnRvLnR5cGV9fVxcXCJcXHJcXG5cXHQgICAgICAgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiXFxyXFxuXFx0ICAgICAgIG5nLWNsYXNzPVxcXCI6OnRvLmNsYXNzTmFtZVxcXCIvPlxcclxcbjwvbHgtdGV4dC1maWVsZD5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtaW5wdXQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyYWRpby1ncm91cFxcXCI+XFxyXFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+e3s6OnRvLmxhYmVsfX08L2xhYmVsPjwvaDM+XFxyXFxuXFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwicmFkaW8tYnV0dG9uXFxcIlxcclxcblxcdCAgICAgbmctY2xhc3M9XFxcInsncmFkaW8tYnV0dG9uX19pbmxpbmUnOiB0by5pbmxpbmV9XFxcIlxcclxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJvIGluIHRvLm9wdGlvbnNcXFwiPlxcclxcblxcdFxcdDxpbnB1dCBuZy1tb2RlbD1cXFwiJHBhcmVudC5tb2RlbFskcGFyZW50Lm9wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHRcXHQgICAgICAgaWQ9XFxcInt7OjppZCArICdfJyArICRpbmRleH19XFxcIlxcclxcblxcdFxcdCAgICAgICB0eXBlPVxcXCJyYWRpb1xcXCJcXHJcXG5cXHRcXHQgICAgICAgbmctZGlzYWJsZWQ9XFxcIjo6by5kaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faW5wdXRcXFwiXFxyXFxuXFx0XFx0ICAgICAgIG5nLXZhbHVlPVxcXCI6Om8udmFsdWVcXFwiXFxyXFxuXFx0XFx0ICAgICAgIGFyaWEtbGFiZWxsZWRieT1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4ICsgJ19yYWRpb0J1dHRvbid9fVxcXCI+XFxyXFxuXFx0XFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxyXFxuXFx0XFx0ICAgICAgIGNsYXNzPVxcXCJyYWRpby1idXR0b25fX2xhYmVsXFxcIj57ezo6by5uYW1lfX08L2xhYmVsPlxcclxcbiAgICAgIDxzcGFuIG5nLWlmPVxcXCI6Om8uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJyYWRpby1idXR0b25fX2hlbHBcXFwiPnt7OjpvLmRlc2NyaXB0aW9ufX1cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXJhZGlvLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWZ0bC1zZWxlY3RcXFwiPlxcclxcblxcdDxoMyBuZy1pZj1cXFwiOjp0by5sYWJlbFxcXCI+PGxhYmVsPlxcclxcblxcdFxcdHt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxyXFxuXFx0PC9sYWJlbD48L2gzPlxcclxcblxcdDxseC1zZWxlY3QgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHQgICAgICAgICAgIGx4LWNob2ljZXM9XFxcInRvLmNob2ljZXNcXFwiXFxyXFxuXFx0ICAgICAgICAgICBseC1sYWJlbD1cXFwie3s6OnRvLnBsYWNlaG9sZGVyfX1cXFwiXFxyXFxuXFx0ICAgICAgICAgICBtaW4tbGVuZ3RoPVxcXCI6OnRvLm1pbkxlbmd0aFxcXCJcXHJcXG5cXHQgICAgICAgICAgIGFsbG93LWNsZWFyPVxcXCI6OnRvLmFsbG93Q2xlYXJcXFwiXFxyXFxuXFx0ICAgICAgICAgICBuZy1hdHRyLW11bHRpcGxlPVxcXCJ7ezo6dG8ubXVsdGlwbGV9fVxcXCI+XFxyXFxuXFxyXFxuXFx0XFx0PGx4LXNlbGVjdC1zZWxlY3RlZD5cXHJcXG5cXHRcXHRcXHR7eyRzZWxlY3RlZFt0by5zZWxlY3RlZF0gfHwgJHNlbGVjdGVkfX0ge3s6OnRvLnNlbGVjdGVkMiA/ICcgLSAnICtcXHJcXG5cXHRcXHRcXHQkc2VsZWN0ZWRbdG8uc2VsZWN0ZWQyXSA6ICcnfX1cXHJcXG5cXHRcXHQ8L2x4LXNlbGVjdC1zZWxlY3RlZD5cXHJcXG5cXHJcXG5cXHRcXHQ8bHgtc2VsZWN0LWNob2ljZXM+XFxyXFxuXFx0XFx0XFx0e3skY2hvaWNlW3RvLmNob2ljZV0gfHwgJGNob2ljZX19IHt7Ojp0by5jaG9pY2UyID8gJyAtICcgK1xcclxcblxcdFxcdFxcdCRjaG9pY2VbdG8uY2hvaWNlMl0gOiAnJ319XFxyXFxuXFx0XFx0PC9seC1zZWxlY3QtY2hvaWNlcz5cXHJcXG5cXHJcXG5cXHQ8L2x4LXNlbGVjdD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWZ0bC1zZWxlY3RcXFwiPlxcclxcblxcdDxoMyBuZy1pZj1cXFwiOjp0by5sYWJlbFxcXCI+PGxhYmVsPlxcclxcblxcdFxcdHt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxyXFxuXFx0PC9sYWJlbD48L2gzPlxcclxcblxcdDxseC1zZWxlY3QgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCIgbHgtY2hvaWNlcz1cXFwidG8uY2hvaWNlc1xcXCIgbHgtbGFiZWw9XFxcInt7Ojp0by5wbGFjZWhvbGRlcn19XFxcIiBtaW4tbGVuZ3RoPVxcXCI6OnRvLm1pbkxlbmd0aFxcXCJcXHJcXG5cXHRcXHRhbGxvdy1jbGVhcj1cXFwiOjp0by5hbGxvd0NsZWFyXFxcIiBuZy1hdHRyLW11bHRpcGxlPVxcXCJ7ezo6dG8ubXVsdGlwbGV9fVxcXCIgc3R5bGU9XFxcImZsb2F0OmxlZnQ7IHdpZHRoOjkwJTtcXFwiPlxcclxcblxcclxcblxcdFxcdDxseC1zZWxlY3Qtc2VsZWN0ZWQ+XFxyXFxuXFx0XFx0XFx0e3sgJHNlbGVjdGVkfX1cXHJcXG5cXHRcXHQ8L2x4LXNlbGVjdC1zZWxlY3RlZD5cXHJcXG5cXHJcXG5cXHRcXHQ8bHgtc2VsZWN0LWNob2ljZXM+XFxyXFxuXFx0XFx0XFx0PGRpdiBjbGFzcz1cXFwiYmxvY2sgaW1hZ2VQaWNrZXJcXFwiPlxcclxcblxcdFxcdFxcdFxcdDxpbWcgbmctc3JjPVxcXCJ7e2ZpbGVwYXRoIH19e3skY2hvaWNlfX1cXFwiIGhlaWdodD1cXFwiNTBcXFwiIGNsYXNzPVxcXCJzZWxlY3RpbWdcXFwiIGVyci1zcmM9XFxcImltZy9wbGFjZWhvbGRlcl9pbWcuc3ZnXFxcIlxcclxcblxcdFxcdFxcdFxcdC8+XFxyXFxuXFx0XFx0XFx0XFx0PGg1Pnt7ICRjaG9pY2UgfX08L2g1PlxcclxcblxcdFxcdFxcdDwvZGl2PlxcclxcblxcdFxcdDwvbHgtc2VsZWN0LWNob2ljZXM+XFxyXFxuXFxyXFxuXFx0PC9seC1zZWxlY3Q+XFxyXFxuXFx0PGltZyBzdHlsZT1cXFwiZmxvYXQ6cmlnaHQ7IHdpZHRoOjEwJTsgbWFyZ2luLWJvdHRvbTo0MHB4OyBtYXJnaW4tdG9wOjE0cHg7XFxcIiBuZy1zcmM9XFxcInt7ZmlsZXBhdGggfX17e21vZGVsW29wdGlvbnMua2V5XX19XFxcIlxcclxcblxcdFxcdHdpZHRoPVxcXCI1MFxcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgY2xhc3M9XFxcImltZ1xcXCIgZXJyLXNyYz1cXFwiaW1nL3BsYWNlaG9sZGVyX2ltZy5zdmdcXFwiPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1zZWxlY3QtaW1nLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic3dpdGNoXFxcIj5cXHJcXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHQgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuXFx0ICAgICAgIHJvbGU9XFxcImNoZWNrYm94XFxcIlxcclxcblxcdCAgICAgICBjbGFzcz1cXFwic3dpdGNoX19pbnB1dFxcXCIvPlxcclxcblxcdDxsYWJlbCBmb3I9XFxcInt7OjppZH19XFxcIiBjbGFzcz1cXFwic3dpdGNoX19sYWJlbFxcXCIgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiPnt7dG8ubGFiZWx9fTwvbGFiZWw+XFxyXFxuXFx0PHNwYW4gbmctaWY9XFxcIjo6dG8uZGVzY3JpcHRpb25cXFwiXFxyXFxuXFx0ICAgICAgY2xhc3M9XFxcInN3aXRjaF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXN3aXRjaC5odG1sXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC10ZXh0LWZpZWxkIGRhdGEtbW9kZWw9XFxcIjo6bW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgaWNvbj1cXFwie3s6OnRvLmljb259fVxcXCJcXHJcXG4gICAgICAgICAgICAgICB0aGVtZT1cXFwie3s6OnRvLnRoZW1lfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxcIlxcclxcbiAgICAgICAgICAgICAgIHZhbGlkPVxcXCJmYy4kdmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgZXJyb3I9XFxcImZjLiRpbnZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIj5cXHJcXG4gICAgPHRleHRhcmVhIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXHJcXG4gICAgICAgICAgICAgIHJvd3M9XFxcInt7Ojp0by5yb3dzfX1cXFwiIGNvbHM9XFxcInt7Ojp0by5jb2xzfX1cXFwiPlxcclxcbiAgICA8L3RleHRhcmVhPlxcclxcbjwvbHgtdGV4dC1maWVsZD5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCI6OnRvLmRpdi5jbGFzc05hbWVcXFwiXFxyXFxuXFx0bmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlXFxcIj5cXHJcXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2PlxcclxcblxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcblxcdDx1bCBjbGFzcz1cXFwiZm9ybS1lcnJvclxcXCIgbmctbWVzc2FnZXM9XFxcImZjLiRlcnJvclxcXCJcXHJcXG5cXHQgICAgbmctc2hvdz1cXFwib3B0aW9ucy52YWxpZGF0aW9uLmVycm9yRXhpc3RzQW5kU2hvdWxkQmVWaXNpYmxlXFxcIj5cXHJcXG5cXHRcXHQ8bGkgbmctcmVwZWF0PVxcXCIobmFtZSwgbWVzc2FnZSkgaW4gOjpvcHRpb25zLnZhbGlkYXRpb24ubWVzc2FnZXNcXFwiXFxyXFxuXFx0XFx0ICAgIG5nLW1lc3NhZ2U9e3s6Om5hbWV9fT5cXHJcXG5cXHRcXHRcXHR7e21lc3NhZ2UoZmMuJHZpZXdWYWx1ZSwgZmMuJG1vZGVsVmFsdWUsIHRoaXMpfX1cXHJcXG5cXHRcXHQ8L2xpPlxcclxcblxcdDwvdWw+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcImZvcm0tcGVuZGluZ1xcXCJcXHJcXG5cXHQgICAgICBuZy1pZj1cXFwidG8ucGVuZGluZyAmJiBmYy4kcGVuZGluZyAmJiBmYy4kdG91Y2hlZFxcXCI+XFxyXFxuXFx0e3s6OnRvLnBlbmRpbmcgfHwgJ0NoZWNraW5nLi4uJ319XFxyXFxuXFx0PC9zcGFuPlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcIjo6dG8uZGl2LmNsYXNzTmFtZVxcXCJcXHJcXG4gICAgIG5nLXN0eWxlPVxcXCI6OnRvLmRpdi5zdHlsZSB8fCB7fVxcXCJcXHJcXG4gICAgIGZsZXgtaXRlbT1cXFwiOjp0by5mbGV4Lml0ZW1cXFwiXFxyXFxuICAgICBmbGV4LW9yZGVyPVxcXCI6OnRvLmZsZXgtb3JkZXJcXFwiPlxcclxcblxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3BhbiBjbGFzcz1cXFwiaW5saW5lLXdyYXBwZXJcXFwiPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWJlZm9yZVxcXCI+e3s6OnRvLmlubGluZS5iZWZvcmV9fTwvc3Bhbj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1jb250ZW50XFxcIj5cXHJcXG5cXHRcXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG5cXHQ8L3NwYW4+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tYWZ0ZXJcXFwiPnt7Ojp0by5pbmxpbmUuYWZ0ZXJ9fTwvc3Bhbj5cXHJcXG48L3NwYW4+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1pbmxpbmUuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9