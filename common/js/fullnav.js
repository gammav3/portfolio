
$(document).ready(function() {

   var up_down = 'up';  //'up','down'
    //2depth 열기/닫기
    $('ul.dropdownmenu').hover(
       function() { 
          $('ul.dropdownmenu li.menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
          if(up_down == 'up'){
            $('#headerArea').animate({height:300},'fast').clearQueue();
          }else{
            $('#headerArea').animate({height:200},'fast').clearQueue();
          }
          
       },function() {
          $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
          if(up_down == 'up'){
            $('#headerArea').animate({height:160},'fast').clearQueue();
          }else{
            $('#headerArea').animate({height:150},'fast').clearQueue();
          }
          
     });
    
     //1depth 효과
     $('ul.dropdownmenu li.menu').hover(
       function() { 
           $('.depth1',this).css('color','rgb(61, 95, 93)').css('font-weight','700');
       },function() {
          $('.depth1',this).css('color','#333').css('font-weight','600');
     });
     

     //tab 처리
     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {        
        $('ul.dropdownmenu li.menu ul').slideDown('normal');
        $('#headerArea').animate({height:250},'fast').clearQueue();
     });

    $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {        
        $('ul.dropdownmenu li.menu ul').slideUp('fast');
        $('#headerArea').animate({height:160},'normal').clearQueue();
    });
});
