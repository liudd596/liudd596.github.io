/**
 * Created by rtttr on 2017/6/27.
 */
//顶部导航栏自动跟随
t = $('header').offset().top;
fh = $('header').height();
$(window).scroll(function(e){
    s = $(document).scrollTop();
    if(s > 1 && s < 542){
        $('header').css('position','fixed');
        $('header').css('top','0');
        $('header').css('left','0');
        $('header').css('background-color','#fff');
        $('header').css('width','100%');
        $('header').css('text-align', 'center');
        $('header').css('z-index', '99996');
    }else{
        $('header').css('position','relative');
        $('header').css('z-index', '999');
    }
});
//menui副导航栏
t = $('.menui').offset().top;
fh = $('.menui').height();
$(window).scroll(function(e) {
    s = $(document).scrollTop();
    if (s > 550) {
        $('.menui').css('position', 'fixed');
        $('.menui').css('top', '0');
        $('.menui').css('left', '0');
        $('.menui').css('background-color', '#fff');
        $('.menui').css('width', '100%');
        $('.menui').css('text-align', 'center');
    } else {
        $('.menui').css('position', 'relative');
    }
});
//导航栏隐藏部分
$(document).ready(function() {
    $(".menu_li1").hover(function() {
        $(".menu_box1").show();
    }, function() {
        $(".menu_box1").hide();
    });
    $(".menu_li2").hover(function() {
        $(".menu_box2").show();
    }, function() {
        $(".menu_box2").hide();
    });
    $(".menu_li3").hover(function() {
        $(".menu_box3").show();
    }, function() {
        $(".menu_box3").hide();
    });
    $(".menu_li4").hover(function() {
        $(".menu_box4").show();
    }, function() {
        $(".menu_box4").hide();
    });
    $(".menu_li5").hover(function() {
        $(".menu_box5").show();
    }, function() {
        $(".menu_box5").hide();
    });
    $(".menu_li6").hover(function() {
        $(".menu_box6").show();
    }, function() {
        $(".menu_box6").hide();
    });

        $(".ui-list-jobli1").hover(function() {
        $(".ui-job-textbg1").show();
        $(".ui-list-jobli1 .ui-job-text").hide();
            }, function() {
            $(".ui-job-textbg1").hide();
            $(".ui-list-jobli1 .ui-job-text").show();
        });
        $(".ui-list-jobli2").hover(function() {
        $(".ui-job-textbg2").show();
        $(".ui-list-jobli2 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg2").hide();
        $(".ui-list-jobli2 .ui-job-text").show();
        });
        $(".ui-list-jobli3").hover(function() {
        $(".ui-job-textbg3").show();
        $(".ui-list-jobli3 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg3").hide();
        $(".ui-list-jobli3 .ui-job-text").show();
        });
        $(".ui-list-jobli4").hover(function() {
        $(".ui-job-textbg4").show();
        $(".ui-list-jobli4 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg4").hide();
        $(".ui-list-jobli4 .ui-job-text").show();
        });
        $(".ui-list-jobli5").hover(function() {
            $(".ui-job-textbg5").show();
            $(".ui-list-jobli5 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg5").hide();
        $(".ui-list-jobli5 .ui-job-text").show();
        });
        $(".ui-list-jobli6").hover(function() {
        $(".ui-job-textbg6").show();
        $(".ui-list-jobli6 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg6").hide();
        $(".ui-list-jobli6 .ui-job-text").show();
        });
        $(".ui-list-jobli7").hover(function() {
        $(".ui-job-textbg7").show();
        $(".ui-list-jobli7 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg7").hide();
        $(".ui-list-jobli7 .ui-job-text").show();
        });
        $(".ui-list-jobli8").hover(function() {
        $(".ui-job-textbg8").show();
        $(".ui-list-jobli8 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg8").hide();
        $(".ui-list-jobli8 .ui-job-text").show();
        });
        $(".ui-list-jobli9").hover(function() {
        $(".ui-job-textbg9").show();
        $(".ui-list-jobli9 .ui-job-text").hide();
        }, function() {
        $(".ui-job-textbg9").hide();
        $(".ui-list-jobli9 .ui-job-text").show();
        });
//    //my0ver(1);
});