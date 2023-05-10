/**
 
파일명 :  jquery3.js
 
이벤트 연결할 객체 

function(){}

// 웹브라우저를 실행할때 문서가 준비돼있다면 함수를 실행하겠다.

1.
$(document).ready(function(){
	
	alert("hi");
	
})

2.
$().ready(function(){
	
	
})

3.
$().ready(() => {
	
})
 
 
 
 5. $(()=>{  이 방법을 가장 많이 쓴다.
	
	
})
 */
 


 
$(() =>{
	// onclick , onchange 와 같이 이벤트가 'on'으로 시작
	$('select').eq(0).change(() => {
		// select태그의 change이벤트 실행됨
		// option : selected는  option에서 선택된 태그를 가지고 온다. 
		let select = $('select:eq(0) > option:selected').eq(0).val();
		console.log(select);
		
		$('input[type=text]').eq(0).val(select);
		
	});
	
	$('input[name=gender]').click(()=>{
		
		let check = $('input[name=gender]:checked').val();
		console.log(check);
		
		$('input[type=text]').eq(1).val(check); // input:text가 input[type=text]라고 하는거랑 같은 건가.?
		
		
	});	
	
});



 