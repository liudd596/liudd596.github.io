$(function() {
    //底部隐藏部分
    $('.lianjie_youq').mouseleave(function() {
        if (!$('.lianjie_hidden').is(":hidden"))
            $(".lianjie_hidden").hide();
        $('.lianjie_hidden').mouseleave(function() {
            if (!$('.lianjie_hidden').is(":hidden"))
                $(".lianjie_hidden").hide();
            else
                $(".lianjie_hidden").show();
        });
    }).mouseover(function() {
        $('.lianjie_hidden').show();
    });


    //顶部导航栏自动跟随
    t = $('header').offset().top;
    fh = $('header').height();
    $(window).scroll(function(e) {
        s = $(document).scrollTop();
        if (s > 50) {
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

    $('.ui-flipcont .i >p a').click(function(event) {
        $('.ui-flipcont .i').not($(this).parents('.i')).removeClass('on');
        $(this).parents('.i').toggleClass('on');
        var id = $(this).parents('.i').attr('id');
        // location.hash = '#' + id;
        var t = $('#' + id).offset().top;
        $(window).scrollTop(t);
        return false;
    });
    $('.ui-flipcont >.hd table tr td a').click(function(event) {
        var name = $(this).attr('href').substr(1);
        console.log(name);
        $('.ui-flipcont .i[id="' + name + '"] >p a').click();
    });
});


$(document).ready(function() {
createnewsDetail();
    //导航栏隐藏部分
    $(".menu_li1").hover(function(){
        $(".menu_box1").show();
    },function(){
        $(".menu_box1").hide();
    });
    $(".menu_li2").hover(function(){
        $(".menu_box2").show();
    },function(){
        $(".menu_box2").hide();
    });
    $(".menu_li3").hover(function(){
        $(".menu_box3").show();
    },function(){
        $(".menu_box3").hide();
    });
    $(".menu_li4").hover(function(){
        $(".menu_box4").show();
    },function(){
        $(".menu_box4").hide();
    });
    $(".menu_li5").hover(function(){
        $(".menu_box5").show();
    },function(){
        $(".menu_box5").hide();
    });
    $(".menu_li6").hover(function(){
        $(".menu_box6").show();
    },function(){
        $(".menu_box6").hide();
    });
    /*---------------导航栏隐藏部分 结束---------------*/
    /*---------------首页 热门动态Tab切换---------*/
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
});

//$(document).ready(function() {
//    createnewsDetail();
//    $.jqtab("#tabs", ".tab_con");
//});
function createnewsDetail() {
    var dataCidStrJson = ""; var cidNowInt = 0;var cidNow = "";
    $.get("/DoNewsAjaxHandler.ashx?f=getCommChinaNewsTop3", function(result) {
        var jsonData = $.parseJSON(result);
        if (jsonData.status == '1') {
            dataStrJson = jsonData.data;
            var htmlStr = '';
            for (var i = 0; i < 3; i++) {
                cidNowInt=(i + 3);
                cidNow = "CID" + cidNowInt;
                dataCidStrJson = dataStrJson[i][cidNow];
                htmlStr += "<li id='tab" + (i + 1) + "' class='tab_con'>";
                for (var j = 0; j < dataCidStrJson.length; j++) {
                    //console.log(dataCidStrJson[j].Title);
                    htmlStr += "<div class='tab_con_div'>";
                    htmlStr += "<a href='/chanpi/New_Details.aspx?id=" + dataCidStrJson[j].ID + "&CID=" + cidNowInt + "' >";
                    htmlStr += "<div class=\"tab_con_img\" style=\"background: url(http://www.ytx.net" + dataCidStrJson[j].Indexpic + ") no-repeat center center;background-size: contain;\"></div>";
                    htmlStr += "<p class='tab_con_div_p1'>" + dataCidStrJson[j].Title + "</p>";
                    htmlStr += "<p class='tab_con_div_p2'>" + dataCidStrJson[j].Createtime + "</p>";
                    htmlStr += "</a></div>";
                }
                htmlStr += "<div class='clearfix'></div></li>";
            }
            $("#tab_conbox").html(htmlStr);
        }
        /*调用方法如下：*/
        $.jqtab("#tabs", ".tab_con");    
    });
}

  
 
 //<div class="tab_con_img" style="background-image: url(img/tab1_1.jpg);width:300px;height:200px;background-size: contain"></div>


// 修改部分  [[[[20170716

//首页第一帧
(function() {
if (screen.width > 1024) {
        $.fn.animatescroll.defaults = {
            easing: "swing",
            scrollSpeed: 450,
            padding: 0,
            element: "html,body"
        };



        var welcome = $('#FirstScreen');
        var page = $('#page');
        var height = welcome.height();

        var isJam = false;
        var beforeScrollTop = getCurrentScrollY();

        $(window).on('scroll', function() {


            if (isJam) {
                return;
            }

            setTimeout(function() {
                var p = getCurrentScrollY();
                var delta = p - beforeScrollTop;
                beforeScrollTop = p;
                var h = height;

                if (delta >= 0) {//向下

                    if (p >= 8 && p < h) {
                        isJam = true;

                        page.animatescroll({ onScrollEnd: function() {
                            isJam = false;
                        }
                        });

                    }

                } else {//向上

                    if (p <= h && p >= 8) {
                        isJam = true;

                        welcome.animatescroll({
                            onScrollEnd: function() {
                                isJam = false;
                            }
                        });

                    }
                }
            }, 0)


        });
        //禁用鼠标滚动
        $(window).mousewheel(function(e) {
            if (isJam) {
                e.stopPropagation();
                e.preventDefault();
                return false;
            }
        });

        //禁用 pgUp pgDn
        $(document).on('keyup', function(e) {
            if (e.keyCode == 38 || e.keyCode == 39) {
                if (isJam) {
                    e.preventDefault();
                }
            }
        });




        function getCurrentScrollY() {
            return window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop
            || 0;
        }
        // 修改部分 ]]]] 20170716
    };
})();


// 修改部分  [[[[
(function() {

    //折叠

    var pExpandedPanel = $('#pExpandedPanel');
    var prev = pExpandedPanel.find('.img1');
    var next = pExpandedPanel.find('.img2');



    pExpandedPanel.on('mouseover', '.items', function() {
        var _self = $(this);
        prev.addClass('on');
        next.addClass('on');
        _self.removeClass('showOut').addClass('on');
    });

    pExpandedPanel.on('transitionend', '.desc', function(e) {

        var p = $(e.target).parent();
        console.log(p[0])

    })



    pExpandedPanel.on('mouseout', '.items', function() {
        var _self = $(this);
        prev.removeClass('on');
        next.removeClass('on');
        _self.removeClass('on').addClass('showOut');
    });




})();

// 修改部分 ]]]]]
