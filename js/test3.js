var depth = 10;
/*
$("#bt1").click(function(){
	$(".banners li").eq(0).hide();
	$(".banners li").eq(0).css({"z-index": depth++});
	$(".banners li").eq(0).fadeIn(500);
});
$("#bt2").click(function(){
	$(".banners li").eq(1).hide();
	$(".banners li").eq(1).css({"z-index": depth++});
	$(".banners li").eq(1).fadeIn(500);
});
$("#bt3").click(function(){
	$(".banners li").eq(2).hide();
	$(".banners li").eq(2).css({"z-index": depth++});
	$(".banners li").eq(2).fadeIn(500);
});
*/
$(".bt").click(function(){
	var n = $(this).attr("data");
	$(".banners li").eq(n).hide().css({"z-index": depth++}).fadeIn(500);
});