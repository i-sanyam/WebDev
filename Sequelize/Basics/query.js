const { Op, db, Student } = require("./model");

const task = async () => {
	try {
		await db.sync();
		const students = await Student.findAll({
			where: {
				age: {
					[Op.and]: {
						[Op.gt]: 5,
						[Op.lt]: 10,
					},
					// [Op.eq]: 11,
				},
			},
			order: [
				// ["age", "ASC"],
				["name", "ASC"],
			],
		});
		students.forEach((student) =>
			console.log(
				`age: ${student.dataValues.age}\tname: ${student.dataValues.name}`
			)
		);
		db.close();
	} catch (e) {
		console.error(e);
	}
};
task();
