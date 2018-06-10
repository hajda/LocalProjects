(function textJustifierServiceDefinition() {
    'use strict';

    angular.module('doJSo')
        .factory('DjsTextJustifier', textJustifierService);

    textJustifierService.$inject = [];

    function textJustifierService() {
        var api = {
        };

        var text = 'Ecc-pecc, kimehetsz, Holnapután bejöhetsz. Cérnára cinegére, ugorj, cica az egérre, fuss! Jött egy busz, benne ült egy vén krampusz. Megkérdezte, hány óra. Fél tizenkettő, elszaladt a mentő, utána a katona, seggberúgta a lova.';
        var limit = 30;



        function justify(textArray) {

            var lines = [''],
                i = 0
            ;


            while (textArray.length) {
                if (lines[i].length + textArray[0].length < limit || lines[i].length == 0) {
                    lines[i] = lines[i].concat(textArray.shift() + ' ');
                } else {
                    lines[i] = lines[i].slice(0, -1);
                    lines[i] = pump(lines[i]) + '\n';
                    lines.push('');
                    i++;
                }
            }

            console.log(lines.join(''));
        }

        function getRegularGap(missingSpaceCount, spaces) {
            var regularGapWidth = Math.floor(missingSpaceCount / spaces.length);

            var regularGap = '';
            for (var i = 0; i < regularGapWidth; i++) {
                regularGap = regularGap.concat(' ');
            }
            return regularGap;
        }

        function pump(line) {
            var missingSpaceCount = limit - line.length;
            var spaces = getSpaceIndices(line);
            var remainder = missingSpaceCount%spaces.length;
            var regularGap = getRegularGap(missingSpaceCount, spaces);


            var resultLineArray = [];
            line.split(' ').forEach(function concatenate(word, i) {
                var gap = regularGap;
                if (i < remainder) {
                    gap = gap.concat(' ');
                }

                resultLineArray.push(word);
                if (i < spaces.length) {
                    resultLineArray.push(gap + ' ');
                }
            });

            return resultLineArray.join('');
        }

        function getSpaceIndices(line) {
            var regex = / /gi, result, indices = [];
            while (result = regex.exec(line)) {
                indices.push({spaceIndex: result.index});
            }
            return indices;
        }

        justify(text.split(' '));

        return api;
    }
})();
