$(document).bind("pageshow", function() {
	function fixed(elm) {
		if (elm.data("iscroll-plugin")) {
			return;
		}

		elm.css({
			overflow: 'hidden'
		});

         var barHeight = 0; // 页头页尾高度
         var loader,
         pullUpEl, pullUpOffset;
         
         var isRefreshing = false; // 一次滑动事务
         // 设置页头样式

         var $header = elm.find('[data-role="header"]');
         if ($header.length) {
         	$header.css({
         		"z-index": 1000,
         		padding: 0,
         		width: "100%"
         	});
         	barHeight += $header.height();
         }

         // 设置页尾样式
         var $footer = elm.find('[data-role="footer"]');
         if ($footer.length) {
         	$footer.css({
         		"z-index": 1500,
         		padding: 0,
         		width: "100%"
         	});
         	barHeight += $footer.height();
         }

         // 设置内容区域样式、高度
         var $wrapper = elm.find('[data-role="content"]');
         if ($wrapper.length) {
         	$wrapper.css({
         		"z-index": 1
         	});
         	$wrapper.height($(window).height() - barHeight);
         	$wrapper.bind('touchmove', function (e) { e.preventDefault(); });
         }

         // 设置滚动区域
         var scroller = elm.find('[data-iscroll="scroller"]').get(0);
         if (!scroller) {
         	$($wrapper.get(0)).children().wrapAll("<div data-iscroll='scroller'></div>");
         }


         var isInit = 0;
         var myScroll,
         pullDownEl, pullDownOffset,
         pullUpEl, pullUpOffset, generatedCount = 0;


/**
* 初始化iScroll控件
*/

pullDownEl = document.getElementById('pullDown');
pullDownOffset = pullDownEl.offsetHeight;
pullUpEl = document.getElementById('pullUp');
pullUpOffset = pullUpEl.offsetHeight;

myScroll = new iScroll(
	$wrapper.get(0),
	{
			//scrollbarClass: 'myScrollbar', /* 自定义样式 */
			useTransition : true, //是否使用CSS变换
			topOffset: pullDownOffset,
			hScroll        : true,
			vScroll        : true,
			hScrollbar     : false,
			vScrollbar     : true,
			fixedScrollbar : true,
			fadeScrollbar  : true,
			hideScrollbar  : true,
			bounce         : true,
			momentum       : true,
			lockDirection  : true,
			checkDOMChanges: true,
			onRefresh : function() {
				if (pullDownEl.className.match('loading')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				} else if (pullUpEl.className.match('loading')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
				}
			},
			onScrollMove : function() {
				if (this.y > 15 && !pullDownEl.className.match('flip')) {
					pullDownEl.className = 'flip';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
					this.minScrollY = 0;
				} else if (this.y < 15 && pullDownEl.className.match('flip')) {
					pullDownEl.className = '';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
					this.minScrollY = -pullDownOffset;
				} else if (this.y < (this.maxScrollY - 15)
					&& !pullUpEl.className.match('flip')) {
					pullUpEl.className = 'flip';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
					this.maxScrollY = this.maxScrollY;
				} else if (this.y > (this.maxScrollY + 15)
					&& pullUpEl.className.match('flip')) {
					pullUpEl.className = '';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
					this.maxScrollY = pullUpOffset;
				}
			},
			onScrollEnd : function() {
				if (pullDownEl.className.match('flip')) {
					pullDownEl.className = 'loading';
					pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';				
					pullDownAction();	// Execute custom function (ajax call?)
				} else if (pullUpEl.className.match('flip')) {
					pullUpEl.className = 'loading';
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
					pullUpAction(); // Execute custom function (ajax call?)
				}
			},
			
		});
	//页面初始化
	isInit=1;
/**
* 下拉刷新 
* myScroll.refresh();		// 数据加载完成后，调用界面更新方法
*/
function pullDownAction () {
//setTimeout(update, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
}

/**
* 上拉刷新
* myScroll.refresh();		// 数据加载完成后，调用界面更新方法
*/
function pullUpAction() {
//setTimeout(loadData, 1000); // <-- Simulate network congestion, remove setTimeout from production!
}
var startNum = -1;
var count = -1;



function showMyAlert(text) {
	$.mobile.loadingMessageTextVisible = true;
	$.mobile.showPageLoadingMsg("a", text, true);

}
function myAlert(text) {
	showMyAlert(text);
	setTimeout(hideLoading, 2000);
}
function showLoading() {
	$.mobile.loadingMessageTextVisible = true;
	$.mobile.showPageLoadingMsg("a", "加载中...");
}

function hideLoading() {
	$.mobile.hidePageLoadingMsg();
}


elm.data("iscroll-plugin", myScroll);

window.setTimeout(function(){myScroll.refresh();}, 200);
}

$('[data-role="page"][data-iscroll="enable"]').bind("pageshow", function() {
	fixed($(this));
});
if ($.mobile.activePage.data("iscroll") == "enable") {
	fixed($.mobile.activePage);
}

});