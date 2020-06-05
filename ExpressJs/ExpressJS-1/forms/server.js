const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("<h1>Hello World</h1>");
});

app.get("/form", (req, res) => {
	res.sendFile(__dirname + "/forms.html");
});

app.get("/greet", (req, res) => {
	let person = "Guest";
	console.log("Req Body");
	console.log(req.body);
	console.log("Req Query");
	console.log(req.query);

	if (req.query.person) person = req.query.person;
	res.send("<h1 style='color:red'>Good Morning " + person + "</h1>");
});

app.post("/greet", (req, res) => {
	let person = "Guest";
	console.log("Req Body");
	console.log(req.body);
	console.log("Req Query");
	console.log(req.query);

	if (req.body.person) person = req.body.person;
	res.send("<h1 style='color:red'>Good Morning " + person + "</h1>");
});

app.listen(5555, () => {
	console.log("server started at http://localhost:5555");
});
