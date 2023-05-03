const input = document.querySelector("#answer-a");


//이벤트 리스너의 매개변수로 function(){}과 ()=> 의 차이?
input.addEventListener("change",function(event){//체크박스가 변하는 것을 감지하는 change속성

    const checkbox = event.target; // 이벤트가 발생한 체크박스
    const listItem = checkbox.parentNode; // 이벤트가 발생한 태그의 부모태그를 가지고 온다.
    //체크된 박스여부에 따라 동작을 실행시킴
    if(checkbox.checked ){
        //클래스부여 css 스타일링 적용
        listItem.classList.add("text-primary");
    }else{
        //css스타일링 제거하기
        listItem.classList.remove("text-primary")
    }


})


// 장바구니 담기

const menuCart = [];
const resultDiv = document.querySelector("#order-list");

const menuButtons = document.querySelectorAll("#practice-3 button");

for(let i = 0 ; i<menuButtons.length; i++){

    menuButtons[i].addEventListener("click",function(e){

        const btn = e.target; // 이벤트가 발생한 버튼
        const  menuName = btn.innerText;// 여기서 value값을 가지고 오려면 button이나 input type = button 태그에
        //value값을 넣어줘야 한다. 아니면 그냥 태그안의 텍스트, 즉 innerText로 접근하는게 낫다.

        menuCart.push(menuName);
        resultDiv.innerText=`[${menuCart}이 주문됐습니다.]`;

    })
}


