$(document).ready(function() {
	mainMediate();
	$(window).resize(function(){
		mainMediate();
	});
	questionMarkAnimate();
	setInterval("questionMarkAnimate()", 1500);
	showPlan();
});

function questionMarkAnimate() {
	$("#img-mark").animate({
		top: "25px"
	}, 400).animate({
		top: "46px"
	}, 400);
}

function mainMediate() {
	$("#main").css({
		"padding-top": ($(document).height()-25-433)/2
	});
}

function showPlan() {
	$("#plan-button").click(function() {
		$("#human").animate({
			"min-width": "400px"
		}, 400);
	});
}