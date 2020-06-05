const express = require('express');
const app = express();

app.use('/xyz', express.static(__dirname + '/public'));

app.listen(4444, () => {
    console.log("server started at http://localhost:4444");
})