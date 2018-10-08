$("#bt1").click(function(){
	$("#box1").stop().animate({"left":"1500px"}, 1000, "linear", function(){
		$(this).animate({"left":"100px"}, 1000, "linear");
	});
});
$("#bt2").click(function(){
	$("#box2").stop().animate({"left":"1500px"}, 5000, function(){
		$(this).animate({"top":"750px"}, 5000, function(){
			$(this).animate({"left":"100px"}, 5000, function(){
				$(this).animate({"top":"400px"}, 5000);
			});
		});
	});
});