const { db } = require("../db/models");
const { app } = require("./server");

const start = async () => {
	try {
		await db.sync();

		app.listen(3333, () => {
			console.log("Server started at http://localhost:3333");
		});
	} catch (e) {
		console.error(e);
	}
};

start();
