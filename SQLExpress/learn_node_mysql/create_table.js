const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'sanyam',
    password: 'sanyam'
});

connection.query(
    `CREATE TABLE IF NOT EXISTS persons (
        id INTEGER PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(40) NOT NULL,
        age INTEGER NOT NULL,
        city VARCHAR(20)
        )`,
        function (err, results) {
            if (err) console.error(err);
            else console.log('table created successfully');
            connection.close();
        }
    );
