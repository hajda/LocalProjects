(function d3JsTutStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(d3JsTutStateConfig);

    d3JsTutStateConfig.$inject = ['$stateProvider'];

    function d3JsTutStateConfig($stateProvider) {
        $stateProvider.state(
            'd3JsTutState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-d3-js-tut', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'd3JsTut', // TODO review page title
                    readableName: 'D3 Js Tut' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/d3JsTut/d3JsTut.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsD3JsTutController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

