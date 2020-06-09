const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize("sampledb1", "sanyam", "sanyam", {
	host: "localhost",
	dialect: "mysql",
});

const Student = db.define("students", {
	name: {
		type: DataTypes.STRING(40),
		allowNull: false,
	},
	age: {
		type: DataTypes.INTEGER(2),
		allowNull: true,
		defaultValue: -1,
	},
});

exports = module.exports = { Op, db, Student };
