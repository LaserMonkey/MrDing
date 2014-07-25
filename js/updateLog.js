var selfAdaption = true;

$(document).ready(function() {
	$(".log-content").hide();
	mainMediate();
	if(selfAdaption == true) {
		$(window).resize(function(){
			mainMediate();
		});
	} else {
		$(window).unbind("resize");
	}
	questionMarkAnimate();
	setInterval("questionMarkAnimate()", 1500);
	showLog();
	// jQuery(window).scroll(function() {
	// 		$(".img-human").css({
	// 			"position": "fixed"
	// 		});
	// });
	fartscroll(200);
});

function mainMediate() {
	$(".content").css({
		"padding-top": ($(document).height()-25-433)/2
	});
}

function questionMarkAnimate() {
	$(".img-mark").animate({
		top: "25px"
	}, 400).animate({
		top: "46px"
	}, 400);
}

function showLog() {
	$(".log-button").click(function() {
		selfAdaption == false;
		$(".main-left").animate({
			width: "300px"
		}, 400);
		$(".main-right").animate({
			width: "650px"
		}, 400);
		$(".img-question").hide(400, showPlanDiv);
	});
}

function showPlanDiv() {
	$(".log-content").css({
		"top": -($(document).height()/2-50)
	});
	$(".log-content").show(400);
}
