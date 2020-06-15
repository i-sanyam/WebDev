const { randomUsernameGen } = require("../utils/username");
const { Users } = require("../db/models");
async function createAnnonUser() {
	const user = await Users.create({ username: randomUsernameGen() });
	return user;
}

async function getUserById(id) {
	const user = await Users.findOne({ where: { id } });
	return user;
}
async function getUserByName(username) {
	const user = await Users.findOne({ where: { username } });
	return user;
}

/* test command */
/*
 async function task() {
	console.log(await createAnnonUser());
	console.log(await createAnnonUser());
	console.log(await createAnnonUser());
	console.log(await createAnnonUser());
	console.log(await createAnnonUser());
}
task();
*/

exports = module.exports = { createAnnonUser, getUserById, getUserByName };
