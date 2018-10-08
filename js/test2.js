/*
$("#bt1").click(function(){
	$(".banners > ul").stop().animate({"left":"0px"}, 500);
});
$("#bt2").click(function(){
	$(".banners > ul").stop().animate({"left":"-1200px"}, 500);
});
$("#bt3").click(function(){
	$(".banners > ul").stop().animate({"left":"-2400px"}, 500);
});
*/
$(".bt").click(function(){
	var tar = $(this).attr("data")+"px";
	$(".banners > ul").stop().animate({"left":tar}, 1000);
});