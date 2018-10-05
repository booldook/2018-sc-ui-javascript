/*
<li>
	<div><img src="../img/site0.jpg" class="img"></div>
	<div>사이트 1번 입니다.</div>
</li>
*/
var str;
var sites = new Array();
for(var i=0; i<10; i++) {
	sites[i] = new Array();
	sites[i][0] = "../img/site"+i+".jpg";
	sites[i][1] = "사이트 "+i+" 번 입니다.";
}
for(var i=0; i<sites.length; i++) {
	str = '<li>';
	str+= '<div><img src="'+sites[i][0]+'" class="img"></div>';
	str+= '<div>'+sites[i][1]+'</div>';
	str+= '</li>';
	$(".wrap").append(str);
}