(function timer() {
	for (let i = 0; i <= 5; i++) {
		setTimeout(function clog() {
			console.log(i);
		}, i * 1000);
	}
})();
