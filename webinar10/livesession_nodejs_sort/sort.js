const fs = require("fs"); // library fs
const os = require("os"); // library native

function rdFile(filename) {
	return new Promise((resolve, reject) => {
		fs.readFile(filename, (err, data) => {
			if (err) {
				reject(filename);
			}
			resolve({
				data: data.toString().split(os.EOL),
				msg: `${filename} is successfully read`,
			});
		});
	});
}
Promise.all([rdFile("in1.txt"), rdFile("in2.txt"), rdFile("in3.txt")])
	.then((parsed) => {
		let array = [];
		for (x of parsed) {
			array = array.concat(x["data"]);
		}
		for (let i = 0; i < array.length; i++) {
			array[i] = parseInt(array[i]);
		}

		array = array.sort((a, b) => {
			// will return positive when a is bigger
			// if return is true, then b will be put first in array
			return a - b;
		});

		array = array.join(os.EOL);
		fs.writeFile("out.txt", array, (err) => {
			if (err) throw err;
			console.log("Output Written Successfully");
		});
	})
	.catch((filename) => {
		console.error(`Error reading ${filename}`);
	});
