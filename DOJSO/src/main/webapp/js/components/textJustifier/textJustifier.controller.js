(function textJustifierControllerDefinition() {
    'use strict';

    angular.module('doJSo')
        .controller('DjsTextJustifierController', textJustifierController);

    textJustifierController.$inject = ['$scope', 'DjsTextJustifier'];

    function textJustifierController($scope, DjsTextJustifier) {
        var textJustifierCtrl = this;

        /* private */

        var myData = [];

        /* public */

        /*      API */

        textJustifierCtrl.setItemName = setItemName;

        /*      public function definitions */

        function setItemName(itemIndex, itemName) {
            getItem(itemIndex).name = itemName;
            myData.push(itemName);
        }

        /* implementation details */

        function getItem(itemIndex) {
            return $scope.myModel.items[itemIndex];
        }
    }
})();
