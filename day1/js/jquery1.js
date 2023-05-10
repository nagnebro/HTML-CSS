/*
 파일명 : jquery1.js
 
 */
 
 function a1(){
	// span태그 선택해서 속성을 변경하기.
	$('span').css('color','pink');
	
	
}
 
 
 function a2(){
	
	$('#t1').css('color','red');
}



function a3(){
		
	$('.t2').css("color","yellow");
}

function a4(){
	
	$("li span").css("color","orange");
}

function a5(){
	$('li b span').css('color','purple');
}

function a6(){
	
	$('li:nth-child(6)').css('color','darkgrey');
}

// $('li').eq(0)   $('li:eq(0)');
function a7(){
	
	$('li:first-child').css('backgroundColor','black');
	
}


function a8(){
	
	//$('li:nth-child(3n+2)').css('color','green');
	$('li:last-child').css('color','green');
}