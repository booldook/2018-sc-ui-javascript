/*
var data = [];
data[0] = "테스트0";
data[1] = "테스트1";
data[2] = "테스트2";
data[3] = "테스트3";
data[4] = "테스트4";
$("#bt").click(function(){
	var html = '';
	for(var i=0; i<data.length; i++) {
		html = '<li>'+data[i]+'</li>';
		$("#wrap").append(html);
	}
});
*/
/*
var data = {
	title:["테스트0", "테스트1", "테스트2"],
	link:["#1", "#2", "#3"]
}

var data2 = [{
	title:"테스트0",
	link:"#0"
},{
	title:"테스트1",
	link:"#1"
},{
	title:"테스트2",
	link:"#2"
}];

$("#bt").click(function(){
	var html = '';
	for(var i=0; i<data.title.length; i++){
		html += '<li><a href="'+data.link[i]+'">'+data.title[i]+'</a></li>';
	}
	$("#wrap").append(html);

	var html = '';
	for(var i=0; i<data2.length; i++) {
		html += '<li><a href="'+data2[i].link+'">'+data2[i].title+'</a></li>';
	}
	$("#wrap").append(html);
});
*/

var data = [
	[{
		title: "이미지제목0",
		img: "../img/site0.jpg"
	}, {
		title: "이미지제목1",
		img: "../img/site1.jpg"
	}],
	[{
		title: "이미지제목2",
		img: "../img/site2.jpg"
	}, {
		title: "이미지제목3",
		img: "../img/site3.jpg"
	}],
	[{
		title: "이미지제목4",
		img: "../img/site4.jpg"
	}, {
		title: "이미지제목5",
		img: "../img/site5.jpg"
	}, {
		title: "이미지제목6",
		img: "../img/site6.jpg"
	}]
];
//console.log(data[0][1].title);

$("#bt").click(function(){
	var html = '';
	for(var i=0; i<data.length; i++) {
		html = '<li>';
		for(var j=0; j<data[i].length; j++) {
			html += '<ul>';
			html += '<li><img src="'+data[i][j].img+'" class="img"></li>';
			html += '<li>'+data[i][j].title+'</li>';
			html += '</ul>';
		}
		html += '</li>';
		$("#wrap").append(html);
	}
});

/*
<li>
    <ul>
      <li><img src="../img/site0.jpg" class="img"></li>
      <li>이미지제목0</li>
		</ul>
		<ul>
      <li><img src="../img/site0.jpg" class="img"></li>
      <li>이미지제목0</li>
    </ul>
</li>
<li>
    <ul>
      <li><img src="../img/site0.jpg" class="img"></li>
      <li>이미지제목0</li>
		</ul>
		<ul>
      <li><img src="../img/site0.jpg" class="img"></li>
      <li>이미지제목0</li>
    </ul>
</li>
<li>
    <ul>
      <li><img src="../img/site0.jpg" class="img"></li>
      <li>이미지제목0</li>
		</ul>
		<ul>
      <li><img src="../img/site0.jpg" class="img"></li>
      <li>이미지제목0</li>
		</ul>
		<ul>
      <li><img src="../img/site0.jpg" class="img"></li>
      <li>이미지제목0</li>
    </ul>
</li>
*/
/*
var data2 = {
	li:[{
		ul:[{
			title: "이미지제목0",
			img: "../img/site0.jpg"
		},{
			title: "이미지제목1",
			img: "../img/site1.jpg"
		}]
	}]
};

console.log(data2.li[0].ul[1].title);
*/