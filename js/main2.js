$("#bt1").click(function(){
	for(i=0; i<2000; i++){
		var r = Math.random()*255;
		var g = Math.random()*255;
		var b = Math.random()*255;
		var style = 'style="background-color:rgb('+r+','+g+','+b+')"';
		$("#box1").append('<div '+style+'></div>');
	}
	$("#box1 > div").mouseover(function(){
		$(this).animate({"opacity":0}, 100);
	});
});
$("#bt_reset").click(function(){
	$("#box1").empty();
});



