/*
for(초기값; 조건; 증가값) {
	실행문(조건이 참이면 반복)
}
i++ => i = i + 1
*/
for(var i=1, sum=0; i<=10; i++) {
	sum = sum + i;
	console.log(i, sum);
}