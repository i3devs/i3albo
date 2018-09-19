/**
 * Login function.
 * Check if the username and the password using i3albo API.
 *
 * @author giuliobosco
 * @version 1.0
 */

/**
 * Login in i3albo.
 */
function login() {
	var username = $('#username').val();
	var password = $('#password').val();

	var json = $.getJSON( "assets/php/login.php", {username: username, password: password})
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