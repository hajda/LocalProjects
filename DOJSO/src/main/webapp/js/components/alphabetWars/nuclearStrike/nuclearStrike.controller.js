(function nuclearStrikeControllerDefinition() {
    'use strict';

    angular.module('doJSo')
        .controller('DjsNuclearStrikeController', nuclearStrikeController);

    nuclearStrikeController.$inject = ['$scope'];

    function nuclearStrikeController($scope) {
        var nuclearStrikeCtrl = this;

        /* private */

        var myData = [];

        /* public */

        /*      API */

        nuclearStrikeCtrl.setItemName = setItemName;

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
