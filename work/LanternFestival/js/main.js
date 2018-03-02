var shownum = 0,
    allnum = 0,
    dannum = 0,
    quse_tile = 1,
    allnumshow = 0,
    time_num = 600,
    clock = null,
    losequestion = '';
loseanswer = '';
sec = 6, show = [{
    "question": {
        "question": '陈桥兵变令人疑（打三字《西游记》妖怪名）',
        "answerlist": ["A:黄袍怪", "B:赛太岁", "A:黄袍怪"]
    },
}, {
    "question": {
        "question": '灞桥惜别何所赠（打一春秋人名）',
        "answerlist": ["A:柳下惠", "B:王维", "A:柳下惠"]
    },
}, {
    "question": {
        "question": '纣王宠妲己，幽王戏诸侯。（打一成语）',
        "answerlist": ["A:唇亡齿寒", "B:幸灾乐祸", "B:幸灾乐祸"]
    },
}, {
    "question": {
        "question": '猴子身轻站树梢（打一果名）',
        "answerlist": ["A:蜜桃", "B:荔枝", "B:荔枝"]
    },
}, {
    "question": {
        "question": '云盖中秋月，雨淋元宵灯。（打一成语）',
        "answerlist": ["A:下落不明", "B:昏天暗地", "A:下落不明"]
    },
}, {
    "question": {
        "question": '婚期定在元宵后（打一成语）',
        "answerlist": ["A:双喜临门", "B:大喜过望", "B:大喜过望"]
    },
}, {
    "question": {
        "question": '元宵前后共团圆（打一字）',
        "answerlist": ["A:期", "B:玥", "A:期"]
    },
}, {
    "question": {
        "question": '高出钱孙谱，入来王谢堂。（打一汉朝人）',
        "answerlist": ["A:赵飞燕", "B:卓文君", "A:赵飞燕"]
    },
}, {
    "question": {
        "question": '独留花下人，有情却无心。（猜一字）',
        "answerlist": ["A:晴", "B:倩", "B:倩"]
    },
}, {
    "question": {
        "question": '力拔山兮气盖世（打二字云南地名）',
        "answerlist": ["A:红河", "B:楚雄", "B:楚雄"]
    },
}, {
    "question": {
        "question": '何虎头而蛇尾耶（打一成语）',
        "answerlist": ["A:虎头蛇尾", "B:当牛做马", "B:当牛做马"]
    },
}, {
    "question": {
        "question": '葵花宝典没练成（打一美国建筑）',
        "answerlist": ["A:白宫", "B:金门大桥", "A:白宫"]
    },
}, {
    "question": {
        "question": '皑皑南极，各国共有。（打一童话人物）',
        "answerlist": ["A:白雪公主", "B:爱莎公主", "A:白雪公主"]
    },
}, {
    "question": {
        "question": '朝见一片云（打二字网络脱口秀节目）',
        "answerlist": ["A:晓说", "B:奇葩说", "A:晓说"]
    },
}, {
    "question": {
        "question": '孔雀东南飞（打一字）',
        "answerlist": ["A:孜", "B:孙", "B:孙"]
    },
}, {
    "question": {
        "question": '完颜阿骨打登基（打一字）',
        "answerlist": ["A:键", "B:皇", "A:键"]
    },
}, {
    "question": {
        "question": '只识弯弓射大雕（打二字称谓）',
        "answerlist": ["A:秀才", "B:书生", "B:书生"]
    },
}, {
    "question": {
        "question": '江山丧尽成流寇（打四字电影名）',
        "answerlist": ["A:天下无贼", "B:天下无双", "A:天下无贼"]
    },
}, {
    "question": {
        "question": '人鬼情未了(打一电视剧名）',
        "answerlist": ["A:聊斋", "B:生死恋", "B:生死恋"]
    },
}, {
    "question": {
        "question": '老是不见输赢（打四字名词）',
        "answerlist": ["A:长平之战", "B:不分伯仲", "A:长平之战"]
    },
}, {
    "question": {
        "question": '时刻准备打冲锋（打二字数学名词）',
        "answerlist": ["A:破折号", "B:等号", "B:等号"]
    },
}, {
    "question": {
        "question": '凭记忆猜想（打二字国家名）',
        "answerlist": ["A:印度", "B:印尼", "A:印度"]
    },
}, {
    "question": {
        "question": '宋公明一觉醒来（打二字地名）',
        "answerlist": ["A:昆明", "B:江苏", "B:江苏"]
    },
}, {
    "question": {
        "question": '椒红韭绿豆花黄（打一成语）',
        "answerlist": ["A:面有菜色", "B:五彩斑斓", "A:面有菜色"]
    },
}, {
    "question": {
        "question": '养儿方能称老子（打一食物）',
        "answerlist": ["A:木耳", "B:折耳根", "A:木耳"]
    },
}, {
    "question": {
        "question": '枝头一点清风里，柳线三垂疏雨中。（打一城市名）',
        "answerlist": ["A:杭州", "B:湖州", "A:杭州"]
    },
}, {
    "question": {
        "question": '曲径长亭外，斜雁西湖边。（打二字股市用语)',
        "answerlist": ["A:涨停", "B:跌停", "A:涨停"]
    },
}, {
    "question": {
        "question": '元旦出门除夕回（打一成语）',
        "answerlist": ["A:众望所归", "B:满载而归", "B:满载而归"]
    },
}, {
    "question": {
        "question": '兔子请老虎（打一成语）',
        "answerlist": ["A:不自量力", "B:寅吃卯粮", "B:寅吃卯粮"]
    },
}, {
    "question": {
        "question": '风正一帆悬（打一《水浒传》人名）',
        "answerlist": ["A:张顺", "B:张横", "A:张顺"]
    },
}], isfirst = true, $d = function(id) {
    return document.getElementById(id);
};

