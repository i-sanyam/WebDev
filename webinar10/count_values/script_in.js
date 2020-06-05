const fs = require("fs");
const os = require("os");

let animals = ["cat", "dog", "monkey", "bear", "donkey", "zebra", "koala"];
let length = animals.length - 1;
let iterations = Math.floor(Math.random() * 500000);
function writePromiseFunction() {
	return new Promise((resolve, reject) => {
		let write = [];
		for (let i = 0; i < iterations; i++) {
			let index = Math.floor(Math.random() * length);
			write.push(animals[index]);
		}
		resolve({
			msg: iterations + " written successfully v/s " + write.length,
			data: write.join(os.EOL),
		});
	});
}

module.exports = { writePromiseFunction };
