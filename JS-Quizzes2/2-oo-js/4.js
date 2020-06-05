function job() {
	return new Promise((resolve, reject) => reject());
}
let promise = job();
promise
	.then(() => console.log("S1"))
	.then(() => console.log("S2"))
	.then(() => console.log("S3"))
	.catch(() => console.log("E1"))
	.then(() => console.log("S4"));
