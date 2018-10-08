/***** 함수의 즉각 실행 ******/
function abc() {
	//alert("test");
};
abc();

(function abc1() {
	//alert("test");
}());

/***** 배열 *****/
var arr = [];
arr[0] = "A";
arr[1] = "B";

var arr1 = new Array();
arr1[0] = [];
arr1[0][0] = "A";
arr1[0][1] = "a";

var members = [];
for(var i=0; i<10; i++) {
	members[i] = [];
}
members[0][0] = "홍길동";
members[0][1] = 24;
members[0][2] = "M";
members[0][3] = "010-2222-3333";
members[0][4] = "서울 종로구 233";

/***** 객체 개념 *****/
var man = [];
man[0] = {
	name: "홍길동",
	age: 24,
	gender: "M",
	tel: "010-2222-3333",
	addr: "서울 종로구 233"
};
man[1] = {
	name: "홍길순",
	age: 26,
	gender: "F",
	tel: "010-4444-3333",
	addr: "서울 종로구 556"
};
man[2] = {
	name: "홍길만",
	age: 19,
	gender: "M",
	tel: "010-5555-6666",
	addr: "서울 종로구 777"
};
console.log(man[0].age);		//Getter
man[0].age = 25;						//Setter
console.log(man[0].age);

console.log(man[1]);
console.log(man[1].addr);

man[2].money = 10000;
console.log(man[2]);

/***** 객체 응용 *****/
var Man = (function(){
	// 생성자(Constructor)
	function Man() {

	}
}());





