/***** show, hide , toggle *****/
$("#bt1").click(function(){
	//$("#box").stop().hide(1000);
	$("#box").stop().hide("slow");
});
$("#bt2").click(function(){
	//$("#box").stop().show(1000);
	$("#box").stop().show("fast");
});
$("#bt3").click(function(){
	$("#box").toggle(1000);
});

/***** fadeIn, fadeOut, fadeToggle *****/
$("#bt4").click(function(){
	$("#box").stop().fadeOut("slow");
});
$("#bt5").click(function(){
	$("#box").stop().fadeIn("fast");
});
$("#bt6").click(function(){
	$("#box").fadeToggle(1000);
});

/***** slideUp, slideDown, slideToggle *****/
$("#bt7").click(function(){
	$("#box").stop().slideUp("slow");
});
$("#bt8").click(function(){
	$("#box").stop().slideDown("fast");
});
$("#bt9").click(function(){
	$("#box").slideToggle(1000);
});

/***** animate *****/
/*
backgroundPositionX
backgroundPositionY
borderWidth
borderBottomWidth
borderLeftWidth
borderRightWidth
borderTopWidth
borderSpacing
margin
marginBottom
marginLeft
marginRight
marginTop
outlineWidth
padding
paddingBottom
paddingLeft
paddingRight
paddingTop
height
width
maxHeight
maxWidth
minHeight
minWidth
fontSize
bottom
left
right
top
letterSpacing
wordSpacing
lineHeight
textIndent
*/
$("#bt10").click(function(){
	$("#box").hide();
	$("#txt").stop().animate({"letterSpacing":"5px"}, 1000);
});