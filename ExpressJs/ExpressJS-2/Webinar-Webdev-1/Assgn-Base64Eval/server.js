const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"));

function toggleDecrypt(str) {
	const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	const LOWER = "abcdefghijklmnopqrstuvwxyz";
	let result = [];
	for (let i = 0; i < str.length; i++) {
		if (UPPER.indexOf(str[i]) !== -1) {
			result.push(str[i].toLowerCase());
		} else if (LOWER.indexOf(str[i]) !== -1) {
			result.push(str[i].toUpperCase());
		} else {
			result.push(str[i]);
		}
	}
	return result.join("");
}

function decryptParams(req, res, next) {
	for (let q in req.query) {
		req.query[q] = toggleDecrypt(req.query[q]);
	}
	next();
}

function decodeParams(req, res, next) {
	// console.log("Im here");
	for (let q in req.query) {
		let data = req.query[q];
		data = Buffer.from(data, "base64").toString("ascii");
		req.query[q] = data;
		// console.log("data: ", data);
	}
	next();
}

app.get("/eval", decryptParams, decodeParams, (req, res) => {
	// if (req.query) console.log("I was here");
	console.log(req.query);
	result = eval(req.query.code);
	res.send(`<h1 style='color:red'>processed</h1><h2>Result : ${result}</h2>`);
	console.log("result: ", result);
});

app.listen(4434, () => {
	console.log("started at http://localhost:4434/");
});
