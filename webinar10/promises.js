let promise = new Promise((resolve, reject) => {
	// this is the task which had to be performed
	let a = 1 + 3;
	console.log("Beginning Task");
	if (a === 2) {
		// if the task was success
		resolve("Success");
	} else {
		// else failure
		reject("Fail");
	}
	console.log("End of Task");
});

promise
	.then((message) => {
		console.log(`Inside the then block ${message}`);
	})
	.catch((message) => {
		console.log("Inside the catch block " + message);
	});
