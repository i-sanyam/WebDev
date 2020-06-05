const express = require("express");
const app = express();
var tasks = [];

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.render("index", {
		title: "To Do List",
		tasks,
	});
});

app.post("/", (req, res) => {
	console.log(req.body.task);
	tasks.push(req.body.task);
	res.redirect("/");
});

app.listen(3434, () => {
	console.log("server started at http://localhost:3434");
});
