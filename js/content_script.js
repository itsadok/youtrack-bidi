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
            $(".comment-preview .wiki.text").css({direction: "rtl", "text-align": "right"});
		} else {
			$(this).css({direction: "ltr", "text-align": "left"});
            $(".comment-preview .wiki.text").css({direction: "ltr", "text-align": "left"});
		}
	});

    var observer = new WebKitMutationObserver(function(mutations, observer) {
        var relevant = false;
        $.each(mutations, function() {
            if(this.addedNodes.length > 0) relevant = true;
        });
        if(relevant) {
            $(".wiki.text").each(function() {
                var str = $(this).text();
                var firstChar = str.charCodeAt(str.search(/[^A-Z\s\d.,-]/));
                if(firstChar >= 1424 && firstChar <= 1983) {
                    $(this).css({direction: "rtl", "text-align": "right", "overflow-x": "auto"});
                }
            });
        }
    });
    observer.observe($(".issue-comments")[0], { subtree: true });
});

