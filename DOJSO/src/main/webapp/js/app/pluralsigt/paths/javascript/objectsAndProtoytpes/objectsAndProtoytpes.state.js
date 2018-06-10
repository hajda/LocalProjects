(function objectsAndProtoytpesStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(objectsAndProtoytpesStateConfig);

    objectsAndProtoytpesStateConfig.$inject = ['$stateProvider'];

    function objectsAndProtoytpesStateConfig($stateProvider) {
        $stateProvider.state(
            'objectsAndProtoytpesState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-objects-and-protoytpes', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'objectsAndProtoytpes', // TODO review page title
                    readableName: 'Objects And Protoytpes' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/objectsAndProtoytpes/objectsAndProtoytpes.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsObjectsAndProtoytpesController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

