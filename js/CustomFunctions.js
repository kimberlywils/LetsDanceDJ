$(document).ready(function() {
	$(".sub-menu").prev().removeAttr("href");
	$(".sub-menu").prev().addClass("sub-menu-title");
	$(".sub-menu").prev().parent().addClass("sub-menu-group");

	$(".menu-mobile").click(function() {
		$(this).toggleClass("menu-mobile-open");
		$(".nav-header").toggleClass("nav-header-open");
	});

});