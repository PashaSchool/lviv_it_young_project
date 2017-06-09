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

    $('a').click(function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }

    });

    $(window).on('scroll', function() {
        var windowPos = $(window).scrollTop() + 55;
        $('.nav-list .nav-list__item a').removeClass('active');
        if(windowPos > $('#one').offset().top) {
            $('.nav-list .nav-list__item a').removeClass('active');
            $('.nav-list .nav-list__item a[href="#one"]').addClass('active');
        }
        if(windowPos > $('#two').offset().top) {
            $('.nav-list .nav-list__item a').removeClass('active');
            $('.nav-list .nav-list__item a[href="#two"]').addClass('active');
        }
        if(windowPos > $('#thee').offset().top) {
            $('.nav-list .nav-list__item a').removeClass('active');
            $('.nav-list .nav-list__item a[href="#thee"]').addClass('active');
        }
        if(windowPos > $('#four').offset().top) {
            $('.nav-list .nav-list__item a').removeClass('active');
            $('.nav-list .nav-list__item  a[href="#four"]').addClass('active');
        }
        if(windowPos > $('#five').offset().top) {
            $('.nav-list .nav-list__item a').removeClass('active');
            $('.nav-list .nav-list__item a[href="#five"]').addClass('active');
        }

    })

})
