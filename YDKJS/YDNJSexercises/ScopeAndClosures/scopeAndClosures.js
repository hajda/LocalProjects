/**
 * Scope & Closures
 */

console.warn('Scope & Closures');

function reset() {
	a = undefined;
	b = undefined;
	c = undefined;
	d = undefined;
	
	x = undefined;
	y = undefined;
	z = undefined;
	
	o = undefined;
	p = undefined;

	i = undefined;
	j = undefined;
	k = undefined;
}

(function run() {
	'use strict'; 
	(function strinctMode() {
		console.info('\nstrict mode');
//		c = 1; /* uncomment this line, you'll get a ReferenceError. comment strict mode out, you'll see no error. */
	})();

	(function referencingAPrimitiveValue() {
		console.info('\nreferencing a primitive value');
		
		console.debug('\var a = 1');
		var a = 1;
		console.debug('\nvar b = a');
		var b = a;
		console.log('b: ', b);
		
		console.debug('\na = 2');
		a = 2;
		console.log('b: ', b);
		
		console.debug('\nb = 3');
		b = 3;
		console.log('a: ', a);
		console.log('b: ', b);
		reset();
	})();
	
	
	(function referencingAnObject() {
		console.info('\nreferencing an object');
		
		console.debug('\no = {a: 1}');
		var o = {a: 1};
		console.debug('\np = o');
		var p = o;
		console.log('o.a: ', o.a);
		console.log('p.a: ', p.a);
		
		console.debug('\no.a = 2');
		o.a = 2;
		console.log('p.a: ', p.a);
		
		
		console.debug('\np.a = 3');
		p.a = 3;
		console.log('o.a: ', o.a);
		console.log('p.a: ', p.a);
		reset();
	})();
	
	
	// SCOPES
	
	(function nestedScopes1() {
		console.info('\nnested scopes');
		
		function outerScope() {
			console.debug('outerScope()');
			console.debug('var a = 1');
			var a = 1;
			function innerScope() {
				console.debug('innerScope()');
				console.debug(/*'var ' + */'a = 2');
				/* var */ a = 2;
				console.log('a: ', a);
				console.debug('/innerScope()');
			}
			innerScope();
			console.log('a: ', a);
			console.debug('/outerScope()');
		}
		outerScope();
		reset();
	})();
	
	
	(function nestedScopes2() {
		function foo(x) {
		    console.log( x + y );
		}
		console.log('y: ', y );
		var y = 2;
		foo(2); // 4
		reset();
	})();
	
	
	(function variableVisibility() {
		console.debug('var z = 1');
		var z = 1;
		function zZ() {
			console.debug('zZ() {');
			console.debug('	z = 2');
			z = 2; // declaration of variable z HERE (INSIDE function zZ's scope) is hoisted to the beginning of the function and therefore it will be valid in this line! This assignment will regarded to the variable that is declared in this function.
			console.log('	z: ', z);
			console.debug('	var z = 3');
			var z = 3;
			console.log('	z: ', z);
			console.debug(' } // zZ()');
		}
		zZ();
		console.log('z: ', z);
		reset();
	})();
	
	
	(function immedialetyInvokingFunctionExpressions() {
		console.info('\nIIFE');
		
		window.a = 27;
	
		(function IIFE(global){
		
		    var a = 3;
		    console.log('a: ', a); // 3
		    console.log('global.a: ', global.a); // 2
		
		})(window);
		
		console.log('window.a: ', window.a); // 2
		reset();
	})();	
	
	
	(function loops() {
		console.info('\nloops');
		i = 0; // declaration of variable i in the head of the for loop is hoisted to the beginning of this file.
		for (var i; i < 10; i++) {
		    console.log(i);
		}
		reset();
	})();	

	(function letVariable() {
		console.info('\nlet');
		for (let i = 0; i < 10; i++) {
			console.log('i: ', i);
		}
//		console.log(i); /* uncomment this line, you'll get a ReferenceError. */
		
		{
			let k = 5;
			console.log('k: ', k);
		}
//		console.log('k: ', k); /* uncomment this line, you'll get a ReferenceError. */
		reset();
	})();	
	reset();
})();