$(function(){
	$("#fullPageId").fullpage({
		anchors : ['page1', 'page2', 'page3', 'page4'],
		menu : "#menu", 
		afterLoad : function(anchor, index){
			var now = index - 1;
			$('.section').eq(now).addClass('sectionani');
			if (index === 4) {
					$('#gjlink').css('display', 'block');
			}
		}
	});
});