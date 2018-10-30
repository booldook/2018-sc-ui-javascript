var banner = new Slide($("#slides1"), {
	//normal/pingpong/infinite/vertical/fade->normal
	type: "normal",
	//애니메이션 장면전환 대기 속도->2000
	delay: 3000,
	//애니메이션 속도->300
	speed: 600,
	//Hover 했을때 true면 멈춤->true
	hover: true,
	//pager가 true면 나타남->false
	pager: true,
	//link가 true면 이미지를 클릭하면 링크주소로 이동한다.
	link: true,
	//_self(현재창에서 링크 이동), _blank(새창에서 링크 이동)
	target: "_blank",  
	//pager 기준위치 (top/bottom)->bottom
	pagerPos: "bottom",
	//pager 기준위치로 부터의 값->0px
	pagerVal: "0px",
	//pager 심볼사용 여부(제목으로 사용시 기재 안함)->null
	pagerSymbol: "●",
	//pager 기본 색상(심볼선택시 텍스트 컬러/심볼 미사용시 바탕컬러)->w3-white
	pagerDefClass: "w3-text-white",
	//선택된 pager 색상->w3-red
	pagerActClass: "w3-text-blue"
});


var banner = new Slide($("#slides2"), {
	type: "pingpong",
	delay: 2000,
	speed: 600,
	hover: true,
	pager: true,
	link: true,
	target: "_blank",
	pagerPos: "bottom",
	pagerVal: "10px",
	pagerDefClass: "w3-dark-grey",
	pagerActClass: "w3-blue"
});

var banner = new Slide($("#slides3"));

var banner = new Slide($("#slides4"), {
	type: "vertical",
	delay: 1600,
	speed: 800
});

var banner = new Slide($("#slides5"), {
	type: "fade",
	delay: 1800,
	speed: 900
});





