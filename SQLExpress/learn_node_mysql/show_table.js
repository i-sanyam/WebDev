const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'mytestdb',
    user: 'sanyam',
    password: 'sanyam'
});

connection.query(
        `SELECT * FROM persons`,
        function (err, records, attributes) {
            if (err) console.error(err);
            else {
                console.log(records);
                // console.log('attributes: ');
                // console.log(attributes);
            }
            connection.close();
        }
    );
