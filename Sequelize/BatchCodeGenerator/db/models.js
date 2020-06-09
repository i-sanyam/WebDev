const { db, Sequelize } = require("./connection");
const DataTypes = Sequelize.DataTypes;
const Op = Sequelize.Op;

const Course = db.define("course", {
	id: {
		type: DataTypes.STRING(2),
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING(25),
		allowNull: false,
	},
});

const Teacher = db.define("teacher", {
	name: {
		type: DataTypes.STRING(35),
		allowNull: false,
	},
});

const Center = db.define("center", {
	id: {
		type: DataTypes.STRING(2),
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING(15),
		allowNull: false,
	},
	city: {
		type: DataTypes.STRING(20),
		allowNull: false,
	},
});

const Season = db.define("season", {
	id: {
		type: DataTypes.STRING(2),
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING(10),
		allowNull: false,
	},
});

const Batch = db.define("batch", {
	code: {
		type: DataTypes.STRING(8),
		primaryKey: true,
	},
	year: DataTypes.INTEGER(4),
	start: DataTypes.DATE(),
	end: DataTypes.DATE(),
});

Batch.belongsTo(Course);
Batch.belongsTo(Center);
Batch.belongsTo(Season);

Course.hasMany(Batch);
Season.hasMany(Batch);
Center.hasMany(Batch);

db.sync();
exports = module.exports = { Batch, Teacher, Center, Course, Season, Op, db };
