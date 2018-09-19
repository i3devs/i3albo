// Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
function checkUsername() {
	var username = $('#username').val();
	var password = $('#password').val();

	var jqxhr = $.getJSON( "assets/php/login.php", {username: username, password: password})
		.done(function(data) {
			if (data.ok == true) {
				window.location = "app.html";
			} else {
				$('#errorMessage').text(data.message)
			}
		})
		.fail(function() {
			$('#errorMessage').text("Server Error");
		});
}