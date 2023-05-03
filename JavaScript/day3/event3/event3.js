const input = document.querySelector("#answer-a"); // a체크박스의 이벤트를 감지하기 위해 체크박스의 태그에 해당하는 객체를 가지고 온다.

//이벤트 리스너의 매개변수로 function(){}과 ()=> 의 차이?
input.addEventListener("change",function(event){//체크박스가 변하는 것을 감지하는 change속성


    // ------1번 방법-----------------
    // const checkbox = event.target; // 이벤트가 발생한 체크박스, event.target의 타입은 EventTarget이지만 결국 엘리먼트와 같은 형태로 태그를 저장하며
    // // 접근하눈 방법 역시 같다.
    // console.log(checkbox.value);
    // const listItem = checkbox.parentNode; // 이벤트가 발생한 태그의 부모태그를 가지고 온다.
    // //체크된 박스여부에 따라 동작을 실행시킴
    // if(checkbox.checked ){
    //     //클래스부여 css 스타일링 적용
    //     listItem.classList.add("text-primary");
    // }else{
    //     //css스타일링 제거하기
    //     listItem.classList.remove("text-primary")
    // }

    //=========2번 방법(내가 생각한 방법)==========
    if(input.checked == true){
        console.log("check")
        input.style = "width:100px";
        input.parentNode.style = "color:green"
    }else{
        input.style = ""
        input.parentNode.style ="";
    }
    // 단 이 방법은 A버튼의 색만을 바뀌게 하기 위한 방법일 뿐이고 체크박스의 이벤트가 감지된 태그의 정보를 바꾸고싶다면
    // event.target으로 접근하는게 맞다. (event.target 후 parentNode로 접근하든)



})


// 장바구니 담기

const menuCart = [];
const resultDiv = document.querySelector("#order-list"); // 저장된 배열의 값을 나타내는 태그이기 때문에([]이 주문됐습니다)
// 여기에 결과값을 출력하기 위해 객체 생성.

const menuButtons = document.querySelectorAll("#practice-3 button");//id가 practice-3인 태그(artice) 안의 button태그 전체의
// 이벤트 감지 객체를 배열을 통해 받아온다(버튼이 여러개이기 때문에)

for(let i = 0 ; i<menuButtons.length; i++){// 이벤트가 발생할 떄마다 어떤 선택자에서 이벤트가 발생했는지 알기 위해 객체 전체를 for문을 돌리며 비교해줘야 한다.
    console.log(menuButtons)
    console.log(i);
    // 여기서 for문은 처음 한번만 실행되고 이후에는 리스너만 실행될텐데 i값이 어떻게 그때 그때 바뀌는거지??
    menuButtons[i].addEventListener("click",function(e){
        console.log(i);
        const btn = e.target; // 이벤트가 발생한 버튼
        // 위의 글자색을 바꾸는 실습은
        const  menuName = btn.innerText;// 여기서 value값을 가지고 오려면 button이나 input type = button 태그에
        //value값을 넣어줘야 한다. 아니면 그냥 태그안의 텍스트, 즉 innerText로 접근하는게 낫다.
        e.target.style = "color:red"
        menuCart.push(menuName);
        resultDiv.innerText=`[${menuCart}이 주문됐습니다.]`;

    })
}







for(let i = 0 ; i<menuButtons.length; i++){
    console.log(i);

    menuButtons[i].addEventListener("click",function(e){
        console.log(i);
        const btn = e.target; // 이벤트가 발생한 버튼
        // 위의 글자색을 바꾸는 실습은
        const  menuName = btn.innerText;

        e.target.style = "color:red"
        menuCart.push(menuName);
        resultDiv.innerText=`[${menuCart}이 주문됐습니다.]`;

    })
}





















