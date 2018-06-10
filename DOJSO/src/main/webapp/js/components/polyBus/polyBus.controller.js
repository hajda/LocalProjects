(function polyBusControllerDefinition() {
    'use strict';

    angular.module('doJSo')
        .controller('DjsPolyBusController', polyBusController);

    polyBusController.$inject = ['$scope'];

    function polyBusController($scope) {
        var polyBusCtrl = this;

        /* private */

        var myData = [];

        /* public */

        /*      API */

        polyBusCtrl.setItemName = setItemName;

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
