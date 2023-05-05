
const id = document.querySelector("#id");
const pw = document.querySelector("#id");
const btn = document.querySelector("button");

class Student{
    _name;
    _id;
    _pw;
    _phone;
    constructor(name,id,pw,phone){
        this._name = name;
        this._id = id;
        this._pw = pw;
        this._phone = phone;
    }
}
let s_list = [new Student("kim",1,1,33)];

btn.addEventListener("click", function(){

    login(id.value , pw.value);

    // alert("아이디 혹은 패스워드가 틀렸습니다") // display : none으로 처리하든지 혹은 비어있는 div로 조건 충족시 css스타일링 해주던지.



})

function login(tmp_id, tmp_pw){
    console.log("hi")

    for( let i = 0 ; i<s_list.length ; i++){
        if(s_list[i]._id == tmp_id && s_list[i]._pw == tmp_pw){
        // if(true){
            alert("로그인을 실행합니다.")
            location.href = ("loginsuc.html");
            // 실제로 홈페이지 구현할때는 로그인 페이지이기 때문에 뒤로가기를 하지 못하게 replace로 url에 접근하는 것이 맞으나
            // 여기서는 그냥 귀찮으니까 href로 설정.
            return;
        }
        alert("아이디 혹은 비밀번호가 틀렸습니다.");
    }
}
