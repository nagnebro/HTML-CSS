const userid = "abcd"
console.log("ghi")
const keydown = document.querySelector(".container");
const id = document.querySelector("#id");
const checkid = document.querySelector("#checkid");
const pw = document.querySelector("#pw");
const secondpw = document.querySelector("#secondpw");
const checkpw = document.querySelector("#checkpw");
const button = document.querySelector("button");
console.log(keydown);
// onkeydown()은 html에서 실행할 수 있는 메서드 인 것 같고
// js에서는 keydown으로 접근해야한다.
keydown.addEventListener("keyup",(event)=>{

    if(id.value == userid){
        checkid.innerText = "사용하실 수 없는 아이디입니다."
       event.target.style = "color:red";//이벤트가 발생한 event.target은
        // id태그일 것이다. 이 조건이 실행됐단거 자체가 id태그의 액션이 실행되고
        // 조건이 성립했단거니까.

    }else if ( (id.value!=userid )& id.value!=""){
        checkid.style = "color:green"
        checkid.innerText = "사용할 수 있는 아이디입니다.";
    }else{
        checkid.innerText = "아이디를 입력하세요";
    }


    if(pw.value!="" & (pw.value!=secondpw.value)){
        checkpw.style = "color:red";
        checkpw.innerText = "비밀번호가 일치하지 않습니다."
    }else if(pw.value!="" & (pw.value==secondpw.value)){
        checkpw.style = "color:green"
        checkpw.innerText = "비밀번호가 일치합니다."

    }else if(pw.value==""){
        checkpw.innerText = "";
    }
})

button.addEventListener("dblclick",function(){


})

