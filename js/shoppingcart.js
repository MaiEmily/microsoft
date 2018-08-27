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
	
	/*---------------------------------section*/
	//right
	
	$(window).scroll(function(){
		var footer_h=$('.WR_section_left').height()-$('.WR_section_right').height()-50;
		if($(window).width()>=768){
			if($(window).scrollTop()<footer_h){			
				var yheight=window.pageYOffset; //滚动条距顶端的距离
				$('.WR_section_right').css({'margin-top':yheight})			
			}
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
