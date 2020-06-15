const { randomUsernameGen } = require("../utils/username");
const { Users } = require("../db/models");
async function createAnnonUser() {
	const user = await Users.create({ username: randomUsernameGen() });
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

exports = module.exports = { createAnnonUser };
