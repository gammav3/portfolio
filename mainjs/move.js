// JavaScript Document

$(document).ready(function() {

    var timeonoff;   //타이머 처리  홍길동 정보
    var imageCount=$('.gallery ul li').size();   //이미지 총개수
    var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
    var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
    $('.btn1').css('background','#fff'); //버튼 색 변경
    $('.btn1').css('width','300px'); // 버튼의 너비 증가
    
    $('.gallery .link1').fadeIn('fast'); //첫번째 이미지 보인다..
    $('.gallery .link1 span').delay(1500).animate({top:560, opacity:1},'slow'); //글자 딜레이 수 날라오기
    $('.gallery .link1 p').delay(2000).animate({top:660, opacity:1},'slow'); //글자 딜레이 수 날라오기
 
    function moveg(){
      if(cnt==imageCount+1)cnt=1;
      if(cnt==imageCount)cnt=0;  //카운트 초기화

      cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
     
    
    $('.gallery li').hide(); //모든 이미지 안보인다.
    $('.gallery .link'+cnt).fadeIn('fast'); //자신만 이미지가 보인다..
	 		                    
      
      $('.mbutton').css('width','10px'); // 버튼 원래의 너비
      $('.btn'+cnt).css('width','300px');    

      $('.gallery li span').css('top',550).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(1500).animate({top:560, opacity:1},'slow');

      $('.gallery li p').css('top',660).css('opacity',0);
      $('.gallery .link'+cnt).find('p').delay(2000).animate({top:660, opacity:1},'slow');

       if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
     }
     
    timeonoff= setInterval( moveg , 4000);
      // 타이머를 동작 1~5이미지를 순서대로 자동 처리
      //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
      //clearInterval(변수); -> 내용을 제거 리셋


   $('.mbutton').click(function(event){  //각각의 버튼 클릭시
	     var $target=$(event.target); //클릭한 버튼 $target == $(this)
       clearInterval(timeonoff); //타이머 중지     
	 
	    $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.

		  if($target.is('.btn1')){cnt=1;}else if($target.is('.btn2')){cnt=2;}else if($target.is('.btn3')){cnt=3;}
		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
      $('.mbutton').css('width','10px');
      $('.btn'+cnt).css('width','300px');
      
      $('.gallery li span').css('top',550).css('opacity',0);
      $('.gallery .link'+cnt).find('span').delay(1000).animate({top:560, opacity:1},'slow'); //왜 안돼요?

      $('.gallery li p').css('top',660).css('opacity',0);
      $('.gallery .link'+cnt).find('p').delay(2000).animate({top:660, opacity:1},'slow'); //왜 안돼요?

      if(cnt==imageCount)cnt=0;  //카운트 초기화
     
      timeonoff= setInterval( moveg , 4000); //타이머의 부활!!!
     
      if(onoff==false){ //중지상태냐??
            onoff=true; //동작~~
            $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
      }
      
    });

	 //stop/play 버튼 클릭시 타이머 동작/중지
  $('.ps').click(function(){ 
     if(onoff==true){ // 타이머가 동작 중이냐??
	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
         onoff=false;   
	   }else{  // false 타이머가 중지 상태냐??
		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
		   onoff=true; 
	   }
  });	
});




