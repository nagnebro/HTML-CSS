// 1. 박스 선택(감시 , 이벤트)

const box = document.querySelector("#box");

//2. 실행
box.addEventListener("click",(e)=>{ // 여기서 e는?
    // type(click)에 맞게 넘어온 eventListener 객체이다.
    //3. 처리
    alert(`이벤트 발생 위치  : ${e.pageX},${e.pageY}`); // String.format("")혹은 System.out.printf("",a,b)와 비슷한 포매팅 형식.

})