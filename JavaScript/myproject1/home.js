const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("#btn");
const user_id = "gold";
const user_pw = "wind";


btn.addEventListener("click",function() {

    if(id.value == user_id && pw.value == user_pw){

        alert("로그인을 실행합니다");
        location.href = "main.html";
        return;
    }else{
        alert("아이디 혹은 비밀번호가 일치하지 않습니다.")
    }

})


