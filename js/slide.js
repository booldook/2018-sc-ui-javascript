var Slide = (function(){
	function Slide(_wrap, _option) {
		//객체의 전역변수 선언
		var obj = this;
		this.slides = _wrap;
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		//_option 존재여부에 따른 this.option 생성
		if(_option) this.option = _option;
		else {
			this.option = {
				type: "normal",
				delay: 2000,
				speed: 300
			}
		}
		$(window).resize(function(){
			obj.hei = $(obj.slide[0]).height();
			obj.slides.height(obj.hei);
		}).trigger("resize");
		switch(this.option.type) {
			case "pingpong" :
				this.now = 1;
				this.initPingpong();
				break;
			case "infinite" :
				this.now = 1;
				this.initInfinite();
				break;
			case "fade" :
				this.now = 0;
				this.initFade();
				break;
			case "vertical" :
				this.now = 1;
				this.initVertical();
				break;
			default :
				this.now = 1;
				this.initNormal();
				break;
		}
	};
	//type:pingpong
	Slide.prototype.initPingpong = function() {
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(100*i)+"%"});
		}
		this.slidePingpong();
	};
	Slide.prototype.slidePingpong = function(){
		var obj = this;
		$(this.slides).delay(this.option.delay).animate({
			"left":-(100*this.now)+"%"}, this.option.speed, function(){
				if(obj.now == obj.cnt - 1) obj.direction = -1;
				else if(obj.now == 0) obj.direction = 1;
				obj.now += obj.direction;
				obj.slidePingpong();
		});
	};
	//type:infinite
	Slide.prototype.initInfinite = function() {
		this.slides.find(".slide").eq(0).clone().appendTo(this.slides);
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(100*i)+"%"});
		}
		this.slideInfinite();
	};
	Slide.prototype.slideInfinite = function(){
		var obj = this;
		this.slides.delay(this.option.delay).animate({"left":-(this.now*100)+"%"}, this.option.speed, function(){
			if(obj.now == obj.cnt - 1) {
				obj.slides.css({"left":0});
				obj.now = 0;
			}
			obj.now++;
			obj.slideInfinite();
		});
	};
	//type:fade
	Slide.prototype.initFade = function(){
		this.depth = 2;
		this.slideFade();
	};
	Slide.prototype.slideFade = function(){
		var obj = this;
		this.slide.eq(this.now).css({"z-index":this.depth++, "display":"none"}).delay(this.option.delay).fadeIn(this.option.speed, function(){
			if(obj.now == obj.cnt - 1) obj.now = -1;
			obj.now++;
			obj.slideFade();
		});
	};
	//type:vertical
	Slide.prototype.initVertical = function() {
		this.slides.find(".slide").eq(0).clone().appendTo(this.slides);
		this.slide = $(".slide", this.slides);
		$(this.slide).css({"position":"static"});
		this.cnt = this.slide.length;
		this.slideVertical();
	};
	Slide.prototype.slideVertical = function(){
		var obj = this;
		this.slides.delay(this.option.delay).animate({"top":-(this.now*this.hei)+"px"}, this.option.speed, function(){
			if(obj.now == obj.cnt - 1) {
				obj.slides.css({"top":0});
				obj.now = 0;
			}
			obj.now++;
			obj.slideVertical();
		});
	};
	//type:normal
	Slide.prototype.initNormal = function() {
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(100*i)+"%"});
		}
		this.slideNormal();
	};
	Slide.prototype.slideNormal = function(){
		var obj = this;
		$(this.slides).delay(this.option.delay).animate({"left":-(this.now*100)+"%"}, this.option.speed, function(){
			if(obj.now == obj.cnt - 1) obj.now = -1;
			obj.now++;
			obj.slideNormal();
		});
	};
	return Slide;
}());


/***** 참고사항 *****/
/*
switch(값) {
	case "infinite" :
		//실행문
		break;
	case "pingpong" :
		//실행문
		break;
	default :
		//실행문
		break;
}
*/