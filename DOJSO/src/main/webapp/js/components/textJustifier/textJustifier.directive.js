(function textJustifierDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsTextJustifier', textJustifierDirective);

    textJustifierDirective.$inject = [];

    function textJustifierDirective() {
        return {
            restrict: 'AE',
            // templateUrl: 'js/components/textJustifier/textJustifier.template.html',
            controller: 'DjsTextJustifierController',
            controllerAs: 'TextJustifierCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

            }
        };
    }
})();
