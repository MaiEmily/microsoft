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
		if($(window).width()>=767){
			var container_fluid_width=$('.container-fluid').width()-10;
			$('.WR_nav1_top .WR_dropdown-menu').width(container_fluid_width);
		}
	});

	$('.WR_nav1_top .WR_more>a').click(function(event) {
		if($(window).width()>=0){
			$(this).siblings('.WR_dropdown-menu').toggle();

			$(this).parent().toggleClass('open');
			
			$('.WR_nav1_bottom .WR_more .WR_dropdown-menu').hide()
			$('.WR_nav1_bottom .WR_more').removeClass('open');
		}	
		if($(window).width()>=767){
			var container_fluid_width=$('.container-fluid').width()-10;
			$('.WR_nav1_top .WR_dropdown-menu').width(container_fluid_width);
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
	$('.WR_label_left1').click(function(){
		$(this).removeClass('visible-sm');
		$('.WR_nav1_top').animate({'left':130})
		$('.WR_label_right1').addClass('visible-sm');
	})
	$('.WR_label_right1').click(function(){
		if($(window).width()<900){
			$(this).removeClass('visible-sm');
			$('.WR_nav1_top').animate({'left':0})
			$('.WR_label_left1').addClass('visible-sm');
		}
		
	})
	$(window).resize(function(){
		if($(window).width()>=992){
			$('.WR_nav1_top').css({'left':130})
			$('.WR_label_right1').addClass('visible-sm');
			$('.WR_label_left1').removeClass('visible-sm');
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
	
	/*----------------------------------Xbox*/
	$('.WR_nav1_bottom .WR_more>a').click(function(event) {
		if($(window).width()>=0){


			$(this).siblings('.WR_dropdown-menu').toggle();
			$(this).parent().siblings('.WR_more').children('.WR_dropdown-menu').hide();

			$(this).parent().toggleClass('open');
			$(this).parent().siblings('.WR_more').removeClass('open');
			
			$('.WR_nav1_top .WR_more .WR_dropdown-menu').hide()
			$('.WR_nav1_top .WR_more').removeClass('open');
			
			
			
		}	
		
	});
	
	$('.WR_Xbox_nav .WR_index p').click(function(event) {

		$('.WR_Xbox_nav').hide();
		
	});
	$('.WR_index_Microsoft p').click(function(){
		$('.WR_Xbox_nav').show();
	})
	
	/*-------------------------------------.WR_nav1>li.WR_xs_more_active>.dropdown-menu*/
	nav_height();
	$(window).resize(function(){
		nav_height();
	})
	function nav_height(){
		if($(window).width()<=767){
			var window_height =$(window).height();
			$('.WR_nav1>li>.dropdown-menu').css('height',(window_height-110))
		}else{
			$('.WR_nav1>li>.dropdown-menu').css('height','auto')
		}
		
	}
	
	//-----------------------Xbox 导航栏 左右箭头 visible_sm
	$('.WR_label_left2').click(function(){
		$(this).removeClass('visible-sm');
		$('.WR_nav1_bottom').animate({'left':130})
		$('.WR_label_right2').addClass('visible-sm');
	})
	$('.WR_label_right2').click(function(){
		if($(window).width()<900){
			$(this).removeClass('visible-sm');
			$('.WR_nav1_bottom').animate({'left':-29})
			$('.WR_label_left2').addClass('visible-sm');
		}
		
	})
	$(window).resize(function(){
		if($(window).width()>=992){
			$('.WR_nav1_bottom').css({'left':100})
			$('.WR_label_right2').addClass('visible-sm');
			$('.WR_label_left2').removeClass('visible-sm');
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
		if(window_width_banner>=1084){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','../img/img_Xbox/53b2af07-87f5-43b1-8720-42b41fcf6a4a.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','../img/img_Xbox/bf3d90d1-b573-4eb0-a20f-3b330a387d70.jpg');
			$('.WR_banner_img>div:nth-of-type(3)>img').attr('src','../img/img_Xbox/3b6dfc4a-0f85-4c84-b575-c87eda08e54b.jpg');
			$('.WR_banner_img>div:nth-of-type(4)>img').attr('src','../img/img_Xbox/786fa147-3d10-496b-a834-4f4b2aa34287.jpg');
			
			
		}else if(window_width_banner>=768){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','../img/img_Xbox/1c352226-94a6-49e4-af4c-1eab7fe3d3fe.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','../img/img_Xbox/ad227a9b-0832-4bbe-861e-909918b5cc52.jpg');
			$('.WR_banner_img>div:nth-of-type(3)>img').attr('src','../img/img_Xbox/banner_32.jpg');
			$('.WR_banner_img>div:nth-of-type(4)>img').attr('src','../img/img_Xbox/3e5dcf13-c22e-45db-ba77-92c2e978f10f.jpg');
			
			
		}else if(window_width_banner>=0){
			$('.WR_banner_img>div:nth-of-type(1)>img').attr('src','../img/img_Xbox/6578b0be-8510-4322-a1d6-7d94fa05d510.jpg');
			$('.WR_banner_img>div:nth-of-type(2)>img').attr('src','../img/img_Xbox/3b2dde14-065d-4701-8b6c-e93ef17c3a2d.jpg');	
			$('.WR_banner_img>div:nth-of-type(3)>img').attr('src','../img/img_Xbox/banner_33.jpg');
			$('.WR_banner_img>div:nth-of-type(4)>img').attr('src','../img/img_Xbox/e737d951-f9e8-4948-b60a-d40f76da0d70.jpg');			
		}
		
		
		
	}
	
	banner_img();//调用函数

	$(window).resize(function(){
		banner_img();//调用函数
	})
	
	
	
	
	
})