(function objectsAndProtoytpesFilterDefinition() {
    'use strict';

    angular.module('doJSo')
        .filter('DjsObjectsAndProtoytpesFilter', objectsAndProtoytpesFilter);

    objectsAndProtoytpesFilter.$inject = ['DjsObjectsAndProtoytpes'];

    function objectsAndProtoytpesFilter(ObjectsAndProtoytpes) {
        /**
         * Usage in templates: 
         * Usage in JS: 
         */
        return function objectsAndProtoytpes(input, arg1, arg2) {
            return /* TODO create filter business logic */;
        };
    }
})();

