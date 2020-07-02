const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"));

app.listen(3355, () => {
  console.log("Server started successfully at http://localhost:3355");
});
