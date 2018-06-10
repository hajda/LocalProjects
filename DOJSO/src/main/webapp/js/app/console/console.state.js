(function consoleStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(consoleStateConfig);

    consoleStateConfig.$inject = ['$stateProvider'];

    function consoleStateConfig($stateProvider) {
        $stateProvider.state(
            'consoleState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-console', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'console', // TODO review page title
                    readableName: 'Console' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/console/console.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsConsoleController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

