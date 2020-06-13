$(() => {
	$("#formUser").submit((event) => {
		event.preventDefault();
		const password = $("#masterPassword");
		const username = $("#username");

		const data = { name: username.val() };

		$.post("/api/users", data, (responseData) => {
			window.alert(responseData.name + " added to Database");
		});
	});
});
