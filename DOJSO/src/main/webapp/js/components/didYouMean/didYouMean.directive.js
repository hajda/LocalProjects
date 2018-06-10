(function didYouMeanDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsDidYouMean', didYouMeanDirective);

    didYouMeanDirective.$inject = ['DjsDidYouMean'];

    function didYouMeanDirective(DidYouMean) {
        return {
            restrict: 'AE',
            templateUrl: 'js/components/didYouMean/didYouMean.template.html',
            controller: 'DjsDidYouMeanController',
            controllerAs: 'DidYouMeanCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                // TODO create postLink initialization business logic
            }
        };
    }
})();

