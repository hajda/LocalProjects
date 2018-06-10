(function objectsAndProtoytpesServiceDefinition() {
    'use strict';

    angular.module('doJSo')
        .factory('DjsObjectsAndProtoytpes', objectsAndProtoytpesService);

    objectsAndProtoytpesService.$inject = [];

    function objectsAndProtoytpesService() {
        var api = {
            // hook service API functions here as object properties
        };

        // TODO create service business logic

        return api;
    }
})();

