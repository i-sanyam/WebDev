const route = require("express").Router();

let taskList = [];

route.get("/", (req, res) => {
	res.render("todo");
});

route.post("/", (req, res) => {
	// console.log("render hoya");
	// res.send("<h1>todo</h1>");
	// console.log(req.body.newTask);
	taskList.push(req.body.newTask);
	res.render("todo", { tasks: taskList });
});

module.exports = route;
