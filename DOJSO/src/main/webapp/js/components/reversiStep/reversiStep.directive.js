(function reversiStepDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsReversiStep', reversiStepDirective);

    reversiStepDirective.$inject = [];

    function reversiStepDirective() {
        return {
            restrict: 'AE',
            // templateUrl: 'scripts/components/reversiStep/reversiStep.template.html',
            controller: 'DjsReversiStepController',
            controllerAs: 'ReversiStepCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                console.log('......................... Reversi Step .........................');
            }
        };
    }
})();
