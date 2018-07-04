/**
 * Created by rtttr on 2017/6/30.
 */
    //顶部导航栏自动跟随
t = $('header').offset().top;
fh = $('header').height();
$(window).scroll(function(e) {
    s = $(document).scrollTop();
    if (s > 1) {
        $('header').css('position', 'fixed');
        $('header').css('top', '0');
        $('header').css('left', '0');
        $('header').css('background-color', '#fff');
        $('header').css('width', '100%');
        $('header').css('text-align', 'center');
    } else {
        $('header').css('position', 'relative');

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
});