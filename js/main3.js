/*
변수명 규칙
1. 숫자로 시작하지 않는다.
2. - (하이픈)을 사용하지 않는다.
3. 예약어(예:click, hover)를 사용하지 않는다.
4. Camel 표기법을 가급적이면 따른다. (예: cateList, cateListArray). 
*/
/*
var n = 30;
function test() {
	return "n은" + n + " 입니다.";
}
console.log(test);
console.log(test());

var n = 30;
var test = function() {
	return "n은" + n +" 입니다.";
}
console.log(test);
console.log(test());
*/
/*
var fn = function() {
	console.log("함수");
}
var x = fn;
x();
*/

//i++;	// i = i + 1;

/*
var i = 0;
var fn = function() {
	console.log("안녕"+i++);
}

//window.setInterval(fn, 1000);
$("body").click(function() {
	console.log("안녕"+i++);
});
*/