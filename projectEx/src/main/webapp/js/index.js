/**
 *index.js 
 */

 $(function(){
	//scroll 이벤트 - 윈도우 객체
	$(window).on('scroll', function(){
		//스크롤 되는 문서의 스크롤 top이 #headerBox의 height 속성 이상이면
		//메인메뉴 고정 + 그림자 표시
		if($(document).scrollTop() >= $('#headerBox').height())
			$('#mainMenuBox').addClass('mainMenuFixed mainMenuShadow');
		else
			$('#mainMenuBox').removeClass('mainMenuFixed mainMenuShadow');
		
	}); //scroll on 끝
	
	//moveToTop 이미지 클릭시 top으로 이동
	$('#moveToTop').on('click',function(){
		$('html,body').animate({scrollTop:0}, 500);	
	}); // click on 끝
	
 });//document.ready 끝
 
 