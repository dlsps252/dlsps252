/**
 * slideShow.js 
 */
$(function(){
	//현재 보여지는 image index 관리
	//변수 값 변경은 prev/next 버튼 클릭시 변경됨
	let moveIndex=0;
	
	//슬라이드 패널을 움직이는 함수(왼쪽 여백 조정)
	//슬라이드패널의 기준위치는 왼쪽 여백 0인 위치 - 왼쪽여백을 0~-여백까지 조정
	function moveSlide(index){
		//함수 호출 시점 : prev/next 버튼 클릭시, 보여질 이미지 index 값이 인수로 전달
		//현재 보고있는 이미지 index 갱신하는 코드
		moveIndex=index;
		
		//슬라이드 이동(왼쪽 여백 계산)
		let moveLeft=-(index*1280);		
		$('#slidePanel').animate({'left':moveLeft},'slow');
		}//moveSlide 끝
		
		$('#prevButton').on('click',function(){
			if(moveIndex!=0) //첫번째 이미지가 아니라면
				moveIndex-=1; //image Index 1 감소
			moveSlide(moveIndex);
		}); //click 끝

		$('#nextButton').on('click',function(){
			if(moveIndex!=4) //마지막 이미지가 아니라면
				moveIndex+=1; //image Index 1 증가
			moveSlide(moveIndex);
		});//click 끝		
		
		//초기 슬라이더 위치 랜덤하게 지정하는 코드(새로고침 시 1번 실행됨)
		  let imgCount = 5; //이미지 idx -> 0~4 값
		  let randomIndex = Math.floor(Math.random() * imgCount);

		  moveSlide(randomIndex);
		  
		//각 컨트롤 버튼에 대해 
		$('.controlButton').each(function(index){
			$(this).hover(
				function(){
					$(this).attr('src', 'image/controlButton2.png')
				},
				function(){
					$(this).attr('src', 'image/controlButton1.png')
				}
			);
			
		//클릭했을때 index값을 moveSlide()함수에게 전달
		$(this).on('click', function(){
			moveSlide(index);
		})	
		});

		
		

		
}); //document.ready 끝

