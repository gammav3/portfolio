$(document).ready(function() {


  var key, value;
  
  function getParams() {
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  //  'ex1.html?num=1'

    var params='';
    params = url.substring( url.indexOf('?')+1, url.length );   
    key = params.split("=")[0];  //'num'
    value = params.split("=")[1];  // '1'
    value = Number(value); //숫자로 변환  1
  }  
  getParams();  //함수호출

  var screenSize, screenHeight;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 768){
          $("#imgBG").attr('src','./images/gal/Season08.png');
      }else{
          $("#imgBG").attr('src','./images/sub2_small.jpg');
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){ 
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
