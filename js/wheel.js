$(window).on("mousewheel DOMMouseScroll", function(e){
	e.preventDefault();
	e.stopPropagation();
	var dir = e.originalEvent.wheelDelta;
	var scTop = $(window).scrollTop();
	var gap = [];
	var now = 0;
	$(".page").each(function(i){
		gap[i] = $(this).offset().top;
	});
	for(var i=0; i<gap.length; i++) {
		if(scTop <= gap[i]) {
			now = i;
			break;
		}
	}
	if(dir > 0) {
		if(now > 0) now--;
	}
	else {
		if(now < gap.length-1) now++;
	}
	$("html, body").stop().delay(100).animate({"scrollTop":gap[now]+"px"}, 200);
});