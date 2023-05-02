

/*

객체 복사
cloning
객체를 복사할 수 있다. (자바에서 깊은 복사, 얇은 복사 개념)


객체 복사는 새로운 객체를 만들어서 안에 있는 값을 똑같이 복사하는 것(깊은 복사)과
얇은 복사 두가지 방법이 있는데 아래와 같이 주소값만 참조하는 것은(얇은 복사)이며
그냥 참조변수 2개가 하나의 객체를 가르키고 있는 것 뿐이다.
 */
const a = {id : "qwer", pw : "qwer"};
const b = a;

//각각 대입하기
const c = {}; // 비어있는 객체 생성
for (key in a){

    c[key] = a[key];

}
console.log(c);
//위 방법은 객체복사 함수를 쓰기 이전의 객체 복사 방법

//assing (새로운객체, 기존객체) 객체 복사할 때 사용하는 함수
const d = {};
Object.assign(d,c);
console.log(d);

const e = Object.assign({},d);
console.warn(e)

//여러개를 하나의 객체에 복사를 한다.

const f = {color : 'red'};
const g = {color : 'blue',size : "big"};

const max = Object.assign({},f,g);

console.log(max);
// 기존의 키값과 같다면 덮어씌워지니까 주의 하자
