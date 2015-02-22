(function () {
	'use strict';
	var USING_TEMPLATES = true;
	var MODULE_NAME = "formlyLumx";
	var PREFIX = "lx";
	var FIELDS = [{
		"name": "checkbox",
		"template": "<div class=\"checkbox\"><input ng-model=\"model[options.key]\" type=\"checkbox\" ng-checked=\"::to.checked\" class=\"checkbox__input\"><label for=\"{{::id}}\" class=\"checkbox__label\">{{to.label}}</label><span ng-if=\"::to.description\" class=\"checkbox__help\">{{::to.description}}</span></div>"
	}, {
		"name": "date-picker",
		"template": "<lx-date-picker model=\"model[options.key]\" label=\"{{to.label}} {{::to.required ? \'*\' : \'\'}}\"></lx-date-picker>"
	}, {
		"name": "dropdown",
		"template": "<lx-dropdown><button class=\"btn\" ng-class=\"::to.className || \'btn--m btn--black btn--flat\'\" lx-ripple lx-dropdown-toggle><i ng-if=\"::to.icon\" class=\"mdi mdi-dots-vertical\"></i> {{to.label}}</button><lx-dropdown-menu><ul><li ng-repeat=\"o in ::to.options\"><a class=\"dropdown-link\" ng-click=\"o.action()\">{{::o.text}}</a></li></ul></lx-dropdown-menu></lx-dropdown>"
	}, {
		"name": "flex",
		"template": "<formly-form class=\"aftl-flex-fields\" model=\"$parent.model\" fields=\"to.fields\" flex-container=\"{{::to.flex.container}}\" flex-align=\"{{::to.flex.align}}\" flex-gutter=\"{{::to.flex.gutter}}\"></formly-form>"
	}, {
		"name": "input",
		"template": "<lx-text-field model=\"::model[options.key]\" icon=\"{{::to.icon}}\" fixed-label=\"::to.fixedLabel\" theme=\"{{::to.theme}}\" disabled=\"to.disabled\" label=\"{{to.label}} {{::to.required ? \'*\' : \'\'}}\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched\"><input ng-model=\"model[options.key]\" type=\"{{::to.type}}\" ng-class=\"::to.className\"></lx-text-field>"
	}, {
		"name": "radio",
		"template": "<div class=\"radio-group\"><h3><label>{{to.label}}</label></h3><div class=\"radio-button\" ng-repeat=\"o in to.options\"><input ng-model=\"$parent.model[$parent.options.key]\" id=\"{{::id + \'_\' + $index}}\" type=\"radio\" ng-disabled=\"::o.disabled\" class=\"radio-button__input\" ng-value=\"::o.value\" aria-labelledby=\"{{::id + \'_\' + $index + \'_radioButton\'}}\"><label for=\"{{::id + \'_\' + $index}}\" class=\"radio-button__label\">{{::o.name}}</label><span ng-if=\"::o.description\" class=\"radio-button__help\">{{::o.description}}</span></div></div>"
	}, {
		"name": "select",
		"template": "<div class=\"aftl-select\"><h3 ng-if=\"::to.label\"><label>{{to.label}} {{::to.required ? \'*\' : \'\'}}</label></h3><lx-select ng-model=\"model[options.key]\" choices=\"to.options\" placeholder=\"{{::to.placeholder}}\" min-length=\"::to.minLength\" allow-clear=\"::to.allowClear\" ng-attr-multiple=\"{{::to.multiple}}\"><lx-select-selected>{{$selected[to.selected]}} {{::to.selected2 ? \' - \' + $selected[to.selected2] : \'\'}}</lx-select-selected><lx-select-choices>{{$choice[to.choice]}} {{::to.choice2 ? \' - \' + $choice[to.choice2] : \'\'}}</lx-select-choices></lx-select></div>"
	}, {
		"name": "switch",
		"template": "<div class=\"switch\"><input ng-model=\"model[options.key]\" type=\"checkbox\" ng-checked=\"::to.checked\" class=\"switch__input\"><label for=\"{{::id}}\" class=\"switch__label\">{{to.label}}</label><span ng-if=\"::to.description\" class=\"switch__help\">{{::to.description}}</span></div>"
	}, {
		"name": "textarea",
		"template": "<lx-text-field model=\"::model[options.key]\" fixed-label=\"::to.fixedLabel\" icon=\"{{::to.icon}}\" theme=\"{{::to.theme}}\" label=\"{{to.label}} {{::to.required ? \'*\' : \'\'}}\" valid=\"options.formControl.$valid && options.formControl.$touched\" error=\"options.formControl.$invalid && options.formControl.$touched || options.validators\"><textarea ng-model=\"model[options.key]\" rows=\"{{::to.rows}}\" cols=\"{{::to.cols}}\">\n    </textarea></lx-text-field>"
	}, {
		"name": "title",
		"template": "<div class=\"aftl-title\"><span ng-class=\"::to.className || \'fs-title\'\" aria-describedby=\"{{::id}}\">{{to.title}}</span></div>"
	}];
	var WRAPPERS = [{
		"name": "wrapper-div",
		"template": "<div ng-class=\"::to.div.className\" ng-style=\"::to.div.style\"><formly-transclude></formly-transclude></div>"
	}, {
		"name": "wrapper-errors",
		"template": "<div><formly-transclude></formly-transclude><ul class=\"form-error\" ng-messages=\"options.formControl.$error\" ng-show=\"options.formControl.$invalid && options.formControl.$touched\"><li ng-repeat=\"error in ::options.validation.messages\" ng-message=\"{{::error.name}}\">{{::error.message}}</li></ul><span class=\"form-pending\" ng-if=\"to.pending && options.formControl.$pending && options.formControl.$touched\">{{::to.pending || \'Checking...\'}}</span></div>"
	}, {
		"name": "wrapper-flex-item",
		"template": "<div ng-class=\"\'{{::to.flex.className}}\'\" flex-item=\"{{::to.flex.item}}\" flex-order=\"{{::to.flex.order}}\"><formly-transclude></formly-transclude></div>"
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

	angular.module(MODULE_NAME, ['formly']).config(setCustomTemplates).run(cacheLumXTemplates);
	function cacheLumXTemplates($templateCache) {
		if (USING_TEMPLATES) {
			FIELDS.map(function (field) {
				$templateCache.put(_fieldTemplateUrl(field.name), field.template);
			});
			WRAPPERS.map(function (wrapper) {
				$templateCache.put(_wrapperTemplateUrl(wrapper.name), wrapper.template);
			});
		}
	}

	/*@ngInject*/
	function setCustomTemplates(formlyConfigProvider) {
		if (USING_TEMPLATES) {
			var wrapperList = WRAPPERS.map(function (wrapper) {
				formlyConfigProvider.setWrapper({
					name: _prefixer(wrapper.name),
					templateUrl: _wrapperTemplateUrl(wrapper.name)
				});
				return _prefixer(wrapper.name);
			});
			/* set types */
			FIELDS.map(function (field) {
				formlyConfigProvider.setType({
					name: _prefixer(field.name),
					templateUrl: _fieldTemplateUrl(field.name),
					wrappers: wrapperList
				});
			});
		}
	}
}());