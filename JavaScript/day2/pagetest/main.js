var user_list = [];

class User{

    _userid;
    _userpw;
    _username;

    constructor(userid, userpw, username){

        this._userid = userid;
        this._userpw = userpw;
        this._username = username;
    }
}

document.getElementById('form').onsubmit = function(){

    var sc = document.getElementById("1");
    if(sc.value == 1){
        alert("start")
        // location.href = "signup.html";// 페이지 이동시켜서 해도됨.
        const userid = prompt("id를 입력하세요","id");
        const userpw = prompt("pw를 입력하세요","pw");
        const username = prompt("name을 입력하세요","name");
        alert("회원가입이 완료 됐습니다.");
        user_list.put(new User(userid,userpw,username));
        console.log(user_list);
        

    }else if(sc.value == 2){
        const userid = prompt("id를 입력하세요","id");
        const userpw = prompt("pw를 입력하세요","pw");
        login(userid,userpw);

    }else if(sc.value==3){
        var input = prompt("찾고자하는 회원의 이름을 입력하세요", "홍길동");
        for (tmp of user_list){
            if(tmp['username'] == input){
                alert("회원님과 같은 이름을 가진 회원이 존재합니다.")
                return;
            }else{
                alert("회원님의 이름과 중복된 회원이 없습니다.")
            }
        }
    }else if(sc.value==9){
        alert("창을 종료합니다.");
        window.close();
    }else{
        alert("메뉴번호를 제대로 입력하세요");
    }



    return false;
}


function login(id, pw){
    alert("로그인함수 실행");
    console.log(user_list);
    for (tmp of user_list) {

        if (tmp['userid'] == id && tmp['userpw'] == pw) {
            alert("로그인에 성공했습니다 환영합니다 " + tmp['username'] + "님");
            return;
        } else {
            alert("회일치하는 정보가 없습니다.")
        }
    }
}


//
// document.getElementById('signup').onsubmit = function(){
//     var userid =
//     alert("회원가입이 완료됐습니다 메인 페이지로 이동합니다.");
//     location.href = "main.html";
// }
//
// document.getElementById('finduser').onsubmit = function(){
//
// }



//
// document.write("=====KH 사이트======<br>");
// document.write("=====메인 메뉴======<br>");
// document.write("1. 회원가입<br>");
// document.write("2. 로그인<br>")
// document.write("3. 같은 이름 회원 찾기<br>")
// document.write("9. 종료<br>")
// document.write("메뉴번호 입력\n")
//
