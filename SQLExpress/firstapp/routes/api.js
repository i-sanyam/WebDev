const route = require("express").Router();
const db = require("../db");

route.get("/persons/", (req, res) => {
	db.getAllPersons()
		.then((persons) => res.send(persons))
		.catch((err) => res.send({ error: err }));
});

route.post("/persons/", (req, res) => {
	// console.log(req.body);
	// chose not to receive any data from the post request
	db.addPerson(req.body)
		.then(() => res.redirect("/api/persons"))
		.catch((err) => res.send({ error: err }));
});

exports = module.exports = { route };
