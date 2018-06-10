(function generateDirectiveServiceDefinition() {
    'use strict';

    angular.module('doJSo')
        .factory('DjsGenerateDirective', generateDirectiveService);

    generateDirectiveService.$inject = [];

    function generateDirectiveService() {
        var api = {
            // hook service API functions here as object properties
        };

        // TODO create service business logic

        return api;
    }
})();

