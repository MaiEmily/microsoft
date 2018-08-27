$(function(){
	
	/*---------------------------背景的变化*/
	
	function change_bg(){
		var window_width=$(window).width();
		var window_height=$(window).height();
		
		if(window_width<=600 || window_height<=366){
			$('.WR_wrap').css('background','#fff');
			
			$('.WR_register').addClass('WR_register_c');
			$('.WR_footer').addClass('WR_footer_c');
			
		}else{
			$('.WR_wrap').css({'background':"url('../img/img_login_register/0.jpg') no-repeat"});
			
			$('.WR_register').removeClass('WR_register_c');
			$('.WR_footer').removeClass('WR_footer_c');
		}
		
	}
	
	change_bg();	
	
	
	$(window).resize(function(){
		change_bg();
	})
	
	
	$('.WR_alter a').click(function(){
		var a_index=$(this).index();
		
		/*-----------------每点击一次初始化*/
		$('.WR_prompt').hide();
		$('.WR_phone_border').css('border-bottom-color','#666666');
		
						
		$('.WR_main>div').eq(a_index).show().siblings().hide();
		$('.WR_main>div').eq(a_index).children('input').focus();
		
		/*-------------*/
		if(a_index==0){
			$('.WR_alter a').eq(1).show().siblings().hide();
		}else if(a_index==1){
			$('.WR_alter a').eq(a_index).hide().siblings().show();
		}else{
			$('.WR_alter a').eq(a_index).hide().siblings().show();
		}
	})
	
	/*-------------------------改为使用电话号码 WR_place*/
	$('.WR_place').click(function(){
		$('.WR_place_con').toggle();
		return false;
	})
	$(document).click(function(){
		$('.WR_place_con').hide();
	})
	
	$('.WR_place_con ul li').click(function(){
		var con=$(this).html();
		$('.WR_place p').html(con+'<b></b>');
		$('.WR_prompt').show();
		$('.WR_phone_border').css('border-bottom-color','red');
	})
	
	/*-------------------------------获取新的电子邮件地址*/
	$('.WR_addr p').click(function(){
		console.log('hahahajjajaj');
		$('.WR_addr_select').show();
		return false;
		
	})
	
	$('.WR_addr_select ul li').click(function(){
		var con=$(this).html();
		console.log(con)
		$('.WR_addr p span').html(con);
		$('.WR_addr_select').hide();
		return false;
	})
	$(document).click(function(){
		$('.WR_addr_select').hide();
	})
	
	
})
