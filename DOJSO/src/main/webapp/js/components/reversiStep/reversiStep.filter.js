(function reversiStepFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsReversiStepFilter', reversiStepFilter);

    reversiStepFilter.$inject = [];

    function reversiStepFilter() {
        return function reversiStep(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
