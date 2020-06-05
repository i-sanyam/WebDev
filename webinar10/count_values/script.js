const fs = require("fs");
const os = require("os");
const inScript = require("./script_in.js");

function readPromise(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if (err) reject(err);
			// if successful
			console.log("Read Successful");
			resolve(data.toString());
		});
	});
}

function writePromise(data) {
	return new Promise((reject, resolve) => {
		fs.writeFile("out.txt", data, (err) => {
			if (err) reject(err);
			resolve("Written Successfully");
		});
	});
}

function processPromise(data) {
	return new Promise((resolve, reject) => {
		let arr = data.split(os.EOL).sort();
		console.log(`Array Length from process: ${arr.length}`);
		let keyword = arr[0],
			count = 0;
		let op = [];
		let totCount = 0;
		for (let i = 0; i < arr.length; i++) {
			let x = arr[i];
			if (x == keyword) {
				count++;
			} else {
				op.push(`${keyword}: ${count}`);
				totCount += count;
				keyword = x;
				count = 1;
			}
			if (i == arr.length - 1) {
				op.push(`${keyword}: ${count}`);
				totCount += count;
				console.log(`Op Length from process: ${totCount}`);
				resolve(op.join(os.EOL));
			}
		}
	});
}
(async function perform() {
	await inScript.writePromiseFunction().then((msgObj) => {
		fs.writeFile("in.txt", msgObj.data, (err) => {
			if (err) throw err;
			console.log(msgObj.msg);
		});
	});
	await readPromise("in.txt")
		.then(processPromise)
		.then(writePromise)
		.then((msg) => {
			console.log(msg);
		})
		.catch((err) => {
			console.error(err);
		});
})();
