let p1 = new Promise((resolve, reject) => {
	resolve("promise 1 done");
});
let p2 = new Promise((resolve, reject) => {
	// resolve("promise 2 done");
	reject("promise 2 error");
});

let p3 = new Promise((resolve, reject) => {
	// reject("promise 3 done");
	reject("promise 3 error");
});

Promise.all([p1, p2, p3])
	.then((messages) => {
		console.log("Done In all " + messages);
	})
	.catch((error) => {
		console.log("Error In all " + error);
	});

Promise.race([p1, p2, p3])
	.then((message) => {
		console.log("Done In race " + message);
	})
	.catch((error) => {
		console.log("Error In race " + error);
	});
