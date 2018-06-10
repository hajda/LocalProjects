(function generateDirectiveDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsGenerateDirective', generateDirectiveDirective);

    generateDirectiveDirective.$inject = ['DjsGenerateDirective'];

    function generateDirectiveDirective(GenerateDirective) {
        return {
            restrict: 'AE',
            templateUrl: 'js/components/generateDirective/generateDirective.template.html',
            controller: 'DjsGenerateDirectiveController',
            controllerAs: 'GenerateDirectiveCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                // TODO create postLink initialization business logic
            }
        };
    }
})();

