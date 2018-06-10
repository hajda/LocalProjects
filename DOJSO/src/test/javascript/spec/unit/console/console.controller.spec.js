(function djsConsoleControllerSpecsDefinition() {
    'use strict';

    describe('DjsConsoleController >', function consoleControllerDescription() {

        var $scope, consoleCtrl,
            Console
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('phoenixApp', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_$controller_, $rootScope, _Console_) {
            $scope = $rootScope.$new();
            consoleCtrl = $controller('DjsConsoleController', {$rootScope: $rootScope, $scope: $scope});
            Console = _Console_;
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
            consoleCtrl.setItemName(0, itemName);
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

