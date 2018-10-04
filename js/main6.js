/*
for(초기값; 조건; 증가값) {
	실행문(조건이 참이면 반복)
}
i = i + 1 				=> 	i++
i = i + 5					=>	i += 5
str = str + "A"		=>	str += "A" 

var sum = 0;
for(var i=1; i<=1000; i++) {
	sum += i				=>	sum = sum + i;
}
*/
/***** 구구단 만들기 *****/
$("table").addClass("w3-table w3-centered w3-border w3-bordered");	//addClass->클래스를 주기
$("table").css({"max-width":"1200px", "margin":"100px auto"});
$("thead").append('<th class="w3-center">구분</th>');
for(i=2; i<=9; i++) {
	$("thead").append('<th class="w3-center">'+i+'단</th>');
}
var str;
for(i=1; i<=9; i++) {
	str = '<tr>';
	str += '<td>'+i+'</td>';
	for(j=2; j<=9; j++) {
		str += '<td>'+j+' x '+i+' = '+j*i+'</td>';
	}
	str += '</tr>';
	$("tbody").append(str);
}