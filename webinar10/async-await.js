let sayName = (times, name) => {
	let count = 0;
	return new Promise((resolve, reject) => {
		let loop = setInterval(() => {
			console.log(`Hello ${name}`);
			count++;
			if (count === times) {
				clearInterval(loop);
				resolve(name);
			}
		}, 500);
	});
};

/*
//IIFE
(async function sequentialNames() {
	await sayName(3, "A");
	await sayName(2, "B");
	await sayName(3, "C");
	await sayName(2, "D");
})();
*/

(async function batchNames() {
	await Promise.all([sayName(3, "A"), sayName(2, "B")])
		.then((messages) => {
			console.log("Done " + messages);
		})
		.then(() => {
			console.log(`Batch 1 is over`);
		});

	await Promise.all([sayName(3, "C"), sayName(2, "D")])
		.then((messages) => {
			console.log("Done " + messages);
		})
		.then(() => {
			console.log(`Batch 2 is over`);
		});
})();
