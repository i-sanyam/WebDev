const x = 10;
function myFun() {
	const x = 20;
	console.log(x);
	if (true) {
		const x = 30;
		console.log(x);
	}
}
myFun();
console.log(x);
// let and const have block level scope
// var has function scopes
