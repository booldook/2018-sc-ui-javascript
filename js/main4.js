//function oddChk(n) {}
var oddChk = function() {
	var n = prompt("원하는 숫자를 입력하세요.");
	if(n%2 == 0) {
		console.log("짝수입니다.");
	} 
	else {
		console.log("홀수입니다.");
	}
}

var sizeChk = function() {
	var width = prompt("예상하는 사이즈를 넣어주세요.");
	var windowWidth = $(window).width();
	if(width >= windowWidth) {
		console.log("입력하신 값" + width + " 는 윈도우 사이즈 " + windowWidth + " 보다 큽니다.");
	}
	else {
		console.log("입력하신 값" + width + " 는 윈도우 사이즈 " + windowWidth + " 보다 작습니다.");
	}
}

$("#bt1").click(sizeChk);



