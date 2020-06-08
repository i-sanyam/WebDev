const route = require("express").Router();
const db = require("../db");

route.get("/", (req, res) => {
	db.getAllPersons()
		.then((persons) => {
			res.render("persons", { persons });
		})
		.catch((err) => {
			res.send("Got an error");
		});
});

route.get("/add/", (req, res) => {
	res.render("persons_add");
});

route.post("/add", (req, res) => {
	db.addPerson(req.body)
		.then(() => {
			res.redirect("/pages/");
		})
		.catch((err) => {
			res.send(err);
		});
});

exports = module.exports = { route };
