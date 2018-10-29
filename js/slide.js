var Slide = (function(){
	function Slide(_wrap, _option) {
		//객체의 전역변수 선언
		var obj = this;
		this.slides = _wrap;
		this.slide = $(".slide", this.slides);
		this.cnt = this.slide.length;
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
		if(this.option.pager) this.pagerInit(this.slide, this.option.pagerPos, this.option.pagerVal);
		$(window).resize(function(){
			obj.hei = $(obj.slide[0]).height();
			obj.slides.height(obj.hei);
		}).trigger("resize");
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
		var obj = this;
		for(var i=0; i<obj.cnt; i++) {
			$(obj.slide[i]).css({"left":(100*i)+"%"});
		}
		var interval = setInterval(ani, obj.option.delay, obj);
		function ani(obj) {
			$(obj.pager).find("span").removeClass("w3-red").addClass("w3-white");
			$(obj.pager).find("span").eq(obj.now).removeClass("w3-white").addClass("w3-red");
			$(obj.slides).stop().animate({"left":-(100*obj.now)+"%"}, obj.option.speed, function(){
					if(obj.now == obj.cnt - 1) obj.direction = -1;
					else if(obj.now == 0) obj.direction = 1;
					obj.now += obj.direction;
			});
		}
		this.hoverInit(interval, ani);
		this.clickInit(interval, ani);
	};
	//type:infinite
	Slide.prototype.initInfinite = function() {
		console.log(this);
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
		var obj = this;
		var style = 'position:absolute;width:100%;z-index:9999;'+pos+':'+posValue+';';
		var html = '<div class="w3-center" style="'+style+'">';
		html += '<div class="w3-bar w3-border w3-round pager"></div>';
		html += '</div>';
		var name, pagerHtml;
		this.pager = $(html).appendTo($(this.slides).parent());
		for(var i=0; i<slideTmp.length; i++) {
			name = $(slideTmp[i]).data("name");
			pagerHtml = '<span class="w3-bar-item w3-button w3-white">'+name+'</span>';
			this.pager.find(".pager").append(pagerHtml);
		}
	}
	//HoverInit
	Slide.prototype.hoverInit = function(interval, fn) {
		var obj = this;
		$(obj.slides).hover(function(){
			clearInterval(interval);
		}, function(){
			interval = setInterval(fn, obj.option.delay, obj);
		});
	}
	//ClickInit
	Slide.prototype.clickInit = function(interval, fn) {
		var obj = this;
		$(obj.pager).find("span").click(function(){
			obj.now = $(this).index();
			clearInterval(interval);
			fn(obj);
			interval = setInterval(fn, obj.option.delay, obj);
		});
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