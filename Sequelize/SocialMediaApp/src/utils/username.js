const ADJECTIVES = [
	"spiritual",
	"breezy",
	"fast",
	"rainy",
	"exultant",
	"angry",
	"elfin",
	"super",
	"strict",
	"frightening",
	"aloof",
	"exuberant",
	"adventurous",
	"mysterious",
	"best",
];

const NAMES = [
	"liam",
	"noah",
	"william",
	"james",
	"oliver",
	"benjamin",
	"elijah",
	"lucas",
	"mason",
	"logan",
	"alexander",
	"ethan",
	"jacob",
	"michael",
	"daniel",
	"henry",
	"jackson",
	"sebastian",
	"aiden",
	"matthew",
	"samuel",
	"david",
	"joseph",
];

function randomUsernameGen() {
	const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length) - 1];
	const name = NAMES[Math.floor(Math.random() * NAMES.length) - 1];
	return `${adj}-${name}`;
}

exports = module.exports = { randomUsernameGen };
