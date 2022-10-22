$(function(){
    'use strict';
    var win=$(window);
    $('.header').height(win.height());
    win.resize(function(){
        $('.header').height(win.height());
    });
    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    })
    $('.slider').bxSlider({
        pager: false
    });
    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: ($('.' + $(this).data('value')).offset().top) +10
        },1000);
    });
    (function autoslider(){
        $('.slider2 .active').each(function(){
            if(!$(this).is(':last-child')) {
                $(this).delay(3000).fadeOut(1000, function () {
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoslider();
                });
            }
            else{
                $(this).delay(3000).removeClass('active');
                $('.slider2 div').eq(0).addClass('active').fadeIn();
                autoslider();
            }
        })
    }());
});
