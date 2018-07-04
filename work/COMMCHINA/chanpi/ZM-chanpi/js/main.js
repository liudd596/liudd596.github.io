

$(function(){
  initializePage();
   //$('input, textarea').placeholder();
  
  $(window).scroll(function(event) {
    var scroll_top=$(window).scrollTop();
    if(scroll_top>50){
      $('.js-menu').addClass('on');
    }else{
      $('.js-menu').removeClass('on');
    }

    if($('.ui-table-price').offset()){
      var offsetY1=$('.ui-table-price').offset().top;
      if(scroll_top>offsetY1){
        $('.ui-table-price').addClass('fixed');
      }else{
        $('.ui-table-price').removeClass('fixed');
      }
    }
  });

  if($('body').hasClass('screen-ipad')){
    $('header .menu ul li').each(function(index, el) {
      var $obj=$(this);
      if($obj.find('.ct').length==1){
        $obj.find('a').click(function(event) {
          $obj.toggleClass('active');
          return false;
        });
      }
    });
  }
  $('.js-menu').click(function(event) {
    $('body').toggleClass('opennavi');

    if($('body').hasClass('opennavi')){
      $('body').css('position', 'fixed').animate({right: '50%'}, 300);
      $('.navi').animate({right: 0}, 300);
      $('.mask').fadeIn();
    }else{
      $('body').css('position', 'relative').animate({right: 0}, 300);
      $('.navi').animate({right: '-50%'}, 300);
      $('.mask').fadeOut();
    }
  });

//导航栏隐藏部分
$(".menu_li2").hover(function(){
    $(".dropdown-menu_li2").css('display','block');
},function(){
    $(".dropdown-menu_li2").css('display','none');
});

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


//nav导航栏
t = $('header').offset().top;
fh = $('header').height();
$(window).scroll(function(e){
    s = $(document).scrollTop();
    if(s >1){
        $('header').css('position','fixed');
        $('header').css('top','0');
        $('header').css('left','0');
        $('header').css('background-color','#fff');
        $('header').css('width','100%');
        $('header').css('text-align','center');
    }else{
        $('header').css('position','relative');

    }
});


  $('.ui-flipcont .i >p a').click(function(event) {
  $('.ui-flipcont .i').not($(this).parents('.i')).removeClass('on');
  $(this).parents('.i').toggleClass('on');
    var id = $(this).parents('.i').attr('id');
   // location.hash = '#' + id;
   var t = $('#'+id).offset().top;
   $(window).scrollTop(t);
    return false;
  });
  $('.ui-flipcont >.hd table tr td a').click(function(event) {
    var name=$(this).attr('href').substr(1);
    console.log(name);
    $('.ui-flipcont .i[id="'+name+'"] >p a').click();
});
});

function savetextAs(fileURL) {
    if (typeof fileURL == 'object')
        var fileURL = window.open(fileURL, "_blank", "height=0,width=0,toolbar=no,menubar=no,scrollbars=no,resizable=on,location=no,status=no");
    window.win = open(fileURL);
    setTimeout('win.document.execCommand("SaveAs")', 500);
};

var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?99ef9c2d601974d74571342618754e4c";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();


/*---------------method---------------*/
//