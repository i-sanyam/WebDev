/*
//q1
let x,
	{ x: y = 1 } = { x };
y;
*/

/*
q2
((…x, xs)=>x)(1,2,3)
*/

//q8 - 123 is given as wrong answer
var string2Num = parseInt("123xyz");

/*
If you have a function f and an object o,
you can define a method named m of o with?
o.m = f is wrong
*/

//q11
var c = counter(),
	d = counter();
c.count();
d.count();
c.reset();
c.count();
d.count();
