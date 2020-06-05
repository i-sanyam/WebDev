function f() {
	// console.log("f " + f);
	return f;
}
let a = new f(); // a is f itself
console.log(typeof a);
console.log(a instanceof f);
