$("#bt1").click(function(){
	$("#box1").animate({"left":"1600px", "border-width":"100px"}, 2000);
});
$("#bt_reset").click(function(){
	$("#box1").css({"left":"100px", "border-width":"10px"});
});

/*
var interval;
document.getElementById("bt1").addEventListener("click", function(){
	interval = setInterval(animation, 10);
});

function animation() {
	var lt = Number(document.getElementById("box1").style.left.replace("px", ""));
	document.getElementById("box1").style.left = (lt+30)+"px";
	if(lt > 1600) {
		clearInterval(interval);
	}
}
*/