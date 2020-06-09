const { Batch, Teacher, Center, Course, Season, db } = require("./models");

const seed = async () => {
	try {
		await db.sync();

		await Center.bulkCreate(
			[
				{ id: "PP", name: "Pitampura", city: "New Delhi" },
				{ id: "DW", name: "Dwarka", city: "New Delhi" },
				{ id: "NO", name: "Noida", city: "Noida" },
				{ id: "OL", name: "Online", city: "New Delhi" },
				{ id: "DD", name: "Dehradun", city: "Dehradun" },
			],
			{
				ignoreDuplicates: true,
			}
		);

		await Season.bulkCreate(
			[
				{ id: "S", name: "Summer" },
				{ id: "W", name: "Winter" },
				{ id: "F", name: "Fall" },
				{ id: "P", name: "Spring" },
			],
			{ ignoreDuplicates: true }
		);

		await Course.bulkCreate(
			[
				{ id: "WD", name: "Web Development (NodeJS)" },
				{ id: "AD", name: "Android Development" },
				{ id: "LP", name: "Launchpad" },
				{ id: "CX", name: "Crux" },
				{ id: "IB", name: "Interview Bootcamp" },
			],
			{ ignoreDuplicates: true }
		);

		await Teacher.bulkCreate(
			[
				{ name: "Apaar Saxena" },
				{ name: "Arnav Gupta" },
				{ name: "Kartik Mathur" },
				{ name: "Prateek Narang" },
				{ name: "Sanyam Garg" },
			],
			{
				ignoreDuplicates: true,
			}
		);

		db.close();
	} catch (e) {
		console.error(e);
	}
};

seed();
