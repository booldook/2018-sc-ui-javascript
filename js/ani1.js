function pagerInit(){
	var cnt = $(".ban").length;
	var pager = [];
	for(var i=0; i<cnt; i++) {
		var name = $(".ban").eq(i).data("name");
		var link = $(".ban").eq(i).data("link");
		pager[i] = '<a href="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
	}
	for(var i=0; i<cnt; i++) {
		$(".pager").append(pager[i]);
	};
	$(".ban").each(function(i){
		var name = $(this).data("name");
		var link = $(this).data("link");
		pager[i] = '<a href="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
	});
	pager.forEach(function(item){
		$(".pager").append(item);
	});
};


(function banFadeInOut() {
	var cnt = $('.ban').length;
	var dep = 1;
	var stn = 0;
	var interval = setInterval(banAni, 4000);
	$(".ban").each(function(){
		$('.pager').append('<a href="'+$(this).data('link')+'" class="w3-bar-item w3-button">'+$(this).data('name')+'</a>');
	});
	$(".pager > a").click(function(){
		clearInterval(interval);
		stn = $(this).index();
		banAni();
		interval = setInterval(banAni, 4000);
	});
	function banAni() {
		$(".ban").eq(stn).css({"z-index":dep++, "opacity":0});
		$(".ban").eq(stn).stop().animate({"opacity":1}, 1000);
		$(".pager > a").removeClass("w3-red");
		$(".pager > a").eq(stn).addClass("w3-red");
		if(stn == cnt-1) stn = 0;
		else stn++;
	}
	$(".ban_wrap").hover(function(){
		clearInterval(interval);
	}, function(){
		interval = setInterval(banAni, 4000);
	});
})();