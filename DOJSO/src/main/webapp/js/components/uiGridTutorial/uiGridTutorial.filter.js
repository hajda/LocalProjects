(function uiGridTutorialFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsUiGridTutorialFilter', uiGridTutorialFilter);

    uiGridTutorialFilter.$inject = ['DjsUiGridTutorial'];

    function uiGridTutorialFilter(UiGridTutorial) {
        /**
         * Usage in templates: 
         * Usage in JS: 
         */
        return function uiGridTutorial(input, arg1, arg2) {
            return /* TODO create filter business logic */;
        };
    }
})();

