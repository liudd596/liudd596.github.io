//top右侧固定栏小提示
//$(".teletop").click(function () {
//    var speed=200;//滑动的速度
 //   $('body,html').animate({ scrollTop: 0 }, speed);
 //   return false;
 //   });
    $(function() {
        $(".tele2").hover(function() {
            $(".tele1").show();
        }, function() {
            $(".tele1").hide();
        });

        $(".telelove2").hover(function() {
            $(".telelove1").show();
        }, function() {
            //  $(".telelove1").hide();
        });

        $('.telelove2').mouseleave(function() {
            if (!$('.telelove1').is(":hidden"))
                $(".telelove1").hide();
            $('.telelove1').mouseleave(function() {
                if (!$('.telelove1').is(":hidden"))
                    $(".telelove1").hide();
                else
                    $(".telelove1").show();
            });
        }).mouseover(function() {
            $('.telelove1').show();
        });
        //top右侧固定栏
        //t = $('#top').offset().top;
        //fh = $('#top').height();
        //$(window).scroll(function(e) {
        //    s = $(document).scrollTop();
         //  if (s > 600) {
         //       $('#top').css('position', 'fixed');
         //       $('#top').css('top', '500px');
          //     $('#top').css('right', '0');
          // } else {
          //      $('#top').css('display', 'absolute');
          //      $('#top').css('top', '2000px');
          //     $('#top').css('right', '1000px');
          //  }
      //  });

        //nav导航栏
        t = $('.subMenu').offset().top;
        fh = $('.subMenu').height();
        $(window).scroll(function(e) {
            s = $(document).scrollTop();
            if (s > 1000) {
                $('.subMenu').css('position', 'fixed');
                $('.subMenu').css('top', '0');
                $('.subMenu').css('left', '0');
            } else {
                $('.subMenu').css('position', 'absolute');
                $('.subMenu').css('top', '1000px');
                $('.subMenu').css('left', '0px');
            }
        });
        //nav导航栏隐藏部分
        $('.dropdown').hover(function() {
            $(this).addClass('dropdown-hover');
            $(".dropdown-sub").show('slow');
        }, function() {
            $(this).removeClass('dropdown-hover');
        });
    });
//banner滚动条    slider插件可悬停控制
; $(function ($, window, document, undefined) {
    Slider = function (container, options) {
        "use strict"; //stirct mode not support by IE9-
        if (!container) return;
        var options = options || {},
            currentIndex = 0,
            cls = options.activeControllerCls,
            delay = options.delay,
            isAuto = options.auto,
            controller = options.controller,
            event = options.event,
            interval,
            slidesWrapper = container.children().first(),
            slides = slidesWrapper.children(),
            length = slides.length,
            childWidth = container.width(),
            totalWidth = childWidth * slides.length;
        function init() {
            var controlItem = controller.children();
            mode();
            event == 'hover' ? controlItem.mouseover(function () {
                stop();
                var index = $(this).index();
                play(index, options.mode);
            }).mouseout(function () {
                isAuto && autoPlay();
            }) : controlItem.click(function () {
                stop();
                var index = $(this).index();
                play(index, options.mode);
                isAuto && autoPlay();
            });
            isAuto && autoPlay();
        }
        //animate mode
        function mode() {
            var wrapper = container.children().first();
            options.mode == 'slide' ? wrapper.width(totalWidth) : wrapper.children().css({
                'position': 'absolute',
                'left': 0,
                'top': 0
            })
                .first().siblings().hide();
        }
        //auto play
        function autoPlay() {
            interval = setInterval(function () {
                triggerPlay(currentIndex);
            }, options.time);
        }
        //trigger play
        function triggerPlay(cIndex) {
            var index;
            (cIndex == length - 1) ? index = 0 : index = cIndex + 1;
            play(index, options.mode);
        }
        //play
        function play(index, mode) {
            slidesWrapper.stop(true, true);
            slides.stop(true, true);
            mode == 'slide' ? (function () {
                if (index > currentIndex) {
                    slidesWrapper.animate({
                        left: '-=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else if (index < currentIndex) {
                    slidesWrapper.animate({
                        left: '+=' + Math.abs(index - currentIndex) * childWidth + 'px'
                    }, delay);
                } else {
                    return;
                }
            })() : (function () {
                if (slidesWrapper.children(':visible').index() == index) return;
                slidesWrapper.children().fadeOut(delay).eq(index).fadeIn(delay);
            })();
            try {
                controller.children('.' + cls).removeClass(cls);
                controller.children().eq(index).addClass(cls);
            } catch (e) { }
            currentIndex = index;
            options.exchangeEnd && typeof options.exchangeEnd == 'function' && options.exchangeEnd.call(this, currentIndex);
        }
        //stop
        function stop() {
            clearInterval(interval);
        }
        //prev frame
        function prev() {
            stop();
            currentIndex == 0 ? triggerPlay(length - 2) : triggerPlay(currentIndex - 2);
            isAuto && autoPlay();
        }
        //next frame
        function next() {
            stop();
            currentIndex == length - 1 ? triggerPlay(-1) : triggerPlay(currentIndex);
            isAuto && autoPlay();
        }
        //init
        init();
        //expose the Slider API
        return {
            prev: function () {
                prev();
            },
            next: function () {
                next();
            }
        }
    };
}(jQuery, window, document));

$(function() {
    var bannerSlider = new Slider($('#banner_tabs'), {
        time: 5000,
        delay: 400,
        event: 'hover',
        auto: true,
        mode: 'fade',
        controller: $('#bannerCtrl'),
        activeControllerCls: 'active'
    });
    $('#banner_tabs .flex-prev').click(function() {
        bannerSlider.prev()
    });
    $('#banner_tabs .flex-next').click(function() {
        bannerSlider.next()
    });
});

//top收藏栏
//function addto() {
    // $(".modal-backdrop").css("display", "block");
 //   alert("请刷新页面，使用快捷键  Ctrl+D 添加收藏 ");
//};