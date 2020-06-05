let fs = require("fs");

console.log("1");

fs.readFile("test.txt", "utf8", function (error, data) {
	if (error) {
		throw error;
	}

	console.log("2");
});

console.log("3");
