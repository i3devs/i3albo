/**
 * Login function.
 * Check if the username and the password using i3albo API.
 *
 * Last update:
 * Filippo Finke 19.09.2018 - Separated js and html
 *
 * @author giuliobosco
 * @version 1.0
 */

/**
 * Login in i3albo.
 */
$( "#loginBtn" ).click(function() {
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
});
