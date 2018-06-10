(function nuclearStrikeFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsNuclearStrikeFilter', nuclearStrikeFilter);

    nuclearStrikeFilter.$inject = [];

    function nuclearStrikeFilter() {
        return function nuclearStrike(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
