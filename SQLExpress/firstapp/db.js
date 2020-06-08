const mysql = require("mysql2");

const connection = mysql.createConnection({
	host: "localhost",
	user: "sanyam",
	password: "sanyam",
	database: "mytestdb",
});

function getAllPersons() {
	return new Promise((resolve, reject) => {
		connection.query(`SELECT * FROM persons`, function (err, rows, cols) {
			if (err) reject(err);
			else resolve(rows);
		});
	});
}

function addPerson(person) {
	return new Promise((resolve, reject) => {
		connection.query(
			`INSERT INTO persons (name, age, city) VALUES (?,?,?)`,
			[person.name, person.age, person.city],
			(err, rows, cols) => {
				if (err) reject(err);
				else resolve(rows);
			}
		);
	});
}

exports = module.exports = {
	getAllPersons,
	addPerson,
};
