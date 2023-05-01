// 함수
// 입력이 있으면 출력이 있다  입력 o 출력 o
// 입력이 없을 수도 있지만 출력은 있다. 입력 x 출력 o
// 입력은 없는데 출력은 있을 수 있다. 입력 o  출력 x
// 입력도 없고 출력도 없을 수 있다. 입력 x 출력 x


/*
* 함수 : 선언부, 구현부
* 키워드 : function 함수명(입력값){
* 실행할 문장
* return 값:
* }
*
* 자바스크립트에서 가져다 쓰는 함수들을 api라고 한다?
* */

const max_num = Math.max(20,30,45);
console.info(max_num);
console.log(max_num);

// 함수 안에서의  지역변수, 전역변수
//

function sayHi(username){
    console.info("안녕하세요" + username);
    return "저도 반갑습니다."
}

let hi = sayHi("김영찬");
console.log(hi);

//매개변수의 세제곱 값을 리턴해주는 함수 만들기
function cube(num){

    return num*num*num;

}



//scope : 유효범위
let y = 100;
function changeB(){

    let msg = 'hello';
    changeC();
    console.log(y); // 안에서 밖으로 호출할 순 있어도 밖에서 안으로는 할 수 없다. 유효범위 때문이다
    // 따라서 changeB함수의 블럭 내에 있는 changeC를 사용하기 위해서는 changeB블럭 내에서 호출해야한다.
    function changeC(){
        console.log(msg);
    }

}

changeB();

function show(name = "홍길동",age = 0){ // 파이썬이랑 굉장히 비슷하다, 키워드 인자를 사용함.
    console.log("이름 : " + name + " 나이 : " + age);
}

show(25,"김영찬")
show(25)
show(); // 매개변수를 넘겨주지않으면 에러가 발생하진 않지만 undefined 값으로 넘어간다.

//함수를 변수에 담을 수 있다 -> 이것도 파이썬의 람다와 비슷하다.
//익명 함수
const print = function () { // print라는 변수명이 곧 함수명이 된다
    console.log("print");
}
print();

console.log(print);
console.log("X"=="X"==1)
/*
* 열차 예매
*
*
* */

let input = prompt("목적지를 입력하세요");

function destination(input = "부산"){

    if (input == "부산"){return 10000;}
    else if( input == "서울"){return 20000;}
}

let money = destination();

let input2 = prompt("기차를 선택하세요");

function train(input2 = "무궁화"){
    if (input2 == "ktx"){
        return 10000;
    }else if( input2 == "무궁화"){
        return 4000;
    }
}

money += train();

alert(money);