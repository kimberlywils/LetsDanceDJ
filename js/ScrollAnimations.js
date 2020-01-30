$(window).on("load", function () {
	function onloadAnimate() {
		$(".slide-element-onload").addClass("slide-element-onload-loaded");
	}
	setTimeout(onloadAnimate, 1000);
});
$(document).ready(function () {
	var $window = $(window);
	var $document = $(document);

	// SLIDE IN ANIMATIONS

	function offsetSldInElems() {

		var $sldInL = $(".slide-in-left");
		var $sldInR = $(".slide-in-right");
		var $sldInT = $(".slide-in-top");
		var $sldInB = $(".slide-in-bottom");

		if ($sldInL.length > 0) {
			$.each($sldInL, function () {
				$(this).css({
					"transform": "translate(" + -(($(this).width()) + ($(this).offset().left)) + "px,0)"
				});
			});
		}

		if ($sldInR.length > 0) {
			$.each($sldInR, function () {
				$(this).css({
					"transform": "translate(" + (($window.width()) - ($(this).offset().left)) + "px,0)"
				});
			});
		}
		if ($sldInT.length > 0) {
			$.each($sldInT, function () {
				$(this).css({
					"transform": "translate(0," + -($(this).height()) + "px)"
				});
			});
		}
		if ($sldInB.length > 0) {
			$.each($sldInB, function () {
				$(this).css({
					"transform": "translate(0," + ($(this).height()) + "px)"
				});
			});
		}


	}
	offsetSldInElems();


	// PARALLAX SCROLL ANIMATIONS

	function offsetPlxElems() {

		$.each($(".parallax-slow"), function () {
			$(this).css({
				"transform": "translate(0," + ((($(this).parents($("selection")).offset().top) - ($window.scrollTop())) * .35) + "px)"
			});
		});
		$.each($(".parallax-medium"), function () {
			$(this).css({
				"transform": "translate(0," + ((($(this).parents($("selection")).offset().top) - ($window.scrollTop())) * .65) + "px)"
			});
		});

	}
	offsetPlxElems();


	// CHECK IF ELEMENT IS IN VIEW

	function checkInView() {
		var $windowTop = ($window.scrollTop());
		var $windowBottom = ($windowTop) + ($window.height());

		$.each($(".slide-element"), function () {
			var $element = $(this);
			var $elementTop = ($element.offset().top)
			var $elementBottom = ($elementTop) + ($element.outerHeight())

			if (($elementBottom >= $windowTop) && ($elementTop <= $windowBottom)) {
				$element.addClass("slide-element-in-view");
			}
		});
		$.each($(".parallax-element"), function () {
			var $element = $(this);
			var $elementTop = ($element.offset().top)
			var $elementBottom = ($elementTop) + ($element.outerHeight())

			if (($elementBottom >= $windowTop) && ($elementTop <= $windowBottom)) {
				$element.addClass("parallax-element-in-view");
			} else {
				$element.removeClass("parallax-element-in-view");
			}
		});

	}
	checkInView();

	$window.trigger("scroll");
	$window.on("scroll", checkInView);
	$window.on("scroll", offsetPlxElems);
	$window.on("resize", checkInView);

});
