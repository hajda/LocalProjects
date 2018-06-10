(function consoleDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsConsole', consoleDirective);

    consoleDirective.$inject = ['DjsConsole'];

    function consoleDirective(Console) {
        return {
            restrict: 'AE',
            templateUrl: 'js/components/console/console.template.html',
            controller: 'DjsConsoleController',
            controllerAs: 'ConsoleCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

                /* Run sections */

                propertyDescriptors();

                /* property descriptors > getters and setters */

                function propertyDescriptors() {
                    console.log('--------------------- Property Descriptors ---------------------');

                    var enber  = {
                        name: {christian: 'Christian', family: 'Bale'},
                        age: 50
                    };

                    Object.defineProperty(enber, 'fullName', {
                        get: function getFullName() {
                            return this.name.family + '; ' + this.name.christian;
                        },
                        set: function setFullName(fullName) {
                            var object = this;

                            var names = fullName.split(' '); // ['John', 'Martin', 'Doe'] <<<< 'John Martin Doe'
                            this.name.family = names.splice(names.length - 1, 1); // 'Doe' <-- ['John', 'Martin',   ]

                            this.name.christian = names.splice(0, 1);
                            names.map(function (name) {
                                object.name.christian = object.name.christian + ' ' + name;
                            });
                        }
                    });

                    console.log('enber object\'s keys:', Object.keys(enber));
                    console.log('enber object\'s own property names:', Object.getOwnPropertyNames(enber));

                    console.log('full name:', enber.fullName);
                    console.log('set name...');
                    enber.fullName = 'Johanns Chrisostomus Wolfgangus Amadeus Mozart';
                    console.log('full name:', enber.fullName);
                }
            }
        };
    }
})();

