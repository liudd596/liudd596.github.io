
//top右侧固定栏小提示
$(".teletop").click(function () {
    var speed=200;//滑动的速度
    $('body,html').animate({ scrollTop: 0 }, speed);
    return false;
});
$(function(){
    $(".tele2").hover(function(){
        $(".tele1").show();
    },function(){
        $(".tele1").hide();
    });

    $(".telelove2").hover(function(){
        $(".telelove1").show();
    },function(){
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
    /*page_new1.html 微信隐藏显示*/
    $(".weixin").hover(function(){
        $(".share_hidden").show();
        $(".close").click(function () {
            $(".share_hidden").hide();
        });
    });
    //top右侧固定栏
    t = $('#top').offset().top;
    fh = $('#top').height();
    $(window).scroll(function(e){
        s = $(document).scrollTop();
        if(s >100){
            $('#top').css('position','fixed');
            $('#top').css('top','500px');
            $('#top').css('right','0');
        }else{
            $('#top').css('position','absolute');
            $('#top').css('top','2000px');
            $('#top').css('right','1000px');
        }
    });
    //nav导航栏隐藏部分
    $('.dropdown').hover(function() {
        $(this).addClass('dropdown-hover');
        $(".dropdown-sub").show('slow');
    }, function() {
        $(this).removeClass('dropdown-hover');
    });
    //轮播图
    //回调函数计数
    var callbackIndex = 0;
    $('.silder-box-1').mySilder({
        width:120, //容器的宽度 必选参数!!!!!!
        height:120, //容器的高度 必选参数!!!!!!
        auto:true,//是否自动滚动
        autoTime:5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
        direction:'x',//滚动方向,默认X方向
        autoType:'left', //滚动方向，auto为true时生效
        few:1,//一次滚动几个，默认滚动1张
        showFew:6, //显示几个,就不用调css了,默认显示一个
        clearance:50, //容器之间的间隙，默认为 0
        silderMode:'linear' ,//滚动方式
        timeGap:650,//动画间隙，完成一次动画需要多长时间，默认700ms
        buttonPre:'.silder-button.btl',//上一个，按钮
        buttonNext:'.silder-button.btr',//下一个，按钮
        jz:true, //点击时，是否等待动画完成
        runEnd:function(){//回调函数
            callbackIndex ++ ;
            $('.cj em').text(callbackIndex);
        }
    });
    /*  Voice code.html 语音验证码 轮播图样式  */
    $(document).ready(function() {
        jQuery.jqtab = function(tabtit,tabcon) {
            $(tabcon).hide();
            $(tabtit+" li:first").addClass("thistab").show();
            $(tabcon+":first").show();

            $(tabtit + " li").mouseover(function() {
                $(tabtit+" li").removeClass("thistab");
                $(this).addClass("thistab");
                $(tabcon).hide();
                var activeTab = $(this).find("a").attr("tab");
                $("#"+activeTab).fadeIn();
                return false;
            });

        };
        /*调用方法如下：*/
        $.jqtab("#tabs",".tab_con");

    });

    var callbackIndex = 0;
    $('.silder-box-2').mySilder({
        width: 80, //容器的宽度 必选参数!!!!!!
        height: 80, //容器的高度 必选参数!!!!!!
        auto: true, //是否自动滚动
        autoTime: 5, //自动滚动时，时间间隙，即多长滚动一次,单位(秒)
        direction: 'x', //滚动方向,默认X方向
        autoType: 'left', //滚动方向，auto为true时生效
        few: 1, //一次滚动几个，默认滚动1张
        showFew: 2, //显示几个,就不用调css了,默认显示一个
        clearance: 50, //容器之间的间隙，默认为 0
        silderMode: 'linear', //滚动方式
        timeGap: 650, //动画间隙，完成一次动画需要多长时间，默认700ms
        buttonPre: '.silder-button.btl', //上一个，按钮
        buttonNext: '.silder-button.btr', //下一个，按钮
        jz: true, //点击时，是否等待动画完成
        runEnd: function() {//回调函数
            callbackIndex++;
            $('.cj em').text(callbackIndex);
        }
    });

});