//加载动画
document.onreadystatechange=loading;//当页面加载状态改变的时候执行这个方法
function loading(){
    $("#loading").show();
    if (document.readyState=="complete"){ //当页面加载状态为完全结束时进入
        $("#loading").remove();
        //init();
    }
}

var music = document.getElementById("music");
var music_btn=document.getElementById('music_btn');
//ios音频播放
//var shakeMusic = document.getElementById("shakeMusic");
// 微信提供的事件，微信浏览器内部初始化完成后
document.addEventListener("WeixinJSBridgeReady", function () {
    music.load();
}, false);
// 监听手机声音
window.addEventListener('shake', shakeEventDidOccur, false);
function shakeEventDidOccur(obj) {
    music.play();
}

// function more() {
//     try {
//         parent.moregame();
//     } catch (e) {}
// }

$("#audio_btn").on('touchend', function () {
    var music = document.getElementById("music");
    var music_btn=document.getElementById('music_btn');
    if (music.paused) {
        music.play();
        $("#music_btn").attr("src", "img/play.png");
        music_btn.style.cssText = "animation: rotate 3s linear infinite;"
    } else {
        music.pause();
        $("#music_btn").attr("src", "img/pause.png");
        music_btn.style.cssText = "animation: inherit;"
    }
});

$("#start").on('touchend', function() {
    $d('wbegin').style.display = "none";
    $d('main').style.display = "block";
    $d('modal-backdrop').style.display = "block";
});
$("#rule").on('touchend', function() {
    $d('rule').style.display = "none";
    $d('modal-backdrop').style.display = "none";
    init();
});
function init() {
    time();
    $('#selects_box').off('touchend'); //off()移除on(）事件处理程序
    newpage();
}

function time() {
    var time = $('.time').text();
    var second = parseInt(time);  // parseInt可解析一个字符串，并返回一个整数
    if (second <= 0) {
        losequestion = show[shownum]['question']['question'];
        loseanswer += show[shownum]['question']['answerlist'][0];
        loseanswer += " " + show[shownum]['question']['answerlist'][1];
        $('#selects_box').off('touchend');
        allnumshow = allnum;
        $d('tips').innerHTML = '未作答！';
        clearInterval(clock);
        setTimeout("update()", time_num);
    } else {
        second--;
        time = second + 's';
        $('.time span').text(second);
        clearInterval(clock);
    }
    clock = setTimeout('time()', 1000);
}

function newpage() {
    shownum = 0;
    $('.time span').text(sec);
    show = randArray(show);
    shows(shownum);

}
//获取随机灯谜
function randArray(data) {
    var randomArr = [],
        copy = data.slice(0);
    for (var i = 0, l = copy.length; l--; i++) {
        randomArr[i] = copy.splice(Math.floor(Math.random() * l), 1)[0];
    }
    return randomArr;
}
//显示灯谜
function shows(shownum) {
    $('#tips').text("");
    $("#question").text(show[shownum]['question']['question']);
    for (var i = 0; i < 2; i++) {
        $("#s_" + i).text(show[shownum]['question']['answerlist'][i]);
    }
    isWin(shownum);
    $d('ques_title').innerHTML = "第&nbsp;"+quse_tile+"&nbsp;题";
}

function update() {
    $('.time span').text(sec);
    clock = setTimeout('time()', time_num);
    allnum++;
    quse_tile++;
    if (shownum < 5) {
        shownum++;
        shows(shownum);
    } else {
        allnumshow = allnum;
        result();
        setTimeout("gameover()", time_num);
    }
}

