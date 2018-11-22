var WheelScroll = (function(){
	function WheelScroll(_pageObj) {
		var obj = this;
		this.scTop = $(window).scrollTop();
		this.gap = [];
		this.now = 0;
		this.dir = 0;
		this.page = $(_pageObj);
		$(window).resize(function(){
			$(obj.page).each(function (i) {
				obj.gap[i] = $(this).offset().top;
			});
		}).trigger("resize");
		this.init(this);
	}
	WheelScroll.prototype.init = function(obj){
		$(window).on("mousewheel DOMMouseScroll", wheelFn);
		function wheelFn(e) {
			e.preventDefault();
			e.stopPropagation();
			obj.dir = e.originalEvent.wheelDelta;
			obj.scTop = $(window).scrollTop();
			$(window).off("mousewheel DOMMouseScroll");
			for (var i=0; i<obj.gap.length; i++) {
				if (obj.scTop <= obj.gap[i]) {
					obj.now = i;
					break;
				}
			}
			if (obj.dir > 0) { if (obj.now > 0) obj.now--; } 
			else { if (obj.now < obj.gap.length - 1) obj.now++; }
			$("html, body").stop().animate({"scrollTop": obj.gap[obj.now] + "px"}, 200, function(){
				$(window).on("mousewheel DOMMouseScroll", wheelFn);
			});
		}
	}
	return WheelScroll;
}());