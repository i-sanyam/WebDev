const express = require("express");
const app = express();
const path = require("path");
const { Center, Course, Season, Batch } = require("../db/models");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", path.resolve(__dirname, "../views"));

app.get("/batchcode", async (req, res) => {
	const centers = await Center.findAll();
	const courses = await Course.findAll();
	const seasons = await Season.findAll();
	const years = [2018, 2019, 2020, 2021, 2022, 2023];

	res.render("batchcode", { centers, courses, seasons, years });
	console.log(req.body);
});

app.get("/batch", async (req, res) => {
	try {
		const batches = await Batch.findAll({
			include: [Course, Season, Center],
		});
		batches.forEach((b) => {
			b.cleanStartDate = JSON.stringify(b.start).substr(1, 10);
			b.cleanEndDate = JSON.stringify(b.end).substr(1, 10);
		});
		res.render("batch", { batches });
	} catch (e) {
		console.error(e);
	}
});
app.post("/batchcode", async (req, res) => {
	var batchcode = "";
	batchcode += req.body.course;
	batchcode += req.body.center;
	batchcode += req.body.year % 100;
	batchcode += req.body.season;
	batchcode += req.body.batchnumber;

	try {
		const batch = await Batch.create(
			{
				code: batchcode,
				year: req.body.year,
				start: Date.parse(req.body.startdate),
				end: Date.parse(req.body.enddate),
				courseId: req.body.course,
				centerId: req.body.center,
				seasonId: req.body.season,
			},
			{ ignoreDuplicates: true }
		);
		res.redirect("/batch");
	} catch (error) {
		console.error(error);
	}
});

module.exports = { app };
