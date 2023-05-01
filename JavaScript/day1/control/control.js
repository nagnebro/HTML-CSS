// 계절찾기
// 월을 저장하고 봄 여름 가을 겨울 판단

console.log('h')

const month = 12;

switch(month){

    case 1: case 2: case 3: case 4:
        console.log("봄입니다");
        break;
    case 5: case 6: case 7: case 8:
        console.log("여름입니다");
        break;
    case 9: case 10:
        console.log("가을입니다");
        break;
    case 11: case 12:
        console.log("겨울입니다");
        break;



}
document.write(4*5);
console.log(7!==3);
console.log(5==="5");
console.log(!(2<=5));
console.log(56%8===0);

//1. 등급변수 생성
//2. 점수에 따른 등급 계산
//3. 모두 90점 이상이면 S
// 재력이 90이상이면서 외모화 대화 총점이 160이상이면 A
// 적어도 하나가 90점 이상이면
// 나머지는 C

let face = 80;
let money = 90;
let speaking = 79;

if( face > 90 & money>90 & speaking > 90){
    console.log("S등급입니다");
}else if(money >= 90 & (face+speaking)>=160){
    console.log("A등급입니다");
}else{
    console.log("C등급입니다");
}