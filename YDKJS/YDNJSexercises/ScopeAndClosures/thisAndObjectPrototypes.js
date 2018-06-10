///**
// * This & Object Prototypes
// */
////'use strict';
//
//console.warn('This & Object Prototypes');
//
//
//console.debug('...');
//(function thisFunction() {
//
//	console.info('');
//	function identify() {
//		console.log('identity: ', this.name);
//	    return this.name.toUpperCase();
//	}
//	identify();
//	reset();
//})();
//
//
//
//console.debug('"this" doesn\'t point to the function object, but to the global object');
//(function storingStatesBetweenFunctionCallsIsNotSoEasy() {
//
//	function foo(num) {
//	    console.log( "foo: " + num );
//
//	    // keep track of how many times `foo` is called
//	    this.count++;
////	    foo.count++;
//	}
//
////	this.count = 0;
//	foo.count = 0;
//
//	var i;
//
//	for (i = 0; i < 10; i++) {
//	    if (i > 5) {
//	        foo(i);
//	    }
//	}
//	// foo: 6
//	// foo: 7
//	// foo: 8
//	// foo: 9
//
//	// how many times was `foo` called?
////	console.log(this.count); // 4
//	console.log(foo.count); // 0
//	reset();
//})();
//
//
//
///** Binding rules
// * - Default
// * - Implicit
// * - - Implicitly lost
// * - Explicit
// * - - hard binding
// * - - API call "contexts"
// * - new
// */
//
//
//
//console.debug('Default Binding');
//var a = 2;
//this.b = 4;
//(function defaultBinding() {
//	function foo() {
//		console.log('this.a: ', this.a);
//		console.log('a: ', a);
//		console.log('this.b: ', this.b);
//		console.log('b: ', b);
//	}
//
//	foo(); // 2
//	reset();
//})();
//
//console.debug('strict mode has nothing to do with call site');
//(function strictModeAndCallSite() {
//	/**
//	 * In strict mode this function would throw
//	 * "Uncaught ReferenceError: implicitlyDeclaredVariable is not defined"
//	 */
//	function foo() {
//		implicitlyDeclaredVariable = 1;
//		console.log('implicitlyDeclaredVariable', implicitlyDeclaredVariable);
//	}
//
//	/**
//	 * foo() will throw no error, even though the call-site where foo() is called is in strict mode
//	 * because the where the foo() function body is defined is not in strict mode.
//	 */
//	(function strictArea() {
//		'use strict';
//		foo();
//	})();
//
//	reset();
//})();
//
//
//
//console.debug('...');
//(function implicitBinding() {
//	function foo() {
//	    console.log('this.a: ', this.a );
//	}
//
//	var obj = {
//	    a: 2,
//	    foo: foo
//	};
//
//	obj.foo(); // 2
//	foo(); // undefined (ReferenceError in strict mode)
//	reset();
//})();
//
//
//
//console.debug('...');
//(function callSiteInChain() {
//	function foo() {
//	    console.log( this.a );
//	}
//
//	var obj1 = {
//	    a: 2,
//	    obj2: {
//		    a: 42,
//		    foo: foo
//		}
//	};
//
//	obj1.obj2.foo(); // 42
//	reset();
//})();
//
//
//
//console.debug('...');
//var a = "oops, global"; // `a` also property on global object
//(function implicitlyLost() {
//	function foo(name) {
//	    console.log(name + ': this.a: ', this.a );
//	}
//
//	var obj = {
//	    a: 2,
//	    foo: foo
//	};
//
//	var bar = obj.foo; // function reference/alias!
//
//	obj.foo('object.foo()'); // 2
//	bar('bar()'); // "oops, global"
//	reset();
//})();
//
//
//
//console.debug('binder helper');
//(function() {
//
//	function foo() {
//		console.log('this.a', this.a);
//	}
//
//	function bind(fn, obj) {
//		console.log('bind()', fn, obj);
//		console.log('arguments', arguments);
//	    return function() {
//	        fn.apply( obj, arguments );
//	    };
//	}
//
//	var z = {a: 18};
//	var boundFunction = bind(foo, z);
//	boundFunction();
//	boundFunction.call({a: 20});
//
//	reset();
//})();
//
//
//
//console.debug('...');
//var a = "oops, global"; // `a` also property on global object
//(function implicitlyLostWhenPassingACallbackFunction() {
//	function foo(name) {
//		console.log(name + ': this.a: ', this.a );
//	}
//
//	function doFoo(fn) {
//	    // `fn` is just another reference to `foo`
//	    fn('fn()'); // <-- call-site!
//	}
//
//	var obj = {
//	    a: 2,
//	    foo: foo
//	};
//
//	obj.foo('obj.foo()'); // 2
//	doFoo(obj.foo); // "oops, global"
//	reset();
//})();
//
//
//
//console.debug('...');
//(function() {
//	function noParam() {
//		console.log(arguments);
//	}
//	noParam(1);
//	noParam(1, 'two', {three: 3});
//	reset();
//})();
//
//
//
//console.debug('...');
//(function() {
//	function foo(something) {
//		console.log(something);
//	    console.log( this.a, something );
//	    return this.a + something;
//	}
//
//	var obj = {
//	    a: 2
//	};
//
//	var bar = function() {
//		console.log('arguments', arguments);
//	    return foo.apply( obj, arguments );
//	};
//
//	var b = bar( 3 ); // 2 3
//	console.log( b ); // 5
//	reset();
//})();
//
//
//
//console.debug('');
//(function() {
//	console.info('...');
//	function thisOne(arg) {
//		console.log('arg:', arg)
//	}
//
//	function thatOne() {
//		console.log('thatOne() arguments:', arguments);
//		thisOne.apply({}, arguments);
//	}
//
//	thatOne(2);
//	reset();
//})();
//
//
//
//console.debug('new Binding()');
//(function() {
//
//	function foo(a) {
//	    this.a = a;
//	}
//
//	var bar = new foo( 2 );
//	console.log('bar.a:', bar.a); // 2
//	reset();
//})();
//
//
//console.debug('Binding side effects: indirection');
//var a = 'global a';
//(function() {
//
//	var o = { a: 'a in o', foo: foo };
//	var p = { a: 'a in p' };
//
//	function foo() {
//	    console.log( this.a );
//	}
//
//
//	o.foo(); // a in o
//	(p.foo = o.foo)(); // global a
//	p.foo(); // a in p
//
//reset();
//})();
//
//
//console.debug('');
//(function() {
//	var arrow = () => {
//		console.log('I\'m an arrow function');
//		console.log('this is:', this);
//	}
//	arrow();
//	reset();
//})();
//
//
//
//console.debug('');
//(function() {
//	var rootObject = {
//	    a: 2
//	};
//
//	// create an object linked to `rootObject`
//	var myObject = Object.create(rootObject);
//
//	console.log(myObject.a); // 2
//	myObject.a = 3;
//	console.log('a' in myObject); // false
//
//	console.log(rootObject.a); // 2
//	console.log(myObject.a); // 3
//	console.log(myObject); // {a: 3}
//
//	myObject.a = 4;
//
//	rootObject.b = 10;
//	console.log(rootObject.b); // 10
//	console.log(myObject.b); // 10
//
//	myObject.b = 11;
//	console.log(rootObject.b); // 11
//	console.log(myObject.b); // 11
//	reset();
//})();
//
//
//console.debug('function prototype');
//(function() {
//	function foo() {
//		this.a = 1;
//		this.b = 2;
//	}
//
//	console.log('foo.prototype', foo.prototype);
//	var a = new foo();
//	var b = new foo();
//	console.log('a', a);
//	console.log(Object.getPrototypeOf(a)/* === foo.prototype*/ ); // /* true */
//
//	console.log('a.prototype', a.prototype); // undefined
//	console.log('foo.prototype', foo.prototype); // > foo {}
//	console.log(a.prototype === foo.prototype); // true (WTF?!? undefined equals foo {})
//	reset();
//})();
//
//
//
//console.debug('function prototype 2');
//(function() {
//
//	function Foo(name) {
//	    this.name = name;
////	    this.myName = function() {
////		    return this.name;
////		};
//	}
//
//	Foo.prototype.myName = function() {
//	    return this.name;
//	};
//
//	var a = new Foo( "a" );
//	var b = new Foo( "b" );
//
//	console.log(a.myName()); // "a"
//	console.log(b.myName()); // "b"
//
//	reset();
//})();
//
//
//
//
//console.debug('NaN type');
//(function() {
//
//	console.log(1/0);
//	console.log(typeof 1/0);
//
//	reset();
//})();
//
//
//
//console.debug('for the arrays and the objects');
//(function() {
//
//	var indexedObject = {0: 'zero', 1: 'one', 2: 'two'};
//	console.debug('indexedObject:');
//	console.debug('indexedObject: indexed');
//	for (var i = 0; indexedObject.length; i++) {
//		console.info('indexedObject[' + i + ']: ', indexedObject[i]);
//	}
//	console.debug('indexedObject: enumerated');
//	for (var i in indexedObject) {
//		console.info('indexedObject[' + i + ']: ', indexedObject[i]);
//	}
//
//	console.debug('\n----------------------------------- arrays');
//
//	var array = ['zero', 'one', 'two'];
//	var mappedObject = {zero: 0, one: 1, two: 2};
//
//	var i;
//	console.debug('\nenumerated');
//	for (i in indexedObject) {
//		console.info(i);
//		console.log('indexedObject[' + i + ']:', indexedObject[i]); // zero, one, two
//		console.log('array[' + i + ']:', array[i]); // zero, one, two
//	}
//	console.debug('\nindexed');
//	i = undefined;
//	for (i = 0; i < array.length; i++) {
//		console.info(i);
//		console.log('array[' + i + ']:', array[i]); // zero, one, two
//		console.log('indexedObject[' + i + ']:', indexedObject[i]); // zero, one, two
//	}
//
//	console.debug('\n-----------------------------------\narrayWithAProperty');
//
//	var arrayWithProperty = ['zero', 'one'];
//	arrayWithProperty['2'] = 'two';
//	arrayWithProperty.three = 'three';
//
//	console.debug('\nenumerated (watch it!)');
//	for (i in arrayWithProperty) {
//		console.info(i);
//		console.log('arrayWithProperty[' + i + ']:', arrayWithProperty[i]); // zero, one, two, three
//	}
//	console.log('arrayWithProperty.length:', arrayWithProperty.length);
//	console.debug('\nindexed');
//	i = undefined;
//	for (i = 0; i < arrayWithProperty.length; i++) {
//		console.info(i);
//		console.log('arrayWithProperty[' + i + ']:', arrayWithProperty[i]);  // zero, one, two
//	}
//	console.log('arrayWithProperty.length:', arrayWithProperty.length);
//
//	console.debug('\naccessed');
//	console.log('arrayWithProperty[\'0\']:', arrayWithProperty['0']);
//	console.log('arrayWithProperty[\'1\']:', arrayWithProperty['1']);
//	console.log('arrayWithProperty[\'2\']:', arrayWithProperty['2']);
//	console.log('arrayWithProperty[\'three\']:', arrayWithProperty['three']);
//	console.log('arrayWithProperty.three:', arrayWithProperty.three);
//	console.log('arrayWithProperty.three == arrayWithProperty[\'three\']:', arrayWithProperty.three == arrayWithProperty['three']); // true
//	console.log('arrayWithProperty.three === arrayWithProperty[\'three\']:', arrayWithProperty.three === arrayWithProperty['three']); // true
//
//	console.error('');
//	array2 = ['one', 'two', 'three'];
//	array2['1'] = 'ONE';
//	console.log(array2[1]);
//	console.log(array2['1']);
//
//	reset();
//})();
//
//
//
//console.debug('for the arrays and the objects');
//(function() {
//	var existingVariable;
//	console.log('existingVariable:', existingVariable); // undefined
//	console.log('Type of existingVariableValue:', typeof existingVariable); // "undefined"
//	console.log('Type of nonExistingVariableValue:', typeof nonExistingVariable); // "undefined"
//	console.log('Type of existingVariableValue == Type of nonExistingVariableValue:', typeof existingVariable == typeof nonExistingVariable); // true
//
////	console.log('nonExistingVariable:', nonExistingVariable); /* uncomment this line, you'll get a ReferenceError. */
////	console.log('existingVariable.a:', existingVariable.a); /* uncomment this line, you'll get a TypeError. That's because Engine will find that the type of this variable is not "object" and so referencing a property and obtain its source value is an illegal operation on it */
//	var existingObject = {};
//	console.log('existingObject.a:', existingObject.a); // undefined
//
//reset();
//})();
//
//
//
//console.debug('Hoisting conditionally declared variables');
//(function() {
//
//	if (false) {
//		var a = 1;
//	}
//
//	console.log(a); // WTF it should throw a ReferenceError! That's because variable declarations are hoisted at compile time regardless of what the condition outcome will be at runtime. Copy and place this line before the if statement, You'll see there will be no error even in that case.
//	reset();
//})();
//
//
//
//
//console.debug('Hoisting conditionally declared variables: how the previous code is interpreted:');
//(function() {
//	var a;
//
//	if (false) {
//		a = 1;
//	}
//
//	console.log(a); // undefined - of course variable 'a' is declared. It's undefined, but it is declared.
//	reset();
//})();
//
//
//
//
//console.debug('Hoisting conditionally declared variables: how the previous code is interpreted:');
//(function() {
//
//	console.log(a); // undefined - of course variable 'a' is declared. It's undefined, but it is declared.
//
//	if (typeof a === 'undefined') {
//		var a = 1;
//	}
//
//	console.log(a);
//	reset();
//})();
//
//
//  //////////////////////////////////////////////////////////////////////////////////////////////////
// //								console.error('Types & Grammar');								///
////////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//console.debug('Numbers: normal form literals');
//(function() {
//	console.log(1E-3); // 1000
//	console.log(1E-3); // 0.001
//	reset();
//})();
//
//
//console.debug('undefined & null');
//(function() {
//	var b = null; // Null is a keyword
//	var a = undefined; // Maybe it is highlighted, but undefined is still a normal identifier. It's not at all a special keyword.
//
//	undefined = 2; // So you can assign to it any value in non strict mode without a problem. But it is really really ill-advised to do something like that!
//	console.log('undefined:', undefined); // undefined
//	var c;
//	console.log(c); // undefined
//
//	var undefined = 2;
//	console.log('undefined:', undefined); // undefined
//	reset();
//})();
//
//
//
//
//console.debug('undefined & null ------------------------------------------------------------');
//(function() {
//	var a = {b: null};
//	//console.log(a.b.c); // TypeError
//	reset();
//})();
//
//
//
//
//console.debug('The "in" operator ------------------------------------------------------------');
//(function() {
//	var object = {a: 'asdfn'};
//
//	console.log('Object "object" has a property "a":', "a" in object);
//	console.log('Object "object" has a property "b":', "b" in object);
//
//
//	var copy = Object.create(object);
//	copy.c = 'wffsdagfg';
//
//	console.log('Object "copy" has a property "a":', "a" in copy);
//	console.log('Object "copy" has a property "b":', "b" in copy);
//	console.log('Object "copy" has a property "c":', "c" in copy);
//
//	console.log('Object "copy" has an own property "a":', copy.hasOwnProperty("a"));
//	console.log('Object "copy" has an own property "b":', copy.hasOwnProperty("b"));
//	console.log('Object "copy" has an own property "c":', copy.hasOwnProperty("c"));
//
//	reset();
//})();
//
//(function() {
//	var myObject = { };
//
//	Object.defineProperty(
//		myObject,
//		"a",
//		// make `a` enumerable, as normal
//		{ enumerable: true, value: 2 }
//	);
//
//	Object.defineProperty(
//		myObject,
//		"b",
//		// make `b` non-enumerable
//		{ enumerable: false, value: 3 }
//	);
//
//	myObject.propertyIsEnumerable( "a" ); // true
//	myObject.propertyIsEnumerable( "b" ); // false
//
//	Object.keys( myObject ); // ["a"]
//	Object.getOwnPropertyNames( myObject ); // ["a", "b"]
//
//	reset();
//})();
//
//(function() {
//	console.log('Object.prototype -----------------------------------------------------')
//	Object.prototype.a = 'A';
//
//	var obj = {};
//	var obj2 = {};
//
//	console.log('obj.a:', obj.a);
//	console.log('obj2.a:', obj.a);
//	console.log('{}.a:', {}.a);
//
//	delete Object.prototype.a;
//
//	reset();
//})();
//
//
//(function() {
//	function Obj() {
//		this.a = 'A';
//		this.b = 'B';
//	}
//
//	console.log('Obj.prototype:', Obj.prototype);
//
//	var obj = new Obj();
//	console.log('obj has own property "a"', obj.hasOwnProperty('a'));
//	console.log('obj has own property "b"', obj.hasOwnProperty('b'));
//
//	reset();
//})();
//
//
//console.log('Prototypes: Property shadow scenarios ---------------------------------------------------------------------------');
//(function() {
//	console.log('SCENARIO 1');
//
//	var obj = {a: 1, b: 2};
//	var newObj = Object.create(obj);
//
//	console.log('obj.a:', obj.a); // 1
//	console.log('newObj.a:', newObj.a); // 1
//
//	console.log('obj.b:', obj.b); // 2
//	console.log('newObj.b:', newObj.b); // 2
//
//	obj.a = 3;
//	newObj.b = 4;
//
//	console.log('obj.a:', obj.a); // 3
//	console.log('newObj.a:', newObj.a); // 3
//
//	console.log('obj.b:', obj.b); // 2 SHADOWED by newObj.b
//	console.log('newObj.b:', newObj.b); // 4 SHADOWS obj.b
//
//	reset();
//})();
//
//(function() {
//	//'use strict';
//
//	console.log('SCENARIO 2');
//
//	var obj = {};
//	Object.defineProperty(obj, 'a', {
//		value: 1,
//		enumerable: true,
//		configurable: true,
//		writable: false
//	});
//
//	var newObj = Object.create(obj);
//
//	newObj.a = 3; // in strict mode: Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>' | in non-strict mode: property setting silently ignored.
//
//	console.log('obj.a:', obj.a); // 1
//	console.log('newObj.a:', newObj.a); // in non-strict mode: 1
//
//	/* NO SHADOWING OCCURED. In this situation, obj.a can ony be shadowed with Object.defineProperty().*/
//
//	reset();
//})();
//
//(function() {
//	//'use strict';
//
//	console.log('SCENARIO 3');
//
//	var obj = {
//		get a() {
//			return 1;
//		}
//	};
//
//	var newObj = Object.create(obj);
//
//	newObj.a = 3; // in strict mode: thisAndObjectPrototypes.js:723 Uncaught TypeError: Cannot set property a of #<Object> which has only a getter |  in non-strict mode: property setting silently ignored
//
//	console.log('obj.a:', obj.a); // 1
//	console.log('newObj.a:', newObj.a); // in non-strict mode: 1
//
//	/* NO SHADOWING OCCURED. In this situation, obj.a can ony be shadowed with Object.defineProperty().*/
//
//	reset();
//})();
//
//
//(function() {
//	console.log('Prototypes: new -----------------------------------------------------------------------');
//	//'use strict';
//
//	function Moo() {
//		this.a = 1;
//		this.b = 3;
//		return this;
//	}
//
//	var moo = Moo();
//
//	console.log('moo.a:', moo.a);
//	console.log('moo.b:', moo.b);
//
//	console.log('window.a:', window.a);
//	console.log('window.b:', window.b);
//
//    var newMoo = new Moo();
//
//	console.log(Moo.prototype === Object.getPrototypeOf(newMoo));
//
//	reset();
//})();
//
//(function() {
//	console.log('Prototypes: a side story -----------------------------------------------------------------------');
//	//'use strict';
//
//	function Moo() {
//		var newMoo = {
//			a: 1,
//			b: 3
//		};
//		return newMoo;
//	}
//
//	var moo = Moo();
//
//	console.log('moo:', moo);
//
//
//	var newMoo = new Moo();
//
//	console.log('otherMoo:', newMoo);
//	//console.log(moo.prototype == otherMoo.prototype);
//	console.log(Object.getPrototypeOf(moo) === Object.getPrototypeOf(newMoo));
//	console.log(moo.prototype === newMoo.prototype);
//	console.log(moo.prototype === Object.prototype);
//
//
//	console.log(Moo.prototype === Object.getPrototypeOf(moo));
//	console.log(Moo.prototype === Object.getPrototypeOf(newMoo));
//
//	reset();
//})();
//
//
//(function() {
//	console.log('Prototypes: another side story -----------------------------------------------------------------------');
//
//    function Foo(name) {
//        this.name = name;
//    }
//
//    Foo.prototype.myName = function() {
//        return this.name;
//    };
//
//    var a = new Foo( "a" );
//    var b = new Foo( "b" );
//
//    console.log(a.myName()); // "a"
//    console.log(b.myName()); // "b"
//
//    /* ********************************************* */
//
//    function Bar(name) {
//        this.name = name;
//        this.getName = function getName() {
//            return this.name;
//        }
//    }
//
//    var c = new Bar("c");
//    var d = new Bar("d");
//
//    console.log(c.getName());
//    console.log(d.getName());
//
//    console.log(a.hasOwnProperty("myName"));
//    console.log(d.hasOwnProperty("getName"));
//	reset();
//})();
//
//(function() {
//	console.log('Prototypes: Is Foo.prototype prototype chained to Object.prototypr? Are they equal -----------------------------------------------------------------------');
//
//    Object.prototype.a = 'A';
//    function Foo(name) {
//        this.name = name;
//    }
//
//
//    console.log('>', Foo.prototype.a)
//    console.log('>>', Foo.prototype === Object.prototype)
//
//	reset();
//})();
//
//console.log('--------------------------------------------------------------------------------------------------------');
//console.log('----------- Behaviuur Delegation -----------------------------------------------------------------------');
//console.log('--------------------------------------------------------------------------------------------------------');
//(function() {
//
//    var Figure = {
//        setUpFigure(referencePoint) {
//            this.referencePoint = referencePoint;
//        },
//
//        setReferencePoint(referencePoint) {
//            this.referencePoint = referencePoint;
//        },
//        getReferencePoint: function() {
//            return this.referencePoint;
//        },
//
//        print: function() {
//            console.log('Figure: {');
//            console.log('   referencePoint: ' + this.referencePoint);
//            console.log('}');
//        }
//    };
//
//    var Circle = Object.create(Figure);
//    Circle.setUpCircle = function setUpCircle(referencePoint, radius) {
//        this.setReferencePoint(referencePoint);
//        this.setRadius(radius);
//    };
//
//    Circle.setRadius = function setRadius(radius) {
//        this.radius = radius;
//    };
//    Circle.getRadius = function getRadius() {
//        return this.radius;
//    };
//
//    Circle.print = function print() {
//        console.log('Circle: {');
//        console.log('   referencePoint: (' + this.referencePoint[0] + ', ' + this.referencePoint[1] + ')');
//        console.log('   radius: ' + this.radius);
//        console.log('}');
//    }
//
//    circle = Object.create(Circle);
//    circle.setUpCircle([20, 34], 9);
//    circle.print();
//
//    function NewCircle(referencePoint, radius) {
//        var circle = Object.create(Circle);
//        if (referencePoint && radius) {
//            circle.setUpCircle(referencePoint, radius);
//        } else if (referencePoint) {
//            circle.setUpFigure(referencePoint);
//        }
//        return circle;
//    }
//
//    newCircle = NewCircle([64, 28], 8);
//    newCircle.print();
//
//    newCircle2 = NewCircle();
//    newCircle2.setUpFigure([20, 20]);
//    newCircle2.setRadius(10);
//    newCircle2.print();
//
//
//    console.log('Figure is prototype of Circle:', Figure.isPrototypeOf(Circle));
//    console.log('Prototype of Circle:', Object.getPrototypeOf(Circle));
//    console.log('Figure is prototype of newCircle:', Figure.isPrototypeOf(newCircle));
//    console.log('Circle is prototype of newCircle:', Circle.isPrototypeOf(newCircle));
//    console.log('Prototype of newCircle:', Object.getPrototypeOf(newCircle));
//
//    var o = {};
//    console.log('o is prototype of newCircle:', o.isPrototypeOf(newCircle));
//    console.log('Object.prototype is prototype of newCircle:', Object.prototype.isPrototypeOf(newCircle));
//
//    var u = undefined;
//    var v = null;
//
//
//	reset();
//})();
//
//(function() {
//
//    var undefined = 42;
//    console.log('undefined:', undefined);
//    var a;
//    console.log('a:', a);
//
//	reset();
//})();
//
//
//(function() {
//	//var i = 0;
//    //
//	//console.log(i++);
//	//var interval = setInterval(function count() {
//	//	console.log(i++);
//	//	if (i > 5) {
//	//		clearInterval(interval);
//	//	}
//	//}, 1000, 5);
//	//reset();
//})();
//
//
//(function() {
//	//var i = 0;
//    //
//	//console.log(i++);
//	//var interval = setInterval(function count() {
//	//	console.log(i++);
//	//	if (i > 5) {
//	//		clearInterval(interval);
//	//	}
//	//}, 1000, 5);
//	//reset();
//})();
//
//
//(function() {
//	var a = {
//		index: 1
//	};
//
//// later
//	console.log( a ); // ??
//
//// even later
//	a.index++;
//	reset();
//})();
//
//(function() {
//
//	function printValues(x, y) {
//		console.log('(x: ' + x + ', y:' + y + ')');
//	}
//
//	function switchValues(x, y) {
//		x.value = x.value + y.value;
//		y.value = x.value - y.value;
//		x.value = x.value - y.value;
//	}
//
//	function switchValues(x, y) {
//		var x = x.value;
//		x.value = y.value;
//		y.value = x;
//	}
//
//	var x = {value: 65156156};
//	var y = {value: 564654};
//	printValues(x.value, y.value);
//	switchValues(x, y);
//	printValues(x.value, y.value);
//
//
//	reset();
//})();

