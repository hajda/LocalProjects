/**
 * DOJO
 * https://www.codewars.com/kata/hamster-me
 */
(function polyBusDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsPolyBus', polyBusDirective);

    polyBusDirective.$inject = [];

    function polyBusDirective() {
        return {
            restrict: 'AE',
            // templateUrl: 'scripts/components/polyBus/polyBus.template.html',
            controller: 'DjsPolyBusController',
            controllerAs: 'PolyBusCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {
                // function polyBus(code, text) {
                //
                // }

                // function spread(text, breadth) {
                //     var sheet = [];
                //     var textArray = text.split('');
                //
                //     for (let i = 0; i < Math.ceil(text.length / breadth); i++) {
                //         sheet.push(textArray.splice(0, breadth));
                //         console.log(sheet);
                //     }
                //
                //     console.log('sheet:', sheet);
                //     return sheet;
                // }
                //
                // function pad(sheet, breadth) {
                //     var lastRow = sheet[sheet.length - 1];
                //     for (let i = 0; i < breadth - lastRow.length; i++) {
                //         lastRow.push(' ');
                //     }
                // }


                // spread('ecc pecc kimehetsy, holnapután bejöhetsz. cérnára cinegére, ugorj, cica az egérre, fuss!' , 5);

                var ABC = 'abcdefghijklmnopqrstuvwxyz';

                function createTable(code) {
                    var abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
                    var arrangedCode = arrangeCode(code);
                    var table = [];
                    for (var i = 0; i < arrangedCode.length; i++) {
                        var indexInAbc = abc.indexOf(arrangedCode[i + 1]);
                        var row = abc.splice(0, indexInAbc);
                        if (row.length) {
                            table.push(row);
                        }
                    }

                    table.push(abc.splice(arrangedCode[arrangedCode.length-1]));
                    table[table.length-1] = table[table.length-1].concat(abc.join());

                    console.log('table', table);
                }

                function arrangeCode(code) {
                    var arrangedCode = [];
                    for (var char in ABC) {
                        if (code.indexOf(ABC[char]) > -1) {
                            arrangedCode.push(ABC[char]);
                        }
                    }
                    return arrangedCode;
                }

                createTable('trabant'); // abnrt
            }
        };
    }
})();
