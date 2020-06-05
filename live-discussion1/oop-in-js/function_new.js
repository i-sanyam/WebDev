function Person(name, age) {
	this.name = name;
	this.age = age;
	return 10;
}

let p = new Person("Baby", 30);
console.log(p);
