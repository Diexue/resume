function LiftEffect(param) {
    var array = [];
    Check();
    for (var i = 0; i < param.target.length; i++) {
        var t = $(param.target[i]).offset().top;
        array.push(t);
    }
    var isFirst = true;
    var $numSet = $('.num .gradeNum');

    function Selected(index) {
        if (index == 3) {
            if (isFirst) {
                p1 = DrawProgress('h5', 'HTML5/CSS3', 88, 5)
                p3 = DrawProgress('jq', 'jQuery', 80, 5)
                p4 = DrawProgress('js', 'javascript', 78, 5)
                p5 = DrawProgress('boot', 'Bootstrap', 85, 5)
                p2 = DrawProgress('node', 'nodejs', 52, 5)
                p6 = DrawProgress('ng2', 'Angular2.0', 55, 5)
                isFirst = false;
            }
        } else if (index == 2) {
            fadeIn('.fadeLeft', 'fadeInLeft');
            fadeIn('.fadeRight', 'fadeInRight');
        } else if (index == 1) {
            fadeIn('.card', 'fadeInDown');
        }
        $('.section').eq(index).addClass("active");
        $('.section').eq(index).find('.fadeDown').css({ "animation": 'fadeInDown 1s forwards' })
        $(param.control2).children().eq(index).addClass(param.current).siblings().removeClass(param.current);
    }
    $(window).on("scroll", Check);

    function fadeIn($element, direction) {
        var length = $($element).length + 1;
        for (var i = 0; i <= length; i++) {
            $($element + ':nth-of-type(' + i + ')').css({
                'animation': direction + ' 1s forwards',
                'animation-delay': i * 0.1 + 's'
            })
        }
        setTimeout(function() {
            $($element).removeClass("op0");
        }, 1000);
    }

    function DrawProgress(id, skill, deg, timer) {
        new Progress({
            el: id, //canvas元素id
            deg: deg, //绘制角度
            skill: skill, //文本内容
            timer: timer, //绘制时间
            lineWidth: 5, //线宽
            lineBgColor: '#e2e2e2', //底圆颜色
            lineColor: '#e4393c', //动态圆颜色
            textColor: '#000', //文本颜色
            fontSize: 20, //字体大小
            circleRadius: 100 //圆半径
        });
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