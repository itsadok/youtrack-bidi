$(function() {
	$(".wiki.text").each(function() {
		var str = $(this).text();
		var firstChar = str.charCodeAt(str.search(/[^A-Z\s\d.,-]/));
		if(firstChar >= 1424 && firstChar <= 1983) {
			$(this).css({direction: "rtl", "text-align": "right", "overflow-x": "auto"});
		}
	});

	$("textarea").keydown(function() {
		var str = $(this).val();
		var firstChar = str.charCodeAt(str.search(/[^A-Z\s\d.,-]/));
		if(firstChar >= 1424 && firstChar <= 1983) {
			$(this).css({direction: "rtl", "text-align": "right"});
		} else {
			$(this).css({direction: "ltr", "text-align": "left"});
		}
	});
});

