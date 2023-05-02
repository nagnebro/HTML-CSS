// console.log(document);
// console.log(document.title);
// console.log(document.URL);
//
//
// // querySelector를 이용할수도 있고 document를 이용할 수도 있다.
// document.title = "동적 웹페이지 만들기";
//
// const h1 = document.querySelector("#heading");
// console.log(h1);
// h1.innerText = "Is it null?"
// const h2 = document.getElementById("heading");
// h2.innerText = "Hi!!!"


// const orderBtn = document.getElementById("order-bell"); 아레와 같은 코드이다.
const orderBtn = document.querySelector("#order-bell");
// 2) 감시를 시작 addEventListener(이벤트명, 처리하는 함수명);
// 매개변수로 함수의 결과값을 이용하기 위해 function을 사용하는 것이 아니라 실행될 함수문장
// 그 자체가 매개변수로 주어져야 하는 것 같다. 마치 람다처럼, 람다의 결과값을 받으려고 하는 것이
// 아닌 함수 실행 그 자체가 인자로 주어져야 하는 것. javascript에서는 function이 객체였던 거 같긴한데.
orderBtn.addEventListener("click",function(event){

    alert("확인");
})

/*
* 버튼을 클릭하면 팝업창이 나오게끔 해보자
*
* 1) DOM 객체 가져오기
*
* 2) 감시 시작
*
* 3) 이벤트 발생 시 이벤트에 해당하는 함수 실행(이벤트 처리)
* */