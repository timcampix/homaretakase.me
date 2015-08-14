$(window).scroll(function(){



	var nScroll=$(this).scrollTop();
	console.log(nScroll);

	$("#title").css({
		
		"transform":"translate(0px,"+nScroll/4+"%) "
	
	});
	
	$("#Me").css({
		
		"transform":"translate(0px,"+nScroll/-10+"%) "
	
	});

	$("#fore").css({
		
		"transform":"translate("+nScroll/10+"%,"+nScroll/-70+"%) "
	
	});
	
		$("#back").css({
		
		"transform":"translate("+nScroll/-10+"%,"+nScroll/-25+"%) "
	
	});
	
			$(".menu").css({
		
				"top":("+nScroll+px")
	
	});


});

