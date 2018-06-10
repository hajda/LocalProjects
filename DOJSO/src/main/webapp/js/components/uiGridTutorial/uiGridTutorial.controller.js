(function uiGridTutorialControllerDefinition() {
    'use strict';

    angular
    	.module('doJSo')
        .controller('DjsUiGridTutorialController', uiGridTutorialController);

    uiGridTutorialController.$inject = ['$scope', 'DjsUiGridTutorial'];

    function uiGridTutorialController($scope, UiGridTutorial) {
        var uiGridTutorialCtrl = this;

        /* "private" */

        /* "public" */

        /* "public" $scope */

        $scope.myData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];

        $scope.gridOptions = {
            enableSorting: true,
            enableCellEditOnFocus: true,
            columnDefs: [
                { name: 'field1', enableSorting: false, enableCellEdit: false },
                { name: 'field2' },
                { name: 'field3', visible: false }
            ]
        };

        $scope.gridOptions2 = {
            enableSorting: true,
                columnDefs: [
            { name:'firstName', field: 'first-name' },
            { name:'1stFriend', field: 'friends[0]' },
            { name:'city', field: 'address.city'},
            { name:'getZip', field: 'getZip()', enableCellEdit:false}
        ],
            data : [      {
            "first-name": "Cox",
            "friends": ["friend0"],
            "address": {street:"301 Dove Ave", city:"Laurel", zip:"39565"},
            "getZip" : function() {return this.address.zip;}
        }
        ]
        };

        /*      API */

        uiGridTutorialCtrl.setItemName = setItemName;

        /*      API function definitions */

        /**
         * TODO this is a sample
         */
        function setItemName(itemIndex, itemName) {
            getItem(itemIndex).name = itemName;
            myData.push(itemName);
        }

        /* implementation details */

        /**
         * TODO this is a sample
         */
        function getItem(itemIndex) {
            return $scope.myModel.items[itemIndex];
        }
    }
})();

