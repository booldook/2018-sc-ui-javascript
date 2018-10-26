var Slide = (function(){
	function Slide(_wrap, _option) {
		//객체의 전역변수 선언
		var ori = this;
		this.slides = _wrap;
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		this.now = 0;
		//_option 존재여부에 따른 this.option 생성
		if(_option) {
			this.option = _option;
		}
		else {
			this.option = {
				type: "normal",
				delay: 2000,
				speed: 300
			}
		}
		switch(this.option.type) {
			case "pingpong" :
				this.initPingpong();
				break;
			case "infinite" :
				this.initInfinite();
				break;
			case "fade" :
				this.initFade();
				break;
			default :
				this.initNormal();
				break;
		}
		$(window).resize(function(){
			ori.wid = $(ori.slide[0]).width();
			ori.hei = $(ori.slide[0]).height();
			ori.slides.height(ori.hei);
		}).trigger("resize");
	};
	//type:pingpong
	Slide.prototype.initPingpong = function() {
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(this.wid*i)+"px"});
		}
		this.slidePingpong();
	};
	Slide.prototype.slidePingpong = function(){
		var ori = this;
		$(this.slides).delay(this.option.delay).animate({
			"left":-(this.wid*this.now)+"px"}, this.option.speed, function(){
				if(ori.now == ori.cnt - 1) ori.direction = -1;
				else if(ori.now == 0) ori.direction = 1;
				ori.now += ori.direction;
				ori.slidePingpong();
		});
	};
	//type:infinite
	Slide.prototype.initInfinite = function() {
		this.slides.find(".slide").eq(0).clone().appendTo(this.slides);
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(this.wid*i)+"px"});
		}
		this.slideInfinite();
	};
	Slide.prototype.slideInfinite = function(){
		var ori = this;
		this.slides.delay(this.option.delay).animate({"left":-(this.now*this.wid)+"px"}, this.option.speed, function(){
			if(ori.now == ori.cnt - 1) {
				ori.slides.css({"left":0});
				ori.now = 0;
			}
			ori.now++;
			ori.slideInfinite();
		});
	};
	//type:fade
	Slide.prototype.initFade = function(){
		this.depth = 2;
		this.slideFade();
	};
	Slide.prototype.slideFade = function(){
		var ori = this;
		this.slide.eq(this.now).css({"z-index":this.depth++, "display":"none"}).delay(this.option.delay).fadeIn(this.option.speed, function(){
			if(ori.now == ori.cnt - 1) ori.now = 0;
			else ori.now++;
			ori.slideFade();
		});
	};
	//type:normal
	Slide.prototype.initNormal = function() {
		for(var i=0; i<this.cnt; i++) {
			$(this.slide[i]).css({"left":(this.wid*i)+"px"});
		}
		this.slideNormal();
	};
	Slide.prototype.slideNormal = function(){
		var ori = this;
		$(this.slides).delay(this.option.delay).animate({"left":-(this.now*this.wid)+"px"}, this.option.speed, function(){
			if(ori.now == ori.cnt - 1) ori.now = 0;
			else ori.now++;
			ori.slideNormal();
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