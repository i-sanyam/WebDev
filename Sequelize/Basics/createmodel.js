const Sequelize = require("sequelize");
const DataTypes = Sequelize.DataTypes;

const db = new Sequelize("sampledb1", "sanyam", "sanyam", {
	host: "localhost",
	dialect: "mysql",
});

/*const Student = db.define("students", {
	name: DataTypes.STRING(40),
	age: DataTypes.INTEGER(2),
}); */

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

// db.sync()
// db.sync({ alter: true })
db.sync({ force: true })
	.then(() => console.log("Connection Successful"))
	.catch(console.error);
