function LiftEffect(param) {
    var array = [];
    Check();
    for (var i = 0; i < param.target.length; i++) {
        var t = $(param.target[i]).offset().top;
        array.push(t);
    }
    var isFirst = true,
        isDown = true;
    var $numSet = $('.num .gradeNum');

    function Selected(index) {
        if (index == 3) {
            if (isFirst) {
                p1 = drawProgress('h5', 'HTML5/CSS3', 88, 18, 20)
                p3 = drawProgress('jq', 'jQuery', 80, 18, 20)
                p4 = drawProgress('js', 'javascript', 78, 18, 20)
                p5 = drawProgress('boot', 'Bootstrap', 85, 18, 20)
                p2 = drawProgress('node', 'nodejs', 52, 18, 20)
                p6 = drawProgress('ng2', 'Angular2.0', 55, 18, 20)
                isFirst = false;
            }
        } else if (index == 2) {
            fadeIn('.fadeLeft', 'fadeInLeft');
            fadeIn('.fadeRight', 'fadeInRight');
        } else if (index == 1) {
            if (isDown) {
                if ($(window).width() < 768) {
                    fadeIn('.card:nth-of-type(odd)', 'fadeInRight');
                    fadeIn('.card:nth-of-type(even)', 'fadeInLeft')
                } else {
                    fadeIn('.card', 'fadeInDown');
                }

                isDown = false;
            }
        }
        $('.section').eq(index).addClass("active");
        $('.section').eq(index).find('.fadeDown').css({ "animation": 'fadeInDown 1s forwards' })
        $(param.control2).children().eq(index).addClass(param.current).siblings().removeClass(param.current);
    }
    $(window).on("scroll", Check);

    function fadeIn($element, direction) {
        var length = $($element).length + 1;
        for (var i = 0; i <= length; i++) {
            $($element + ':nth-of-type(' + (i + 1) + ')').css({
                'animation': direction + ' 1s forwards',
                'animation-delay': i * 0.15 + 's'
            })
        }
        setTimeout(function() {
            $($element).removeClass("op0");
        }, 1000);
    }

    function Check() {
        var wst = $(window).scrollTop();
        var key = 0;
        var flag = true;
        for (var i = 0; i < array.length; i++) {
            key++;
            if (flag) {

                if (wst >= array[array.length - key] - 300) {
                    var index = array.length - key;
                    flag = false;
                } else {
                    flag = true;
                }
            }
        }
        Selected(index);
    }

    $(param.control2).children().on("click", function() {
        $(window).off("scroll");
        var index = $(this).index();
        Selected(index);
        var flag = true;
        for (var i = 0; i < array.length; i++) {
            if (flag) {
                if (index == i) {
                    $("html,body").stop().animate({
                        "scrollTop": array[i] - 50
                    }, 500, function() {
                        $(window).on("scroll", Check);
                    });
                    flag = false;
                } else {
                    flag = true;
                }
            }
        }
    });
}