/*
(function() {
	var lib = {
		fetchData: function fetchData() {
			var fulfill;
			var reject;
			var $promise = {
				then: function then(onFulfilled, onRejected) {
					console.log('Hook up handlers for future value...');
					fulfill = onFulfilled;
					reject = onRejected;
				}
			};

			var queryDuration = Math.random() * 2;
			setTimeout(function onTimeout() {
				var result = Math.random();
				if (result > 0.5) {
					fulfill('SUCCESS: [' + result + ']');
				} else {
					reject({message: 'Failed to fetch data!', code: result});
				}
			}, queryDuration);

			return $promise;

		},
	};

	console.log('Fetch the data...');
	lib.fetchData().then(
			function onDataFetched(data) {
				console.log(data);
			},
			function onError(error) {
				console.log('ERROR! ' + error.message + ' code: ' + Math.ceil(error.code * 10) + ' [' + error.code + ']');
			}
	);

	reset();
})();
*/


(function() {
	function Promis() {
		this.then = function then(onFulfilled, onRejected) {
			var $promis = new Promis();
			this.resolve = function resolve(result) {
				var ret;
				if (typeof onFulfilled == 'function') {
					ret = onFulfilled(result);
				}
				if (typeof $promis.resolve == 'function') {
					$promis.resolve(ret);
				}
				return ret;
			};
			this.reject = function reject(reason) {
				var ret;
				if (typeof onRejected == 'function') {
					 ret = onRejected(reason);
				}
				if (typeof $promis.reject == 'function') {
					$promis.reject(ret);
				}
				return ret;
			};
            return $promis;
		};
	};

	var obj = {
		fetchData: function fetchData() {
			var $promis = new Promis();
			var queryDuration = Math.random() * 2;
			setTimeout(function onTimeout() {
				var randomNumber = Math.random();
				if (randomNumber > 0.5) {
					$promis.resolve(randomNumber);
				} else {
					$promis.reject({message: 'Failed to fetch data!', code: randomNumber});
				}
			}, queryDuration);

			return $promis;
		}
	};

	console.log('Fetch the data...');
	obj.fetchData().then(
		function onDataFetched(data) {
			setTimeout(function() {
				console.log('SUCCESS: [' + data + ']');
				return 42;
			}, 1500)
		},
		function onError(error) {
			console.log('ERROR: ' + error.message + ' code: ' + Math.ceil(error.code * 10) + ' [' + error.code + ']');
			return 21;
		}
	).then(
		function onDataFetched(data) {
			console.log('data:', data);
		},
		function onError(error) {
			console.log('error:', error);
		}

	).then().then().then(function() {console.log('OK')}, function() {console.log('X')});

	//reset();
})();