function isWin(shownum) {
    $("#selects_box").on('touchend', '.cell', function() {
   
        if ($(this).text() == show[shownum]['question']['answerlist'][2]) {
            $('#selects_box').off('touchend');
            $d('tips').innerHTML = '正解！';
            dannum++;
            clearInterval(clock);
            setTimeout("update()", time_num);

        } else {
            $('#selects_box').off('touchend');
            $d('tips').innerHTML = '错误！';
            clearInterval(clock);
            setTimeout("update()", time_num);
        }
    });
}

function gameover() {
    clearInterval(clock);
    if (allnumshow > 0) {}
    if (isfirst) {
        isfirst = false;
        $d('wend').style.display = "block";
        $d('main').style.display = "none";
    }
}

function result() {
    if (dannum <= 2) {
        $d('result-flow').style.backgroundImage="URL(img/xiu_cai.png)";
        $d('modal-backdrop').style.display = "block";
    } else if (dannum <= 3) {
        $d('result-flow').style.backgroundImage="URL(img/ju_ren.png)";
        $d('modal-backdrop').style.display = "block";
    } else if (dannum <= 4) {
        $d('result-flow').style.backgroundImage="URL(img/tan_hua.png)";
        $d('modal-backdrop').style.display = "block";
    } else if (dannum <= 5) {
        $d('result-flow').style.backgroundImage="URL(img/bang_yan.png)";
        $d('modal-backdrop').style.display = "block";
    } else if (dannum == 6) {
        $d('result-flow').style.backgroundImage="URL(img/zhuang_yuan.png)";
        $d('modal-backdrop').style.display = "block";
        //$d('text_top').innerHTML = '你猜对了 <span id="shownum">' + dannum + '</span> 个灯谜';
        //$d('text_bottom').innerHTML = '额滴神，当代文曲星！请受再下一拜！';
    }
}
//答题记录
$("#btn-flow").on('touchend', function() {
    $d('modal-backdrop').style.display = "none";
    $d('wend').style.display = "none";
    $d('record').style.display = "block";
     //$d('lead_flow').style.display = "block";
     if (dannum == 0) {
        $d('record_answer1').innerHTML = '<span id="shownum">' + dannum + '</span> 个';
        $d('record_answer2').innerHTML = '30M';
    } else if (dannum <= 2 && dannum > 0) {
        $d('record_answer1').innerHTML = '<span id="shownum">' + dannum + '</span> 个';
        $d('record_answer2').innerHTML = '30M';
    }else if (dannum == 3) {
        $d('record_answer1').innerHTML = '<span id="shownum">' + dannum + '</span> 个';
        $d('record_answer2').innerHTML = '50M';
    } else if (dannum == 4) {
        $d('record_answer1').innerHTML = '<span id="shownum">' + dannum + '</span> 个';
        $d('record_answer2').innerHTML = '100M';
    } else if (dannum == 5) {
        $d('record_answer1').innerHTML = '<span id="shownum">' + dannum + '</span> 个';
        $d('record_answer2').innerHTML = '300M';
    } else if (dannum == 6) {
        $d('record_answer1').innerHTML = '<span id="shownum">' + dannum + '</span> 个';
        $d('record_answer2').innerHTML = '500M';
        
    }
});
//流量领取
$("#record_lqu").on('touchend', function() {
    $d('record').style.display = "none";
    $d('lead_flow').style.display = "block";
});
//手机验证
var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(14[1-9]{1})|(17[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
function LoginSubmit() {
    var phonenum = $("#phonenum").val();
    var yzmCode = $("#txtpiccode").val();
    if (phonenum == "") {
        $(".error_form").html("请先输入手机号!");
        return;
    }
    if (!mobile.test(phonenum)) {
        $(".error_form").html("手机号输入不正确!");
        return;
    }
    if (yzmCode == "") {
        $(".error_form").html("请先输入短信验证码!");
        return;
    }
    var WinxinID = $("#openid").val();
    alert("WinxinID="+WinxinID);
    $.ajax({
        url: "Lantern.ashx",
        type: "post",
        traditional: true,
        dataType: "json",
        data: {
//            phonenum: phonenum,   dannum
//            yzmCode: yzmCode
               Method: 'SendTraffic_Log_Add',
               data:'{"WinxinID": "' +
                            WinxinID +'", "Phone": "' +
                            phonenum +'"}'
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) { },
        success: function (msg) {
                    var arr = JSON.parse(msg);
                }
            });
}

function share() {}
var isDesktop = navigator['userAgent'].match(/(ipad|iphone|ipod|android|windows phone)/i) ? false : true;

function scr() {
    var height = isDesktop ? 1000 : ((window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight));
    height = height + 'px';
    $(".wrap").css('height', height);
}
setTimeout('scr()', 100);