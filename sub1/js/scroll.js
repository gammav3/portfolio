$(document).ready(function () {
var threshold = 828;
var thresholdof = 2050;


$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();

if(scroll>threshold){ 
    $('.history_menu').addClass('history_menu_on');
    //스크롤의 거리가 이상이면 서브메뉴 고정
    $('header').hide();
}else{
    $('.history_menu').removeClass('history_menu_on');
    //스크롤의 거리가 작으면 서브메뉴 원래 상태로
    $('header').show();
}
if (scroll >= 0 && scroll < threshold) {
    $('.history_menu li:eq(0)').addClass('current');
    $('.history_menu li:eq(1)').removeClass('current');
} else if (scroll >= threshold && scroll < thresholdof) {
    $('.history_menu li:eq(0)').removeClass('current');
    $('.history_menu li:eq(1)').addClass('current');
}
});
});