(function djsDidYouMeanControllerSpecsDefinition() {
    'use strict';

    describe('DjsDidYouMeanController >', function didYouMeanControllerDescription() {

        var $scope, didYouMeanCtrl,
            DidYouMean
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('phoenixApp', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_$controller_, $rootScope, _DidYouMean_) {
            $scope = $rootScope.$new();
            didYouMeanCtrl = $controller('DjsDidYouMeanController', {$rootScope: $rootScope, $scope: $scope});
            DidYouMean = _DidYouMean_;
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
            didYouMeanCtrl.setItemName(0, itemName);
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

