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

const task = async () => {
	try {
		// console.log("Worked?");
		// console.log(process.argv);
		await db.sync();

		await Student.create({
			name: process.argv[2],
			age: parseInt(Math.random() * 10) + 3,
		});
		db.close();
	} catch (e) {
		console.error(e);
	}
};
task();
