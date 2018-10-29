var Slide = (function(){
	function Slide(_wrap, _option) {
		//객체의 전역변수 선언
		var obj = this;
		this.slides = _wrap;
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
		this.hoverChk = true;
		//_option 존재여부에 따른 this.option 생성
		if(_option) {
			this.option = _option;
			if(this.nullChk(this.option.type)) this.option.type = "normal";
			if(this.nullChk(this.option.delay)) this.option.delay = 2000;
			if(this.nullChk(this.option.speed)) this.option.speed = 300;
			if(this.nullChk(this.option.hover)) this.option.hover = true;
			if(this.nullChk(this.option.pager)) this.option.pager = false;
			if(this.nullChk(this.option.pagerPos)) this.option.pagerPos = "bottom";
			if(this.nullChk(this.option.pagerVal)) this.option.pagerVal = "20px";
		}
		else {
			this.option = {
				type: "normal",
				delay: 2000,
				speed: 300,
				hover: true,
				pager: false
			}
		}
		$(window).resize(function(){
			obj.hei = $(obj.slide[0]).height();
			obj.slides.height(obj.hei);
		}).trigger("resize");
		if(this.option.hover) {
			$(this.slides).hover(function(){
				obj.hoverChk = false;
			}, function(){
				obj.hoverChk = true;
				switch(obj.option.type) {
					case "pingpong" :
						obj.slidePingpong();
						break;
					case "infinite" :
						obj.slideInfinite();
						break;
					case "fade" :
						obj.slideFade();
						break;
					case "vertical" :
						obj.slideVertical();
						break;
					default :
						obj.slideNormal();
						break;
				}
			});
		}
		switch(this.option.type) {
			case "pingpong" :
				this.now = 1;
				this.direction = 1;
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
		if(this.option.pager) this.pagerInit(this.slide, this.option.pagerPos, this.option.pagerVal);
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
				if(obj.hoverChk) obj.slidePingpong();
		});
	};
	//type:infinite
	Slide.prototype.initInfinite = function() {
		if(this.option.pager) this.pagerInit(this.slide, this.option.pagerPos, this.option.pagerVal);
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
			if(obj.hoverChk) obj.slideInfinite();
		});
	};
	//type:fade
	Slide.prototype.initFade = function(){
		if(this.option.pager) this.pagerInit(this.slide, this.option.pagerPos, this.option.pagerVal);
		this.depth = 2;
		this.slideFade();
	};
	Slide.prototype.slideFade = function(){
		var obj = this;
		this.slide.eq(this.now).css({"z-index":this.depth++, "display":"none"}).delay(this.option.delay).fadeIn(this.option.speed, function(){
			if(obj.now == obj.cnt - 1) obj.now = -1;
			obj.now++;
			if(obj.hoverChk) obj.slideFade();
		});
	};
	//type:vertical
	Slide.prototype.initVertical = function() {
		if(this.option.pager) this.pagerInit(this.slide, this.option.pagerPos, this.option.pagerVal);
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
			if(obj.hoverChk) obj.slideVertical();
		});
	};
	//type:normal
	Slide.prototype.initNormal = function() {
		if(this.option.pager) this.pagerInit(this.slide, this.option.pagerPos, this.option.pagerVal);
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
			if(obj.hoverChk) obj.slideNormal();
		});
	};
	//PagerInit
	Slide.prototype.pagerInit = function(slideTmp, pos, posValue) {
		var style = 'position:absolute;width:100%;z-index:9999;'+pos+':'+posValue+';';
		var html = '<div class="w3-center" style="'+style+'">';
		html += '<div class="w3-bar w3-border w3-round pager"></div>';
		html += '</div>';
		var name, link, pagerHtml;
		var pager = $(html).appendTo($(this.slides).parent());
		for(var i=0; i<slideTmp.length; i++) {
			name = $(slideTmp[i]).data("name");
			link = $(slideTmp[i]).data("link");
			pagerHtml = '<a href="'+link+'" class="w3-bar-item w3-button w3-white">'+name+'</a>';
			pager.find(".pager").append(pagerHtml);
		}
	}
	//Utils
	Slide.prototype.nullChk = function(value){
		if(value == undefined || value == null) return true;
		else return false;
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