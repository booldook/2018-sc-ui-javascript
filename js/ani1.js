/* (function pagerInit(){
	var cnt = $(".ban").length;
	var pager = [];
	$(".ban").each(function(i){
		var name = $(this).data("name");
		var link = $(this).data("link");
		pager[i] = '<a href="'+link+'" class="w3-bar-item w3-button">'+name+'</a>';
	});
	pager.forEach(function(item){
		$(".pager").append(item);
	});
})(); */
(function(){
	$(".ban").each(function(){
		$('.pager').append('<a href="'+$(this).data('link')+'" class="w3-bar-item w3-button" onclick="pageSel(this);">'+$(this).data('name')+'</a>');
	});
})();

function pageSel(obj) {

}

(function banFadeInOut() {
	var cnt = $('.ban').length;
	var dep = 1;
	var stn = 0;
	var interval = setInterval(function() {
		$(".ban").eq(stn).css({"z-index":dep++, "opacity":0});
		$(".ban").eq(stn).stop().animate({"opacity":1}, 1000);
		if(stn == cnt-1) stn = 0;
		else stn++;
	}, 4000);
})();