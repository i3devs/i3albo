/**
 * i3albo dashboard functions.
 *
 * @author giuliobosco
 * @version 1.0
 */

/**
 * preview class slide.
 */
$(document).on('click', '.preview', function () {
	$(this).siblings(':last').slideToggle();
});