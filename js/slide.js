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
			if(this.nullChk(this.option.pagerSymbol)) this.option.pagerSymbol = null;
			if(this.nullChk(this.option.pagerDefClass)) this.option.pagerDefClass = "w3-white";
			if(this.nullChk(this.option.pagerActClass)) this.option.pagerActClass = "w3-red";
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
		if(this.option.pager) this.pagerInit(this);
		$(window).resize(function(){
			obj.hei = $(obj.slide[0]).height();
			obj.slides.height(obj.hei);
		}).trigger("resize");
		switch(this.option.type) {
			case "pingpong" :
				this.now = 1;
				this.direction = 1;
				this.initPingpong(this);
				break;
			case "infinite" :
				this.now = 1;
				this.initInfinite(this);
				break;
			case "fade" :
				this.now = 0;
				this.initFade(this);
				break;
			case "vertical" :
				this.now = 1;
				this.initVertical(this);
				break;
			default :
				this.now = 1;
				this.initNormal(this);
				break;
		}
	};
	//type:pingpong
	Slide.prototype.initPingpong = function(obj) {
		for(var i=0; i<obj.cnt; i++) {
			$(obj.slide[i]).css({"left":(100*i)+"%"});
		}
		obj.interval = setInterval(ani, obj.option.delay, obj);
		function ani(obj) {
			if(obj.option.pager) {
				$(obj.pager).find("span").removeClass(obj.option.pagerActClass).addClass(obj.option.pagerDefClass);
				$(obj.pager).find("span").eq(obj.now).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
			}
			$(obj.slides).stop().animate({"left":-(100*obj.now)+"%"}, obj.option.speed, function(){
					if(obj.now == obj.cnt - 1) obj.direction = -1;
					else if(obj.now == 0) obj.direction = 1;
					obj.now += obj.direction;
			});
		}
		if(obj.option.hover) obj.hoverInit(obj, ani);
		if(obj.option.pager) obj.clickInit(obj, ani);
	};
	//type:infinite
	Slide.prototype.initInfinite = function(obj) {
		obj.slides.find(".slide").eq(0).clone().appendTo(obj.slides);
		obj.slide = $(obj.slides).find(".slide");
		obj.cnt = obj.slide.length;
		for(var i=0; i<obj.cnt; i++) {
			$(obj.slide[i]).css({"left":(100*i)+"%"});
		}
		obj.interval = setInterval(ani, obj.option.delay, obj);
		function ani(obj) {
			if(obj.option.pager) {
				$(obj.pager).find("span").removeClass(obj.option.pagerActClass).addClass(obj.option.pagerDefClass);
				if(obj.now == obj.cnt - 1) $(obj.pager).find("span").eq(0).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
				else $(obj.pager).find("span").eq(obj.now).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
			}
			$(obj.slides).stop().animate({"left":-(obj.now*100)+"%"}, obj.option.speed, function(){
				if(obj.now == obj.cnt - 1) {
					obj.slides.css({"left":0});
					obj.now = 0;
				}
				obj.now++;
			});
		}
		if(obj.option.hover) obj.hoverInit(obj, ani);
		if(obj.option.pager) obj.clickInit(obj, ani);
	};
	//type:fade
	Slide.prototype.initFade = function(obj){
		obj.depth = 2;
		obj.interval = setInterval(ani, obj.option.delay, obj);
		function ani(obj) {
			if(obj.option.pager) {
				$(obj.pager).find("span").removeClass(obj.option.pagerActClass).addClass(obj.option.pagerDefClass);
				$(obj.pager).find("span").eq(obj.now).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
			}
			$(obj.slide).eq(obj.now).stop().css({"z-index":obj.depth++, "display":"none"}).fadeIn(obj.option.speed, function(){
				if(obj.now == obj.cnt - 1) obj.now = -1;
				obj.now++;
			});
		}
		if(obj.option.hover) obj.hoverInit(obj, ani);
		if(obj.option.pager) obj.clickInit(obj, ani);
	};
	//type:vertical
	Slide.prototype.initVertical = function(obj) {
		obj.slides.find(".slide").eq(0).clone().appendTo(obj.slides);
		obj.slide = $(obj.slides).find(".slide");
		obj.cnt = obj.slide.length;
		$(obj.slide).css({"position":"static"});
		obj.interval = setInterval(ani, obj.option.delay, obj);
		function ani(obj) {
			if(obj.option.pager) {
				$(obj.pager).find("span").removeClass(obj.option.pagerActClass).addClass(obj.option.pagerDefClass);
				if(obj.now == obj.cnt - 1) $(obj.pager).find("span").eq(0).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
				else $(obj.pager).find("span").eq(obj.now).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
			}
			$(obj.slides).stop().animate({"top":-(obj.now*obj.hei)+"px"}, obj.option.speed, function(){
				if(obj.now == obj.cnt - 1) {
					obj.slides.css({"top":0});
					obj.now = 0;
				}
				obj.now++;
			});
		}
		if(obj.option.hover) obj.hoverInit(obj, ani);
		if(obj.option.pager) obj.clickInit(obj, ani);
	};
	//type:normal
	Slide.prototype.initNormal = function(obj) {
		for(var i=0; i<obj.cnt; i++) {
			$(obj.slide[i]).css({"left":(100*i)+"%"});
		}
		obj.interval = setInterval(ani, obj.option.delay, obj);
		function ani(obj) {
			if(obj.option.pager) {
				$(obj.pager).find("span").removeClass(obj.option.pagerActClass).addClass(obj.option.pagerDefClass);
				$(obj.pager).find("span").eq(obj.now).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
			}
			$(obj.slides).stop().animate({"left":-(obj.now*100)+"%"}, obj.option.speed, function(){
				if(obj.now == obj.cnt - 1) obj.now = -1;
				obj.now++;
			});
		}
		if(obj.option.hover) obj.hoverInit(obj, ani);
		if(obj.option.pager) obj.clickInit(obj, ani);
	};
	//PagerInit
	Slide.prototype.pagerInit = function(obj) {
		var style = 'position:absolute;width:100%;z-index:9999;'+obj.option.pagerPos+':'+obj.option.pagerVal+';';
		var html = '<div class="w3-center" style="'+style+'">';
		if(obj.nullChk(obj.option.pagerSymbol)) html += '<div class="w3-bar w3-border pager"></div>';
		else html += '<div class="w3-bar pager"></div>';
		html += '</div>';
		var name, pagerHtml;
		obj.pager = $(html).appendTo($(obj.slides).parent());
		for(var i=0; i<obj.cnt; i++) {
			name = $(obj.slide[i]).data("name");
			if(obj.nullChk(obj.option.pagerSymbol)) pagerHtml = '<span class="w3-bar-item w3-button w3-white">'+name+'</span>';
			else pagerHtml = '<span class="w3-bar-item" style="cursor:pointer;">'+obj.option.pagerSymbol+'</span>'; 
			obj.pager.find(".pager").append(pagerHtml);
		}
	}
	//HoverInit
	Slide.prototype.hoverInit = function(obj, fn) {
		$(obj.slides).hover(function(){
			clearInterval(obj.interval);
		}, function(){
			clearInterval(obj.interval);
			obj.interval = setInterval(fn, obj.option.delay, obj);
		});
	}
	//ClickInit
	Slide.prototype.clickInit = function(obj, fn) {
		$(obj.pager).find("span").click(function(){
			obj.now = $(this).index();
			clearInterval(obj.interval);
			fn(obj);
			obj.interval = setInterval(fn, obj.option.delay, obj);
		});
	}
	//Utils
	Slide.prototype.nullChk = function(value){
		if(value == undefined || value == null) return true;
		else return false;
	};
	return Slide;
}());


