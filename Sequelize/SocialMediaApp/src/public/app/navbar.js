function loginIfNeeded() {
	let currentUser = window.localStorage.socialmediauser
		? JSON.parse(window.localStorage.socialmediauser)
		: null;
	if (!currentUser) {
		$.post("/api/users", {}, (user) => {
			// console.log(user);
			window.localStorage.socialmediauser = JSON.stringify(user);
			currentUser = user;
			$("#nav-username").text(currentUser.username);
		});
	} else {
		$("#nav-username").text(currentUser.username);
	}

	// console.log(window.localStorage.socialmediauser);
	// window.socialmediacurrentuser = currentUser;
}

$(".nav-link").click((ev) => {
	const component = ev.target.getAttribute("data-component");
	$("#body").load(`./components/${component}.html`);
});
