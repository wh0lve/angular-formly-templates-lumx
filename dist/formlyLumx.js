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
	    name: 'required', message: 'This field is required'
	  }, {
	    name: 'maxlength', message: 'This field is too long.'
	  }, {
	    name: 'minlength', message: 'This field is too short.'
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
	    name: 'switch',
	    template: __webpack_require__(7),
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
	    template: __webpack_require__(8),
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
	    template: __webpack_require__(9)
	  }, {
	    name: 'wrapper-errors',
	    template: __webpack_require__(10)
	  }, {
	    name: 'wrapper-flex',
	    template: __webpack_require__(11)
	  }, {
	    name: 'wrapper-inline',
	    template: __webpack_require__(12)
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

	module.exports = "<div class=\"checkbox\">\r\n\t<input ng-model=\"model[options.key]\"\r\n\t       type=\"checkbox\"\r\n\t       role=\"checkbox\"\r\n\t       class=\"checkbox__input\">\r\n\t<label for={{::id}} class=\"checkbox__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\r\n\t<span ng-if=\"::to.description\"\r\n\t      class=\"checkbox__help\">{{::to.description}}</span>\r\n</div>"

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

	module.exports = "<div class=\"aftl-select\">\r\n\t<h3 ng-if=\"::to.label\"><label>\r\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\r\n\t</label></h3>\r\n\t<lx-select ng-model=\"model[options.key]\"\r\n\t           choices=\"to.options\"\r\n\t           placeholder=\"{{::to.placeholder}}\"\r\n\t           min-length=\"::to.minLength\"\r\n\t           allow-clear=\"::to.allowClear\"\r\n\t           ng-attr-multiple=\"{{::to.multiple}}\">\r\n\r\n\t\t<lx-select-selected>\r\n\t\t\t{{$selected[to.selected] || $selected}} {{::to.selected2 ? ' - ' +\r\n\t\t\t$selected[to.selected2] : ''}}\r\n\t\t</lx-select-selected>\r\n\r\n\t\t<lx-select-choices>\r\n\t\t\t{{$choice[to.choice] || $choice}} {{::to.choice2 ? ' - ' +\r\n\t\t\t$choice[to.choice2] : ''}}\r\n\t\t</lx-select-choices>\r\n\r\n\t</lx-select>\r\n</div>\r\n"

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<div class=\"switch\">\r\n\t<input ng-model=\"model[options.key]\"\r\n\t       type=\"checkbox\"\r\n\t       role=\"checkbox\"\r\n\t       class=\"switch__input\"/>\r\n\t<label for=\"{{::id}}\" class=\"switch__label\" aria-label=\"{{::to.label}}\">{{to.label}}</label>\r\n\t<span ng-if=\"::to.description\"\r\n\t      class=\"switch__help\">{{::to.description}}</span>\r\n</div>\r\n\r\n"

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = "<lx-text-field data-model=\"::model[options.key]\"\r\n               fixed-label=\"::to.fixedLabel\"\r\n               icon=\"{{::to.icon}}\"\r\n               theme=\"{{::to.theme}}\"\r\n               label=\"{{to.label}} {{::to.required ? '*' : ''}}\"\r\n               valid=\"fc.$valid && fc.$touched\"\r\n               error=\"fc.$invalid && fc.$touched\">\r\n    <textarea ng-model=\"model[options.key]\"\r\n              aria-label=\"{{::to.label}}\"\r\n              rows=\"{{::to.rows}}\" cols=\"{{::to.cols}}\">\r\n    </textarea>\r\n</lx-text-field>\r\n"

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\r\n\tng-style=\"::to.div.style\">\r\n\t<formly-transclude></formly-transclude>\r\n</div>"

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = "<div>\r\n\t<formly-transclude></formly-transclude>\r\n\t<ul class=\"form-error\" ng-messages=\"fc.$error\"\r\n\t    ng-show=\"options.validation.errorExistsAndShouldBeVisible\">\r\n\t\t<li ng-repeat=\"(name, message) in ::options.validation.messages\"\r\n\t\t    ng-message={{::name}}>\r\n\t\t\t{{message(fc.$viewValue, fc.$modelValue, this)}}\r\n\t\t</li>\r\n\t</ul>\r\n\t<span class=\"form-pending\"\r\n\t      ng-if=\"to.pending && fc.$pending && fc.$touched\">\r\n\t{{::to.pending || 'Checking...'}}\r\n\t</span>\r\n</div>\r\n"

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = "<div ng-class=\"::to.div.className\"\r\n     ng-style=\"::to.div.style || {}\"\r\n     flex-item=\"::to.flex.item\"\r\n     flex-order=\"::to.flex-order\">\r\n\t<formly-transclude></formly-transclude>\r\n</div>"

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = "<span class=\"inline-wrapper\">\r\n\t<span class=\"inline--before\">{{::to.inline.before}}</span>\r\n\t<span class=\"inline--content\">\r\n\t\t<formly-transclude></formly-transclude>\r\n\t</span>\r\n\t<span class=\"inline--after\">{{::to.inline.after}}</span>\r\n</span>"

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDMxZjZiOTZhYjIyODA0Y2I1ODMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MzA5MCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZmxleC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1yYWRpby5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FDQUEsRUFBQyxZQUFZO0dBQ1g7R0FDQSxJQUFJLGtCQUFrQjs7R0FFdEIsSUFBSSxzQkFBc0IsQ0FBQztLQUN6QixNQUFNLFlBQVksU0FBUztNQUMxQjtLQUNE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b0NBQW9DLDJCQUEyQiwwQkFBMEIsdUpBQXVKLGtEQUFrRCw4UkFBOFIsdUJBQXVCLDRCQUE0QixpQkFBaUIsMEI7Ozs7OztBQ0F6eUIsaUdBQWdHLFdBQVcsaUZBQWlGLFlBQVksMEVBQTBFLFVBQVUsR0FBRywwQkFBMEIsaUxBQWlMLFdBQVcsOEJBQThCLFlBQVksaUU7Ozs7OztBQ0EvaEIsc0ZBQXFGLFlBQVkseUVBQXlFLGtDQUFrQywrSEFBK0gscUJBQXFCLDhMQUE4TCxzQ0FBc0MsMEJBQTBCLHFCQUFxQixpREFBaUQsVUFBVSxpRkFBaUYsaUJBQWlCLDRDOzs7Ozs7QUNBaHhCLDhGQUE2RixVQUFVLEdBQUcsMEJBQTBCLDJJQUEySSxrQkFBa0Isc0lBQXNJLGVBQWUsK0NBQStDLHFDQUFxQyxHQUFHLGdFQUFnRSx3RUFBd0UsK0JBQStCLEdBQUcsMERBQTBELGlFOzs7Ozs7QUNBanZCLDRNQUEyTSxNQUFNLDBDQUEwQyxZQUFZLEtBQUssVUFBVSxtRkFBbUYsa0JBQWtCLDBCOzs7Ozs7QUNBM1gsbUpBQWtKLFdBQVcsK0JBQStCLFlBQVksK0JBQStCLFVBQVUsR0FBRywwQkFBMEIsaU1BQWlNLFlBQVksNkJBQTZCLFdBQVcsWUFBWSxXQUFXLCtDOzs7Ozs7QUNBMWhCLGlKOzs7Ozs7QUNBQSx1U0FBc1MsUUFBUSxhQUFhLDhDQUE4QyxpSUFBaUksK0JBQStCLDRCOzs7Ozs7QUNBemdCLCtGQUE4Rix1STs7Ozs7O0FDQTlGLHlGQUF3RixvQkFBb0IsK0lBQStJLG1CQUFtQixtQiIsImZpbGUiOiJmb3JtbHlMdW14LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA0MzFmNmI5NmFiMjI4MDRjYjU4M1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgVVNJTkdfVEVNUExBVEVTID0gdHJ1ZTtcbiAgLyogQ3VzdG9tIHZhbGlkYXRpb24gbWVzc2FnZSBkZWZhdWx0cyBoZXJlICovXG4gIHZhciBWQUxJREFUSU9OX01FU1NBR0VTID0gW3tcbiAgICBuYW1lOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcbiAgfSwge1xuICAgIG5hbWU6ICdtYXhsZW5ndGgnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyB0b28gbG9uZy4nXG4gIH0sIHtcbiAgICBuYW1lOiAnbWlubGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIHNob3J0LidcbiAgfV07XG4gIC8qIE1vZHVsZSBUZW1wbGF0ZXMgKyBEYXRhICovXG4gIHZhciBNT0RVTEVfTkFNRSA9ICdmb3JtbHlMdW14JztcbiAgdmFyIFBSRUZJWCA9ICdseCc7XG4gIHZhciBGSUVMRFMgPSBbe1xuICAgIG5hbWU6ICdjaGVja2JveCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2RhdGUtcGlja2VyJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgJ2xhYmVsJzogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICdyZXF1aXJlZCc6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy8gIG5hbWU6ICdkcm9wZG93bicsXG4gICAgLy8gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kcm9wZG93bi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdmbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZmxleC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge307XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ2lucHV0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtaW5wdXQuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZml4ZWRMYWJlbDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBjbGFzc05hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgIHR5cGU6IGNoZWNrLm9uZU9mKFsndGV4dCcsICdudW1iZXInLCAnZW1haWwnLCAncGFzc3dvcmQnLCAndXJsJywgJ3RlbCddKSxcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdyYWRpbycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXJhZGlvLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKHtcbiAgICAgICAgICAgIG5hbWU6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBjaGVjay5vbmVPZlR5cGUoW2NoZWNrLnN0cmluZywgY2hlY2subnVtYmVyXSksXG4gICAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhblxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGlubGluZTogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdzZWxlY3QnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxuICAgICAgICAgICdhbGxvdy1jbGVhcic6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgJ25nLWF0dHItbXVsdGlwbGUnOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgc2VsZWN0ZWQyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZXM6IGNoZWNrLmFycmF5LFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vfSwge1xuICAgIC8vXHRuYW1lOiAnc2VsZWN0LWFzeW5jJyxcbiAgICAvL1x0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1hc3luYy5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdzd2l0Y2gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zd2l0Y2guaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAndGV4dGFyZWEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlcixcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXJcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1dO1xuICB2YXIgV1JBUFBFUlMgPSBbe1xuICAgIG5hbWU6ICd3cmFwcGVyLWRpdicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1lcnJvcnMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItaW5saW5lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sJylcbiAgfV07XG5cbiAgZnVuY3Rpb24gX3ByZWZpeGVyKG5hbWUpIHtcbiAgICByZXR1cm4gUFJFRklYICsgJy0nICsgbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF93cmFwcGVyVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnd3JhcHBlcnMvZm9ybWx5LXdyYXBwZXJzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xuICB9XG5cbiAgZnVuY3Rpb24gX2ZpZWxkVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnZmllbGRzL2Zvcm1seS1maWVsZHMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIHNldFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgV1JBUFBFUlMubWFwKGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0RmllbGRzKGZvcm1seUNvbmZpZywgZm9ybWx5QXBpQ2hlY2spIHtcbiAgICB2YXIgYyA9IGZvcm1seUFwaUNoZWNrO1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgICBuYW1lOiBfcHJlZml4ZXIoZmllbGQubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLFxuICAgICAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQuYXBpQ2hlY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKGZvcm1seUNvbmZpZywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kID0gdHJ1ZTtcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmFkZFN0cmluZ01lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xuICAgICAgcmV0dXJuICh2aWV3VmFsdWUgfHwgbW9kZWxWYWx1ZSkgKyAnIGlzIGludmFsaWQnO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSwgZmllbGQudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKSwgd3JhcHBlci50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgWydmb3JtbHknXSkuY29uZmlnKHNldFdyYXBwZXJzKS5ydW4oc2V0RmllbGRzKS5ydW4oc2V0RGVmYXVsdHMpLnJ1bihjYWNoZVRlbXBsYXRlcyk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCIoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICB2YXIgVVNJTkdfVEVNUExBVEVTID0gdHJ1ZTtcclxuICAvKiBDdXN0b20gdmFsaWRhdGlvbiBtZXNzYWdlIGRlZmF1bHRzIGhlcmUgKi9cclxuICB2YXIgVkFMSURBVElPTl9NRVNTQUdFUyA9IFt7XHJcbiAgICBuYW1lOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCdcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnbWF4bGVuZ3RoJywgbWVzc2FnZTogJ1RoaXMgZmllbGQgaXMgdG9vIGxvbmcuJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdtaW5sZW5ndGgnLCBtZXNzYWdlOiAnVGhpcyBmaWVsZCBpcyB0b28gc2hvcnQuJ1xyXG4gIH1dO1xyXG4gIC8qIE1vZHVsZSBUZW1wbGF0ZXMgKyBEYXRhICovXHJcbiAgdmFyIE1PRFVMRV9OQU1FID0gJ2Zvcm1seUx1bXgnO1xyXG4gIHZhciBQUkVGSVggPSAnbHgnO1xyXG4gIHZhciBGSUVMRFMgPSBbe1xyXG4gICAgbmFtZTogJ2NoZWNrYm94JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdkYXRlLXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICAnbGFiZWwnOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICAncmVxdWlyZWQnOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIC8vfSwge1xyXG4gIC8vICBuYW1lOiAnZHJvcGRvd24nLFxyXG4gIC8vICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2ZsZXgnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWZsZXguaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBuYW1lOiAnaW5wdXQnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWlucHV0Lmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGZpeGVkTGFiZWw6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIGNsYXNzTmFtZTogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgdGhlbWU6IGNoZWNrLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKSxcclxuICAgICAgICAgIHR5cGU6IGNoZWNrLm9uZU9mKFsndGV4dCcsICdudW1iZXInLCAnZW1haWwnLCAncGFzc3dvcmQnLCAndXJsJywgJ3RlbCddKSxcclxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdyYWRpbycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtcmFkaW8uaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBvcHRpb25zOiBjaGVjay5hcnJheU9mKHtcclxuICAgICAgICAgICAgbmFtZTogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgICB2YWx1ZTogY2hlY2sub25lT2ZUeXBlKFtjaGVjay5zdHJpbmcsIGNoZWNrLm51bWJlcl0pLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgICBpbmxpbmU6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBuYW1lOiAnc2VsZWN0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxyXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgICduZy1hdHRyLW11bHRpcGxlJzogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNob2ljZTogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vfSwge1xyXG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxyXG4gICAgLy9cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QtYXN5bmMuaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3N3aXRjaCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3RleHRhcmVhJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICByb3dzOiBjaGVjay5udW1iZXIsXHJcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXJcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfV07XHJcbiAgdmFyIFdSQVBQRVJTID0gW3tcclxuICAgIG5hbWU6ICd3cmFwcGVyLWRpdicsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnd3JhcHBlci1lcnJvcnMnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3dyYXBwZXItZmxleCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3dyYXBwZXItaW5saW5lJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxyXG4gIH1dO1xyXG5cclxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xyXG4gICAgcmV0dXJuIFBSRUZJWCArICctJyArIG5hbWU7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfd3JhcHBlclRlbXBsYXRlVXJsKG5hbWUpIHtcclxuICAgIHJldHVybiAnd3JhcHBlcnMvZm9ybWx5LXdyYXBwZXJzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX2ZpZWxkVGVtcGxhdGVVcmwobmFtZSkge1xyXG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcclxuICB9XHJcblxyXG4gIC8qQG5nSW5qZWN0Ki9cclxuICBmdW5jdGlvbiBzZXRXcmFwcGVycyhmb3JtbHlDb25maWdQcm92aWRlcikge1xyXG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xyXG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcclxuICAgICAgICBmb3JtbHlDb25maWdQcm92aWRlci5zZXRXcmFwcGVyKHtcclxuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpLFxyXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKkBuZ0luamVjdCovXHJcbiAgZnVuY3Rpb24gc2V0RmllbGRzKGZvcm1seUNvbmZpZywgZm9ybWx5QXBpQ2hlY2spIHtcclxuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XHJcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XHJcbiAgICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcclxuICAgICAgICAgICAgbmFtZTogX3ByZWZpeGVyKGZpZWxkLm5hbWUpLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksXHJcbiAgICAgICAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgIHJldHVybiBmaWVsZC5hcGlDaGVjaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMpIHtcclxuICAgIGZvcm1seUNvbmZpZy5leHRyYXMubmdNb2RlbEF0dHJzTWFuaXB1bGF0b3JQcmVmZXJCb3VuZCA9IHRydWU7XHJcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xyXG4gICAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuYWRkU3RyaW5nTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xyXG4gICAgICByZXR1cm4gKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlKSArICcgaXMgaW52YWxpZCc7XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gY2FjaGVUZW1wbGF0ZXMoJHRlbXBsYXRlQ2FjaGUpIHtcclxuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcclxuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcclxuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksIGZpZWxkLnRlbXBsYXRlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSksIHdyYXBwZXIudGVtcGxhdGUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFuZ3VsYXIubW9kdWxlKE1PRFVMRV9OQU1FLCBbXHJcbiAgICAnZm9ybWx5J1xyXG4gIF0pLmNvbmZpZyhzZXRXcmFwcGVycykucnVuKHNldEZpZWxkcykucnVuKHNldERlZmF1bHRzKS5ydW4oY2FjaGVUZW1wbGF0ZXMpO1xyXG59KCkpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuLi9+L2pzaGludC1sb2FkZXIhLi9pbmRleC5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJjaGVja2JveFxcXCI+XFxyXFxuXFx0PGlucHV0IG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuXFx0ICAgICAgIHR5cGU9XFxcImNoZWNrYm94XFxcIlxcclxcblxcdCAgICAgICByb2xlPVxcXCJjaGVja2JveFxcXCJcXHJcXG5cXHQgICAgICAgY2xhc3M9XFxcImNoZWNrYm94X19pbnB1dFxcXCI+XFxyXFxuXFx0PGxhYmVsIGZvcj17ezo6aWR9fSBjbGFzcz1cXFwiY2hlY2tib3hfX2xhYmVsXFxcIiBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+e3t0by5sYWJlbH19PC9sYWJlbD5cXHJcXG5cXHQ8c3BhbiBuZy1pZj1cXFwiOjp0by5kZXNjcmlwdGlvblxcXCJcXHJcXG5cXHQgICAgICBjbGFzcz1cXFwiY2hlY2tib3hfX2hlbHBcXFwiPnt7Ojp0by5kZXNjcmlwdGlvbn19PC9zcGFuPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC1kYXRlLXBpY2tlciBtb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiPlxcclxcbjwvbHgtZGF0ZS1waWNrZXI+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWZ0bC1mbGV4LWZpZWxkc1xcXCJcXHJcXG4gICAgIG1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsXFxcIlxcclxcbiAgICAgZmxleC1jb250YWluZXI9XFxcInt7Ojp0by5mbGV4LmNvbnRhaW5lciB8fCAncm93J319XFxcIlxcclxcbiAgICAgZmxleC1hbGlnbj1cXFwie3s6OnRvLmZsZXguYWxpZ24gfHwgJ3NwYWNlLWJldHdlZW4nfX1cXFwiXFxyXFxuICAgICBmbGV4LWd1dHRlcj1cXFwie3s6OnRvLmZsZXguZ3V0dGVyIHx8ICcyNCd9fVxcXCI+XFxyXFxuXFx0PGRpdiBmb3JtbHktZmllbGRcXHJcXG5cXHQgICAgIG5nLXJlcGVhdD1cXFwiZmllbGQgaW4gdG8uZmllbGRzIHRyYWNrIGJ5ICRpbmRleFxcXCJcXHJcXG5cXHQgICAgIG5nLWlmPVxcXCIhZmllbGQuaGlkZVxcXCJcXHJcXG5cXHQgICAgIGNsYXNzPVxcXCJmb3JtbHktZmllbGQge3s6OmZpZWxkLnR5cGUgPyAnZm9ybWx5LWZpZWxkLScgKyBmaWVsZC50eXBlIDogJyd9fVxcXCJcXHJcXG5cXHQgICAgIG5nLXN0eWxlPVxcXCI6OnRvLmZsZXguc3R5bGVcXFwiXFxyXFxuXFx0ICAgICBvcHRpb25zPVxcXCJmaWVsZFxcXCJcXHJcXG5cXHQgICAgIG1vZGVsPVxcXCJmaWVsZC5tb2RlbCB8fCBtb2RlbFxcXCJcXHJcXG5cXHQgICAgIGZpZWxkcz1cXFwiZmllbGRzXFxcIlxcclxcblxcdCAgICAgZm9ybT1cXFwiZm9ybVxcXCJcXHJcXG5cXHQgICAgIGZvcm0taWQ9XFxcImZvcm1JZFxcXCJcXHJcXG5cXHQgICAgIGZvcm0tc3RhdGU9XFxcIm9wdGlvbnMuZm9ybVN0YXRlXFxcIlxcclxcblxcdCAgICAgaW5kZXg9XFxcIiRpbmRleFxcXCJcXHJcXG5cXHQgICAgIGZsZXgtaXRlbT1cXFwie3s6OnRvLmZsZXguaXRlbSB8fCAnMSd9fVxcXCJcXHJcXG5cXHQgICAgIGZsZXgtb3JkZXI9XFxcInt7Ojp0by5mbGV4Lm9yZGVyfX1cXFwiPlxcclxcblxcdDwvZGl2PlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgaWNvbj1cXFwie3s6OnRvLmljb259fVxcXCJcXHJcXG4gICAgICAgICAgICAgICBmaXhlZC1sYWJlbD1cXFwiOjp0by5maXhlZExhYmVsXFxcIlxcclxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICBkaXNhYmxlZD1cXFwidG8uZGlzYWJsZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxcIlxcclxcbiAgICAgICAgICAgICAgIHZhbGlkPVxcXCJmYy4kdmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgZXJyb3I9XFxcImZjLiRpbnZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIj5cXHJcXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHQgICAgICAgdHlwZT1cXFwie3s6OnRvLnR5cGV9fVxcXCJcXHJcXG5cXHQgICAgICAgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiXFxyXFxuXFx0ICAgICAgIG5nLWNsYXNzPVxcXCI6OnRvLmNsYXNzTmFtZVxcXCIvPlxcclxcbjwvbHgtdGV4dC1maWVsZD5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtaW5wdXQuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJyYWRpby1ncm91cFxcXCI+XFxyXFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+e3s6OnRvLmxhYmVsfX08L2xhYmVsPjwvaDM+XFxyXFxuXFxyXFxuXFx0PGRpdiBjbGFzcz1cXFwicmFkaW8tYnV0dG9uXFxcIlxcclxcblxcdCAgICAgbmctY2xhc3M9XFxcInsncmFkaW8tYnV0dG9uX19pbmxpbmUnOiB0by5pbmxpbmV9XFxcIlxcclxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJvIGluIHRvLm9wdGlvbnNcXFwiPlxcclxcblxcdFxcdDxpbnB1dCBuZy1tb2RlbD1cXFwiJHBhcmVudC5tb2RlbFskcGFyZW50Lm9wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHRcXHQgICAgICAgaWQ9XFxcInt7OjppZCArICdfJyArICRpbmRleH19XFxcIlxcclxcblxcdFxcdCAgICAgICB0eXBlPVxcXCJyYWRpb1xcXCJcXHJcXG5cXHRcXHQgICAgICAgbmctZGlzYWJsZWQ9XFxcIjo6by5kaXNhYmxlZFxcXCJcXHJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faW5wdXRcXFwiXFxyXFxuXFx0XFx0ICAgICAgIG5nLXZhbHVlPVxcXCI6Om8udmFsdWVcXFwiXFxyXFxuXFx0XFx0ICAgICAgIGFyaWEtbGFiZWxsZWRieT1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4ICsgJ19yYWRpb0J1dHRvbid9fVxcXCI+XFxyXFxuXFx0XFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxyXFxuXFx0XFx0ICAgICAgIGNsYXNzPVxcXCJyYWRpby1idXR0b25fX2xhYmVsXFxcIj57ezo6by5uYW1lfX08L2xhYmVsPlxcclxcbiAgICAgIDxzcGFuIG5nLWlmPVxcXCI6Om8uZGVzY3JpcHRpb25cXFwiIGNsYXNzPVxcXCJyYWRpby1idXR0b25fX2hlbHBcXFwiPnt7OjpvLmRlc2NyaXB0aW9ufX1cXHJcXG4gICAgICA8L3NwYW4+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXJhZGlvLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiYWZ0bC1zZWxlY3RcXFwiPlxcclxcblxcdDxoMyBuZy1pZj1cXFwiOjp0by5sYWJlbFxcXCI+PGxhYmVsPlxcclxcblxcdFxcdHt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxyXFxuXFx0PC9sYWJlbD48L2gzPlxcclxcblxcdDxseC1zZWxlY3QgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHQgICAgICAgICAgIGNob2ljZXM9XFxcInRvLm9wdGlvbnNcXFwiXFxyXFxuXFx0ICAgICAgICAgICBwbGFjZWhvbGRlcj1cXFwie3s6OnRvLnBsYWNlaG9sZGVyfX1cXFwiXFxyXFxuXFx0ICAgICAgICAgICBtaW4tbGVuZ3RoPVxcXCI6OnRvLm1pbkxlbmd0aFxcXCJcXHJcXG5cXHQgICAgICAgICAgIGFsbG93LWNsZWFyPVxcXCI6OnRvLmFsbG93Q2xlYXJcXFwiXFxyXFxuXFx0ICAgICAgICAgICBuZy1hdHRyLW11bHRpcGxlPVxcXCJ7ezo6dG8ubXVsdGlwbGV9fVxcXCI+XFxyXFxuXFxyXFxuXFx0XFx0PGx4LXNlbGVjdC1zZWxlY3RlZD5cXHJcXG5cXHRcXHRcXHR7eyRzZWxlY3RlZFt0by5zZWxlY3RlZF0gfHwgJHNlbGVjdGVkfX0ge3s6OnRvLnNlbGVjdGVkMiA/ICcgLSAnICtcXHJcXG5cXHRcXHRcXHQkc2VsZWN0ZWRbdG8uc2VsZWN0ZWQyXSA6ICcnfX1cXHJcXG5cXHRcXHQ8L2x4LXNlbGVjdC1zZWxlY3RlZD5cXHJcXG5cXHJcXG5cXHRcXHQ8bHgtc2VsZWN0LWNob2ljZXM+XFxyXFxuXFx0XFx0XFx0e3skY2hvaWNlW3RvLmNob2ljZV0gfHwgJGNob2ljZX19IHt7Ojp0by5jaG9pY2UyID8gJyAtICcgK1xcclxcblxcdFxcdFxcdCRjaG9pY2VbdG8uY2hvaWNlMl0gOiAnJ319XFxyXFxuXFx0XFx0PC9seC1zZWxlY3QtY2hvaWNlcz5cXHJcXG5cXHJcXG5cXHQ8L2x4LXNlbGVjdD5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwic3dpdGNoXFxcIj5cXHJcXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHQgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuXFx0ICAgICAgIHJvbGU9XFxcImNoZWNrYm94XFxcIlxcclxcblxcdCAgICAgICBjbGFzcz1cXFwic3dpdGNoX19pbnB1dFxcXCIvPlxcclxcblxcdDxsYWJlbCBmb3I9XFxcInt7OjppZH19XFxcIiBjbGFzcz1cXFwic3dpdGNoX19sYWJlbFxcXCIgYXJpYS1sYWJlbD1cXFwie3s6OnRvLmxhYmVsfX1cXFwiPnt7dG8ubGFiZWx9fTwvbGFiZWw+XFxyXFxuXFx0PHNwYW4gbmctaWY9XFxcIjo6dG8uZGVzY3JpcHRpb25cXFwiXFxyXFxuXFx0ICAgICAgY2xhc3M9XFxcInN3aXRjaF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuXFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXN3aXRjaC5odG1sXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxseC10ZXh0LWZpZWxkIGRhdGEtbW9kZWw9XFxcIjo6bW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgaWNvbj1cXFwie3s6OnRvLmljb259fVxcXCJcXHJcXG4gICAgICAgICAgICAgICB0aGVtZT1cXFwie3s6OnRvLnRoZW1lfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgbGFiZWw9XFxcInt7dG8ubGFiZWx9fSB7ezo6dG8ucmVxdWlyZWQgPyAnKicgOiAnJ319XFxcIlxcclxcbiAgICAgICAgICAgICAgIHZhbGlkPVxcXCJmYy4kdmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiXFxyXFxuICAgICAgICAgICAgICAgZXJyb3I9XFxcImZjLiRpbnZhbGlkICYmIGZjLiR0b3VjaGVkXFxcIj5cXHJcXG4gICAgPHRleHRhcmVhIG5nLW1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXHJcXG4gICAgICAgICAgICAgIHJvd3M9XFxcInt7Ojp0by5yb3dzfX1cXFwiIGNvbHM9XFxcInt7Ojp0by5jb2xzfX1cXFwiPlxcclxcbiAgICA8L3RleHRhcmVhPlxcclxcbjwvbHgtdGV4dC1maWVsZD5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCI6OnRvLmRpdi5jbGFzc05hbWVcXFwiXFxyXFxuXFx0bmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlXFxcIj5cXHJcXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuXFx0PHVsIGNsYXNzPVxcXCJmb3JtLWVycm9yXFxcIiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIlxcclxcblxcdCAgICBuZy1zaG93PVxcXCJvcHRpb25zLnZhbGlkYXRpb24uZXJyb3JFeGlzdHNBbmRTaG91bGRCZVZpc2libGVcXFwiPlxcclxcblxcdFxcdDxsaSBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCJcXHJcXG5cXHRcXHQgICAgbmctbWVzc2FnZT17ezo6bmFtZX19PlxcclxcblxcdFxcdFxcdHt7bWVzc2FnZShmYy4kdmlld1ZhbHVlLCBmYy4kbW9kZWxWYWx1ZSwgdGhpcyl9fVxcclxcblxcdFxcdDwvbGk+XFxyXFxuXFx0PC91bD5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwiZm9ybS1wZW5kaW5nXFxcIlxcclxcblxcdCAgICAgIG5nLWlmPVxcXCJ0by5wZW5kaW5nICYmIGZjLiRwZW5kaW5nICYmIGZjLiR0b3VjaGVkXFxcIj5cXHJcXG5cXHR7ezo6dG8ucGVuZGluZyB8fCAnQ2hlY2tpbmcuLi4nfX1cXHJcXG5cXHQ8L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwiOjp0by5kaXYuY2xhc3NOYW1lXFxcIlxcclxcbiAgICAgbmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlIHx8IHt9XFxcIlxcclxcbiAgICAgZmxleC1pdGVtPVxcXCI6OnRvLmZsZXguaXRlbVxcXCJcXHJcXG4gICAgIGZsZXgtb3JkZXI9XFxcIjo6dG8uZmxleC1vcmRlclxcXCI+XFxyXFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtd3JhcHBlclxcXCI+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tYmVmb3JlXFxcIj57ezo6dG8uaW5saW5lLmJlZm9yZX19PC9zcGFuPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWNvbnRlbnRcXFwiPlxcclxcblxcdFxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcblxcdDwvc3Bhbj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1hZnRlclxcXCI+e3s6OnRvLmlubGluZS5hZnRlcn19PC9zcGFuPlxcclxcbjwvc3Bhbj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=