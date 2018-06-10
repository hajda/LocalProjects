(function uiGridTutorialStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(uiGridTutorialStateConfig);

    uiGridTutorialStateConfig.$inject = ['$stateProvider'];

    function uiGridTutorialStateConfig($stateProvider) {
        $stateProvider.state(
            'uiGridTutorialState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-ui-grid-tutorial', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'uiGridTutorial', // TODO review page title
                    readableName: 'Ui Grid Tutorial' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/uiGridTutorial/uiGridTutorial.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsUiGridTutorialController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

