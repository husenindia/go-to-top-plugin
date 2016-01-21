(function($){
	$.fn.cstGotoTop = function(options){
		var settings = {
			activateAfterScroll:150,
		};
		return this.each(function(){
			'use strict';
			var $this; var $gotoTop; var scrollPixel;
			$this=$(this);			
			$this.append('<div class="go-to-top"></div>');
			$gotoTop=$('.go-to-top');
			if(options)
			{
				$.extend(settings,options);
			}
			$(window).scroll(function(){								
				scrollPixel = $(window).scrollTop();
				if(scrollPixel>settings.activateAfterScroll)
					$gotoTop.fadeIn();
				else	
					$gotoTop.fadeOut();
			});
			/* 
			 * GO TO TOP ********************/	 
			
			$this.on( 'click', '.go-to-top',function(event) {	
				$("html, body").animate({ scrollTop: "0" });
			});	
		
		});
	};
})( jQuery );