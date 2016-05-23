// JavaScript Document

$(document).ready(function(){
	
	// 选卡切换
	$("#tab_1").click(function(){
		$(this).addClass("check").siblings().removeClass('check');
		$("#tab1_box").show();$("#tab2_box").hide();
	});
	$("#tab_2").click(function(){
		$(this).addClass("check").siblings().removeClass('check');
		$("#tab1_box").hide();$("#tab2_box").show();
	});
	
	// 图片模拟复选框
	$(".xieyi ul li a").click(function(){ 
		$(this).addClass("hide").siblings().removeClass('hide');
	}); 
	
	// 图片模拟复选框
	$(".xieyi ul li a").click(function(){ 
		$(this).addClass("hide").siblings().removeClass('hide');
	}); 
	$(".xieyi2 ul li a").click(function(){ 
		$(this).addClass("hide").siblings().removeClass('hide');
	}); 
	
		// 图片模拟复选框
	$(".iweos ul li a").click(function(){ 
		$(this).addClass("hide").siblings().removeClass('hide');
	}); 
	
	// 图片模拟复选框
	$(".iweos ul li a").click(function(){ 
		$(this).addClass("hide").siblings().removeClass('hide');
	}); 
	$(".xieyi2 ul li a").click(function(){ 
		$(this).addClass("hide").siblings().removeClass('hide');
	}); 
	
	// 弹出框
	$("#bz").click(function(){ 
		$("body,html").animate({scrollTop:0},300);
		$("#fade,#openwin1").show();
	});
	$("#hq").click(function(){ 
		$("body,html").animate({scrollTop:0},300);
		$("#fade,#openwin2").show();
	});
	$("#bb").click(function(){ 
		$("body,html").animate({scrollTop:0},300);
		$("#fade,#openwin3").show();
	});
	$("#ios_down,#adro_down").click(function(){ 
		$("body,html").animate({scrollTop:0},300);
		$("#fade,#download").show();
	});
	$(".close_openwin").click(function(){ 
		$("body,html").animate({scrollTop:0},300);
		$("#fade,#openwin,#openwin2,#openwin3,#openwin4,#download,#openwin1").hide();
	}); 


	
});
	