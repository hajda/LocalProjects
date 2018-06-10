(function djsObjectsAndProtoytpesControllerSpecsDefinition() {
    'use strict';

    describe('DjsObjectsAndProtoytpesController >', function objectsAndProtoytpesControllerDescription() {

        var $scope, objectsAndProtoytpesCtrl,
            ObjectsAndProtoytpes
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('phoenixApp', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_$controller_, $rootScope, _ObjectsAndProtoytpes_) {
            $scope = $rootScope.$new();
            objectsAndProtoytpesCtrl = $controller('DjsObjectsAndProtoytpesController', {$rootScope: $rootScope, $scope: $scope});
            ObjectsAndProtoytpes = _ObjectsAndProtoytpes_;
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
            objectsAndProtoytpesCtrl.setItemName(0, itemName);
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

