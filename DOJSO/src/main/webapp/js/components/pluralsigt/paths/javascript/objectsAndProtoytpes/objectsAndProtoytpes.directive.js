(function objectsAndProtoytpesDirectiveDefinition() {
    'use strict';
    angular.module('doJSo')
        .directive('djsObjectsAndProtoytpes', objectsAndProtoytpesDirective);

    objectsAndProtoytpesDirective.$inject = ['DjsObjectsAndProtoytpes'];

    function objectsAndProtoytpesDirective(ObjectsAndProtoytpes) {
        return {
            restrict: 'AE',
            templateUrl: 'js/components/pluralsigt/paths/javascript/objectsAndProtoytpes/objectsAndProtoytpes.template.html',
            controller: 'DjsObjectsAndProtoytpesController',
            controllerAs: 'ObjectsAndProtoytpesCtrl',
            link: function postLink($scope, $element, attribs, ctrl) {

                function Animal(name, voice) {
                    this.name = name;
                    this.sound = voice || 'grunt';
                    this.speak = function speak() {
                        console.log('<< ' + this.sound + '!');
                        return this.sound;
                    }
                }

                function Cat(name, voice, color) {
                    Animal.call(this, name, voice); // TODO this line is important regarding creating your own prototypical inheritence chain
                    this.color = color;
                }

                Cat.prototype = Object.create(Animal.prototype); // TODO this line is important regarding creating your own prototypical inheritence chain

                /* Tie up loose ends */

                /*
                 * Unfortunately, the prototype is set to Animal when Cat.prototype is set in the
                 * previous line, and fluffy will be associated with the Animal() function as its
                 * constructor, when in reality it will be created with the Cat() function.
                 */
                console.log('Cat.prototype.constructor', Cat.prototype.constructor);
                /* Let's fix that */
                Cat.prototype.constructor = Cat; // TODO this line is important regarding creating your own prototypical inheritence chain
                console.log('Cat.prototype.constructor', Cat.prototype.constructor);


                var fluffy = new Cat('Fluffy', 'Meoooow', 'White');

                fluffy.speak();

                console.log(fluffy instanceof Cat); // true
                console.log(fluffy instanceof Animal); // true (good so far)
                console.log('fluffy.__proto__', fluffy._proto_); // Should be Cat, but undefined :/
                console.log('fluffy.__proto__.__proto__', fluffy._proto_.__proto__); // Should be Animal, but fluffy.__proto__ is undefined :\
            }
        };
    }
})();

