//메인 비주얼  

    $('.chapter1_box .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
    $('.chapter1_box .tap1').css('background','#bfc393').css('color','#fff'); //첫번째 탭메뉴 활성화
    
    $('.chapter1_menu .tap').each(function(index) {  // index=0 1 2
        $(this).click(function(e){
            e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

            // 탭메뉴 스타일 변경
            $('.tap').css('background','#e3e6c5').css('color','#3d5f5d');
            $(this).css('background','#bfc393').css('color','#fff');

            // 해당 탭 내용 표시
            $(".chapter1_main_text .contlist").hide(); //모든 탭내용을 안보이게...
            $(".chapter1_main_text .contlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라

            // 이미지 변경
            var imageName = "index02_0" + index + ".jpg";
            $('.exhibition img').attr('src', './mainimages/' + imageName);
        });
    });

//

//박물관 소개 



    $('.info ul li dl').each(function(index) {  // index=0 1 2 3 4
        $(this).hover(function(e){
            //e.preventDefault();   // <a> href="#" 값을 강제로 막는다 필요 없어양

            // 이미지 변경
            var imageName = "index04_0" + index + ".jpg"; // 이미지 파일 이름 생성
            $('.info img').attr('src', './mainimages/' + imageName); //왜 안돼양??
        });
    });



//마지막

    $('.chapter5 .map_section:eq(0)').show();
    $('.chapter5 .map1').css('background','#92b929');
    
    $('.chapter5 .map_btn').each(function(index) {  // index=0 1 2
        $(this).click(function(e){
            e.preventDefault();   // <a> href="#" 값을 강제로 막는다    

            // 탭메뉴 스타일 변경
            $('.map_btn').css('background','rgba(255,255,255,.4)');
            $(this).css('background','#92b929');


            // 해당 탭 내용 표시
            $(".chapter5 .map_section").hide(); //모든 탭내용을 안보이게...
            $(".chapter5 .map_section:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라

            // 이미지 변경
            var imageName = "index05_map0" + index + ".png";
            $('.map_img01 img').attr('src', './mainimages/' + imageName);
            $('.map_img01').hide().fadeIn('slow')
            //./mainimages/index05_map00.png
        });
    });
