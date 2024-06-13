$(document).ready(function(){
  var key, value;
  
    function getParams() {
   
    // 현재 페이지의 url   tab.html?num=1
    var url = decodeURIComponent(location.href);
    // url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
    url = decodeURIComponent(url);  
    //  'tab.html?num=1'
 
    var params='';
    // url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
    params = url.substring( url.indexOf('?')+1, url.length );   
    // 'abcdefg'.substring(2,4);=> 'cdef'
    // params = "num=1" 
   
    key = params.split("=")[0];  //'num'
    value = params.split("=")[1];  // '1'
 
    value = Number(value);  //   value=1;
    }
        
    getParams();  //함수호출

    
    $('.content_area .contlist:eq('+(value-1)+')').show(); // 첫번째 탭 내용만 열어라
    $('.tap'+value).css('border-radius','15px').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.1)').css('color','#3D5F5D');
               //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
  
    // $('.content_area .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    //$('.sub_nav02 .tap1').css('border-radius','15px').css('box-shadow','1px 1px 10px 1px rgba(0,0,0,.1)').css('color','#3D5F5D'); //첫번째 탭메뉴 활성화
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

