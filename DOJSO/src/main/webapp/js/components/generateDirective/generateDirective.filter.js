(function generateDirectiveFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsGenerateDirectiveFilter', generateDirectiveFilter);

    generateDirectiveFilter.$inject = ['DjsGenerateDirective'];

    function generateDirectiveFilter(GenerateDirective) {
        /**
         * Usage in templates:
         * Usage in JS:
         */
        return function generateDirective(input, arg1, arg2) {
            return /* TODO create filter business logic */;
        };
    }
})();

