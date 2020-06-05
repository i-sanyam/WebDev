(function () {
	let f = this ? class g {} : class h {};
	// return [typeof f, typeof h];
	console.log([typeof f, typeof h]);
})();
// func, undefined
