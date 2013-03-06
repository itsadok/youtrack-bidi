$(function() {
    function textAreaKeyDown() {
        var str = $(this).val();
        var firstChar = str.charCodeAt(str.search(/[^A-Z\s\d.,-]/));
        if(firstChar >= 1424 && firstChar <= 1983) {
            $(this).css({direction: "rtl", "text-align": "right"});
            $(this).parent().parent().parent()
                .find(".comment-preview .wiki.text").css({direction: "rtl", "text-align": "right"});
        } else {
            $(this).css({direction: "ltr", "text-align": "left"});
            $(this).parent().parent().parent()
                .find(".comment-preview .wiki.text").css({direction: "ltr", "text-align": "left"});
        }
    }

    function alignToText() {
        $(".wiki.text,textarea").each(function() {
            var str = $(this).val() || $(this).text();
            var firstChar = str.charCodeAt(str.search(/[^A-Z\s\d.,-]/));
            if(firstChar >= 1424 && firstChar <= 1983) {
                $(this).css({direction: "rtl", "text-align": "right", "overflow-x": "auto"});
            }
        });

        $("textarea").unbind("keydown", textAreaKeyDown).keydown(textAreaKeyDown);
    }
    alignToText();

    var observer = new WebKitMutationObserver(function(mutations, observer) {
        var relevant = false;
        $.each(mutations, function() {
            if(this.addedNodes.length > 0) relevant = true;
        });
        if(relevant) {
            alignToText();
        }
    });
    observer.observe($(".issue-comments")[0], { attributes: true, childList: true, characterData: true, subtree: true });
});

