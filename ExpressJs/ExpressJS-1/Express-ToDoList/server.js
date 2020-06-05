const express = require("express");
const os = require("os");
const app = express();
var tasks = [];
var taskList = "";

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	let send = `<html>
    <body>
    <h1>To Do List</h1>
    <form action = '/' method='POST'>
    <input name='task' placeholder='Task Description'>
    <button type='submit'>ADD</button>
    </form>
    <ul>
    ${taskList}
    </ul>
    </body>
    </html>`;
	res.send(send);
});

app.post("/", (req, res) => {
	console.log(req.body.task);
	tasks.push(req.body.task);
	taskList = tasks.map((t) => "<li>" + t + "</li>").join(os.EOL);
	res.redirect("/");
});

app.listen(3434, () => {
	console.log("server started at http://localhost:3434");
});
