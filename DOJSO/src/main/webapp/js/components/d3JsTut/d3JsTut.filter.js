(function d3JsTutFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsD3JsTutFilter', d3JsTutFilter);

    d3JsTutFilter.$inject = ['DjsD3JsTut'];

    function d3JsTutFilter(D3JsTut) {
        /**
         * Usage in templates: 
         * Usage in JS: 
         */
        return function d3JsTut(input, arg1, arg2) {
            return /* TODO create filter business logic */;
        };
    }
})();

