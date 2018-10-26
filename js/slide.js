var Slide = (function(){
	function Slide(_wrap, _option) {
		//객체의 전역변수 선언
		this.slides = _wrap;
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		this.now = 0;
		this.wid = $(this.slide[0]).width();
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
				this.direction = 1;
				this.initPingpong();
				break;
			case "infinite" :
				this.initInfinite();
				break;
			default :
				this.initNormal();
				break;
		}
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
				if(ori.now == ori.cnt - 1) {
					ori.direction = -1;
					ori.now--;
				}
				else if(ori.now == 0) {
					ori.direction = 1;
					ori.now++;
				}
				else {
					//ori.now = ori.now + ori.direction;
					ori.now += ori.direction;
				}
				ori.slidePingpong();
		});
	};
	//type:infinite
	Slide.prototype.initInfinite = function() {

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