/*
 * @Author: Marte
 * @Date:   2017-08-21 19:01:37
 * @Last Modified by:   Marte
 * @Last Modified time: 2017-08-24 18:45:41
 */

'use strict';
$(function() {
    //缓冲动画
    $('body').css('overflow', 'hidden');
    var imgs = [
        "img/13.png",
        "img/logo.png",
        "img/red.png",
        "img/purple.png",
        "img/red.png",
        "img/yellow.png",
        "img/dot1.png",
        "img/dot2.png",
        "img/背景.jpg",
    ];
    //预加载
    $.each(imgs,function(i,src){
        var imgObj = new Image();
        $(imgObj).attr('src', src);
        if(i == imgs.length-1){
            loading();
        }
    })
    function loading() {
        $('header').animate({
            'height': "90px"
        }, 2000).find('span').animate({"top" : "15px"}, 2000,function(){$('header span').addClass('animate')});
        setTimeout(function() {
            $('header img').attr('src', "img/logo.png");
            $('header span').css({
                'width': '50px',
                "height": "50px"
            });
            $('header nav').animate({
                "opacity": "1"
            }, 500)
            setTimeout(function(){
                 pageScroll();
                $('body').css('overflow', '');
            },1000)
        }, 1000)
    }


    //滚动时---导航改变的事件
    $(window).scroll(function() {

        var scrollTop = Math.round($(".home").offset().top);
        var curSco = Math.round($(document).scrollTop());
        if (scrollTop < curSco) {
            $('header span').removeClass('loading').addClass('logo');
            $('header nav').removeClass('navtop')
        } else {
            $('header span').removeClass('logo').addClass('loading');
            $('header nav').addClass('navtop').addClass("animate");
        }
    });
    //添加整页滚动
    function pageScroll() {
        var $section = $('section')
        var index = 0;
        function changeIndex(i) {
            if (i == -1 && index < $section.length - 1) {
                index++;
            } else if (i == -1 && index == $section.length - 1) {

            } else if (index > 0) {
                index--;
            }
            Roll(index);

        }
        Roll(index);
        var debounceChangeIndex = debounce(changeIndex, 100);
        $(window).mousewheel(function(event){ //-下滚 1上滚
            debounceChangeIndex(event.deltaY);
            return false;
        })
        $('header nav li').on("click", function() {
            index = $(this).index() + 1;
            Roll(index);
            return false;
        })
        $('header span').on('click', function() {
            index = 0;
            Roll(index)
        })
        function Roll(index) {
            var target = Math.round(index * $(window).innerHeight());
            $('body,html').stop(true).animate({
                scrollTop: target
            }, 500)
        }
    }

    //主页面背景交互
    (function(window, undefined) {
        var $page = $('.home div');
        var $home = $('.home');
        for (var i = 0, len = $page.length; i < len; i++) {
            $page[i].index = i + 1;
        }
        $home.on('mousemove', function(event) {
            var centerX = $home.outerWidth() / 2;
            var centerY = $home.outerHeight() / 2;
            var diffentX = Math.floor(event.pageX - centerX);
            var diffentY = Math.floor(event.pageY - centerY);
            scroll(diffentX / centerX, diffentY / centerY);
        })
        function scroll(x, y) {
            for (var i = 0, len = $page.length; i < len; i++) {
                $page.eq(i).css({
                    'left': x * $page[i].index * 10 + "px",
                    'top': y * $page[i].index * 10 + 'px'
                })
            }
        }

    })(window),
    //表单处理
    (function(window, undefined) {
        var $input = $('.label input');
        $('.next').click(function(event) {
            if ($(this).hasClass('left')) {
                $(this).removeClass('left');
                $(this).addClass('right');
                $('.box').animate({
                    'left': '-100%'
                }, 1000);
                $(this).animate({
                    'left': '55%'
                }, 1000);
                $('.contact p:nth-of-type(2n)').css('animation', 'bounceInLeft 2s');
                $('.contact p:nth-of-type(2n-1)').css('animation', 'bounceInRight 2s');
            } else {
                $(this).removeClass('right');
                $(this).addClass('left');
                $('.box').animate({
                    'left': '0'
                }, 1000);
                $(this).animate({
                    'left': "45%"
                }, 500);
                $('.contact p:nth-of-type(2n)').css('animation', '');
                $('.contact p:nth-of-type(2n-1)').css('animation', '');
            }
        });
        $('input').focus(function(event) {
            $(this).prev().animate({
                'font-size': '20px',
                "top": '10px'
            }, 100);

        }).blur(function() {
            if ($(this).val().trim() == "") {
                $(this).prev().animate({
                    'font-size': '22px',
                    "top": '40px'
                }, 100);
            }
        }).change(function(event) {
            var text = $(this).val();
            if (text == '') {
                $(this).next().hide();
                return;
            } else {
                if($(this).prev().html() == "电话："){
                   var reg = /^\d{0,11}$/g;
                   if($(this).val().trim().search(reg) == -1){
                    $(this).next().css('background-image', 'url("img/感叹号.png")');
                }else{
                    $(this).next().css('background-image', 'url("img/对号.png")');
                }
                }else{
                    $(this).next().css('background-image', 'url("img/对号.png")');
                }
            }
            $(this).next().show(100);
        });

    })(window);

    //视频控件
    (function() {
        var $control = $('.control');
        var video = $('video')[0];
        $('.team-video').click(function(event) {
            if ($control.hasClass('play')) {
                $control.removeClass('play');
                $control.addClass('pause')
                video.play();
            } else {
                $control.removeClass('pause');
                $control.addClass('play');
                video.pause();
            }
        });
        $('video').hover(function() {
            $(this).attr('poster', 'img/合照.jpg');
        }, function() {
            $(this).attr('poster', 'img/合照1.jpg');
        });

    })(window)

    //轮播处理
    var $index = 0;
    $(".index ul").on("click", "span", function() {
        $(this).parent().siblings().find('span').removeClass("index-active");
        $(this).addClass("index-active");
        $index = $(this).parent().index();
        console.log($index)
        $(".group-wrap").css({
            transform: 'translateX(' + (-$index * 20) + '%)'
        });
    });
    $('.left').on('click', function() {
        $index--;
        if ($index < 0) {
            $index = 4;
        }
        $(".group-wrap").css({
            transform: 'translateX(' + (-$index * 20) + '%)'
        });
        $(".index ul li").find('span').removeClass("index-active");
        $(".index ul li").eq($index).find('span').addClass("index-active");
    });
    $('.right').on('click', function() {
        $index++;
        if ($index > 4) {
            $index = 0;
        }
        $(".group-wrap").css({
            transform: 'translateX(' + (-$index * 20) + '%)'
        });
        $(".index ul li").find('span').removeClass("index-active");
        $(".index ul li").eq($index).find('span').addClass("index-active");
    });

    //产品滑入
    $(".work-wrap").on({
        mouseover: function() {
            $(this).find('img').css('transform', 'scale(1.2,1.2)');
            $(this).find('.cover').css('opacity', '0.5');
            $(this).find('.detail').css({
                'opacity': '0.7',
                'transform': 'scale(0.8,0.8)'
            });
        },
        mouseout: function() {
            $(this).find('img').css('transform', 'scale(1,1)')
            $(this).find('.cover').css('opacity', '0');
            $(this).find('.detail').css({
                'opacity': '0',
                'transform': 'scale(1,1)'
            });
                },
        click: function() {
            $(".slideBox-cover").show();
            $(".slideBox").eq($(this).index()).slideDown(500).animate({
                'top': '80px',
                'opacity': '0.8'
            }, 500);
        }
    }, '.products');
    $('.slideBox span').on({
        click: function() {
            $(".slideBox-cover").hide();
            console.log($(this).closest('.slideBox').index())
            $(".slideBox").eq($(this).closest('.slideBox').index()).animate({
                'top': '0',
                'opacity': '0'
            }, 500).slideUp(500);
        }
    })
    $(window).scroll(debounce(iScroll, 100));

//函数节流
function debounce(fn, delay) {
    var timer = null;
    return function() {
        var context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}
    var prizeScroll = true,
        productsScroll = true;

    function iScroll() {
        var $scrollTop = Math.floor($(".honor").offset().top);
        var $proScrTop = Math.floor($('.works').offset().top)
        var $curSco = Math.ceil($(document).scrollTop());
        if ($curSco >= $proScrTop && productsScroll) {
            MyAnimate2($('.products'), 0);
            productsScroll = false;
        }
        if ($curSco >= $scrollTop && prizeScroll) {
            $(".image-wrap").addClass('show');
            setTimeout(function() {
                $(".image-wrap").css('transform', 'translate(0)');
                $(".image-wrap").animate({
                    'top': '0',
                    'left': '0',
                    'width': '100%',
                    'height': '100%'
                }, 300);
                var $left = ($('body').width() - 990) / 4;
                var $height = $(window).height();
                var $moveTo = [{
                    left: $left + 'px',
                    top: ($height - 540) / 3 + 'px'
                }, {
                    left: 2 * $left + 330 + 'px',
                    top: ($height - 540) / 3 + 'px'
                }, {
                    left: 3 * $left + 660 + 'px',
                    top: ($height - 540) / 3 + 'px'
                }, {
                    left: $left + 'px',
                    top: ($height - 540) / 3 + 330 + 'px'
                }, {
                    left: 2 * $left + 330 + 'px',
                    top: ($height - 540) / 3 + 330 + 'px'
                }, {
                    left: 3 * $left + 660 + 'px',
                    top: ($height - 540) / 3 + 330 + 'px'
                }];
                var $i = 5;
                MyAnimate($(".image-wrap img"), $i, $moveTo);
                prizeScroll = false;
            }, 1000);
        }

    }

    function MyAnimate(el, num, moveArr) {
        var $el = $(el);
        if (num < 0) {
            return;
        } else {
            if (moveArr[num].left && moveArr[num].top) {
                $el.eq(num).animate({
                    left: moveArr[num].left,
                    top: moveArr[num].top
                }, 300, function() {
                    num--;
                    MyAnimate(el, num, moveArr);
                });
            }
        }
    }

    function MyAnimate2(el, num) {
        var $el = $(el);
        if (num > 3) {
            return;
        } else {
            $el.eq(num).animate({
                left: 0 + '%',
            }, 500,'swing', function() {
                num++;
                $(this).css('animation','iskew .5s ease-in-out');
                MyAnimate2(el, num);
            });
        }
    }
})