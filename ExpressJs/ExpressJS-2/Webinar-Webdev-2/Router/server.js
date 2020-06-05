const express = require("express");
const srv = express();
const todoRoute = require("./routes/todo.js");

srv.use(express.urlencoded({ extended: true }));
// srv.use(express.json());

srv.get("/hello", (req, res) => {
	res.send(`<h1>Hello World</h1>`);
});

srv.use("/todo", todoRoute);
srv.use("/public", express.static(__dirname + "/routes"));
srv.listen(4555, () => {
	console.log("server started at http://localhost:4555");
});
