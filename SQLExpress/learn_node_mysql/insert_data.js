const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'sanyam',
    password: 'sanyam'
});

connection.query(
    // `INSERT INTO persons values(1, 'Tarun', 22, 'Chandigarh')`,
        `INSERT INTO persons
        (name, age, city) VALUES ('Madari', 22, 'Chandigarh')`,
        function (err, results) {
            if (err) console.error(err);
            else console.log('values logged successfully');
            connection.close();
        }
    );
