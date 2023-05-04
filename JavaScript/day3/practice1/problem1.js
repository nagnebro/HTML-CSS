

//form으로 접근, or querySelector 로 접근.
console.log("실행")

let str_list = [];


const tmp = document.querySelectorAll("input[name = check]")// 쿼리셀렉터에 들어가는 셀렉터는
const eventListener = document.querySelector("form")// 쿼리셀렉터에 들어가는 셀렉터는


// 서로 같은 속성을 가지고 있는 태그라면 selector로는 한개밖에 가지고 오지못한다.
const tmp2 = document.querySelector("#textbox");
const whole = document.querySelector("input[name=check1]");

console.log(tmp);
// css에서 html태그에 접근할떄 쓰는 선택자와 동일하다.
// getElementById로 접근하면 그냥 순수하게 아이디나 class가 가지고 있는 문자열을 통해 접근한다.
// ? 그럼 위와 같이 선택자를 통해 접근은 어떻게하지?


// tmp의 이벤트가 감지되면 다음과 같은 함수를 실행시킨다는 것. 여기서 tmp는
// 체크박스가 감지된 input태그를 뜻한다. 그러나 우리는
let str = "";



eventListener.addEventListener('change', function (event) {
    console.log("ss")

    str = "";
    for ( let i = 1; i < tmp.length; i++) {

        if (event.target==tmp[0]){
            console.log("whole")
            allcheck();
            break;
        }
        if (tmp[i].checked == true) {
            str += tmp[i].value;

        }
        console.log(event.target==tmp[0])
        if (event.target==tmp[0]){
            console.log("whole")
            allcheck();
            break;
        }
    }SSSSsssSSsssㄴㄴㄴㄴㄴㄴㄴㄴㄴssssssssㄴㄴㄴㄴ
    tmp2.value = str;
    return false;

})

function allcheck(){
    console.log("allcheck")
    if(tmp[0].checked == true) {

        for (let i = 1; i < tmp.length; i++) {
            tmp[i].checked = true;
            str+=tmp[i].value;
        }
    }else if(tmp[0].checked == false){
        console.log("fales")
        for (let j = 1; j < tmp.length; j++) {
            tmp[j].checked = false;
        }

    }
    return false;
}


// whole.addEventListener('change',function(){
//     if( whole.checked == true) {
//         for (let j = 0; j < tmp.length; j++) {
//             tmp[j].checked = true;
//         }
//     }
//         else{
//         for (let j = 0; j < tmp.length; j++) {
//             tmp[j].checked = false;
//         }
//         }
//
//
// })