$(function(){
	$("#fullPageId").fullpage({
				afterLoad : function(anchor, index){
					if (index === 2) {
						var now = index - 1;
						$(".section").eq(now).addClass("current");
					}
				}
			});
});