//乐购商场js
//d当页面加载完毕
$(function () {
	//主轮播图
	$("#banner").tyslide({
		boxh: 460,//盒子的高度
		w: 1000,//盒子的宽度
		h: 390,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 40,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20,//控制按钮宽度
		controlsH: 20,//控制按钮高度
		radius: 10,//控制按钮圆角度数
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "#ff6600",//当前控制按钮的颜色
		isShowNum: true //是否显示数字
	});
	// 图书轮播小容器
	$("#ebooks-banner").tyslide({
		boxh: 223,//盒子的高度
		w: 332,//盒子的宽度
		h: 223,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "green",//当前控制按钮的颜色
	});
	/* 电子书 table切换 */
	var $lis = $('.ebooks .ebooks-nav > li');
	$lis.mouseover(function () {
		// 给自己添加激活类active 把兄弟的都干掉
		$(this).addClass('active').siblings().removeClass('active');
		// 获取index
		var index = $(this).index();

		// 选中内容
		var $ebooksList = $('.ebooks-list');
		// 显示索引等于当前index
		$ebooksList.eq(index).show().siblings('.ebooks-list').hide();
	});
	// 新书列表手风琴显示
	$('.ebooks .right-box ul > li').mouseenter(function () {
		// all兄弟，隐藏详情，显示标题
		$(this).siblings().find('.desc').hide();
		$(this).siblings().find('.ebooks-title').show();

		// 当前：隐藏标题 ，显示详情
		$(this).find('.ebooks-title').hide();
		$(this).find('.desc').show();
	});
	// 服装轮播小容器
	$("#clothes-banner").tyslide({
		boxh: 223,//盒子的高度
		w: 332,//盒子的宽度
		h: 223,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "pink",//当前控制按钮的颜色

	});
	/* 服装 table切换 */
	$('.clothes .clothes-nav li').mouseenter(function () {
		// 导航切换
		$(this).addClass('active').siblings('li').removeClass('active')
		// 获取索引
		var index = $(this).index();
		$('.clothe .clothes-content > .clothes-list').eq(index).show().siblings('.clothes-list').hide();
	})
	$lis.mouseover(function () {
		// 给自己添加激活类active 把兄弟的都干掉
		$(this).addClass('active').siblings().removeClass('active');
		// 获取index
		var index = $(this).index();
	});
	// 服装右侧轮播小容器
	$("#clothesright-banner").tyslide({
		boxh: 426,//盒子的高度
		w: 286,//盒子的宽度
		h: 426,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 10,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "white",//当前控制按钮的颜色
	});
	// 运动轮播容器
	$("#sport-banner").tyslide({
		boxh: 450,//盒子的高度
		w: 332,//盒子的宽度
		h: 450,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "blue",//当前控制按钮的颜色
	});
	$('.sport .sport-nav li').mouseenter(function () {
		// 导航切换
		$(this).addClass('active').siblings('li').removeClass('active')
		// 获取索引
		var index = $(this).index();
		$('.sport .sport-content > .sport-list').eq(index).show().siblings('.sport-list').hide();
	})
	// 运动轮播小容器
	$("#sportright-banner").tyslide({
		boxh: 426,//盒子的高度
		w: 286,//盒子的宽度
		h: 426,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 10,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "white",//当前控制按钮的颜色
	});
	//童装轮播容器
	$("#childern-banner").tyslide({
		boxh: 450,//盒子的高度
		w: 332,//盒子的宽度
		h: 450,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20,//控制按钮宽度
		controlsH: 1,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "blue",//当前控制按钮的颜色
	});
	$('.childern-clothes .childern-nav li').mouseenter(function () {
		// 导航切换
		$(this).addClass('active').siblings('li').removeClass('active')
		// 获取索引
		var index = $(this).index();
		$('.childern-clothes .childern-content > .childern-list').eq(index).show().siblings('.childern-list').hide();
	})
	// 童装轮播小容器
	$("#childernright-banner").tyslide({
		boxh: 426,//盒子的高度
		w: 286,//盒子的宽度
		h: 426,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 10,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "white",//当前控制按钮的颜色
	});
	// 日常轮播容器
	$("#daily-banner").tyslide({
		boxh: 450,//盒子的高度
		w: 332,//盒子的宽度
		h: 450,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 20,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "blue",//当前控制按钮的颜色
	});
	$('.daily .daily-nav li').mouseenter(function () {
		// 导航切换
		$(this).addClass('active').siblings('li').removeClass('active')
		// 获取索引
		var index = $(this).index();
		$('.daily .daily-content > .daily-list').eq(index).show().siblings('.daily-list').hide();
	})
	// 日常轮播小容器
	$("#dailyright-banner").tyslide({
		boxh: 426,//盒子的高度
		w: 286,//盒子的宽度
		h: 426,//图片的高度
		isShow: true,//是否显示控制器
		isShowBtn: true,//是否显示左右按钮
		controltop: 10,//控制按钮上下偏移的位置,要将按钮向下移动   首先保证boxh 高度>图片 h
		controlsW: 10,//控制按钮宽度
		controlsH: 2,//控制按钮高度
		controlsColor: "#d7d7d7",//普通控制按钮的颜色
		controlsCurrentColor: "white",//当前控制按钮的颜色
	});
	/* 推广商品切换 */
	$('.promotion .top ul li').mouseenter(function () {
		//导航激活类的切换
		$(this).addClass('active').siblings().removeClass('active')

		// 内容切换
		// 获取对应的索引
		var index = $(this).index(); // 0=> left:0*1170px, 1 => left: -1*1170px, 3 => left: -3*1170px
		// 左右移动
		$('.promotion .content .inner-box').animate({
			'left': -index * 1170
		}, 1000)

		// 上下移动
		// $('.promotion .content .inner-box').animate({
		//     'top': index * 600
		// }, 1000)
	})
})



/* 返回顶部 */
//绑定滚动事件
$(function () {
	$(document).scroll(function () {
		//获取距离顶部的位置
		var topDistance = $('html,body').scrollTop();
		// 判断
		if (topDistance > 500) {
			$('.backToTop').fadeIn();
		} else {
			$('.backToTop').fadeOut();
		}
	})

	// 返回顶部功能
	$('.backToTop').click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 300)
	})

	// 二维码划出
	$(".qr-code .ticket").hover(function () {
		// 划出
		$(".qr-code div").stop(true).animate({
			left: '-100px'
		})
	}, function () {
		$(".qr-code div").stop(true).animate({
			left: 0
		})
	})

	// 顶部搜索框交互
	$(document).scroll(function () {
		// 获取顶部距离
		var topDistance = $('html, body').scrollTop();
		// 判断滚动距离是否大于大于500
		if (topDistance > 500) {
			$('.top-search-box').slideDown()
		} else {
			$('.top-search-box').slideUp()
		}
	})

	// l楼梯跳转
	$(".floor li").click(function () {
		// 获取索引
		var index = $(this).index();
		// 选中每一个板块的顶部偏移
		var topOffset = $('.floorBox').eq(index).offset().top;
		// 让滚动条到这个位置
		$('html, body').animate({
			scrollTop: topOffset - 50
		})
	})
})
