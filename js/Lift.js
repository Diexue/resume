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
                for (var a in $numSet) {
                    if (typeof $numSet[a] == 'object' && $numSet[a].innerHTML != undefined) {
                        changeNum($numSet[a], parseInt($numSet[a].innerHTML))
                    }
                }
                isFirst = false;
            }
        } else if (index == 2) {
            fadeIn('.fadeLeft', 'fadeInLeft');
            fadeIn('.fadeRight', 'fadeInRight');
        }
        $('.section').eq(index).addClass("active");
        $('.section').eq(index).find('.fadeDown').css({ "animation": 'fadeInDown 1s forwards' })
        $(param.control2).children().eq(index).addClass(param.current).siblings().removeClass(param.current);
    }
    $(window).on("scroll", Check);


    function Check() {
        var wst = $(window).scrollTop();
        // if (wst >= $(param.target[0]).offset().top - 100) {
        //     $(param.control1).fadeIn(500);
        // } else {
        //     $(param.control1).fadeOut(500);
        // }

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