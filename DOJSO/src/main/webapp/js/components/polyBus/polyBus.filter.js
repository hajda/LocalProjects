(function polyBusFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsPolyBusFilter', polyBusFilter);

    polyBusFilter.$inject = [];

    function polyBusFilter() {
        return function polyBus(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
