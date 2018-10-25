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
		this.speed = _speed;
		this.target = _tar;
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





/*
var myCar = new Car("붕붕이");
console.log(myCar, myCar.name);
*/