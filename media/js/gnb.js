$(document).ready(function() {
   var op = false;  //네비가 열려있으면(true) , 닫혀있으면(false)
 	
   $(".menu_ham, .modal").click(function(e) { //메뉴버튼 클릭시
       e.preventDefault();
       
       var documentHeight =  $(document).height(); //전체 페이지의 높이
       $("#gnb").css('height',documentHeight); //네비의 높이를 전체 전체 페이지의 높이로...

      if(op==false){  //메뉴가 닫혀있는 상태에서 클릭했냐??
        $("#gnb").animate({left:0,opacity:1}, 'fast');
        $('#headerArea').addClass('mn_open');
        $('#headerArea .modal').fadeIn('fast');
        op=true;
      }else{  //메뉴가 열려있는 상태에서 클릭했냐??
        $("#gnb").animate({left:'-100%',opacity:0}, 'fast');
        $('#headerArea').removeClass('mn_open');
        $('#headerArea .modal').fadeOut('fast');
        op=false;
      }

   });
     
  
  });


