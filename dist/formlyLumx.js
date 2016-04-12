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

	module.exports = "<div class=\"aftl-select\">\r\n\t<h3 ng-if=\"::to.label\"><label>\r\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\r\n\t</label></h3>\r\n\t<lx-select ng-model=\"model[options.key]\"\r\n\t           lx-choices=\"to.choices\"\r\n\t           lx-label=\"{{::to.placeholder}}\"\r\n\t           min-length=\"::to.minLength\"\r\n\t           allow-clear=\"::to.allowClear\"\r\n\t           ng-attr-multiple=\"{{::to.multiple}}\">\r\n\r\n\t\t<lx-select-selected>\r\n\t\t\t{{$selected[to.selected] || $selected}} {{::to.selected2 ? ' - ' +\r\n\t\t\t$selected[to.selected2] : ''}}\r\n\t\t</lx-select-selected>\r\n\r\n\t\t<lx-select-choices>\r\n\t\t\t{{$choice[to.choice] || $choice}} {{::to.choice2 ? ' - ' +\r\n\t\t\t$choice[to.choice2] : ''}}\r\n\t\t</lx-select-choices>\r\n\r\n\t</lx-select>\r\n</div>\r\n"

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDlhN2Y3ZjBmYzAzNTNkNzYyNDgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MzA5MCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZmxleC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1yYWRpby5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc3dpdGNoLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN0Q0E7O0FDQUEsRUFBQyxZQUFZO0dBQ1g7R0FDQSxJQUFJLGtCQUFrQjs7R0FFdEIsSUFBSSxzQkFBc0IsQ0FBQztLQUN6QixNQUFNLFlBQVksU0FBUztNQUMxQjtLQUNE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b0NBQW9DLDJCQUEyQiwwQkFBMEIsdUpBQXVKLGtEQUFrRCw4UkFBOFIsdUJBQXVCLDRCQUE0QixpQkFBaUIsMEI7Ozs7OztBQ0F6eUIsaUdBQWdHLFdBQVcsaUZBQWlGLFlBQVksMEVBQTBFLFVBQVUsR0FBRywwQkFBMEIsaUxBQWlMLFdBQVcsOEJBQThCLFlBQVksaUU7Ozs7OztBQ0EvaEIsc0ZBQXFGLFlBQVkseUVBQXlFLGtDQUFrQywrSEFBK0gscUJBQXFCLDhMQUE4TCxzQ0FBc0MsMEJBQTBCLHFCQUFxQixpREFBaUQsVUFBVSxpRkFBaUYsaUJBQWlCLDRDOzs7Ozs7QUNBaHhCLDhGQUE2RixVQUFVLEdBQUcsMEJBQTBCLDJJQUEySSxrQkFBa0Isc0lBQXNJLGVBQWUsK0NBQStDLHFDQUFxQyxHQUFHLGdFQUFnRSx3RUFBd0UsK0JBQStCLEdBQUcsMERBQTBELGlFOzs7Ozs7QUNBanZCLDRNQUEyTSxNQUFNLDBDQUEwQyxZQUFZLEtBQUssVUFBVSxtRkFBbUYsa0JBQWtCLDBCOzs7Ozs7QUNBM1gsbUpBQWtKLFdBQVcsK0JBQStCLFlBQVksK0JBQStCLFVBQVUsR0FBRywwQkFBMEIsaU1BQWlNLFlBQVksNkJBQTZCLFdBQVcsWUFBWSxXQUFXLCtDOzs7Ozs7QUNBMWhCLGlKOzs7Ozs7QUNBQSx1U0FBc1MsUUFBUSxhQUFhLDhDQUE4QyxpSUFBaUksK0JBQStCLDRCOzs7Ozs7QUNBemdCLCtGQUE4Rix1STs7Ozs7O0FDQTlGLHlGQUF3RixvQkFBb0IsK0lBQStJLG1CQUFtQixtQiIsImZpbGUiOiJmb3JtbHlMdW14LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkOWE3ZjdmMGZjMDM1M2Q3NjI0OFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uICgpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuICB2YXIgVVNJTkdfVEVNUExBVEVTID0gdHJ1ZTtcbiAgLyogQ3VzdG9tIHZhbGlkYXRpb24gbWVzc2FnZSBkZWZhdWx0cyBoZXJlICovXG4gIHZhciBWQUxJREFUSU9OX01FU1NBR0VTID0gW3tcbiAgICBuYW1lOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnRGl0IGlzIGVlbiB2ZXJwbGljaHQgdmVsZCdcbiAgfSwge1xuICAgIG5hbWU6ICdtYXhsZW5ndGgnLCBtZXNzYWdlOiAnRGl0IHZlbGQgaXMgdGUgbGFuZy4nXG4gIH0sIHtcbiAgICBuYW1lOiAnbWlubGVuZ3RoJywgbWVzc2FnZTogJ0RpdCB2ZWxkIGlzIHRlIGtvcnQuJ1xuICB9XTtcbiAgLyogTW9kdWxlIFRlbXBsYXRlcyArIERhdGEgKi9cbiAgdmFyIE1PRFVMRV9OQU1FID0gJ2Zvcm1seUx1bXgnO1xuICB2YXIgUFJFRklYID0gJ2x4JztcbiAgdmFyIEZJRUxEUyA9IFt7XG4gICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnZGF0ZS1waWNrZXInLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kYXRlLXBpY2tlci5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICAnbGFiZWwnOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ3JlcXVpcmVkJzogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICAvL30sIHtcbiAgICAvLyAgbmFtZTogJ2Ryb3Bkb3duJyxcbiAgICAvLyAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRyb3Bkb3duLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ2ZsZXgnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1mbGV4Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnaW5wdXQnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1pbnB1dC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBmaXhlZExhYmVsOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIGNsYXNzTmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgdHlwZTogY2hlY2sub25lT2YoWyd0ZXh0JywgJ251bWJlcicsICdlbWFpbCcsICdwYXNzd29yZCcsICd1cmwnLCAndGVsJ10pLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3JhZGlvJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtcmFkaW8uaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2Yoe1xuICAgICAgICAgICAgbmFtZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNoZWNrLm9uZU9mVHlwZShbY2hlY2suc3RyaW5nLCBjaGVjay5udW1iZXJdKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgICAgfSksXG4gICAgICAgICAgaW5saW5lOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAgbmFtZTogJ3NlbGVjdCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2U6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gICAgLy99LCB7XG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxuICAgIC8vXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWFzeW5jLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3N3aXRjaCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXN3aXRjaC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICd0ZXh0YXJlYScsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcm93czogY2hlY2subnVtYmVyLFxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfV07XG4gIHZhciBXUkFQUEVSUyA9IFt7XG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWwnKVxuICB9XTtcblxuICBmdW5jdGlvbiBfcHJlZml4ZXIobmFtZSkge1xuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xuICB9XG5cbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XG4gICAgcmV0dXJuICdmaWVsZHMvZm9ybWx5LWZpZWxkcy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLypAbmdJbmplY3QqL1xuICBmdW5jdGlvbiBzZXRGaWVsZHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlBcGlDaGVjaykge1xuICAgIHZhciBjID0gZm9ybWx5QXBpQ2hlY2s7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSxcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogX2ZpZWxkVGVtcGxhdGVVcmwoZmllbGQubmFtZSksXG4gICAgICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5hcGlDaGVjaztcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gc2V0RGVmYXVsdHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMpIHtcbiAgICBmb3JtbHlDb25maWcuZXh0cmFzLm5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyQm91bmQgPSB0cnVlO1xuICAgIFZBTElEQVRJT05fTUVTU0FHRVMubWFwKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XG4gICAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMuYWRkU3RyaW5nTWVzc2FnZSh2YWxpZGF0aW9uLm5hbWUsIHZhbGlkYXRpb24ubWVzc2FnZSk7XG4gICAgfSk7XG4gICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzLnBhdHRlcm4gPSBmdW5jdGlvbiAodmlld1ZhbHVlLCBtb2RlbFZhbHVlKSB7XG4gICAgICByZXR1cm4gKHZpZXdWYWx1ZSB8fCBtb2RlbFZhbHVlKSArICcgaXMgaW52YWxpZCc7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhY2hlVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgRklFTERTLm1hcChmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLCBmaWVsZC50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpLCB3cmFwcGVyLnRlbXBsYXRlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFuZ3VsYXIubW9kdWxlKE1PRFVMRV9OQU1FLCBbJ2Zvcm1seSddKS5jb25maWcoc2V0V3JhcHBlcnMpLnJ1bihzZXRGaWVsZHMpLnJ1bihzZXREZWZhdWx0cykucnVuKGNhY2hlVGVtcGxhdGVzKTtcbn0pKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9pbmRleC5qc1xuICoqLyIsIihmdW5jdGlvbiAoKSB7XHJcbiAgJ3VzZSBzdHJpY3QnO1xyXG4gIHZhciBVU0lOR19URU1QTEFURVMgPSB0cnVlO1xyXG4gIC8qIEN1c3RvbSB2YWxpZGF0aW9uIG1lc3NhZ2UgZGVmYXVsdHMgaGVyZSAqL1xyXG4gIHZhciBWQUxJREFUSU9OX01FU1NBR0VTID0gW3tcclxuICAgIG5hbWU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdEaXQgaXMgZWVuIHZlcnBsaWNodCB2ZWxkJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdtYXhsZW5ndGgnLCBtZXNzYWdlOiAnRGl0IHZlbGQgaXMgdGUgbGFuZy4nXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ21pbmxlbmd0aCcsIG1lc3NhZ2U6ICdEaXQgdmVsZCBpcyB0ZSBrb3J0LidcclxuICB9XTtcclxuICAvKiBNb2R1bGUgVGVtcGxhdGVzICsgRGF0YSAqL1xyXG4gIHZhciBNT0RVTEVfTkFNRSA9ICdmb3JtbHlMdW14JztcclxuICB2YXIgUFJFRklYID0gJ2x4JztcclxuICB2YXIgRklFTERTID0gW3tcclxuICAgIG5hbWU6ICdjaGVja2JveCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBuYW1lOiAnZGF0ZS1waWNrZXInLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgJ2xhYmVsJzogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgJ3JlcXVpcmVkJzogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAvL30sIHtcclxuICAvLyAgbmFtZTogJ2Ryb3Bkb3duJyxcclxuICAvLyAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRyb3Bkb3duLmh0bWwnKVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdmbGV4JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1mbGV4Lmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2lucHV0JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1pbnB1dC5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBpY29uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBmaXhlZExhYmVsOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICBjbGFzc05hbWU6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXHJcbiAgICAgICAgICB0eXBlOiBjaGVjay5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3VybCcsICd0ZWwnXSksXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBuYW1lOiAncmFkaW8nLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXJhZGlvLmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiAoY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZih7XHJcbiAgICAgICAgICAgIG5hbWU6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgICAgdmFsdWU6IGNoZWNrLm9uZU9mVHlwZShbY2hlY2suc3RyaW5nLCBjaGVjay5udW1iZXJdKSxcclxuICAgICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgaW5saW5lOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3NlbGVjdCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgJ21pbi1sZW5ndGgnOiBjaGVjay5udW1iZXIsXHJcbiAgICAgICAgICAnYWxsb3ctY2xlYXInOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgJ25nLWF0dHItbXVsdGlwbGUnOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgc2VsZWN0ZWQ6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIHNlbGVjdGVkMjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaG9pY2UyOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaG9pY2VzOiBjaGVjay5hcnJheSxcclxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy99LCB7XHJcbiAgICAvL1x0bmFtZTogJ3NlbGVjdC1hc3luYycsXHJcbiAgICAvL1x0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1hc3luYy5odG1sJylcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnc3dpdGNoJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zd2l0Y2guaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBuYW1lOiAndGV4dGFyZWEnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXRleHRhcmVhLmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIHRoZW1lOiBjaGVjay5vbmVPZihbJ2xpZ2h0JywgJ2RhcmsnXSksXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlcixcclxuICAgICAgICAgIGNvbHM6IGNoZWNrLm51bWJlclxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XTtcclxuICB2YXIgV1JBUFBFUlMgPSBbe1xyXG4gICAgbmFtZTogJ3dyYXBwZXItZGl2JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWwnKVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICd3cmFwcGVyLWVycm9ycycsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sJylcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnd3JhcHBlci1mbGV4JyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZmxleC5odG1sJylcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnd3JhcHBlci1pbmxpbmUnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1pbmxpbmUuaHRtbCcpXHJcbiAgfV07XHJcblxyXG4gIGZ1bmN0aW9uIF9wcmVmaXhlcihuYW1lKSB7XHJcbiAgICByZXR1cm4gUFJFRklYICsgJy0nICsgbmFtZTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF93cmFwcGVyVGVtcGxhdGVVcmwobmFtZSkge1xyXG4gICAgcmV0dXJuICd3cmFwcGVycy9mb3JtbHktd3JhcHBlcnMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBfZmllbGRUZW1wbGF0ZVVybChuYW1lKSB7XHJcbiAgICByZXR1cm4gJ2ZpZWxkcy9mb3JtbHktZmllbGRzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xyXG4gIH1cclxuXHJcbiAgLypAbmdJbmplY3QqL1xyXG4gIGZ1bmN0aW9uIHNldFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XHJcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XHJcbiAgICAgIFdSQVBQRVJTLm1hcChmdW5jdGlvbiAod3JhcHBlcikge1xyXG4gICAgICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoe1xyXG4gICAgICAgICAgbmFtZTogX3ByZWZpeGVyKHdyYXBwZXIubmFtZSksXHJcbiAgICAgICAgICB0ZW1wbGF0ZVVybDogX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qQG5nSW5qZWN0Ki9cclxuICBmdW5jdGlvbiBzZXRGaWVsZHMoZm9ybWx5Q29uZmlnLCBmb3JtbHlBcGlDaGVjaykge1xyXG4gICAgdmFyIGMgPSBmb3JtbHlBcGlDaGVjaztcclxuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcclxuICAgICAgICBGSUVMRFMubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICAgZm9ybWx5Q29uZmlnLnNldFR5cGUoe1xyXG4gICAgICAgICAgICBuYW1lOiBfcHJlZml4ZXIoZmllbGQubmFtZSksXHJcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiBfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSxcclxuICAgICAgICAgICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkLmFwaUNoZWNrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICBmdW5jdGlvbiBzZXREZWZhdWx0cyhmb3JtbHlDb25maWcsIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcykge1xyXG4gICAgZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kID0gdHJ1ZTtcclxuICAgIFZBTElEQVRJT05fTUVTU0FHRVMubWFwKGZ1bmN0aW9uICh2YWxpZGF0aW9uKSB7XHJcbiAgICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5hZGRTdHJpbmdNZXNzYWdlKHZhbGlkYXRpb24ubmFtZSwgdmFsaWRhdGlvbi5tZXNzYWdlKTtcclxuICAgIH0pO1xyXG4gICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLm1lc3NhZ2VzLnBhdHRlcm4gPSBmdW5jdGlvbiAodmlld1ZhbHVlLCBtb2RlbFZhbHVlKSB7XHJcbiAgICAgIHJldHVybiAodmlld1ZhbHVlIHx8IG1vZGVsVmFsdWUpICsgJyBpcyBpbnZhbGlkJztcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjYWNoZVRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xyXG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xyXG4gICAgICBGSUVMRFMubWFwKGZ1bmN0aW9uIChmaWVsZCkge1xyXG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSwgZmllbGQudGVtcGxhdGUpO1xyXG4gICAgICB9KTtcclxuICAgICAgV1JBUFBFUlMubWFwKGZ1bmN0aW9uICh3cmFwcGVyKSB7XHJcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKSwgd3JhcHBlci50ZW1wbGF0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYW5ndWxhci5tb2R1bGUoTU9EVUxFX05BTUUsIFtcclxuICAgICdmb3JtbHknXHJcbiAgXSkuY29uZmlnKHNldFdyYXBwZXJzKS5ydW4oc2V0RmllbGRzKS5ydW4oc2V0RGVmYXVsdHMpLnJ1bihjYWNoZVRlbXBsYXRlcyk7XHJcbn0oKSk7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4uL34vanNoaW50LWxvYWRlciEuL2luZGV4LmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcImNoZWNrYm94XFxcIj5cXHJcXG5cXHQ8aW5wdXQgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG5cXHQgICAgICAgdHlwZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuXFx0ICAgICAgIHJvbGU9XFxcImNoZWNrYm94XFxcIlxcclxcblxcdCAgICAgICBjbGFzcz1cXFwiY2hlY2tib3hfX2lucHV0XFxcIj5cXHJcXG5cXHQ8bGFiZWwgZm9yPXt7OjppZH19IGNsYXNzPVxcXCJjaGVja2JveF9fbGFiZWxcXFwiIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIj57e3RvLmxhYmVsfX08L2xhYmVsPlxcclxcblxcdDxzcGFuIG5nLWlmPVxcXCI6OnRvLmRlc2NyaXB0aW9uXFxcIlxcclxcblxcdCAgICAgIGNsYXNzPVxcXCJjaGVja2JveF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L3NwYW4+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LWRhdGUtcGlja2VyIG1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcclxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwie3s6OnRvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcXCI+XFxyXFxuPC9seC1kYXRlLXBpY2tlcj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLWZsZXgtZmllbGRzXFxcIlxcclxcbiAgICAgbW9kZWw9XFxcIiRwYXJlbnQubW9kZWxcXFwiXFxyXFxuICAgICBmbGV4LWNvbnRhaW5lcj1cXFwie3s6OnRvLmZsZXguY29udGFpbmVyIHx8ICdyb3cnfX1cXFwiXFxyXFxuICAgICBmbGV4LWFsaWduPVxcXCJ7ezo6dG8uZmxleC5hbGlnbiB8fCAnc3BhY2UtYmV0d2Vlbid9fVxcXCJcXHJcXG4gICAgIGZsZXgtZ3V0dGVyPVxcXCJ7ezo6dG8uZmxleC5ndXR0ZXIgfHwgJzI0J319XFxcIj5cXHJcXG5cXHQ8ZGl2IGZvcm1seS1maWVsZFxcclxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJmaWVsZCBpbiB0by5maWVsZHMgdHJhY2sgYnkgJGluZGV4XFxcIlxcclxcblxcdCAgICAgbmctaWY9XFxcIiFmaWVsZC5oaWRlXFxcIlxcclxcblxcdCAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZCB7ezo6ZmllbGQudHlwZSA/ICdmb3JtbHktZmllbGQtJyArIGZpZWxkLnR5cGUgOiAnJ319XFxcIlxcclxcblxcdCAgICAgbmctc3R5bGU9XFxcIjo6dG8uZmxleC5zdHlsZVxcXCJcXHJcXG5cXHQgICAgIG9wdGlvbnM9XFxcImZpZWxkXFxcIlxcclxcblxcdCAgICAgbW9kZWw9XFxcImZpZWxkLm1vZGVsIHx8IG1vZGVsXFxcIlxcclxcblxcdCAgICAgZmllbGRzPVxcXCJmaWVsZHNcXFwiXFxyXFxuXFx0ICAgICBmb3JtPVxcXCJmb3JtXFxcIlxcclxcblxcdCAgICAgZm9ybS1pZD1cXFwiZm9ybUlkXFxcIlxcclxcblxcdCAgICAgZm9ybS1zdGF0ZT1cXFwib3B0aW9ucy5mb3JtU3RhdGVcXFwiXFxyXFxuXFx0ICAgICBpbmRleD1cXFwiJGluZGV4XFxcIlxcclxcblxcdCAgICAgZmxleC1pdGVtPVxcXCJ7ezo6dG8uZmxleC5pdGVtIHx8ICcxJ319XFxcIlxcclxcblxcdCAgICAgZmxleC1vcmRlcj1cXFwie3s6OnRvLmZsZXgub3JkZXJ9fVxcXCI+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtdGV4dC1maWVsZCBkYXRhLW1vZGVsPVxcXCI6Om1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcclxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgdGhlbWU9XFxcInt7Ojp0by50aGVtZX19XFxcIlxcclxcbiAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0by5kaXNhYmxlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcclxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcblxcdCAgICAgICB0eXBlPVxcXCJ7ezo6dG8udHlwZX19XFxcIlxcclxcblxcdCAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXHJcXG5cXHQgICAgICAgbmctY2xhc3M9XFxcIjo6dG8uY2xhc3NOYW1lXFxcIi8+XFxyXFxuPC9seC10ZXh0LWZpZWxkPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1pbnB1dC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXHJcXG5cXHQ8aDMgbmctaWY9XFxcIjo6dG8ubGFiZWxcXFwiPjxsYWJlbD57ezo6dG8ubGFiZWx9fTwvbGFiZWw+PC9oMz5cXHJcXG5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJyYWRpby1idXR0b25cXFwiXFxyXFxuXFx0ICAgICBuZy1jbGFzcz1cXFwieydyYWRpby1idXR0b25fX2lubGluZSc6IHRvLmlubGluZX1cXFwiXFxyXFxuXFx0ICAgICBuZy1yZXBlYXQ9XFxcIm8gaW4gdG8ub3B0aW9uc1xcXCI+XFxyXFxuXFx0XFx0PGlucHV0IG5nLW1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsWyRwYXJlbnQub3B0aW9ucy5rZXldXFxcIlxcclxcblxcdFxcdCAgICAgICBpZD1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxyXFxuXFx0XFx0ICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcclxcblxcdFxcdCAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpvLmRpc2FibGVkXFxcIlxcclxcblxcdFxcdCAgICAgICBjbGFzcz1cXFwicmFkaW8tYnV0dG9uX19pbnB1dFxcXCJcXHJcXG5cXHRcXHQgICAgICAgbmctdmFsdWU9XFxcIjo6by52YWx1ZVxcXCJcXHJcXG5cXHRcXHQgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXggKyAnX3JhZGlvQnV0dG9uJ319XFxcIj5cXHJcXG5cXHRcXHQ8bGFiZWwgZm9yPVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXh9fVxcXCJcXHJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9fbGFiZWxcXFwiPnt7OjpvLm5hbWV9fTwvbGFiZWw+XFxyXFxuICAgICAgPHNwYW4gbmctaWY9XFxcIjo6by5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faGVscFxcXCI+e3s6Om8uZGVzY3JpcHRpb259fVxcclxcbiAgICAgIDwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtcmFkaW8uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLXNlbGVjdFxcXCI+XFxyXFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+XFxyXFxuXFx0XFx0e3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXHJcXG5cXHQ8L2xhYmVsPjwvaDM+XFxyXFxuXFx0PGx4LXNlbGVjdCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcblxcdCAgICAgICAgICAgbHgtY2hvaWNlcz1cXFwidG8uY2hvaWNlc1xcXCJcXHJcXG5cXHQgICAgICAgICAgIGx4LWxhYmVsPVxcXCJ7ezo6dG8ucGxhY2Vob2xkZXJ9fVxcXCJcXHJcXG5cXHQgICAgICAgICAgIG1pbi1sZW5ndGg9XFxcIjo6dG8ubWluTGVuZ3RoXFxcIlxcclxcblxcdCAgICAgICAgICAgYWxsb3ctY2xlYXI9XFxcIjo6dG8uYWxsb3dDbGVhclxcXCJcXHJcXG5cXHQgICAgICAgICAgIG5nLWF0dHItbXVsdGlwbGU9XFxcInt7Ojp0by5tdWx0aXBsZX19XFxcIj5cXHJcXG5cXHJcXG5cXHRcXHQ8bHgtc2VsZWN0LXNlbGVjdGVkPlxcclxcblxcdFxcdFxcdHt7JHNlbGVjdGVkW3RvLnNlbGVjdGVkXSB8fCAkc2VsZWN0ZWR9fSB7ezo6dG8uc2VsZWN0ZWQyID8gJyAtICcgK1xcclxcblxcdFxcdFxcdCRzZWxlY3RlZFt0by5zZWxlY3RlZDJdIDogJyd9fVxcclxcblxcdFxcdDwvbHgtc2VsZWN0LXNlbGVjdGVkPlxcclxcblxcclxcblxcdFxcdDxseC1zZWxlY3QtY2hvaWNlcz5cXHJcXG5cXHRcXHRcXHR7eyRjaG9pY2VbdG8uY2hvaWNlXSB8fCAkY2hvaWNlfX0ge3s6OnRvLmNob2ljZTIgPyAnIC0gJyArXFxyXFxuXFx0XFx0XFx0JGNob2ljZVt0by5jaG9pY2UyXSA6ICcnfX1cXHJcXG5cXHRcXHQ8L2x4LXNlbGVjdC1jaG9pY2VzPlxcclxcblxcclxcblxcdDwvbHgtc2VsZWN0PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzd2l0Y2hcXFwiPlxcclxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcblxcdCAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG5cXHQgICAgICAgcm9sZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuXFx0ICAgICAgIGNsYXNzPVxcXCJzd2l0Y2hfX2lucHV0XFxcIi8+XFxyXFxuXFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkfX1cXFwiIGNsYXNzPVxcXCJzd2l0Y2hfX2xhYmVsXFxcIiBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+e3t0by5sYWJlbH19PC9sYWJlbD5cXHJcXG5cXHQ8c3BhbiBuZy1pZj1cXFwiOjp0by5kZXNjcmlwdGlvblxcXCJcXHJcXG5cXHQgICAgICBjbGFzcz1cXFwic3dpdGNoX19oZWxwXFxcIj57ezo6dG8uZGVzY3JpcHRpb259fTwvc3Bhbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc3dpdGNoLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgZml4ZWQtbGFiZWw9XFxcIjo6dG8uZml4ZWRMYWJlbFxcXCJcXHJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcclxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcclxcbiAgICA8dGV4dGFyZWEgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcclxcbiAgICAgICAgICAgICAgcm93cz1cXFwie3s6OnRvLnJvd3N9fVxcXCIgY29scz1cXFwie3s6OnRvLmNvbHN9fVxcXCI+XFxyXFxuICAgIDwvdGV4dGFyZWE+XFxyXFxuPC9seC10ZXh0LWZpZWxkPlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcIjo6dG8uZGl2LmNsYXNzTmFtZVxcXCJcXHJcXG5cXHRuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGVcXFwiPlxcclxcblxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdj5cXHJcXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG5cXHQ8dWwgY2xhc3M9XFxcImZvcm0tZXJyb3JcXFwiIG5nLW1lc3NhZ2VzPVxcXCJmYy4kZXJyb3JcXFwiXFxyXFxuXFx0ICAgIG5nLXNob3c9XFxcIm9wdGlvbnMudmFsaWRhdGlvbi5lcnJvckV4aXN0c0FuZFNob3VsZEJlVmlzaWJsZVxcXCI+XFxyXFxuXFx0XFx0PGxpIG5nLXJlcGVhdD1cXFwiKG5hbWUsIG1lc3NhZ2UpIGluIDo6b3B0aW9ucy52YWxpZGF0aW9uLm1lc3NhZ2VzXFxcIlxcclxcblxcdFxcdCAgICBuZy1tZXNzYWdlPXt7OjpuYW1lfX0+XFxyXFxuXFx0XFx0XFx0e3ttZXNzYWdlKGZjLiR2aWV3VmFsdWUsIGZjLiRtb2RlbFZhbHVlLCB0aGlzKX19XFxyXFxuXFx0XFx0PC9saT5cXHJcXG5cXHQ8L3VsPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJmb3JtLXBlbmRpbmdcXFwiXFxyXFxuXFx0ICAgICAgbmctaWY9XFxcInRvLnBlbmRpbmcgJiYgZmMuJHBlbmRpbmcgJiYgZmMuJHRvdWNoZWRcXFwiPlxcclxcblxcdHt7Ojp0by5wZW5kaW5nIHx8ICdDaGVja2luZy4uLid9fVxcclxcblxcdDwvc3Bhbj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWVycm9ycy5odG1sXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IG5nLWNsYXNzPVxcXCI6OnRvLmRpdi5jbGFzc05hbWVcXFwiXFxyXFxuICAgICBuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGUgfHwge31cXFwiXFxyXFxuICAgICBmbGV4LWl0ZW09XFxcIjo6dG8uZmxleC5pdGVtXFxcIlxcclxcbiAgICAgZmxleC1vcmRlcj1cXFwiOjp0by5mbGV4LW9yZGVyXFxcIj5cXHJcXG5cXHQ8Zm9ybWx5LXRyYW5zY2x1ZGU+PC9mb3JtbHktdHJhbnNjbHVkZT5cXHJcXG48L2Rpdj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHNwYW4gY2xhc3M9XFxcImlubGluZS13cmFwcGVyXFxcIj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1iZWZvcmVcXFwiPnt7Ojp0by5pbmxpbmUuYmVmb3JlfX08L3NwYW4+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tY29udGVudFxcXCI+XFxyXFxuXFx0XFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuXFx0PC9zcGFuPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWFmdGVyXFxcIj57ezo6dG8uaW5saW5lLmFmdGVyfX08L3NwYW4+XFxyXFxuPC9zcGFuPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItaW5saW5lLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==