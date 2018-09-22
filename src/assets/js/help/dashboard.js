console.log($('.preview').siblings(":last"));

$('.preview').click(function () {
	$(this).siblings(':last').slideToggle();
});