/***** 전역변수 선언 *****/
var cnt = $(".ban").length;
var stn = 0;
var prev = cnt - 1;
var next = stn + 1;
var wid = $(".ban_wrap").width();
slideInit();
var interval = setInterval(slideAni, 3000);

/***** 페이저 Init *****/
$(".ban").each(function(i){
	var name = $(this).data("name");
	var link = $(this).data("link");
	var pager = '<a href="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
	$(".pager").append(pager);
});

/***** Slide Init *****/
function slideInit() {
	console.log(stn);
	if(stn == 0) {
		prev = cnt - 1;
		next = stn + 1;
	}
	else if(stn == cnt - 1) {
		prev = stn - 1;
		next = 0;
	}
	else {
		prev = stn - 1;
		next = stn + 1;
	}
	wid = $(".ban").width();
	$(".ban_wrap").css({"left":-wid+"px"});
	$(".ban").css({"left":"0px", "z-index":1});
	$(".ban").eq(stn).css({"left":wid+"px", "z-index":2});
	$(".ban").eq(prev).css({"left":"0px", "z-index":2});
	$(".ban").eq(next).css({"left":wid*2+"px", "z-index":2});
}


/***** Slide 구현 *****/
function slideAni() {
	$(".ban_wrap").stop().animate({"left":-wid*2+"px"}, 500, function(){
		if(stn == cnt - 1) stn = 0;
		else stn++;
		slideInit();
	});
}


