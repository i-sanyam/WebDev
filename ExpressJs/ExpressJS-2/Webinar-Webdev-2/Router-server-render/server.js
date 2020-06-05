const express = require("express");
const app = express();
const todoRoute = require("./routes/todo.js");
app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/todo", todoRoute);

app.listen(4567, () => {
	console.log("server started as http://localhost:4567/");
});
