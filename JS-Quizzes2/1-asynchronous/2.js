(function timer() {
	for (var i = 0; i <= 5; i++) {
		setTimeout(function clog() {
			console.log(i);
		}, i * 1000);
	}
})();
/*
my answer
0
stack = [1:1, 2:2, 3:3, 4:4, 5:5]
012345
*/
