$(function() {
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
    initializePage();
    //$('input, textarea').placeholder();
    $(window).scroll(function(event) {
        var scroll_top = $(window).scrollTop();
        
        if ($('.ui-table-price').offset()) {
            var offsetY1 = $('.ui-table-price').offset().top;
            if (scroll_top > offsetY1) {
                $('.ui-table-price').addClass('fixed');
            } else {
                $('.ui-table-price').removeClass('fixed');
            }
        }
    });

    if ($('body').hasClass('screen-ipad')) {
        $('header .menu ul li').each(function(index, el) {
            var $obj = $(this);
            if ($obj.find('.ct').length == 1) {
                $obj.find('a').click(function(event) {
                    $obj.toggleClass('active');
                    return false;
                });
            }
        });
    }
    /*--- $(".js-menu").hover(function() {
    $('.navi').show();
    $('.mask').show();
    });---*/
    $('.js-menu').click(function(event) {
    $('body').toggleClass('opennavi');

        if ($('body').hasClass('opennavi')) {
    $('body').css('position', 'fixed').animate({ right: '0%' }, 300);
    $('.navi').css('display', 'block');
    //$('.navi').animate({ top: '60px' }, 300);
    $('.mask').fadeIn();
    } else {
    $('body').css('position', 'relative').animate({ right: '0%' }, 300);
    $('.navi').css('display', 'none');
    //$('.navi').animate({ top: '-100%' }, 300);
    $('.mask').fadeOut();
    }
    });
});



$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.subm').not($next).slideUp().parent().removeClass('open');
        };
    }

    var accordion = new Accordion($('#accordion'), false);
});




function savetextAs(fileURL) {
    if (typeof fileURL == 'object')
        var fileURL = window.open(fileURL, "_blank", "height=0,width=0,toolbar=no,menubar=no,scrollbars=no,resizable=on,location=no,status=no");
    window.win = open(fileURL);
    setTimeout('win.document.execCommand("SaveAs")', 500);
};
/*---------------导航栏隐藏部分---------------*/
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?99ef9c2d601974d74571342618754e4c";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
function initializePage() {
    bindOnResize();
    bindToggleOn();
}
/*---------------method---------------*/
function bindOnResize() {
    var resize = function() {
        var height = $(window).height();
        var width = $(window).width();
        $('.full-height').height(height);
        if (width <= 767) {
            $('body').addClass('screen-mobile');
        }
        if (width <= 1024 && width >= 768) {
            $('body').addClass('screen-ipad');
        }
        if (width >= 1025) {
            $('body').addClass('screen-normal');
        }
    }
    resize();
    $(window).resize(function(event) {
        resize();
    });
}
function bindToggleOn() {
    $('toggle-on').click(function(event) {
        $(this).toggleClass('on');
    });
}



