(function uiGridTutorialDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsUiGridTutorial', uiGridTutorialDirective);

    uiGridTutorialDirective.$inject = ['DjsUiGridTutorial'];

    function uiGridTutorialDirective(UiGridTutorial) {
        return {
            restrict: 'AE',
            templateUrl: 'js/components/uiGridTutorial/uiGridTutorial.template.html',
            controller: 'DjsUiGridTutorialController',
            controllerAs: 'UiGridTutorialCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                // TODO create postLink initialization business logic
            }
        };
    }
})();

