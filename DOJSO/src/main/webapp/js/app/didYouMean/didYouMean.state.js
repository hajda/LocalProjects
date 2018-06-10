(function didYouMeanStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(didYouMeanStateConfig);

    didYouMeanStateConfig.$inject = ['$stateProvider'];

    function didYouMeanStateConfig($stateProvider) {
        $stateProvider.state(
            'didYouMeanState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-did-you-mean', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'didYouMean', // TODO review page title
                    readableName: 'Did You Mean' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/didYouMean/didYouMean.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsDidYouMeanController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

