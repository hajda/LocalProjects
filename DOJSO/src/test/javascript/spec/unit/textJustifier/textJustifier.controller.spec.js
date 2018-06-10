(function djsTextJustifierControllerSpecsDefinition() {
    'use strict';

    describe('DjsTextJustifierController >', function textJustifierControllerDescription() {

        var $scope, textJustifierCtrl,
            TextJustifier
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('doJSo', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_$controller_, $rootScope, _DjsTextJustifier_) {
            $scope = $rootScope.$new();
            $controller = _$controller_;
            textJustifierCtrl = $controller('DjsTextJustifierController', {$rootScope: $rootScope, $scope: $scope});
            TextJustifier = _DjsTextJustifier_;
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
            textJustifierCtrl.setItemName(0, itemName);
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
