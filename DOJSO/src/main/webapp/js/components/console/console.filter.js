(function consoleFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsConsoleFilter', consoleFilter);

    consoleFilter.$inject = ['DjsConsole'];

    function consoleFilter(Console) {
        /**
         * Usage in templates: 
         * Usage in JS: 
         */
        return function console(input, arg1, arg2) {
            return /* TODO create filter business logic */;
        };
    }
})();

