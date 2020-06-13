$(function () {
	$("#formproduct").submit((event) => {
		event.preventDefault();
		// if (event.isDefaultPrevented())
		// 	console.log("Default form submit prevented");
		$.post("/api/products", {
			name: $("#name").val(),
			price: $("#price").val(),
			manufacturer: $("#manufacturer").val(),
		}).done((data) => {
			window.alert(`${data.name} added to Database`);
			location.reload();
		});
	});
});
