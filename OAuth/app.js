const express = require('express');

const app = express();

// use config here
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});

app.get('/', (req, res) => {
  res.send("Do you know I need not be restarted?");
});