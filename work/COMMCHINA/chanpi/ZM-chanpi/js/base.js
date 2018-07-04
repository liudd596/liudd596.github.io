var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?ce4a3077b0767d5843eec5f3852a6088";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();

function initializePage(){
  bindOnResize();
  bindToggleOn();
  
}

/*---------------method---------------*/
//
function bindOnResize(){
  var resize=function(){
    var height=$(window).height();
    var width=$(window).width();
    $('.full-height').height(height);
    if(width<=767){
      $('body').addClass('screen-mobile');
    }
    if(width<=1024 && width>=768){
      $('body').addClass('screen-ipad');
    }
    if(width>=1025){
      $('body').addClass('screen-normal');
    }

  }
  resize();
  $(window).resize(function(event) {
    resize();
  });
}
function bindToggleOn(){
  $('toggle-on').click(function(event) {
    $(this).toggleClass('on');
  });
}