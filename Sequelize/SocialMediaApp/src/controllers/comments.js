const { Users, Posts, Comments } = require("./../db/models");

async function newComment(title, body, userId, postId) {
	const comment = await Comments.create({ title, body, userId, postId });
	return comment;
}
