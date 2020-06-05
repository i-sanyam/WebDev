const route = require("express").Router();

let tasks = [];

route.get("/", (req, res) => {
	res.send(tasks);
});

route.post("/", (req, res) => {
	tasks.push({
		task: req.body.task,
	});
	res.send(tasks);
});
module.exports = route;
