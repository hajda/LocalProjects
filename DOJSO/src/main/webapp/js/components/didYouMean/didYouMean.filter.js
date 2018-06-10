(function didYouMeanFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsDidYouMeanFilter', didYouMeanFilter);

    didYouMeanFilter.$inject = ['DjsDidYouMean'];

    function didYouMeanFilter(DidYouMean) {
        /**
         * Usage in templates: 
         * Usage in JS: 
         */
        return function didYouMean(input, arg1, arg2) {
            return /* TODO create filter business logic */;
        };
    }
})();

