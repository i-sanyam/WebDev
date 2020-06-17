const { Posts, Users } = require("../db/models");

async function createNewPost(userId, title, body) {
	const post = await Posts.create({ userId, title, body });

	return post;
}

/**
 * USAGE of getAllPosts func.
 * **search by username**
 * showPosts({username: ""})
 * **search by title**
 * showPosts({title: ""})
 */
async function getAllPosts(query) {
	// TO DO support query params
	const posts = await Posts.findAll({
		include: [Users],
	});
	return posts;
}

/*******TEST CODE *******/
/* async function testTask() {
	/* console.log(
		await createNewPost(
			1,
			"This is a sample post",
			"Body of the post goes here"
		)
	);
	console.log(
		await createNewPost(2, "Another sample post", "Body of the post goes here")
    );
	const posts = await showPosts();
	for (const post of posts) {
		console.log(
			`Title: ${post.title}\nAuthor:${post.user.username}\nBody: ${post.body}`
		);
		console.log("=======END of POST========");
	}
}
testTask(); */
/******END OF TEST CODE *******/
exports = module.exports = { createNewPost, getAllPosts };
