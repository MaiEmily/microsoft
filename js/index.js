/*
* @Author: admin
* @Date:   2018-06-28 13:32:22
* @Last Modified by:   admin
* @Last Modified time: 2018-07-05 15:58:45
*/

$(function(){

	
	var con_width,button_width,logo_width, buy_width,login_width,temp1;
	//----------------搜索
	$('.WR_search1 span').click(function(){
		$('.WR_search1>div.form-group').show();
		$('.WR_search1 input').focus();
		
		width_search();//调用函数	

		console.log('con_width:'+con_width)	;
		console.log('logo_width:'+logo_width)	;
		console.log('button_width:'+button_width)	;
		console.log('buy_width:'+buy_width)	;
		console.log('login_width:'+login_width)	;

		
		if($(window).width()<=767){
			temp1=con_width-button_width-buy_width-login_width;
			$('.WR_search1>div.form-group input').css('width',temp1);
			
			$('.WR_left_arrow1').show();
			$('.WR_buy').hide();
			
		}else if($(window).width()<=1366){
			temp1=con_width-logo_width-buy_width-login_width-27;
			$('.WR_search1>div.form-group input').css('width',temp1);

		}
		
	})
	$('.WR_search1').click(function(e){
		e.stopPropagation();
	})
	
	$(document).click(function(event) {
		$('.WR_search1>div.form-group').hide();	
		
		$('.WR_left_arrow1').hide();
		$('.WR_buy').show();
	});
	
	var flag1=0;
	if($(window).width()<=767){
		flag1=1;
	}else if($(window).width()<=1366){
		flag1=2;
	}else if($(window).width()>1366){
		flag1=3;
	}
	$(window).resize(function(){
		width_search();
		if($(window).width()<=767){
			temp1=con_width-button_width-buy_width-login_width;
			$('.WR_search1>div.form-group input').css('width',temp1);
			console.log('小于767:'+flag1);
			
			if(flag1!=1){
				$('.WR_search1>div.form-group').hide();	

				$('.WR_dropdown-menu').hide();	
				$('.WR_more').removeClass('open');

				$('.WR_navbar-collapse').hide();
				$('.WR_login').hide();	

				flag1=1;
			}

			$('.WR_search1 .form-group').hide();
					
			
			
		}else if($(window).width()<=1366){
			console.log('小于1366:'+flag1);
			temp1=con_width-logo_width-buy_width-login_width-27;
			$('.WR_search1>div.form-group input').css('width',temp1);
			
			if(flag1!=2){
				$('.WR_search1>div.form-group').hide();	

				$('.WR_dropdown-menu').hide();	
				$('.WR_more').removeClass('open');	
				
				
				$('.WR_xs_more').removeClass('WR_xs_more_active');
				$('.WR_xs_more>.dropdown-menu>li').removeClass('WR_subnav');

				
				flag1=2;
			}
			
			$('.WR_left_arrow1').hide();
			
			$('.WR_login').show();		
			$('.WR_search1 ').show();
			$('.WR_buy a').show();
			$('.WR_buy ').show();
			$('.WR_search1 .form-group').hide();
			
			/*$('.WR_buy a').show();*/
		}else if($(window).width()>1366){
			console.log('大于1366:'+flag1);
			$('.WR_search1>div.form-group input').css('width',300);

			$('.WR_left_arrow1').hide();
			
			$('.WR_login').show();
			$('.WR_search1 .form-group').show();
			$('.WR_search1').show();	
			$('.WR_buy a').show();
			$('.WR_buy ').show();
			flag1=3;
		}
		

	})
	
	function width_search(){
		con_width=$('.container-fluid').width();
		button_width=$('.WR_navbar-header1 button').outerWidth();
		logo_width=$('.WR_logo').outerWidth();
		buy_width=$('.WR_buy').outerWidth();
		login_width=$('.WR_login').outerWidth();
	}
	
	$('.WR_left_arrow1').click(function(){
		$('.WR_search1>div.form-group').hide();			
		$('.WR_left_arrow1').hide();
		$('.WR_buy a').show();
		$('.WR_buy').show();
		
	})
	
	

	//更多  子菜单
	$(window).resize(function(event) {
		var container_fluid_width=$('.container-fluid').width()-10;
		$('.WR_dropdown-menu').width(container_fluid_width);
	});

	$('.WR_more>a').click(function(event) {
		if($(window).width()>=0){

			

			$(this).siblings('.WR_dropdown-menu').toggle();

			var container_fluid_width=$('.container-fluid').width()-10;
			$('.WR_dropdown-menu').width(container_fluid_width);

			$(this).parent().toggleClass('open');
		}	
		
	});

	$('.WR_more').click(function(event) {
		if($(window).width()>=0){
			event.stopPropagation();
		}
		
	});

	$(document).click(function(event) {
		if($(window).width()>=0){
			$('.WR_more>.WR_dropdown-menu').hide();
			$('.WR_more').removeClass('open');
			
			
			$('.WR_xs_more').removeClass('WR_xs_more_active');
		}		
	});
	
	//-----------------------导航栏 左右箭头 visible_sm
	$('.WR_label_left').click(function(){
		$(this).removeClass('visible-sm');
		$('.WR_nav1').animate({'left':140})
		$('.WR_label_right').addClass('visible-sm');
	})
	$('.WR_label_right').click(function(){
		if($(window).width()<900){
			$(this).removeClass('visible-sm');
			$('.WR_nav1').animate({'left':0})
			$('.WR_label_left').addClass('visible-sm');
		}
		
	})
	
	/*-----------------------767px  导航栏*/
	$('.WR_navbar-header1>button.navbar-toggle').click(function(){
		$('.WR_login').toggle();
		
		$('.WR_search1 ').toggle();
		$('.WR_buy a').toggle();
		
		$('.WR_navbar-collapse').toggle();
		$('.WR_ .navbar-default').toggleClass('WR_current');

		
	})
	
	/*-----------------------<=767 更多*/
	$('.WR_xs_more>a').click(function(){
		if($(window).width()<=767){
			$(this).parent().toggleClass('WR_xs_more_active');
			$(this).toggleClass('current');
			/*$(this).siblings('ul').toggle();*/
			
			var window_height=$(window).height();
			if(window_height>=440){
				$('.WR_navbar-collapse.in').css('height',window_height-52);
			}
		}
		
		
	})
	
	$('.WR_xs_more>.dropdown-menu>li>a').click(function(){
		if(!$(this).parent().hasClass('WR_all')){
			$(this).parent().toggleClass('WR_subnav');
		
			
		}
		
		
	})
	
	$(window).resize(function(){
		var window_height=$(window).height();
		if(window_height>=440){
			$('.WR_navbar-collapse.in').css('height',window_height-52);
		}
		
	})


	//------------------------------------------------banner

	$('.WR_banner').hover(function(){
		$('.WR_banner .WR_banner_left').stop().show();
		$('.WR_banner .WR_banner_right').stop().show();
	},function(){
		$('.WR_banner .WR_banner_left').stop().hide();
		$('.WR_banner .WR_banner_right').stop().hide();
	})

	
	function banner_img(){
		var window_width_banner=$(window).width();
		if(window_width_banner>=1400){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE23hJ04.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE26cxJ5.jpg');
			
			$('.WR_bigImg .WR_banner_img>div>img').attr('src','img/img_index/RW5kpU5.jpg');
			
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE1EiPt5.jpg');
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE2j50g5.jpg');

		}else if(window_width_banner>=1084){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE23hJ04.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE26cxJ4.jpg');
			
			$('.WR_bigImg .WR_banner_img>div>img').attr('src','img/img_index/RW5kpU4.jpg');
			
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE1EiPt4');
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE2j50g4.jpg');

		}else if(window_width_banner>=768){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE23hJ03.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE26cxJ3.jpg');
			
			$('.WR_bigImg .WR_banner_img>div>img').attr('src','img/img_index/RW5kpU3.jpg');
			
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE1EiPt3.jpg');
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE2j50g3');

		}else if(window_width_banner>=540){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE23hJ02.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE26cxJ2.jpg');
			
			$('.WR_bigImg .WR_banner_img>div>img').attr('src','img/img_index/RW5kpU2.jpg');
			
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE1EiPt2');
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE2j50g2');

		}else if(window_width_banner<=539){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE23hJ01.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE26cxJ1.jpg');
			
			$('.WR_bigImg .WR_banner_img>div>img').attr('src','img/img_index/RW5kpU1.jpg');
			
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(1)>img').attr('src','img/img_index/RE1EiPt1');
			$('.WR_banner2 .WR_banner_img>div:nth-of-type(2)>img').attr('src','img/img_index/RE2j50g1');

		}
		
		
		
	}
	
	banner_img();//调用函数

	$(window).resize(function(){
		banner_img();//调用函数
	})
	
	
	
	
	
})