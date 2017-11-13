//常见问题
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
//充值
$(document).ready(function() {
    var choice_amount = $("#amountrule");//充值金额
    $(choice_amount).children().each(function(){
        $(this).on("click",function(){
            $(this).addClass("money-on").siblings().removeClass("money-on");
        });
    });
});

var myreg = /^1[3-8]+\d{9}$/;
function step1() {
    var src = $("#phonenum").val();
    if (myreg.test(src)) {
        $("#index_errorTip").css("display", "none");
        window.location.href = 'iphone_pay/Iphone_pay.html';
    }
    if (!myreg.test(src)) {
        $("#index_errorTip").css("display", "block");
        return;
    }
};