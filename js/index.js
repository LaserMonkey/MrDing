$(document).ready(function() {
	console.log(($(document).height()-25-433)/2);
	mainMediate();
	$(window).resize(function(){
		mainMediate();
	});
	questionMarkAnimate();
	setInterval("questionMarkAnimate()", 1500);
});

function questionMarkAnimate() {
	$("#img-mark").animate({
		top:'25px'
	}, 400).animate({
		top:'46px'
	}, 400);
}

function mainMediate() {
	$("#main").css({
		"padding-top": ($(document).height()-25-433)/2
	});
}