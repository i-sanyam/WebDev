const Sequelize = require("sequelize");

const db = new Sequelize("batchcodegen", "sanyam", "sanyam", {
	host: "localhost",
	dialect: "mysql",
});

exports = module.exports = { Sequelize, db };
