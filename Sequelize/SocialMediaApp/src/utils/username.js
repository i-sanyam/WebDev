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
	const adjidx = Math.floor(Math.random() * (ADJECTIVES.length - 1));
	const nameidx = Math.floor(Math.random() * (NAMES.length - 1));
	const adj = ADJECTIVES[adjidx];
	const name = NAMES[nameidx];
	console.log(
		"Adj length: " + ADJECTIVES.length,
		adjidx,
		"Names length: " + NAMES.length,
		nameidx
	);
	return `${adj}-${name}`;
	// return "breezy-elijah";
}

exports = module.exports = { randomUsernameGen };
