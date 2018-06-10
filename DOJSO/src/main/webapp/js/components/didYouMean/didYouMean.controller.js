(function didYouMeanControllerDefinition() {
    'use strict';

    angular
    	.module('doJSo')
        .controller('DjsDidYouMeanController', didYouMeanController);

    didYouMeanController.$inject = ['$scope', 'DjsDidYouMean'];

    function didYouMeanController($scope, DidYouMean) {
        var didYouMeanCtrl = this; // TODO Here is a reference to THIS controller

        /* "private" */

        var fruits = ['cherry', 'pineapple', 'melon', 'strawberry', 'raspberry'];
        var languages = ['javascript', 'java', 'ruby', 'php', 'python', 'coffeescript'];
        var things = ['stars', 'mars', 'wars', 'codec', 'codewars'];

        $scope.subjects = {
            fruits: fruits,
            languages: languages,
            things: things
        };

        /* "public" */

        /*      API */

        didYouMeanCtrl.findMostSimilar = findMostSimilar;

        /*      API function definitions */

        function findMostSimilar(subject, q) {

            $scope.calculating = true;
            $scope.didYouMeanResult = '';

            var min = 1000, // TODO MAN INTEGER...
                result
            ;
            JSON.parse(subject).forEach(function findMin(word) {
                var levensteinDistance = DidYouMean.levenshteinDistance(word, q);
                if (levensteinDistance < min) {
                    min = levensteinDistance;
                    result = word;
                }
            });

            $scope.didYouMeanResult = result;
            $scope.calculating = false;

            var error = 'Ow, error...';
            console.log($scope.didYouMeanResult ? q + ' ----> ' + $scope.didYouMeanResult : error);
            return $scope.didYouMeanResult || error;
        }

        /* implementation details */

        // function () {
        // }
    }
})();
