$(window).resize(function(){
	$(".slides").height($(".slide").height());
}).trigger("resize");

/***** Normal *****/
var n1 = 0;
(function slide1() {
	$("#slides1").delay(2000).animate({"left":-(n1*100)+"%"}, 500, function(){
		if(n1 == 5) n1 = -1;
		n1++;
		slide1();
	});
})();

/***** Infinite *****/
var n2 = 0;
(function slide2(){
	$("#slides2").delay(2500).animate({"left":-(n2*100)+"%"}, 1000, function(){
		if(n2 == 6) {
			n2 = 0;
			$(this).css({"left":0});
		}
		n2++;
		slide2();
	});
})();

/***** Pingpong *****/
var n3 = 0;
var chk = 1;
(function slide3() {
	$("#slides3").delay(1500).animate({"left":-(n3*100)+"%"}, 700, function(){
		if(n3 == 0) chk = 1;
		else if(n3 == 5) chk = -1;
		n3 += chk;
		slide3();
	});
})();

/***** FadeInOut *****/
var n4 = 0;
var depth = 1;
(function slide4(){
	$("#slides4 .slide").eq(n4).css({"display":"none","z-index":depth++}).delay(2000).fadeIn(1000, function(){
		if(n4 == 5) n4 = -1;
		n4++;
		slide4();
	});
})();

/***** Vertical Infinite *****/
var n5 = 0;
(function slide5(){
	var hei = $(".slide").height();
	$("#slides5").delay(2500).animate({"top":-(n5*hei)+"px"}, 1000, function(){
		if(n5 == 6) {
			n5 = 0;
			$(this).css({"top":0});
		}
		n5++;
		slide5();
	});
})();