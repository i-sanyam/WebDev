/*
This is a sample to disturb my sister
*/

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/greet", (req, res) => {
	console.log(req.body.msg);
	res.send(
		`<h1 style="color: red;">${req.body.msg}</h1><br><h2 style="color: blue;">Sent to Mama😄</h2>`
	);
});

app.listen(1309, () => {
	console.log("Server started at http://localhost:1309");
});
