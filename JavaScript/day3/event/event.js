

const input  = document.querySelector("input[type=text]");
const button = document.querySelector("input[type=button]")

// querySelector로 접근할때는 어떤 태그로 접근해도 괜찮다. css의 선택자랑 동일하게 사용하면된다
// id값을 줘도 되고

// 아직도 헷갈리는 게 html에서 onclick()메서드로 접근하는 것과 js파일에서 onclick()하는 것과
// 어떤 유의미한 차이가 있는지
// -> addEventListener를 스크롤 클릭해서 어떤 메서드가 있는지 확인하자. interface의 종류에 따라 실행되는 위치가 다르다(html, javascript)
// element 객체는 html 태그를 가지고 있는 객체이며 property와 접근하는 방법은 비슷하다.

function  check(){
    const str = input.value;
    console.log(typeof(input));
    console.log(input instanceof Element)// querySelector로 접근해서 얻은 객체의 타입이 element임.
    input.value = str.length;

    // return false;
}



//js에서는 dblclick
//html에서는 ondbclick

// 이벤트 리스너가 실행될 떄는 함수와 같이 바로 이 구문이 실행되는 것이 아니라
// js파일의 위에서부터 시작되기 때문에 위에 오류가 있을 시 실행되지 않지만 위의
// function check는 딱 저 함수만 동작하고 실행이 종료되기 때문에 문제가되지 않는다.
button.addEventListener("dblclick",()=>{

    const str = input.value;
     alert(str);

 })