(function djsConsoleDirectiveSpecsDefinition() {
    'use strict';

    describe('console directive >', function consoleDirectiveDescription() {

        var directiveSnippet = '<djs-console></djs-console>', // TODO complete snippet with attributes/ template parameters / etc...
            $compile, $scope,
            Console
        ;

        beforeEach(module('doJSo'));
        beforeEach(module('phoenixApp', function mockDependencies($provide) {
            mockDependencies($provide);
        }));
        beforeEach(inject(function injectDependencies(_$compile_, $rootScope, _Console_) {
            $compile = _$compile_
            $scope = $rootScope.$new();
            Console= _Console_;
        }));

        it('should render directive', function spec() {
            /* compile and digest snippet */
            var element = $compile(directiveSnippet)($scope);
            $scope.$digest();

            /* verify that the directive evaluates to the template */
            expect(element.html()).toBeDefined();

            /* expectations */
            // e.g. expect(element.find('label')[0].innerHTML.trim()).toEqual('myDataLabel');
            // e.g. expect(element.find('input')[0].getAttribute('name')).toEqual('myDataInput');
            // e.g. expect(element.find('input')[0].getAttribute('id')).toEqual('djs-input-' + $scope.myModel.items[0].name);
            // e.g. expect($scope.myModel.items[0].value).toBe(element.find('#djs-input-' + $scope.myModel.items[0].name).val());
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

