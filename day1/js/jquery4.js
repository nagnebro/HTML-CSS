/**
 *  파일명 : jquery4.js
 */


 
 $(() => {
	
	//전체 선택
	// 이게 그냥 dom객체 가지고 와서 addEventLister를 추가하는 것과 같음.
	$('input:checkbox[name=all]').click(()=>{
		
		//prop('속성이름') : 인수로 지정된 속성의 프로퍼티를 얻어온다   ex { key : value , key : value}
		let checked = $('input:checkbox[name=all]').prop('checked');
		
		//prop('속성이름', 프로퍼티) : ㅇ인수로 지정된 속성의 프로퍼티를 변경한다.
		
		//input 타입의 프로퍼티에는 'checked'라는 name을 가진 속성이 있고 그 값이 checked나 unchecked이다.
		
		// input[type = checkbox]인 녀석의 속성이 name=chk인 녀석들을 불러온다.
		// input[type =checkbox][name=chk] 이런 느낌의 선택자이다. 저게 되는진 모르겠지만.
		$('input:checkbox[name=chk]').prop('checked',checked);
		$("#result").css('color','blue');
		$("#result").innerText = "ㅎgg";
		console.log($("#result"));
		
		
	});
	
	
})