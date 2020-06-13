const User = require("../../db").User;
const route = require("express").Router();

route.get("/", (req, res) => {
	User.findAll()
		.then((users) => {
			res.status(200).send(users);
		})
		.catch((err) => {
			res.status(500).send({ error: "Could not Retreive users" });
		});
});

route.post("/login", (req, res) => {
	const found = User.findAll({ where: { name: req.body.username } })
		.then((user) => {
			// console.log(user);
			res.status(201).send(user);
		})
		.catch((err) => {
			res.status(400).send({ error: "Could not search database" });
		});
});

route.post("/", (req, res) => {
	// const findIfUserExist = User.findAll({ where: { name: req.body.name } });
	// console.log(findIfUserExist);
	User.create({
		name: req.body.name,
	})
		.then((user) => res.status(201).send(user))
		.catch((err) => {
			res.status(501).send({ error: "Could not add new user" });
		});
});

exports = module.exports = route;
