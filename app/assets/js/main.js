$(function() {
    var btn = $("[data-type='togleList']");
    $(btn).click(function() {
        var that = $(this).next();
        $(this).next().slideToggle(600, function(){
            if(that.attr('style') == 'display: none;') {
                that.removeAttr('style')
            }
        })
    })
})
