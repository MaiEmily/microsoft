$(function(){
	
	/*---------------------------背景的变化*/
	
	function change_bg(){
		var window_width=$(window).width();
		var window_height=$(window).height();
		
		if(window_width<=600 || window_height<=366){
			$('.WR_wrap').css('background','#fff');
			
			$('.WR_login').addClass('WR_login_c');
			$('.WR_footer').addClass('WR_footer_c');
			
		}else{
			$('.WR_wrap').css({'background':"url('../img/img_login_register/0.jpg') no-repeat"});
			
			$('.WR_login').removeClass('WR_login_c');
			$('.WR_footer').removeClass('WR_footer_c');
		}
		
	}
	
	change_bg();	
	
	
	$(window).resize(function(){
		change_bg();
	})
	/*----------------底部 ...*/
	$('.WR_dot').click(function(){
		$('.WR_bot_con').toggle();
	})
	$('.WR_bot_con b').click(function(){
		$('.WR_bot_con').hide();
	})
	
	
})
