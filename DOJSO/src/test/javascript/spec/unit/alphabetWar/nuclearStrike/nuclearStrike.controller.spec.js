(function djsNuclearStrikeControllerSpecsDefinition() {
    'use strict';

    describe('DjsNuclearStrikeController >', function nuclearStrikeControllerDescription() {

        var $scope, nuclearStrikeCtrl,
            NuclearStrike,
            scenarios = getScenarios()
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('doJSo', function mockDependencies($provide) {
            mockComponents($provide);
        }));
        beforeEach(inject(function injectDependencies(_$controller_, $rootScope, _DjsNuclearStrike_) {
            $scope = $rootScope.$new();
            var $controller = _$controller_;
            nuclearStrikeCtrl = $controller('DjsNuclearStrikeController', {$rootScope: $rootScope, $scope: $scope});
            NuclearStrike = _DjsNuclearStrike_;
        }));

        it('should ...', function spec() {
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

    function getScenarios() {
        var fields = [
            'abde[fgh]ijk', //          => "abdefghijk"  (all letters survive because there is no # )
            'ab#de[fgh]ijk', //          => "fgh" (all letters outside die because there is a # )
            'ab#de[fgh]ij#k', //         => ""  (all letters dies, there are 2 # close to the shellter )
            '##abde[fgh]ijk', //         => ""  (all letters dies, there are 2 # close to the shellter )
            '##abde[fgh]ijk[mn]op', //   => "mn" (letters from the second shelter survive, there is no # close)
            '#ab#de[fgh]ijk[mn]op', //   => "mn" (letters from the second shelter survive, there is no # close)
            '#abde[fgh]i#jk[mn]op', //   => "mn" (letters from the second shelter survive, there is only 1 # close)
            '[a]#[b]#[c]', //            => "ac"
            '[a]#b#[c][d]', //           => "d"
            '[a][b][c]', //              => "abc"
            '##a[a]b[c]#' //            => "c"
        ];
        var expectations = ['abdefghijk', 'fgh', '', '', 'mn', 'mn', 'mn', 'ac', 'd', 'abc', 'c'];

        var scenarios = [];

        for (var i = 0; i < fields.length; i++) {
            scenarios.push(
                {field: fields[i], expectation: expectations[i]}
            );
        }
    }
})();
