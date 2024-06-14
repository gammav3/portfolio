$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 768){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
        
      }
      
      if( screenSize < 480){
        $("#imgBG").attr({ src: "./images/back02.jpg"});
      }
      if( screenSize > 1024){
        $(".ob_img01 > img").attr({ src: "./images/character/01kiara.png"});
      }
      if( screenSize < 1024){
        $(".ob_img01 > img").attr({ src: "./images/character/Skin_Half_01.png"});
      }
      if( screenSize <= 768){
        $(".ob_img01 > img").attr({ src: "./images/character/01kiara.png"});
      }
      if( screenSize > 1024){
        $(".ob_img02 > img").attr({ src: "./images/character/02shoichi.png"});
      }
      if( screenSize < 1024){
        $(".ob_img02 > img").attr({ src: "./images/character/Skin_Half_02.png"});
      }
      if( screenSize <= 768){
        $(".ob_img02 > img").attr({ src: "./images/character/02shoichi.png"});
      }
      if( screenSize > 1024){
        $(".ob_img03 > img").attr({ src: "./images/character/03jeki.png"});
      }
      if( screenSize < 1024){
        $(".ob_img03 > img").attr({ src: "./images/character/Skin_Half_03.png"});
      }
      if( screenSize <= 768){
        $(".ob_img03 > img").attr({ src: "./images/character/03jeki.png"});
      }
      if( screenSize > 1024){
        $(".ob_img04 > img").attr({ src: "./images/character/04rozzi.png"});
      }
      if( screenSize < 1024){
        $(".ob_img04 > img").attr({ src: "./images/character/Skin_Half_04.png"});
      }
      if( screenSize <= 768){
        $(".ob_img04 > img").attr({ src: "./images/character/04rozzi.png"});
      }
      if( screenSize > 1024){
        $(".ob_img05 > img").attr({ src: "./images/character/05yuki.png"});
      }
      if( screenSize < 1024){
        $(".ob_img05 > img").attr({ src: "./images/character/Skin_Half_05.png"});
      }
      if( screenSize <= 768){
        $(".ob_img05 > img").attr({ src: "./images/character/05yuki.png"});
      }
      if( screenSize > 1024){
        $(".ob_img06 > img").attr({ src: "./images/character/06bianca.png"});
      }
      if( screenSize < 1024){
        $(".ob_img06 > img").attr({ src: "./images/character/Skin_Half_06.png"});
      }
      if( screenSize <= 768){
        $(".ob_img06 > img").attr({ src: "./images/character/06bianca.png"});
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(e){
      e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
  $('.btn_768').click(function(e){
    e.preventDefault();
    screenHeight = $(window).height();
    $('html,body').animate({'scrollTop':screenHeight}, 1000);
});
  
  
});

$(document).ready(function() {
  checkScroll(); // 페이지가 로드될 때 스크롤 위치 확인

  $(window).on('scroll', function() {
      checkScroll(); // 스크롤 값의 변화가 생길 때마다 스크롤 위치 확인
  });
});

function checkScroll() {
  var scroll = $(window).scrollTop(); // 스크롤의 거리

  if (scroll > 400) { // 400 이상의 거리가 발생되면
      $('.move_top').fadeIn('slow'); // top 보여라~~~~
  } else {
      $('.move_top').fadeOut('fast'); // top 안보여라~~~~
  }
}



$('.move_top').click(function(e){
    e.preventDefault();
    //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({"scrollTop":0},500); 
    //해당위치고 스크롤 탑값을 부드럽게 이동시키는 코드
});  
