$(() => {
	console.log("page loaded");
	var task = $("#newTask");
	var btn = $("#btnAdd");
	var list = $("#list");
	console.log(task, btn);
	btn.click(() => {
		console.log("I am clicked");
		$.post(
			"/todo",
			{
				task: task.val(),
			},
			(data) => {
				console.log(data);
				list.empty();
				for (reTask of data) {
					list.append("<li>" + reTask.task + "</li>");
				}
			}
		);
	});
});

/*
console.log("page loaded");

$("#btnAdd").click(() => {
	console.log("I am clicked");
	$.post(
		"/todo",
		{
			task: $("#newTask").val(),
		},
		(data) => {
			console.log(data);
		}
	);
});
*/
