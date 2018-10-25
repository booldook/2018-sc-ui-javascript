/*
var Car = (function(){
	//Constructor (생성자)
	function Car(_parent, _color, _w, _h) {
		this.parent = _parent;
		this.color = _color;
		this.wid = _w;
		this.hei = _h;
		//this.obj = this.parent.append('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>');
		this.obj = $('<div style="width:'+this.wid+'px; height:'+this.hei+'px; background-color:'+this.color+'"></div>').appendTo(this.parent);
	}
	Car.prototype.drive = function(_speed, _tar){
		this.obj.click(function(){
			$(this).animate({"margin-left":_tar+"px"}, _speed);
		});
	};
	return Car;	
}());

//new Car(부모를 jQuery로 넣어주세요, 색상을 넣어주세요, width, height)
var myCar = new Car($(".wrap"), "#f00", 100, 100);
var myCar2 = new Car($(".wrap"), "#00f", 200, 200);
console.log(myCar.obj);
myCar.drive(1000, 1000);
myCar2.drive(5000, 500);

var myCar = new Car("붕붕이");
console.log(myCar, myCar.name);
*/

var Bus = (function(){
	function Bus(_data) {
		this.obj = _data;
		this.create();
	};
	Bus.prototype.create = function(){
		var style = ' style="';
		if(this.obj.width) style += 'width:'+this.obj.width+'px;';
		if(this.obj.height) style += 'height:'+this.obj.height+'px;';
		if(this.obj.bgColor) style += 'background-color:'+this.obj.bgColor+';';
		if(this.obj.borderWidth) style += 'border-width:'+this.obj.borderWidth+'px;';
		if(this.obj.borderStyle) style += 'border-style:'+this.obj.borderStyle+';';
		if(this.obj.borderColor) style += 'border-color:'+this.obj.borderColor+';';
		style += '"';
		var html = '<div style="padding:20px;">';
		html += '<button class="w3-button w3-red">이동</button> ';
		html += '<button class="w3-button w3-blue">초기화</button>';
		html += '</div>';
		html += '<div '+style+'">';
		if(this.obj.name) html += this.obj.name;
		html += '</div>';
		this.obj.my = $(html).appendTo($(this.obj.parent));
	};
	Bus.prototype.init = function(){

	};
	return Bus;
}());

var bus = new Bus({
	parent:".wrap",
	name: "1500",
	bgColor: "#f00",
	borderWidth: 5,
	borderStyle: "solid",
	borderColor: "#666",
	width: 200,
	height: 200
});

var bus2 = new Bus({
	parent: ".wrap",
	name: "마을버스",
	bgColor: "#0f0",
	width:100,
	height:100
});