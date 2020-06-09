const { db, Student } = require("./model");

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
