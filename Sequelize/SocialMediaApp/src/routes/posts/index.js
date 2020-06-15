const { Router } = require("express");
const route = Router();
const { getAllPosts, createNewPost } = require("./../../controllers/posts");

route.get("/", async (req, res) => {
	const posts = await getAllPosts();
	res.status(200).send(posts);
});

route.post("/", async (req, res) => {
	const { userId, title, body } = req.body;
	if (!userId || !title || !body) {
		return res.status(400).send({
			error: "userId, title and body are required to create a new post",
		});
	}

	const post = await createNewPost(userId, title, body);
	res.status(201).send(post);
});

exports = module.exports = { postRoute: route };
