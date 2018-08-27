/*
* @Author: admin
* @Date:   2018-07-05 09:57:30
* @Last Modified by:   admin
* @Last Modified time: 2018-07-05 14:29:20
*/

$(function(){
	
	//----------------搜索
	$('.WR_navbar-header2 .WR_find span').click(function(){
		if($(window).width()<=767){
			$('.WR_header1_search').stop().slideToggle();
		}
				
	})
	
	
	function fun_WR_alter_height(){
		if($(window).width()>=768){
			$('.WR_header2 .container-fluid').addClass('WR_alter_height');
		}else{
			$('.WR_header2 .container-fluid').removeClass('WR_alter_height');
		}
	}
	
	fun_WR_alter_height();//调用函数
		
	$(window).resize(function(){
		fun_WR_alter_height();//调用函数
		
	})
	
	//------------------------------------------------banner

	/*$('.WR_banner').hover(function(){
		$('.WR_banner .WR_banner_left').stop().show();
		$('.WR_banner .WR_banner_right').stop().show();
	},function(){
		$('.WR_banner .WR_banner_left').stop().hide();
		$('.WR_banner .WR_banner_right').stop().hide();
	})*/

	
	function banner_img(){
		var window_width_banner=$(window).width();
		if(window_width_banner>=785){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','../img/img_microsoftstore/HomePage2017Banner-Media-01.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','../img/img_microsoftstore/HomePage2017Banner-Media-02.jpg');
			$('.WR_banner_img>div:nth-of-type(3)>img').attr('src','../img/img_microsoftstore/HomePage2017Banner-Media-03.jpg');

		}else if(window_width_banner<=784){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','../img/img_microsoftstore/MobileHomePage2017Banner-Media-01.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','../img/img_microsoftstore/MobileHomePage2017Banner-Media-02.jpg');
			$('.WR_banner_img>div:nth-of-type(3)>img').attr('src','../img/img_microsoftstore/MobileHomePage2017Banner-Media-03.jpg');


		}
		
		
		
	}
	
	banner_img();//调用函数

	$(window).resize(function(){
		banner_img();//调用函数
	})
	
	
	/*-----------------------------WR_section2*/
	$(window).resize(function(){
		$('.WR_section2_top ul li a h4').css('font-size','3.4vw')
		$('.WR_section2_top ul li a span').css('font-size','3.2vw')
		
		$('.WR_section2_bottom ul li a>div:nth-of-type(2) h4').css('font-size','3.43vw')
		$('.WR_section2_bottom ul li a>div:nth-of-type(2) p').css('font-size','2.8vw')
		

	})
	
	/*-----------------------------WR_section3  <=767px*/
	setTimeout(function(){
		if($(window).width()<=767){
			console.log($('.WR_section3_right_img').height());
			$('.WR_section3_right_con').css('height',$('.WR_section3_right_img').height())
		}
	},202)
	
	
	$(window).resize(function(){
		if($(window).width()<=767){
			console.log($('.WR_section3_right_con').siblings('.WR_section3_right_img').height());
			$('.WR_section3_right_con').css('height',$('.WR_section3_right_con').siblings('.WR_section3_right_img').height())
		}
	})
	
	
	/*--------------------------------------WR_footer_center*/
	$('.WR_h3_click').click(function(){
		$(this).children('h3').children('span').toggleClass('WR_arrow1')
		$(this).children('ul').stop().toggle();
	})
	
	/*---------------------------回到顶部*/
	$(window).scroll(function(){
		/*---------------------返回顶部的图片的出现*/
		if($(window).scrollTop()<=0){
			$('.WR_fixed_right_returnTop').hide();
		}else{
			$('.WR_fixed_right_returnTop').show();
		}
		
		/*---------------------顶部固定*/
		if($(window).scrollTop()<=0){
			$('.WR_header2').removeClass('WR_scroll_fixed');
		}else{
			$('.WR_header2').addClass('WR_scroll_fixed');
		}
	})
	$('.WR_fixed_right_returnTop').click(function(){
		$('html,body').animate({'scrollTop':0})
	})
									
})
