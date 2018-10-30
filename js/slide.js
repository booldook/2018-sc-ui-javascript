var Slide = (function(){
	//Slide객체의 생성자(Constructor)
	function Slide(_wrap, _option) {
		//객체의 전역변수 선언(this로 선언)
		var obj = this;
		this.slides = _wrap;	//실제 움직임을 갖는 ul
		this.slide = $(this.slides).find(".slide");	//ul안의 li들
		this.cnt = this.slide.length;	//li의 갯수
		//_option 존재여부에 따른 this.option 생성
		if(_option) {
			this.option = _option;
			if(this.nullChk(this.option.type)) this.option.type = "fade";
			if(this.nullChk(this.option.delay)) this.option.delay = 2000;
			if(this.nullChk(this.option.speed)) this.option.speed = 300;
			if(this.nullChk(this.option.hover)) this.option.hover = true;
			if(this.nullChk(this.option.pager)) this.option.pager = false;
			if(this.nullChk(this.option.link)) this.option.link = false;
			if(this.nullChk(this.option.target)) this.option.target = "_self";
			if(this.nullChk(this.option.pagerPos)) this.option.pagerPos = "bottom";
			if(this.nullChk(this.option.pagerVal)) this.option.pagerVal = "0px";
			if(this.nullChk(this.option.pagerSymbol)) this.option.pagerSymbol = null;
			if(this.nullChk(this.option.pagerDefClass)) this.option.pagerDefClass = "w3-white";
			if(this.nullChk(this.option.pagerActClass)) this.option.pagerActClass = "w3-red";
		}
		else {
			//_option을 생략했을때 기본값
			this.option = {
				type: "fade",
				delay: 2000,
				speed: 300,
				hover: true,
				pager: false,
				link: false
			}
		}
		//페이저 생성(pager==true 일때 실행)
		if(this.option.pager) this.pagerInit(this);
		//브라우저가 resize되면 실행, 최초 페이지가 로드되면 1회기본실행(trigger영향)
		$(window).resize(function(){
			obj.hei = $(obj.slide[0]).height();
			$(obj.slides).height(obj.hei);
		}).trigger("resize");
		//type의 값에 따라 실행 분기
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
		//애니메이션을 실행하기 위한 li 배치
		for(var i=0; i<obj.cnt; i++) {
			$(obj.slide[i]).css({"left":(100*i)+"%"});
		}
		/*
		setInterval사용법
		- 1번
		var interval = setInterval(function(obj){
			//할일
		}, 3000);
		- 2번
		var interval = setInterval(fn, 3000, obj);
		function fn(obj) {
			//할일
		}
		*/
		obj.interval = setInterval(ani, obj.option.delay, obj);
		function ani(obj) {
			//Pager의 현재 위치를 나타내는 구문
			if(obj.option.pager) {
				$(obj.pager).find("span").removeClass(obj.option.pagerActClass).addClass(obj.option.pagerDefClass);
				$(obj.pager).find("span").eq(obj.now).removeClass(obj.option.pagerDefClass).addClass(obj.option.pagerActClass);
			}
			//애니메이션 구문
			$(obj.slides).stop().animate({"left":-(100*obj.now)+"%"}, obj.option.speed, function(){
					if(obj.now == obj.cnt - 1) obj.direction = -1;
					else if(obj.now == 0) obj.direction = 1;
					obj.now += obj.direction;
			});
		}
		if(obj.option.hover) obj.hoverInit(obj, ani);
		if(obj.option.pager) obj.clickInit(obj, ani);
		if(obj.option.link) obj.linkInit(obj);
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
		if(obj.option.link) obj.linkInit(obj);
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
		if(obj.option.link) obj.linkInit(obj);
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
		if(obj.option.link) obj.linkInit(obj);
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
		if(obj.option.link) obj.linkInit(obj);
	};
	//PagerInit -> Pager 생성
	//Slide.prototype.method = function(){} <- Slide객체의 함수(메서드)를 선언
	Slide.prototype.pagerInit = function(obj) {
		//Pager를 감싸는 div.pager_wrap의 style값
		var style = 'position:absolute;width:100%;z-index:9999;'+obj.option.pagerPos+':'+obj.option.pagerVal+';';
		var html = '<div class="w3-center pager_wrap" style="'+style+'">';
		//name으로 pager생성
		if(obj.nullChk(obj.option.pagerSymbol)) html += '<div class="w3-bar w3-border pager"></div>';
		//symbol로 pager생성
		else html += '<div class="w3-bar pager" style="cursor:pointer;"></div>';
		html += '</div>';
		var name, pagerHtml;
		//this.pager 에는 생성된 pager가 들어가 있다.
		obj.pager = $(html).appendTo($(obj.slides).parent());
		//Pager의 내용을 생성
		for(var i=0; i<obj.cnt; i++) {
			name = $(obj.slide[i]).data("name"); //li의 속성(attribute)중 data-name 값
			if(obj.nullChk(obj.option.pagerSymbol)) pagerHtml = '<span class="w3-bar-item w3-button '+obj.option.pagerDefClass+'">'+name+'</span>';
			else pagerHtml = '<span class="w3-bar-item">'+obj.option.pagerSymbol+'</span>'; 
			$(obj.pager).find(".pager").append(pagerHtml);
		}
	};
	//HoverInit
	//이미지에 hover하면 애니메이션이 멈추고, out하면 애니메이션이 다시 시작함
	Slide.prototype.hoverInit = function(obj, fn) {
		$(obj.slides).hover(function(){
			clearInterval(obj.interval);
		}, function(){
			clearInterval(obj.interval); //확실하게 interval을 지운다.
			obj.interval = setInterval(fn, obj.option.delay, obj);
		});
	};
	//ClickInit
	//Pager를 클릭하면 원하는 이미지로 이동
	Slide.prototype.clickInit = function(obj, fn) {
		$(obj.pager).find("span").click(function(){
			obj.now = $(this).index();
			clearInterval(obj.interval);
			fn(obj);
			obj.interval = setInterval(fn, obj.option.delay, obj);
		});
	};
	//linkInit
	//이미지(li, div)를 클릭하면 원하는 페이지로 이동(_self:현재페이지, _blank:새창)
	Slide.prototype.linkInit = function(obj) {
		$(obj.slide).click(function(){
			//클릭한 li의 data-link값
			//현재창 링크는 location.href = "링크주소"
			if(obj.option.target == "_self") location.href = $(this).data("link");
			//새창 링크는 window.open("링크주소", "_blank")
			else window.open($(this).data("link"), obj.option.target);	
		});
	};
	//Utils
	//전달받은 인자의 값이 undefined(선언만 됐을때 혹은 변수가 없을때), null(빈값)이면 true를 리턴
	Slide.prototype.nullChk = function(value){
		if(value == undefined || value == null) return true;
		else return false;
	};
	return Slide;
}());


