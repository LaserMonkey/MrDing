var selfAdaption = true;

$(document).ready(function() {
	$(".log-content").hide();
	mainMediate();
	$(window).resize(function(){
		mainMediate();
 	});
	questionMarkAnimate();
	setInterval("questionMarkAnimate()", 1500);
	showLog();
	// jQuery(window).scroll(function() {
	// 		$(".img-human").css({
	// 			"position": "fixed"
	// 		});
	// });
	// switchList();
});

function mainMediate() {
	if(selfAdaption) {
		$(".content").css({
			"padding-top": ($(document).height()-25-433)/2,
			"padding-bottom": ($(document).height()-25-433)/2
		});
	}
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
		selfAdaption = !selfAdaption;
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

function switchList() {
	$(".log-content .year .list").each(function (e, target) {
	    var $target=$(target),
	        $ul = $target.find("ul");
	    $target.height($ul.outerHeight()), $ul.css("position", "absolute");
	}); 
	$(".log-content .year>h2>a").click(function (e) {
	    e.preventDefault();
	    $(this).parents(".year").toggleClass("close");
	});
}