 $(document).ready(function(){
    var video;
    var ind;
    var onoff = false;

      $('.openBtn').on('click', function(e){
          e.preventDefault();
          
          $(this).parent().find('.big').fadeIn('slow');
          $('.box').show();

         
          ind = $(this).index('.openBtn'); // 0 1 2
          //console.log(ind);
          onoff = false;  //아래에 있는 영상들 클릭
      });


      $('.openBtn2').on('click', function(e){
        e.preventDefault();
        
        $(this).parent().find('.big').fadeIn('slow');
        $('.box').show();
        
        onoff = true;  //첫번째 영상 클릭
    });
     
     $('.box').on('click', function(e){
          e.preventDefault();

          $('.big').fadeOut('fast');
          $('.box').hide();

        if(onoff == false){  
          video =$('.intro ul li:eq('+ ind+')').find('.youtube-player').attr("src");
          $('.intro ul li:eq('+ ind+')').find('.youtube-player').attr("src",""); 
          $('.intro ul li:eq('+ ind+')').find('.youtube-player').attr("src",video);
        }else{
          video =$('.con3_wrap .big').find('.youtube-player2').attr("src");
          $('.con3_wrap .big').find('.youtube-player2').attr("src",""); 
          $('.con3_wrap .big').find('.youtube-player2').attr("src",video);
        }


          //#youtube-player =>iframe 아이디명 ,  .big => 팝업창클래스명
     });
 });

