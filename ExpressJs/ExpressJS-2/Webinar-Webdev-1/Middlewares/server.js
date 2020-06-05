//fiddling with MWs

const express = require("express");
const app = express();

function m1(req, res, next) {
	console.log("m1 pre-next");
	next();
	console.log("m1 post-next");
}
function m2(req, res, next) {
	console.log("m2 pre-next");
	next();
    console.log("m2 post-next");
}
function m3(req, res, next) {
	console.log("m3 pre-next");
	next();
    console.log("m3 post-next");
}

function lastMW(req, res, next) {
	console.log("pre send");
    res.send("Hello World");
    console.log("post send");
    next();
}

app.listen(4444, () => {
	console.log("started at http://localhost:4444/");
});

app.get("/", m1, m2, lastMW, m3); // middlewares are m1, m2, m3, lastMW
