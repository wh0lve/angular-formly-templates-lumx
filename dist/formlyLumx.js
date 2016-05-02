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

	module.exports = "<div class=\"checkbox\">\r\n\t<lx-checkbox ng-model=\"model[options.key]\">\r\n\t<lx-checkbox-label for={{::id}} class=\"checkbox__label\" aria-label=\"{{::to.label}}\">{{to.label}}</lx-checkbox-label>\r\n\t<lx-checkbox-help ng-if=\"::to.description\"\r\n\t      class=\"checkbox__help\">{{::to.description}}</lx-checkbox-help>\r\n</div>"

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

	module.exports = "<div class=\"aftl-select\">\r\n\t<h3 ng-if=\"::to.label\"><label>\r\n\t\t{{to.label}} {{::to.required ? '*' : ''}}\r\n\t</label></h3>\r\n\t<lx-select ng-model=\"model[options.key]\" lx-choices=\"to.choices\" lx-label=\"{{::to.placeholder}}\" min-length=\"::to.minLength\"\r\n\t\tallow-clear=\"::to.allowClear\" ng-attr-multiple=\"{{::to.multiple}}\" style=\"float:left; width:90%;\">\r\n\r\n\t\t<lx-select-selected>\r\n\t\t\t{{ $selected}}\r\n\t\t</lx-select-selected>\r\n\r\n\t\t<lx-select-choices>\r\n\t\t\t<div class=\"block imagePicker\">\r\n\t\t\t\t<img ng-src=\"{{filepath }}{{$choice}}\" height=\"50\" class=\"selectimg\" err-src=\"img/placeholder_img.svg\"\r\n\t\t\t\t/>\r\n\t\t\t\t<h5>{{ $choice }}</h5>\r\n\t\t\t</div>\r\n\t\t</lx-select-choices>\r\n\r\n\t</lx-select>\r\n\t<img style=\"float:right; width:10%; margin-bottom:40px; margin-top:14px;\" ng-src=\"http://beng.kissthefrog.lan/expContent/{{model[options.key]}}\"\r\n\t\twidth=\"50\" height=\"50\" class=\"img\" err-src=\"img/placeholder_face.svg\">\r\n</div>"

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzkwM2FhNWRjMGIyZjYwMDZmNDgiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanM/MzA5MCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtY2hlY2tib3guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtZmxleC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1pbnB1dC5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1yYWRpby5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zZWxlY3QuaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtc2VsZWN0LWltZy5odG1sIiwid2VicGFjazovLy8uL2ZpZWxkcy9seC1zd2l0Y2guaHRtbCIsIndlYnBhY2s6Ly8vLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbCIsIndlYnBhY2s6Ly8vLi93cmFwcGVycy9seC13cmFwcGVyLWRpdi5odG1sIiwid2VicGFjazovLy8uL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vLy4vd3JhcHBlcnMvbHgtd3JhcHBlci1pbmxpbmUuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQTs7QUNBQSxFQUFDLFlBQVk7R0FDWDtHQUNBLElBQUksa0JBQWtCOztHQUV0QixJQUFJLHNC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OztBQ0EzWCxtSkFBa0osV0FBVywrQkFBK0IsWUFBWSwrQkFBK0IsVUFBVSxHQUFHLDBCQUEwQixpTUFBaU0sWUFBWSw2QkFBNkIsV0FBVyxZQUFZLFdBQVcsK0M7Ozs7OztBQ0ExaEIsaUo7Ozs7OztBQ0FBLHVTQUFzUyxRQUFRLGFBQWEsOENBQThDLGlJQUFpSSwrQkFBK0IsNEI7Ozs7OztBQ0F6Z0IsK0ZBQThGLHVJOzs7Ozs7QUNBOUYseUZBQXdGLG9CQUFvQiwrSUFBK0ksbUJBQW1CLG1CIiwiZmlsZSI6ImZvcm1seUx1bXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDM5MDNhYTVkYzBiMmY2MDA2ZjQ4XG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG4gIHZhciBVU0lOR19URU1QTEFURVMgPSB0cnVlO1xuICAvKiBDdXN0b20gdmFsaWRhdGlvbiBtZXNzYWdlIGRlZmF1bHRzIGhlcmUgKi9cbiAgdmFyIFZBTElEQVRJT05fTUVTU0FHRVMgPSBbe1xuICAgIG5hbWU6ICdyZXF1aXJlZCcsIG1lc3NhZ2U6ICdEaXQgaXMgZWVuIHZlcnBsaWNodCB2ZWxkJ1xuICB9LCB7XG4gICAgbmFtZTogJ21heGxlbmd0aCcsIG1lc3NhZ2U6ICdEaXQgdmVsZCBpcyB0ZSBsYW5nLidcbiAgfSwge1xuICAgIG5hbWU6ICdtaW5sZW5ndGgnLCBtZXNzYWdlOiAnRGl0IHZlbGQgaXMgdGUga29ydC4nXG4gIH1dO1xuICAvKiBNb2R1bGUgVGVtcGxhdGVzICsgRGF0YSAqL1xuICB2YXIgTU9EVUxFX05BTUUgPSAnZm9ybWx5THVteCc7XG4gIHZhciBQUkVGSVggPSAnbHgnO1xuICB2YXIgRklFTERTID0gW3tcbiAgICBuYW1lOiAnY2hlY2tib3gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1jaGVja2JveC5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdkYXRlLXBpY2tlcicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWRhdGUtcGlja2VyLmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgICdsYWJlbCc6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAncmVxdWlyZWQnOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vfSwge1xuICAgIC8vICBuYW1lOiAnZHJvcGRvd24nLFxuICAgIC8vICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZHJvcGRvd24uaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWZsZXguaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgfSwge1xuICAgIG5hbWU6ICdpbnB1dCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWlucHV0Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGZpeGVkTGFiZWw6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgY2xhc3NOYW1lOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgdGhlbWU6IGNoZWNrLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKSxcbiAgICAgICAgICB0eXBlOiBjaGVjay5vbmVPZihbJ3RleHQnLCAnbnVtYmVyJywgJ2VtYWlsJywgJ3Bhc3N3b3JkJywgJ3VybCcsICd0ZWwnXSksXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAncmFkaW8nLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1yYWRpby5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgb3B0aW9uczogY2hlY2suYXJyYXlPZih7XG4gICAgICAgICAgICBuYW1lOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogY2hlY2sub25lT2ZUeXBlKFtjaGVjay5zdHJpbmcsIGNoZWNrLm51bWJlcl0pLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBpbmxpbmU6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAnc2VsZWN0JyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0Lmh0bWwnKSxcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gYXBpQ2hlY2soY2hlY2spIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICAnbWluLWxlbmd0aCc6IGNoZWNrLm51bWJlcixcbiAgICAgICAgICAnYWxsb3ctY2xlYXInOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgICduZy1hdHRyLW11bHRpcGxlJzogY2hlY2suYm9vbGVhbixcbiAgICAgICAgICBzZWxlY3RlZDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIHNlbGVjdGVkMjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZTogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZTI6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBjaG9pY2VzOiBjaGVjay5hcnJheSxcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgICAvL30sIHtcbiAgICAvL1x0bmFtZTogJ3NlbGVjdC1hc3luYycsXG4gICAgLy9cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QtYXN5bmMuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnc2VsZWN0LWltZycsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1pbWcuaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxuICAgICAgICAgICdhbGxvdy1jbGVhcic6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgJ25nLWF0dHItbXVsdGlwbGUnOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgc2VsZWN0ZWQyOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlOiBjaGVjay5zdHJpbmcsXG4gICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNob2ljZXM6IGNoZWNrLmFycmF5LFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICAgIC8vfSwge1xuICAgIC8vXHRuYW1lOiAnc2VsZWN0LWFzeW5jJyxcbiAgICAvL1x0dGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1hc3luYy5odG1sJylcbiAgfSwge1xuICAgIG5hbWU6ICdzd2l0Y2gnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zd2l0Y2guaHRtbCcpLFxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjaGVjaykge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGNoZWNrZWQ6IGNoZWNrLmJvb2xlYW4sXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH0sIHtcbiAgICBuYW1lOiAndGV4dGFyZWEnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sJyksXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uIGFwaUNoZWNrKGNoZWNrKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxuICAgICAgICAgIGljb246IGNoZWNrLnN0cmluZyxcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuLFxuICAgICAgICAgIHJvd3M6IGNoZWNrLm51bWJlcixcbiAgICAgICAgICBjb2xzOiBjaGVjay5udW1iZXJcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG4gIH1dO1xuICB2YXIgV1JBUFBFUlMgPSBbe1xuICAgIG5hbWU6ICd3cmFwcGVyLWRpdicsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCcpXG4gIH0sIHtcbiAgICBuYW1lOiAnd3JhcHBlci1lcnJvcnMnLFxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItZmxleCcsXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWwnKVxuICB9LCB7XG4gICAgbmFtZTogJ3dyYXBwZXItaW5saW5lJyxcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sJylcbiAgfV07XG5cbiAgZnVuY3Rpb24gX3ByZWZpeGVyKG5hbWUpIHtcbiAgICByZXR1cm4gUFJFRklYICsgJy0nICsgbmFtZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF93cmFwcGVyVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnd3JhcHBlcnMvZm9ybWx5LXdyYXBwZXJzLScgKyBfcHJlZml4ZXIobmFtZSkgKyAnLmh0bWwnO1xuICB9XG5cbiAgZnVuY3Rpb24gX2ZpZWxkVGVtcGxhdGVVcmwobmFtZSkge1xuICAgIHJldHVybiAnZmllbGRzL2Zvcm1seS1maWVsZHMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XG4gIH1cblxuICAvKkBuZ0luamVjdCovXG4gIGZ1bmN0aW9uIHNldFdyYXBwZXJzKGZvcm1seUNvbmZpZ1Byb3ZpZGVyKSB7XG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xuICAgICAgV1JBUFBFUlMubWFwKGZ1bmN0aW9uICh3cmFwcGVyKSB7XG4gICAgICAgIGZvcm1seUNvbmZpZ1Byb3ZpZGVyLnNldFdyYXBwZXIoe1xuICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcih3cmFwcGVyLm5hbWUpLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qQG5nSW5qZWN0Ki9cbiAgZnVuY3Rpb24gc2V0RmllbGRzKGZvcm1seUNvbmZpZywgZm9ybWx5QXBpQ2hlY2spIHtcbiAgICB2YXIgYyA9IGZvcm1seUFwaUNoZWNrO1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgIGZvcm1seUNvbmZpZy5zZXRUeXBlKHtcbiAgICAgICAgICBuYW1lOiBfcHJlZml4ZXIoZmllbGQubmFtZSksXG4gICAgICAgICAgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLFxuICAgICAgICAgIGFwaUNoZWNrOiBmdW5jdGlvbiBhcGlDaGVjayhjKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQuYXBpQ2hlY2s7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKGZvcm1seUNvbmZpZywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XG4gICAgZm9ybWx5Q29uZmlnLmV4dHJhcy5uZ01vZGVsQXR0cnNNYW5pcHVsYXRvclByZWZlckJvdW5kID0gdHJ1ZTtcbiAgICBWQUxJREFUSU9OX01FU1NBR0VTLm1hcChmdW5jdGlvbiAodmFsaWRhdGlvbikge1xuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmFkZFN0cmluZ01lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xuICAgIH0pO1xuICAgIGZvcm1seVZhbGlkYXRpb25NZXNzYWdlcy5tZXNzYWdlcy5wYXR0ZXJuID0gZnVuY3Rpb24gKHZpZXdWYWx1ZSwgbW9kZWxWYWx1ZSkge1xuICAgICAgcmV0dXJuICh2aWV3VmFsdWUgfHwgbW9kZWxWYWx1ZSkgKyAnIGlzIGludmFsaWQnO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjYWNoZVRlbXBsYXRlcygkdGVtcGxhdGVDYWNoZSkge1xuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICR0ZW1wbGF0ZUNhY2hlLnB1dChfZmllbGRUZW1wbGF0ZVVybChmaWVsZC5uYW1lKSwgZmllbGQudGVtcGxhdGUpO1xuICAgICAgfSk7XG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF93cmFwcGVyVGVtcGxhdGVVcmwod3JhcHBlci5uYW1lKSwgd3JhcHBlci50ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgWydmb3JtbHknXSkuY29uZmlnKHNldFdyYXBwZXJzKS5ydW4oc2V0RmllbGRzKS5ydW4oc2V0RGVmYXVsdHMpLnJ1bihjYWNoZVRlbXBsYXRlcyk7XG59KSgpO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vaW5kZXguanNcbiAqKi8iLCIoZnVuY3Rpb24gKCkge1xyXG4gICd1c2Ugc3RyaWN0JztcclxuICB2YXIgVVNJTkdfVEVNUExBVEVTID0gdHJ1ZTtcclxuICAvKiBDdXN0b20gdmFsaWRhdGlvbiBtZXNzYWdlIGRlZmF1bHRzIGhlcmUgKi9cclxuICB2YXIgVkFMSURBVElPTl9NRVNTQUdFUyA9IFt7XHJcbiAgICBuYW1lOiAncmVxdWlyZWQnLCBtZXNzYWdlOiAnRGl0IGlzIGVlbiB2ZXJwbGljaHQgdmVsZCdcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnbWF4bGVuZ3RoJywgbWVzc2FnZTogJ0RpdCB2ZWxkIGlzIHRlIGxhbmcuJ1xyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdtaW5sZW5ndGgnLCBtZXNzYWdlOiAnRGl0IHZlbGQgaXMgdGUga29ydC4nXHJcbiAgfV07XHJcbiAgLyogTW9kdWxlIFRlbXBsYXRlcyArIERhdGEgKi9cclxuICB2YXIgTU9EVUxFX05BTUUgPSAnZm9ybWx5THVteCc7XHJcbiAgdmFyIFBSRUZJWCA9ICdseCc7XHJcbiAgdmFyIEZJRUxEUyA9IFt7XHJcbiAgICBuYW1lOiAnY2hlY2tib3gnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWwnKSxcclxuICAgIGFwaUNoZWNrOiBmdW5jdGlvbihjaGVjaykge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlT3B0aW9uczoge1xyXG4gICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaGVja2VkOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ2RhdGUtcGlja2VyJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kYXRlLXBpY2tlci5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgICdsYWJlbCc6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgICdyZXF1aXJlZCc6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgLy99LCB7XHJcbiAgLy8gIG5hbWU6ICdkcm9wZG93bicsXHJcbiAgLy8gIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1kcm9wZG93bi5odG1sJylcclxuICB9LCB7XHJcbiAgICBuYW1lOiAnZmxleCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtZmxleC5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdpbnB1dCcsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtaW5wdXQuaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgZml4ZWRMYWJlbDogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgY2xhc3NOYW1lOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICB0aGVtZTogY2hlY2sub25lT2YoWydsaWdodCcsICdkYXJrJ10pLFxyXG4gICAgICAgICAgdHlwZTogY2hlY2sub25lT2YoWyd0ZXh0JywgJ251bWJlcicsICdlbWFpbCcsICdwYXNzd29yZCcsICd1cmwnLCAndGVsJ10pLFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3JhZGlvJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1yYWRpby5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24gKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgZGVzY3JpcHRpb246IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIG9wdGlvbnM6IGNoZWNrLmFycmF5T2Yoe1xyXG4gICAgICAgICAgICBuYW1lOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlOiBjaGVjay5vbmVPZlR5cGUoW2NoZWNrLnN0cmluZywgY2hlY2subnVtYmVyXSksXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICAgIGlubGluZTogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdzZWxlY3QnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgICdtaW4tbGVuZ3RoJzogY2hlY2subnVtYmVyLFxyXG4gICAgICAgICAgJ2FsbG93LWNsZWFyJzogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgICduZy1hdHRyLW11bHRpcGxlJzogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIHNlbGVjdGVkOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBzZWxlY3RlZDI6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNob2ljZTogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlMjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hvaWNlczogY2hlY2suYXJyYXksXHJcbiAgICAgICAgICByZXF1aXJlZDogY2hlY2suYm9vbGVhblxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIC8vfSwge1xyXG4gICAgLy9cdG5hbWU6ICdzZWxlY3QtYXN5bmMnLFxyXG4gICAgLy9cdHRlbXBsYXRlOiByZXF1aXJlKCcuL2ZpZWxkcy9seC1zZWxlY3QtYXN5bmMuaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3NlbGVjdC1pbWcnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXNlbGVjdC1pbWcuaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICAgbGFiZWw6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICAnbWluLWxlbmd0aCc6IGNoZWNrLm51bWJlcixcclxuICAgICAgICAgICdhbGxvdy1jbGVhcic6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICAnbmctYXR0ci1tdWx0aXBsZSc6IGNoZWNrLmJvb2xlYW4sXHJcbiAgICAgICAgICBzZWxlY3RlZDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgc2VsZWN0ZWQyOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBjaG9pY2U6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNob2ljZTI6IGNoZWNrLnN0cmluZyxcclxuICAgICAgICAgIGNob2ljZXM6IGNoZWNrLmFycmF5LFxyXG4gICAgICAgICAgcmVxdWlyZWQ6IGNoZWNrLmJvb2xlYW5cclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgICAvL30sIHtcclxuICAgIC8vXHRuYW1lOiAnc2VsZWN0LWFzeW5jJyxcclxuICAgIC8vXHR0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtc2VsZWN0LWFzeW5jLmh0bWwnKVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICdzd2l0Y2gnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vZmllbGRzL2x4LXN3aXRjaC5odG1sJyksXHJcbiAgICBhcGlDaGVjazogZnVuY3Rpb24oY2hlY2spIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZU9wdGlvbnM6IHtcclxuICAgICAgICAgIGxhYmVsOiBjaGVjay5zdHJpbmcsXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgY2hlY2tlZDogY2hlY2suYm9vbGVhbixcclxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICd0ZXh0YXJlYScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi9maWVsZHMvbHgtdGV4dGFyZWEuaHRtbCcpLFxyXG4gICAgYXBpQ2hlY2s6IGZ1bmN0aW9uKGNoZWNrKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdGVtcGxhdGVPcHRpb25zOiB7XHJcbiAgICAgICAgICBsYWJlbDogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgaWNvbjogY2hlY2suc3RyaW5nLFxyXG4gICAgICAgICAgdGhlbWU6IGNoZWNrLm9uZU9mKFsnbGlnaHQnLCAnZGFyayddKSxcclxuICAgICAgICAgIHJlcXVpcmVkOiBjaGVjay5ib29sZWFuLFxyXG4gICAgICAgICAgcm93czogY2hlY2subnVtYmVyLFxyXG4gICAgICAgICAgY29sczogY2hlY2subnVtYmVyXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1dO1xyXG4gIHZhciBXUkFQUEVSUyA9IFt7XHJcbiAgICBuYW1lOiAnd3JhcHBlci1kaXYnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1kaXYuaHRtbCcpXHJcbiAgfSwge1xyXG4gICAgbmFtZTogJ3dyYXBwZXItZXJyb3JzJyxcclxuICAgIHRlbXBsYXRlOiByZXF1aXJlKCcuL3dyYXBwZXJzL2x4LXdyYXBwZXItZXJyb3JzLmh0bWwnKVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICd3cmFwcGVyLWZsZXgnLFxyXG4gICAgdGVtcGxhdGU6IHJlcXVpcmUoJy4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWwnKVxyXG4gIH0sIHtcclxuICAgIG5hbWU6ICd3cmFwcGVyLWlubGluZScsXHJcbiAgICB0ZW1wbGF0ZTogcmVxdWlyZSgnLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sJylcclxuICB9XTtcclxuXHJcbiAgZnVuY3Rpb24gX3ByZWZpeGVyKG5hbWUpIHtcclxuICAgIHJldHVybiBQUkVGSVggKyAnLScgKyBuYW1lO1xyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gX3dyYXBwZXJUZW1wbGF0ZVVybChuYW1lKSB7XHJcbiAgICByZXR1cm4gJ3dyYXBwZXJzL2Zvcm1seS13cmFwcGVycy0nICsgX3ByZWZpeGVyKG5hbWUpICsgJy5odG1sJztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIF9maWVsZFRlbXBsYXRlVXJsKG5hbWUpIHtcclxuICAgIHJldHVybiAnZmllbGRzL2Zvcm1seS1maWVsZHMtJyArIF9wcmVmaXhlcihuYW1lKSArICcuaHRtbCc7XHJcbiAgfVxyXG5cclxuICAvKkBuZ0luamVjdCovXHJcbiAgZnVuY3Rpb24gc2V0V3JhcHBlcnMoZm9ybWx5Q29uZmlnUHJvdmlkZXIpIHtcclxuICAgIGlmIChVU0lOR19URU1QTEFURVMpIHtcclxuICAgICAgV1JBUFBFUlMubWFwKGZ1bmN0aW9uICh3cmFwcGVyKSB7XHJcbiAgICAgICAgZm9ybWx5Q29uZmlnUHJvdmlkZXIuc2V0V3JhcHBlcih7XHJcbiAgICAgICAgICBuYW1lOiBfcHJlZml4ZXIod3JhcHBlci5uYW1lKSxcclxuICAgICAgICAgIHRlbXBsYXRlVXJsOiBfd3JhcHBlclRlbXBsYXRlVXJsKHdyYXBwZXIubmFtZSlcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gX3ByZWZpeGVyKHdyYXBwZXIubmFtZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLypAbmdJbmplY3QqL1xyXG4gIGZ1bmN0aW9uIHNldEZpZWxkcyhmb3JtbHlDb25maWcsIGZvcm1seUFwaUNoZWNrKSB7XHJcbiAgICB2YXIgYyA9IGZvcm1seUFwaUNoZWNrO1xyXG4gICAgaWYgKFVTSU5HX1RFTVBMQVRFUykge1xyXG4gICAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgICBmb3JtbHlDb25maWcuc2V0VHlwZSh7XHJcbiAgICAgICAgICAgIG5hbWU6IF9wcmVmaXhlcihmaWVsZC5uYW1lKSxcclxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLFxyXG4gICAgICAgICAgICBhcGlDaGVjazogZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gZmllbGQuYXBpQ2hlY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNldERlZmF1bHRzKGZvcm1seUNvbmZpZywgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzKSB7XHJcbiAgICBmb3JtbHlDb25maWcuZXh0cmFzLm5nTW9kZWxBdHRyc01hbmlwdWxhdG9yUHJlZmVyQm91bmQgPSB0cnVlO1xyXG4gICAgVkFMSURBVElPTl9NRVNTQUdFUy5tYXAoZnVuY3Rpb24gKHZhbGlkYXRpb24pIHtcclxuICAgICAgZm9ybWx5VmFsaWRhdGlvbk1lc3NhZ2VzLmFkZFN0cmluZ01lc3NhZ2UodmFsaWRhdGlvbi5uYW1lLCB2YWxpZGF0aW9uLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcbiAgICBmb3JtbHlWYWxpZGF0aW9uTWVzc2FnZXMubWVzc2FnZXMucGF0dGVybiA9IGZ1bmN0aW9uICh2aWV3VmFsdWUsIG1vZGVsVmFsdWUpIHtcclxuICAgICAgcmV0dXJuICh2aWV3VmFsdWUgfHwgbW9kZWxWYWx1ZSkgKyAnIGlzIGludmFsaWQnO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIGNhY2hlVGVtcGxhdGVzKCR0ZW1wbGF0ZUNhY2hlKSB7XHJcbiAgICBpZiAoVVNJTkdfVEVNUExBVEVTKSB7XHJcbiAgICAgIEZJRUxEUy5tYXAoZnVuY3Rpb24gKGZpZWxkKSB7XHJcbiAgICAgICAgJHRlbXBsYXRlQ2FjaGUucHV0KF9maWVsZFRlbXBsYXRlVXJsKGZpZWxkLm5hbWUpLCBmaWVsZC50ZW1wbGF0ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBXUkFQUEVSUy5tYXAoZnVuY3Rpb24gKHdyYXBwZXIpIHtcclxuICAgICAgICAkdGVtcGxhdGVDYWNoZS5wdXQoX3dyYXBwZXJUZW1wbGF0ZVVybCh3cmFwcGVyLm5hbWUpLCB3cmFwcGVyLnRlbXBsYXRlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhbmd1bGFyLm1vZHVsZShNT0RVTEVfTkFNRSwgW1xyXG4gICAgJ2Zvcm1seSdcclxuICBdKS5jb25maWcoc2V0V3JhcHBlcnMpLnJ1bihzZXRGaWVsZHMpLnJ1bihzZXREZWZhdWx0cykucnVuKGNhY2hlVGVtcGxhdGVzKTtcclxufSgpKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi4vfi9qc2hpbnQtbG9hZGVyIS4vaW5kZXguanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBjbGFzcz1cXFwiY2hlY2tib3hcXFwiPlxcclxcblxcdDxseC1jaGVja2JveCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIj5cXHJcXG5cXHQ8bHgtY2hlY2tib3gtbGFiZWwgZm9yPXt7OjppZH19IGNsYXNzPVxcXCJjaGVja2JveF9fbGFiZWxcXFwiIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIj57e3RvLmxhYmVsfX08L2x4LWNoZWNrYm94LWxhYmVsPlxcclxcblxcdDxseC1jaGVja2JveC1oZWxwIG5nLWlmPVxcXCI6OnRvLmRlc2NyaXB0aW9uXFxcIlxcclxcblxcdCAgICAgIGNsYXNzPVxcXCJjaGVja2JveF9faGVscFxcXCI+e3s6OnRvLmRlc2NyaXB0aW9ufX08L2x4LWNoZWNrYm94LWhlbHA+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWNoZWNrYm94Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LWRhdGUtcGlja2VyIG1vZGVsPVxcXCJtb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcclxcbiAgICAgICAgICAgICAgICBsYWJlbD1cXFwie3s6OnRvLmxhYmVsfX0ge3s6OnRvLnJlcXVpcmVkID8gJyonIDogJyd9fVxcXCI+XFxyXFxuPC9seC1kYXRlLXBpY2tlcj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtZGF0ZS1waWNrZXIuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLWZsZXgtZmllbGRzXFxcIlxcclxcbiAgICAgbW9kZWw9XFxcIiRwYXJlbnQubW9kZWxcXFwiXFxyXFxuICAgICBmbGV4LWNvbnRhaW5lcj1cXFwie3s6OnRvLmZsZXguY29udGFpbmVyIHx8ICdyb3cnfX1cXFwiXFxyXFxuICAgICBmbGV4LWFsaWduPVxcXCJ7ezo6dG8uZmxleC5hbGlnbiB8fCAnc3BhY2UtYmV0d2Vlbid9fVxcXCJcXHJcXG4gICAgIGZsZXgtZ3V0dGVyPVxcXCJ7ezo6dG8uZmxleC5ndXR0ZXIgfHwgJzI0J319XFxcIj5cXHJcXG5cXHQ8ZGl2IGZvcm1seS1maWVsZFxcclxcblxcdCAgICAgbmctcmVwZWF0PVxcXCJmaWVsZCBpbiB0by5maWVsZHMgdHJhY2sgYnkgJGluZGV4XFxcIlxcclxcblxcdCAgICAgbmctaWY9XFxcIiFmaWVsZC5oaWRlXFxcIlxcclxcblxcdCAgICAgY2xhc3M9XFxcImZvcm1seS1maWVsZCB7ezo6ZmllbGQudHlwZSA/ICdmb3JtbHktZmllbGQtJyArIGZpZWxkLnR5cGUgOiAnJ319XFxcIlxcclxcblxcdCAgICAgbmctc3R5bGU9XFxcIjo6dG8uZmxleC5zdHlsZVxcXCJcXHJcXG5cXHQgICAgIG9wdGlvbnM9XFxcImZpZWxkXFxcIlxcclxcblxcdCAgICAgbW9kZWw9XFxcImZpZWxkLm1vZGVsIHx8IG1vZGVsXFxcIlxcclxcblxcdCAgICAgZmllbGRzPVxcXCJmaWVsZHNcXFwiXFxyXFxuXFx0ICAgICBmb3JtPVxcXCJmb3JtXFxcIlxcclxcblxcdCAgICAgZm9ybS1pZD1cXFwiZm9ybUlkXFxcIlxcclxcblxcdCAgICAgZm9ybS1zdGF0ZT1cXFwib3B0aW9ucy5mb3JtU3RhdGVcXFwiXFxyXFxuXFx0ICAgICBpbmRleD1cXFwiJGluZGV4XFxcIlxcclxcblxcdCAgICAgZmxleC1pdGVtPVxcXCJ7ezo6dG8uZmxleC5pdGVtIHx8ICcxJ319XFxcIlxcclxcblxcdCAgICAgZmxleC1vcmRlcj1cXFwie3s6OnRvLmZsZXgub3JkZXJ9fVxcXCI+XFxyXFxuXFx0PC9kaXY+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LWZsZXguaHRtbFxuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8bHgtdGV4dC1maWVsZCBkYXRhLW1vZGVsPVxcXCI6Om1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcclxcbiAgICAgICAgICAgICAgIGZpeGVkLWxhYmVsPVxcXCI6OnRvLmZpeGVkTGFiZWxcXFwiXFxyXFxuICAgICAgICAgICAgICAgdGhlbWU9XFxcInt7Ojp0by50aGVtZX19XFxcIlxcclxcbiAgICAgICAgICAgICAgIGRpc2FibGVkPVxcXCJ0by5kaXNhYmxlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcclxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcblxcdCAgICAgICB0eXBlPVxcXCJ7ezo6dG8udHlwZX19XFxcIlxcclxcblxcdCAgICAgICBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCJcXHJcXG5cXHQgICAgICAgbmctY2xhc3M9XFxcIjo6dG8uY2xhc3NOYW1lXFxcIi8+XFxyXFxuPC9seC10ZXh0LWZpZWxkPlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1pbnB1dC5odG1sXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgY2xhc3M9XFxcInJhZGlvLWdyb3VwXFxcIj5cXHJcXG5cXHQ8aDMgbmctaWY9XFxcIjo6dG8ubGFiZWxcXFwiPjxsYWJlbD57ezo6dG8ubGFiZWx9fTwvbGFiZWw+PC9oMz5cXHJcXG5cXHJcXG5cXHQ8ZGl2IGNsYXNzPVxcXCJyYWRpby1idXR0b25cXFwiXFxyXFxuXFx0ICAgICBuZy1jbGFzcz1cXFwieydyYWRpby1idXR0b25fX2lubGluZSc6IHRvLmlubGluZX1cXFwiXFxyXFxuXFx0ICAgICBuZy1yZXBlYXQ9XFxcIm8gaW4gdG8ub3B0aW9uc1xcXCI+XFxyXFxuXFx0XFx0PGlucHV0IG5nLW1vZGVsPVxcXCIkcGFyZW50Lm1vZGVsWyRwYXJlbnQub3B0aW9ucy5rZXldXFxcIlxcclxcblxcdFxcdCAgICAgICBpZD1cXFwie3s6OmlkICsgJ18nICsgJGluZGV4fX1cXFwiXFxyXFxuXFx0XFx0ICAgICAgIHR5cGU9XFxcInJhZGlvXFxcIlxcclxcblxcdFxcdCAgICAgICBuZy1kaXNhYmxlZD1cXFwiOjpvLmRpc2FibGVkXFxcIlxcclxcblxcdFxcdCAgICAgICBjbGFzcz1cXFwicmFkaW8tYnV0dG9uX19pbnB1dFxcXCJcXHJcXG5cXHRcXHQgICAgICAgbmctdmFsdWU9XFxcIjo6by52YWx1ZVxcXCJcXHJcXG5cXHRcXHQgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXggKyAnX3JhZGlvQnV0dG9uJ319XFxcIj5cXHJcXG5cXHRcXHQ8bGFiZWwgZm9yPVxcXCJ7ezo6aWQgKyAnXycgKyAkaW5kZXh9fVxcXCJcXHJcXG5cXHRcXHQgICAgICAgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9fbGFiZWxcXFwiPnt7OjpvLm5hbWV9fTwvbGFiZWw+XFxyXFxuICAgICAgPHNwYW4gbmctaWY9XFxcIjo6by5kZXNjcmlwdGlvblxcXCIgY2xhc3M9XFxcInJhZGlvLWJ1dHRvbl9faGVscFxcXCI+e3s6Om8uZGVzY3JpcHRpb259fVxcclxcbiAgICAgIDwvc3Bhbj5cXHJcXG5cXHQ8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtcmFkaW8uaHRtbFxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLXNlbGVjdFxcXCI+XFxyXFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+XFxyXFxuXFx0XFx0e3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXHJcXG5cXHQ8L2xhYmVsPjwvaDM+XFxyXFxuXFx0PGx4LXNlbGVjdCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcblxcdCAgICAgICAgICAgbHgtY2hvaWNlcz1cXFwidG8uY2hvaWNlc1xcXCJcXHJcXG5cXHQgICAgICAgICAgIGx4LWxhYmVsPVxcXCJ7ezo6dG8ucGxhY2Vob2xkZXJ9fVxcXCJcXHJcXG5cXHQgICAgICAgICAgIG1pbi1sZW5ndGg9XFxcIjo6dG8ubWluTGVuZ3RoXFxcIlxcclxcblxcdCAgICAgICAgICAgYWxsb3ctY2xlYXI9XFxcIjo6dG8uYWxsb3dDbGVhclxcXCJcXHJcXG5cXHQgICAgICAgICAgIG5nLWF0dHItbXVsdGlwbGU9XFxcInt7Ojp0by5tdWx0aXBsZX19XFxcIj5cXHJcXG5cXHJcXG5cXHRcXHQ8bHgtc2VsZWN0LXNlbGVjdGVkPlxcclxcblxcdFxcdFxcdHt7JHNlbGVjdGVkW3RvLnNlbGVjdGVkXSB8fCAkc2VsZWN0ZWR9fSB7ezo6dG8uc2VsZWN0ZWQyID8gJyAtICcgK1xcclxcblxcdFxcdFxcdCRzZWxlY3RlZFt0by5zZWxlY3RlZDJdIDogJyd9fVxcclxcblxcdFxcdDwvbHgtc2VsZWN0LXNlbGVjdGVkPlxcclxcblxcclxcblxcdFxcdDxseC1zZWxlY3QtY2hvaWNlcz5cXHJcXG5cXHRcXHRcXHR7eyRjaG9pY2VbdG8uY2hvaWNlXSB8fCAkY2hvaWNlfX0ge3s6OnRvLmNob2ljZTIgPyAnIC0gJyArXFxyXFxuXFx0XFx0XFx0JGNob2ljZVt0by5jaG9pY2UyXSA6ICcnfX1cXHJcXG5cXHRcXHQ8L2x4LXNlbGVjdC1jaG9pY2VzPlxcclxcblxcclxcblxcdDwvbHgtc2VsZWN0PlxcclxcbjwvZGl2PlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC1zZWxlY3QuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJhZnRsLXNlbGVjdFxcXCI+XFxyXFxuXFx0PGgzIG5nLWlmPVxcXCI6OnRvLmxhYmVsXFxcIj48bGFiZWw+XFxyXFxuXFx0XFx0e3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXHJcXG5cXHQ8L2xhYmVsPjwvaDM+XFxyXFxuXFx0PGx4LXNlbGVjdCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIiBseC1jaG9pY2VzPVxcXCJ0by5jaG9pY2VzXFxcIiBseC1sYWJlbD1cXFwie3s6OnRvLnBsYWNlaG9sZGVyfX1cXFwiIG1pbi1sZW5ndGg9XFxcIjo6dG8ubWluTGVuZ3RoXFxcIlxcclxcblxcdFxcdGFsbG93LWNsZWFyPVxcXCI6OnRvLmFsbG93Q2xlYXJcXFwiIG5nLWF0dHItbXVsdGlwbGU9XFxcInt7Ojp0by5tdWx0aXBsZX19XFxcIiBzdHlsZT1cXFwiZmxvYXQ6bGVmdDsgd2lkdGg6OTAlO1xcXCI+XFxyXFxuXFxyXFxuXFx0XFx0PGx4LXNlbGVjdC1zZWxlY3RlZD5cXHJcXG5cXHRcXHRcXHR7eyAkc2VsZWN0ZWR9fVxcclxcblxcdFxcdDwvbHgtc2VsZWN0LXNlbGVjdGVkPlxcclxcblxcclxcblxcdFxcdDxseC1zZWxlY3QtY2hvaWNlcz5cXHJcXG5cXHRcXHRcXHQ8ZGl2IGNsYXNzPVxcXCJibG9jayBpbWFnZVBpY2tlclxcXCI+XFxyXFxuXFx0XFx0XFx0XFx0PGltZyBuZy1zcmM9XFxcInt7ZmlsZXBhdGggfX17eyRjaG9pY2V9fVxcXCIgaGVpZ2h0PVxcXCI1MFxcXCIgY2xhc3M9XFxcInNlbGVjdGltZ1xcXCIgZXJyLXNyYz1cXFwiaW1nL3BsYWNlaG9sZGVyX2ltZy5zdmdcXFwiXFxyXFxuXFx0XFx0XFx0XFx0Lz5cXHJcXG5cXHRcXHRcXHRcXHQ8aDU+e3sgJGNob2ljZSB9fTwvaDU+XFxyXFxuXFx0XFx0XFx0PC9kaXY+XFxyXFxuXFx0XFx0PC9seC1zZWxlY3QtY2hvaWNlcz5cXHJcXG5cXHJcXG5cXHQ8L2x4LXNlbGVjdD5cXHJcXG5cXHQ8aW1nIHN0eWxlPVxcXCJmbG9hdDpyaWdodDsgd2lkdGg6MTAlOyBtYXJnaW4tYm90dG9tOjQwcHg7IG1hcmdpbi10b3A6MTRweDtcXFwiIG5nLXNyYz1cXFwiaHR0cDovL2Jlbmcua2lzc3RoZWZyb2cubGFuL2V4cENvbnRlbnQve3ttb2RlbFtvcHRpb25zLmtleV19fVxcXCJcXHJcXG5cXHRcXHR3aWR0aD1cXFwiNTBcXFwiIGhlaWdodD1cXFwiNTBcXFwiIGNsYXNzPVxcXCJpbWdcXFwiIGVyci1zcmM9XFxcImltZy9wbGFjZWhvbGRlcl9mYWNlLnN2Z1xcXCI+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZmllbGRzL2x4LXNlbGVjdC1pbWcuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gXCI8ZGl2IGNsYXNzPVxcXCJzd2l0Y2hcXFwiPlxcclxcblxcdDxpbnB1dCBuZy1tb2RlbD1cXFwibW9kZWxbb3B0aW9ucy5rZXldXFxcIlxcclxcblxcdCAgICAgICB0eXBlPVxcXCJjaGVja2JveFxcXCJcXHJcXG5cXHQgICAgICAgcm9sZT1cXFwiY2hlY2tib3hcXFwiXFxyXFxuXFx0ICAgICAgIGNsYXNzPVxcXCJzd2l0Y2hfX2lucHV0XFxcIi8+XFxyXFxuXFx0PGxhYmVsIGZvcj1cXFwie3s6OmlkfX1cXFwiIGNsYXNzPVxcXCJzd2l0Y2hfX2xhYmVsXFxcIiBhcmlhLWxhYmVsPVxcXCJ7ezo6dG8ubGFiZWx9fVxcXCI+e3t0by5sYWJlbH19PC9sYWJlbD5cXHJcXG5cXHQ8c3BhbiBuZy1pZj1cXFwiOjp0by5kZXNjcmlwdGlvblxcXCJcXHJcXG5cXHQgICAgICBjbGFzcz1cXFwic3dpdGNoX19oZWxwXFxcIj57ezo6dG8uZGVzY3JpcHRpb259fTwvc3Bhbj5cXHJcXG48L2Rpdj5cXHJcXG5cXHJcXG5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9maWVsZHMvbHgtc3dpdGNoLmh0bWxcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGx4LXRleHQtZmllbGQgZGF0YS1tb2RlbD1cXFwiOjptb2RlbFtvcHRpb25zLmtleV1cXFwiXFxyXFxuICAgICAgICAgICAgICAgZml4ZWQtbGFiZWw9XFxcIjo6dG8uZml4ZWRMYWJlbFxcXCJcXHJcXG4gICAgICAgICAgICAgICBpY29uPVxcXCJ7ezo6dG8uaWNvbn19XFxcIlxcclxcbiAgICAgICAgICAgICAgIHRoZW1lPVxcXCJ7ezo6dG8udGhlbWV9fVxcXCJcXHJcXG4gICAgICAgICAgICAgICBsYWJlbD1cXFwie3t0by5sYWJlbH19IHt7Ojp0by5yZXF1aXJlZCA/ICcqJyA6ICcnfX1cXFwiXFxyXFxuICAgICAgICAgICAgICAgdmFsaWQ9XFxcImZjLiR2YWxpZCAmJiBmYy4kdG91Y2hlZFxcXCJcXHJcXG4gICAgICAgICAgICAgICBlcnJvcj1cXFwiZmMuJGludmFsaWQgJiYgZmMuJHRvdWNoZWRcXFwiPlxcclxcbiAgICA8dGV4dGFyZWEgbmctbW9kZWw9XFxcIm1vZGVsW29wdGlvbnMua2V5XVxcXCJcXHJcXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcInt7Ojp0by5sYWJlbH19XFxcIlxcclxcbiAgICAgICAgICAgICAgcm93cz1cXFwie3s6OnRvLnJvd3N9fVxcXCIgY29scz1cXFwie3s6OnRvLmNvbHN9fVxcXCI+XFxyXFxuICAgIDwvdGV4dGFyZWE+XFxyXFxuPC9seC10ZXh0LWZpZWxkPlxcclxcblwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2ZpZWxkcy9seC10ZXh0YXJlYS5odG1sXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXYgbmctY2xhc3M9XFxcIjo6dG8uZGl2LmNsYXNzTmFtZVxcXCJcXHJcXG5cXHRuZy1zdHlsZT1cXFwiOjp0by5kaXYuc3R5bGVcXFwiPlxcclxcblxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcbjwvZGl2PlwiXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3dyYXBwZXJzL2x4LXdyYXBwZXItZGl2Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxkaXY+XFxyXFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuXFx0PHVsIGNsYXNzPVxcXCJmb3JtLWVycm9yXFxcIiBuZy1tZXNzYWdlcz1cXFwiZmMuJGVycm9yXFxcIlxcclxcblxcdCAgICBuZy1zaG93PVxcXCJvcHRpb25zLnZhbGlkYXRpb24uZXJyb3JFeGlzdHNBbmRTaG91bGRCZVZpc2libGVcXFwiPlxcclxcblxcdFxcdDxsaSBuZy1yZXBlYXQ9XFxcIihuYW1lLCBtZXNzYWdlKSBpbiA6Om9wdGlvbnMudmFsaWRhdGlvbi5tZXNzYWdlc1xcXCJcXHJcXG5cXHRcXHQgICAgbmctbWVzc2FnZT17ezo6bmFtZX19PlxcclxcblxcdFxcdFxcdHt7bWVzc2FnZShmYy4kdmlld1ZhbHVlLCBmYy4kbW9kZWxWYWx1ZSwgdGhpcyl9fVxcclxcblxcdFxcdDwvbGk+XFxyXFxuXFx0PC91bD5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwiZm9ybS1wZW5kaW5nXFxcIlxcclxcblxcdCAgICAgIG5nLWlmPVxcXCJ0by5wZW5kaW5nICYmIGZjLiRwZW5kaW5nICYmIGZjLiR0b3VjaGVkXFxcIj5cXHJcXG5cXHR7ezo6dG8ucGVuZGluZyB8fCAnQ2hlY2tpbmcuLi4nfX1cXHJcXG5cXHQ8L3NwYW4+XFxyXFxuPC9kaXY+XFxyXFxuXCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1lcnJvcnMuaHRtbFxuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPGRpdiBuZy1jbGFzcz1cXFwiOjp0by5kaXYuY2xhc3NOYW1lXFxcIlxcclxcbiAgICAgbmctc3R5bGU9XFxcIjo6dG8uZGl2LnN0eWxlIHx8IHt9XFxcIlxcclxcbiAgICAgZmxleC1pdGVtPVxcXCI6OnRvLmZsZXguaXRlbVxcXCJcXHJcXG4gICAgIGZsZXgtb3JkZXI9XFxcIjo6dG8uZmxleC1vcmRlclxcXCI+XFxyXFxuXFx0PGZvcm1seS10cmFuc2NsdWRlPjwvZm9ybWx5LXRyYW5zY2x1ZGU+XFxyXFxuPC9kaXY+XCJcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vd3JhcHBlcnMvbHgtd3JhcHBlci1mbGV4Lmh0bWxcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtd3JhcHBlclxcXCI+XFxyXFxuXFx0PHNwYW4gY2xhc3M9XFxcImlubGluZS0tYmVmb3JlXFxcIj57ezo6dG8uaW5saW5lLmJlZm9yZX19PC9zcGFuPlxcclxcblxcdDxzcGFuIGNsYXNzPVxcXCJpbmxpbmUtLWNvbnRlbnRcXFwiPlxcclxcblxcdFxcdDxmb3JtbHktdHJhbnNjbHVkZT48L2Zvcm1seS10cmFuc2NsdWRlPlxcclxcblxcdDwvc3Bhbj5cXHJcXG5cXHQ8c3BhbiBjbGFzcz1cXFwiaW5saW5lLS1hZnRlclxcXCI+e3s6OnRvLmlubGluZS5hZnRlcn19PC9zcGFuPlxcclxcbjwvc3Bhbj5cIlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi93cmFwcGVycy9seC13cmFwcGVyLWlubGluZS5odG1sXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=