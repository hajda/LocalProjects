(function djsPolyBusServiceSpecsDefinition() {
    'use strict';

    describe('PolyBus service >', function polyBusServiceDescription() {

        var PolyBus
        ;

        beforeEach(module('dojsoApp'));
        beforeEach(module('dojsoApp', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_DjsPolyBus_) {
            PolyBus = _DjsPolyBus_;
        }));

        it('should ...', function spec() {
            /* Example $scope initialiyation*/
            var myData = {
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
            // e.g. polyBus.setItemName(myData, 0, itemName);
            // e.g. expect(myData.items[0].name).toBe(itemName);
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
