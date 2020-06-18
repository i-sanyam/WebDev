$(() => {
	$("#username")[0].value = currentUser.username;
	$("#addPost").submit((e) => {
		e.preventDefault();
		// console.log("submit prevent");

		const title = $("#title")[0].value;
		const body = $("#postBody")[0].value;
		const userId = currentUser.id;
		const postAlert = $("#postAlert")[0];
		const titleAlert = $("#titleAlert")[0];
		let passTest = true;
		if (title.length < 10) {
			titleAlert.style.display = "block";
			passTest &= false;
		} else {
			titleAlert.style.display = "none";
			passTest &= true;
		}
		if (body.length < 20) {
			postAlert.style.display = "block";
			passTest &= false;
		} else {
			postAlert.style.display = "none";
			passTest &= true;
		}
		if (passTest) {
			// console.log("sending details");
			$.post("/api/posts", { body, title, userId }, (post) => {
				// change it to the individual post page
				$("#body").load(`./components/my-posts.html`);
			});
		}
	});
});
