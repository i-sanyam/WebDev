const express = require("express");
const app = express();
const db = require("./db");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
	db.getAllPersons()
		.then((persons) => {
			res.render("persons", { persons });
		})
		.catch((err) => {
			res.send("Got an error");
		});
});

app.get("/add", (req, res) => {
	res.render("persons_add");
});

app.post("/add", (req, res) => {
	db.addPerson(req.body)
		.then(() => {
			res.redirect("/");
		})
		.catch((err) => {
			res.send(err);
		});
});

app.set("view engine", "hbs");

app.listen(4444, () => {
	console.log("Server started on http://localhost:4444");
});
