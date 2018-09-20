/**
 * Navigator bar help methods.
 *
 * @author giuliobosco
 * @version 1.0
 */

/**
 * On mouse enter set logo_blue.png
 */
$('.dashboard-icon').parent().mouseenter(function () {
	$('.dashboard-icon').attr('src', 'assets/img/logo_blue.png');
});

/**
 * On mouse exiting set logo_w.png
 */
$('.dashboard-icon').parents().mouseleave(function () {
	$('.dashboard-icon').attr('src', 'assets/img/logo_w.png');
});