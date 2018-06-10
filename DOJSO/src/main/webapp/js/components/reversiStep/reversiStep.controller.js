(function reversiStepControllerDefinition() {
    'use strict';

    angular.module('doJSo')
        .controller('DjsReversiStepController', reversiStepController);

    reversiStepController.$inject = ['$scope'];

    function reversiStepController($scope) {
        var reversiStepCtrl = this;

        /* private */

        var myData = [];

        /* public */

        /*      API */

        reversiStepCtrl.setItemName = setItemName;

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
