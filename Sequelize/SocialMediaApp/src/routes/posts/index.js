const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
	res.send("TO DO: posts");
});

exports = module.exports = { postRoute: route };
