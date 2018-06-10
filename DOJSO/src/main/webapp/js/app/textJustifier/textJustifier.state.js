(function textJustifierStateDefinition() {
    'use strict';

    angular
        .module('doJSo')
        .config(textJustifierStateConfig);

    textJustifierStateConfig.$inject = ['$stateProvider'];

    function textJustifierStateConfig($stateProvider) {
        $stateProvider.state(
            'textJustifierState',
            {
                parent: 'app', // TODO review parent
                url: '/djs-text-justifier', // TODO review URL
                data: {
                    authorities: [], // TODO set up access rights
                    pageTitle: 'textJustifier', // TODO review page title
                    readableName: 'Text Justifier' // TODO review page title
                },
                views: {
                    'content@': { // TODO rewise the view slot to view the template in
                        templateUrl: 'app/textJustifier/textJustifier.html'//,   // TODO update template url if the state is not directly under the app directory
                        // controller: 'DjsTextJustifierController' // TODO review hooked controller
                    }
                }
            }
        );
    }
})();

