var scTop = $(window).scrollTop();
var gap = [];
var now = 0;
$(window).resize(function(){
	$(".page").each(function (i) {
		gap[i] = $(this).offset().top;
	});
}).trigger("resize");
$(window).on("mousewheel DOMMouseScroll", wheelFn);
function wheelFn(e) {
	e.preventDefault();
	e.stopPropagation();
	var dir = e.originalEvent.wheelDelta;
	$(window).off("mousewheel DOMMouseScroll");
	scTop = $(window).scrollTop();
	for (var i=0; i<gap.length; i++) {
		if (scTop <= gap[i]) {
			now = i;
			break;
		}
	}
	if (dir > 0) { if (now > 0) now--; } 
	else { if (now < gap.length - 1) now++; }
	$("html, body").stop().animate({"scrollTop": gap[now] + "px"}, 200, function(){
		$(window).on("mousewheel DOMMouseScroll", wheelFn);
	});
}
$(".nav").on("click", function(){
	var oldNow = now;
	now = $(this).data("now");
	var speedGap = Math.abs(now - oldNow);
	$("html, body").stop().animate({"scrollTop": gap[now] + "px"}, 100*speedGap);
});