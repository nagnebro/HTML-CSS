// 팝업창에 입력을 할 수 있는 창이 뜬다.
// promt(메시지, 입력창)
/*
let number = prompt("숫자입력","gkgk");
alert(number);

let src = prompt("아무문자나 입력");
alert(src);*/

for( let i = 0; i <=10 ; i ++){``
    console.log(i);
}

console.log("시작");

for (let i =  1 ; i<=15 ; i++){

    if( i %3 == 0){

        console.log("짝"+i)
        continue;
    }
}

let com = 50;


/*
while(true){

// 여기서 알 수 있는 사실, prompt를 통해 입력받은 값은 문자열임.
// 그러나 비교연산자는 ==뿐만 아니라 대소 비교 연산자 < > 도 문자열과 숫자의
    //순수 값만을 비교해준다. 따라서 String.valueOf나 Integer.parseInt를 쓰지 않아도 된다.
    let comp = prompt("숫자를 입력하세요")
    console.log(typeof(comp));
    if(comp < com){
        alert("UP");
        continue;
    }else if(comp ==com){
        alert("correc!");
        break;
    }
    alert("Down")
}

*/
/**/


let str = prompt("네이버,다음,카카오 입력하세요");
if(str == "네이버"){
    open("https://www.naver.com/");
}

//for each문
//가변인자
// for( 요소 of args)의 형태로 사용한다.
function test(first, ...args){

    for(tmp of args){

        console.log(tmp);
    }
}

test(1,2,3,4,5);