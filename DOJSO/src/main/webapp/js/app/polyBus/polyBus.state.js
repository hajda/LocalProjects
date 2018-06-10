(function polyBusStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(polyBusStateConfig);

    polyBusStateConfig.$inject = ['$stateProvider'];

    function polyBusStateConfig($stateProvider) {
        $stateProvider.state(
            'polyBusState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-poly-bus', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'polyBus', // TODO review page title
                    readableName: 'Poly Bus' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/polyBus/polyBus.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsPolyBusController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

