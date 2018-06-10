(function nuclearStrikeStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(nuclearStrikeStateConfig);

    nuclearStrikeStateConfig.$inject = ['$stateProvider'];

    function nuclearStrikeStateConfig($stateProvider) {
        $stateProvider.state(
            'nuclearStrikeState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-nuclear-strike', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'nuclearStrike', // TODO review page title
                    readableName: 'Nuclear Strike' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/nuclearStrike/nuclearStrike.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsNuclearStrikeController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

