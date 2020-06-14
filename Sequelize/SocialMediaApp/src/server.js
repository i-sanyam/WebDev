const Express = require("express");
const app = Express();

const { db } = require("./db/models");

db.sync({ force: true })
	.then(() => {
		app.listen(8888, () => {
			console.log("Server started at http://localhost:8888");
		});
	})
	.catch(console.error(new Error("Could not start Database")));
