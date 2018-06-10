(function textJustifierFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsTextJustifierFilter', textJustifierFilter);

    textJustifierFilter.$inject = [];

    function textJustifierFilter() {
        return function textJustifier(input, arg1, arg2) {
            return input && (arg1 || arg2);
        };
    }
})();
