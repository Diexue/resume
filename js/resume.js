$(function() {
    var $numSet = $('.num .gradeNum');
    if ($(window).width() <= 755) {
        $(".mobile-nav").hide();
    }
    $('.more-nav').on('click', function() {
        $(".nav-ul.mobile-nav").stop().slideToggle(300);
    })
    $('.mobile-nav li').click(function() {
        if ($(window).width() <= 755) {
            $(".mobile-nav").slideUp(300)
        }

    })
    $(".fades").addClass("fadesin");
    /*
    var downLen = $('.fadeDown').length + 1;
    console.log('length', downLen)
    for (let i = 0; i <= downLen; i++) {
        $('.fadeDown:nth-of-type(' + i + ')').css({
            'animation': 'fadeInDown 1s forwards',
            'animation-delay': i * 0.1 + 's'
        })
    }
    setTimeout(function() {
        $('.fadeDown').removeClass("op0");
    }, 1000);
    var leftLen = $('.leftIn').length + 1;
*/
    fadeIn('.fadeDown', 'fadeInDown');



})

function fadeIn($element, direction) {
    console.log('kk', $element, direction)
    var length = $($element).length + 1;
    for (let i = 0; i <= length; i++) {
        $($element + ':nth-of-type(' + i + ')').css({
            'animation': direction + ' 1s forwards',
            'animation-delay': i * 0.1 + 's'
        })
    }
    setTimeout(function() {
        $($element).removeClass("op0");
    }, 1000);
}

function changeNum(element, value) {
    var start = 0,
        interval;
    interval = setInterval(function() {
        start++;
        if (start >= value) {
            clearInterval(interval);
            start = value;
            $('.circle').addClass('clip-auto');
            $('.right').removeClass('w-0');
        } else if (start > 50) {
            $('.circle').addClass('clip-auto');
            $('.right').removeClass('w-0');
        }
        $(element).parents('.num').prev().find('.left').css({
            "transform": "rotate(" + (18 / 5) * start + "deg)"
        })
        $(element).text(start)
    }, 10);

}
$(window).resize(function() {
    var wid = $(window).width();
    if (wid > 755) {
        console.log('wid', wid)
        $(".nav-ul").show();
    } else {
        console.log('wid', wid)
        $(".mobile-nav").hide();
    }
});