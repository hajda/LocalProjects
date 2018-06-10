(function reversiStepStateDefinition() {
    'use strict';
    angular
        .module('doJSo')
        .config(function ($stateProvider) {
            $stateProvider
                .state('djsReversiStepState', {
                    parent: 'site', // TODO review parent
                    url: '/djs-reversi-step', // TODO review URL
                    data: {
                        authorities: [], // TODO set up access rights
                        pageTitle: 'reversiStep', // TODO review page title
                        readableName: 'Reversi Step' // TODO review page title
                },
                views: {
                    'content@': {
                        templateUrl: 'js/app/reversiStep/reversiStep.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsReversiStepController' // TODO review hooked controller
                    }
                }
            });
        });
})();
