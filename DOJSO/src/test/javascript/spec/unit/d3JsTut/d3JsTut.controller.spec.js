(function djsD3JsTutControllerSpecsDefinition() {
    'use strict';

    describe('DjsD3JsTutController >', function d3JsTutControllerDescription() {

        var $scope, d3JsTutCtrl,
            D3JsTut
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('phoenixApp', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_$controller_, $rootScope, _D3JsTut_) {
            $scope = $rootScope.$new();
            d3JsTutCtrl = $controller('DjsD3JsTutController', {$rootScope: $rootScope, $scope: $scope});
            D3JsTut = _D3JsTut_;
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
            d3JsTutCtrl.setItemName(0, itemName);
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

