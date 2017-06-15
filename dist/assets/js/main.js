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

    var $content = $('.modal-window-content');
    $('.btn-show-tree').click(function(e) {
      var tl = new TimelineLite();
      var tree = $('.show-tree');
      var that = $(this);
      var arrRight = $('.fa-angle-double-right');

      //btn's
      var btnAreaLeft = $('.bnt-area-left');
      var btnLeft = $('.btn-hide-tree');

      // tree animatio
      var treeContainer = $('.tree-container');

      tl.to($content, .3, {opacity:0})
        .to($content, 1, {width: 0}, "right")
        .to(that, .5, {x: '300px', opacity: 0}, "right")
        .to(that, .5, {display: 'none'}, "right")
        .to(tree, 1, {width:'100%'}, "right")
        .to($content, 0, {display: 'none'})
        .to(treeContainer, 0, {display: 'block'})
        .to(btnAreaLeft, 0, {display: 'block'})
        .from(btnLeft, .3, {x: '-100px'})
        // .from(btnHide, 0, {display: 'block'})
    })
    $('.btn-hide-tree').click(function(e) {
      var tl = new TimelineLite();
      var treeContainer = $('.tree-container');
      var that = $(this);
      var showTree = $('.show-tree');
      var btnAreaLeft = $('.btn-show-tree');

      tl
        .to(treeContainer, .3, {opacity: 0})
        .to(treeContainer, 1, {width: 0}, "left")
        .to(treeContainer, 1, {display: 'none'}, "left")
        .to(that, .5, {x: '-300px', opacity: 0}, "left")
        .to($content, 1, {width: '90%'}, "left")
        .to(showTree, 1, {width: '10%'},"left" )
        .to(showTree, 0, {display: 'flex'})
        .to($content, 1, {opacity: 1, display: "block"})
        .to(btnAreaLeft, .3, {opacity: 1, display: 'flex', x: '0'})
        // .to(btnAreaLeft, .3, {opacity: 1, display: 'block', x: '0'})
    })

    $('.close-modal').click(function(e) {
      $('.overlay').hide();
    })

    $('.stuff-desc__btn').click(function(e) {
        $('.overlay').show();
    })
})
