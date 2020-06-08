const sequelize = require("sequelize");

const db = new sequelize("sampledb1", "sanyam", "sanyam", {
	host: "localhost",
	dialect: "mysql",
});

db.authenticate()
	.then(() => console.log("Connection successful"))
	.catch((err) => console.error(err));
