const Product = require("../../db").Product;
const route = require("express").Router();

route.get("/", (req, res) => {
	Product.findAll()
		.then((products) => {
			res.status(200).send(products);
		})
		.catch((e) => {
			res.status(400).send({ error: "Could not Retreive Products" });
		});
});

route.post("/", (req, res) => {
	// validate price
	// console.log(req.body);
	if (isNaN(parseFloat(req.body.price))) {
		return res.status(403).send({ error: "Invalid Price" });
	}

	// create entry for product
	Product.create({
		name: req.body.name,
		manufacturer: req.body.manufacturer,
		price: parseFloat(req.body.price),
	})
		.then((product) => {
			res.status(201).send(product);
		})
		.catch((e) => {
			res.status(403).send({ error: "Could not add new product" });
		});
});

exports = module.exports = route;
