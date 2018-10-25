var Slide = (function(){
	function Slide(_option) {
		if(!_option) {
			this.option = {
				speed: 1000,
				delay: 3000
			}
		}
		else {
			this.option = _option;
		}
		this.option = _option;
		this.slides = $(".slides");
		this.slide = $(".slide", this.slides);
		this.init();
	};
	Slide.prototype.init = function(){
		this.cnt = this.slide.length;
		this.stn = 0;
		var ori = this;
		$(window).resize(ori, function(){
			ori.wid = ori.slide.width();
			ori.hei = ori.slide.height();
			ori.posInit();
		}).trigger("resize");
	}
	Slide.prototype.posInit = function(){
		console.log(this.wid, this.hei);
		this.now = this.slide.eq(this.stn);
		switch(this.stn) {
			case this.cnt - 1 :
				this.prev = this.slide.eq(this.stn-1);
				this.next = this.slide.eq(0);
				break;
			case 0 :
				this.prev = this.slide.eq(this.cnt);
				this.next = this.slide.eq(this.stn+1);
				break;
			default :
				this.prev = this.slide.eq(this.stn-1);
				this.next = this.slide.eq(this.stn+1);
		}
		this.slide.css({"z-index":1});
		this.slides.css({"left":-this.wid+"px"});
		this.now.css({"z-index":2, "left":this.wid+"px"});
		this.prev.css({"z-index":2, "left":"0px"});
		this.next.css({"z-index":2, "left":this.wid*2+"px"});
	}
	return Slide;
}());