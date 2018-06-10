(function djsPolyBusControllerSpecsDefinition() {
    'use strict';

    describe('DjsPolyBusController >', function polyBusControllerDescription() {

        var $scope, polyBusCtrl,
            PolyBus
        ;

        beforeEach(module('dojsoApp'));
        beforeEach(module('dojsoApp', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_$controller_, $rootScope, _DjsPolyBus_) {
            $scope = $rootScope.$new();
            $controller = _$controller_;
            polyBusCtrl = $controller('DjsPolyBusController', {$rootScope: $rootScope, $scope: $scope});
            PolyBus = _DjsPolyBus_;
        }));

        it('should ...', function spec() {
            /* Example $scope initialiyation*/
            $scope.myModel = {
                items: [
                    {
                        name: undefined
                    },
                    {
                        name: 'Item 1'
                    }
                ]
            };

            var itemName = 'Item 0';
            polyBusCtrl.setItemName(0, itemName);
            expect($scope.myModel.items[0].name).toBe(itemName);
        });
    });

    function mockDependencies($provide) {
        // e.x. mockDependentComponent($provide);
    }

    /** This is an example */
    function mockDependentComponent($provide) {
        var componentPrivateVariableMock = [];
        $provide.factory('DependentComponent', function mockComponent() {
            return {
                setItemName: function setItemName(myData, index, itemName) {
                    myData.items[index].name = itemName
                },
                otherFunction: function addElement(param) {
                    componentPrivateVariableMock.push(param);
                }
            };
        });
    }
})();
