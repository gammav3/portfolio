$(document).ready(function(){
  var cnt=3;  //탭메뉴 개수 ***
  $('.content_area .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
  $('.sub_nav02 .tap1').css('border-radius','15px').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.1)').css('color','#3D5F5D'); //첫번째 탭메뉴 활성화
  //border-radius: 15px; box-shadow: 1px 1px 10px 1px rgba(0,0,0,.1);
             //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
  
  $('.content_area .tap').each(function (index) {  // index=0 1 2
    $(this).click(function(e){
        e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

        $(".content_area .contlist").hide(); //모든 탭내용을 안보이게...
        $(".content_area .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
        $('.tap').css('color','#333').css('box-shadow','none'); //모든 탭메뉴를 비활성화
        $(this).css('border-radius','15px').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.1)').css('color','#3D5F5D'); // 클릭한 해당 탭메뉴만 활성화
    });
  });
});

