$(() => {
	$("#formLogin").submit((event) => {
		event.preventDefault();
		const username = $("#username").val().toString();
		const data = { username };
		$.post("/api/users/login", data, (responseData) => {
			console.log(responseData);
			console.log(responseData[0]);
			if (Object.keys(responseData).length == 0) {
				window.alert("Invalid credentials");
				location.reload();
			} else {
				var loggedIn = window.open("/index.html", "_self");
				loggedIn.document.getElementById("headerUserWelcome").innerText =
					"Welcome " + responseData[0].name;
			}
		});
	});
});
