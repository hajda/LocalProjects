(function nuclearStrikeDirectiveDefinition() {
    'use strict';

    angular.module('doJSo')
        .directive('djsNuclearStrike', nuclearStrikeDirective);

    nuclearStrikeDirective.$inject = [];

    function nuclearStrikeDirective() {
        return {
            restrict: 'AE',
            templateUrl: 'scripts/components/nuclearStrike/nuclearStrike.template.html',
            controller: 'DjsNuclearStrikeController',
            controllerAs: 'NuclearStrikeCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

            }
        };
    }
})();
