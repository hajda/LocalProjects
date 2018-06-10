(function generateDirectiveStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(generateDirectiveStateConfig);

    generateDirectiveStateConfig.$inject = ['$stateProvider'];

    function generateDirectiveStateConfig($stateProvider) {
        $stateProvider.state(
            'generateDirectiveState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-generate-directive', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'generateDirective', // TODO review page title
                    readableName: 'Generate Directive' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app//generateDirective/generateDirective.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsGenerateDirectiveController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

