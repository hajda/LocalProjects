(function djsNuclearStrikeServiceSpecsDefinition() {
    'use strict';

    describe('NuclearStrike service >', function nuclearStrikeServiceDescription() {

        var NuclearStrike
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('doJSo', function mockDependencies($provide) {
            mockComponents($provide);
        }));
        beforeEach(inject(function injectDependencies(_DjsNuclearStrike_) {
            NuclearStrike = _DjsNuclearStrike_;
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
            // e.g. nuclearStrike.setItemName(myData, 0, itemName);
            // e.g. expect(myData.items[0].name).toBe(itemName);
        });
    });

    function mockComponents($provide) {
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
