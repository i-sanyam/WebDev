const { Router } = require("express");
const route = Router();
const {
	getUserById,
	getUserByName,
	createAnnonUser,
} = require("./../../controllers/users");

route.get("/", (req, res) => {
	res.send(`to do: all users`);
});

route.get("/search/:id", async (req, res) => {
	let user;

	const isString = isNaN(parseInt(req.params.id));

	if (isString) {
		user = await getUserByName(req.params.id);
	} else if (req.params.id == parseInt(req.params.id)) {
		user = await getUserById(req.params.id);
	}

	if (user) {
		res.status(200).send(user);
	} else {
		res.status(404).send({ error: "User not found" });
	}
});

route.post("/", async (req, res) => {
	let user;
	while (!user) {
		console.log("try");
		user = await createAnnonUser();
	}
	// console.log(user);
	res.status(201).send(user);
});

exports = module.exports = { userRoute: route };
