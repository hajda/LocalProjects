(function adventControllerDefinition() {
    'use strict';

    console.log('initializing AdventController');

    ﻿angular
        .module('adventApp')
        .controller('AdventController', adventController)
    ;

    adventController.$inject = ['$scope'];

    function adventController($scope) {
        $scope.enekek = [
            {
                cim: 'Ébredj, ember...',
                id: 'ebredj-ember',
                szoveg: [
                    ['Ébredj, ember mély álmodból!', 'Megszabadulsz rabságodból', 'Közelít már üdvösséged', 'Eltörlik már minden vétked'],
                    ['Elküldé az úr angyalát', 'Hogy köszöntse Szűz Máriát', 'Kinek tiszta szűz méhébe', 'Alászállt az örök ige'],
                    ['A szűzhöz így szólt az angyal:', 'Üdvözlégy teljes malaszttal!', 'A Szentlélek beányékoz,', 'S áldott méhed gyümölcsöt hoz']
                ]
            }
        ];
    }
})();
