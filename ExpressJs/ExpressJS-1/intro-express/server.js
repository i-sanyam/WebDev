const express = require("express");

const app = express();
// const server = express();

app.get("/", (req, res) => {
	// res.send("Hello World");
	res.send("<b style = 'font-size:26pt; color:red'>Hello World</b>");
});

app.get("/greet", (req, res) => {
	let person = "Guest";
	if (req.query.person) person = req.query.person;
	res.send("<h1 style='color:red'>Good Morning " + person + "</h1>");
});

app.listen(5555, () => {
	console.log("server started at http://localhost:5555");
});
