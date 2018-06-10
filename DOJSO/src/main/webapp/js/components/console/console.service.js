(function consoleServiceDefinition() {
    'use strict';

    angular.module('doJSo')
        .factory('DjsConsole', consoleService);

    consoleService.$inject = [];

    function consoleService() {
        var api = {
            // hook service API functions here as object properties
        };

        // TODO create service business logic

        return api;
    }
})();

