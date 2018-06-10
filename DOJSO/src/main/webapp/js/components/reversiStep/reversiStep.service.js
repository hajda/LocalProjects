(function reversiStepServiceDefinition() {
    'use strict';

    angular.module('doJSo')
        .factory('DjsReversiStep', reversiStepService);

    reversiStepService.$inject = [];

    function reversiStepService() {

        /* private */

        var board = [
            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],

            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],

            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],

            [' ', ' ', ' ', 'B', 'W', ' ', ' ', ''],

            [' ', ' ', ' ', 'W', 'B', ' ', ' ', ''],

            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],

            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],

            [' ', ' ', ' ', ' ', ' ', ' ', ' ', ''],
        ];

        /* API */

        var api = {
        };

        /* API functions */

        function adjacents(x, y) {
            var ceils = [],
                sides = [],
                floor = []
            ;

        }

        function getCeils(x, y) {
            var ceils = [];

            if (x < 0) {
                for (var i = -1; i < 2; i++) {
                    if (y + i < 8 && y + i >=0) {
                        ceils[i] = board[x, y + i];
                    }
                }
            }
        }

        /* implementation details */

        return api;
    }
})();
