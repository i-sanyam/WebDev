const Express = require("express");
const app = Express();

const { db } = require("./db/models");
const { userRoute } = require("./routes/users");
const { postRoute } = require("./routes/posts");

app.use("/", Express.static(__dirname + "/public"));
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

db.sync()
	.then(() => {
		app.listen(8888, () => {
			console.log("Server started at http://localhost:8888");
		});
	})
	.catch((err) => {
		console.error(new Error("Could not start Database"));
	});
