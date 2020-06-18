const { Router } = require("express");
const route = Router();
const { getAllPosts, createNewPost } = require("./../../controllers/posts");

route.get("/", async (req, res) => {
	const posts = await getAllPosts();
	res.status(200).send(posts);
});

route.get("/search/:id", async (req, res) => {
	let post;

	if ((req.params.id = parseInt(req.params.id))) {
		post = await getAllPosts(req.params.id);
	}

	if (post) {
		res.status(200).send(post);
	} else {
		res.status(404).send({ error: "Could not find post" });
	}
	/**YET IMPLEMENT
	 * const isString = isNaN(parseInt(req.params.id));
	 * if (isString) {
	 *	post = await getPostByName(req.params.id);
	 *} else if ((req.params.id = parseInt(req.params.id))) {
	 *	post = await getPostById(req.params.id);
	 *}
	 */
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
