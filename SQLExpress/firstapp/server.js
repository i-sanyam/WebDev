const express = require("express");
const app = express();
const db = require("./db");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "hbs");

app.use("/pages", require("./routes/pages").route);
app.use("/api", require("./routes/api").route);
app.use("/", express.static(path.join(__dirname, "public_static")));

app.listen(4444, () => {
	console.log("Server started on http://localhost:4444");
});
