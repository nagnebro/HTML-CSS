console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation
console.log('my'+'cat');
console.log('1'+2);

let counter = 1;
let count  = ++counter;
console.log(count);

const count2 = count++;
console.log(count2);

let a = 1;
var str = '10'
console.log(a+3);
console.log(10<10);
console.log(10==10);
console.log('10'==10); // 문자열과 숫자의 비교식이라도 문자열이 숫자라면 그 값만 숫자와 비교한다
console.log('10'===10); // 값과 자료형의 타입'도' 비교한다. -> 자바에서는 자바스크립트의 ===이 ==과 같은 것이다.
console.log('10'==='20');
console.log('10'==='10');
console.log("'10' === str : " + ('10'===str)); //변수의 문자열과 비교해도 같다
// 그렇다면 자바에서 문자열을 리터럴로 생성한 것과 같다는 것.
console.log('10'!==10);
console.log('10'!=10);

//객체 만들어서 비교
// 객체를 생성하게 되면 각각 다른 주소값을 갖게된다.
// 따라서 비교식 사용시 주소를 비교하는 것이기 때문에 아래와 같은 결과를 얻을 수 있다.
const a1 = {name1:'영찬'};
const a2 = a1;
console.log(a1==a2);
const a3 =  {name1:'영찬'}
console.log(a1==a3);

//삼항연산자?

console.log('김영찬'==='김영찬' ? 'yes':'no');
console.log()

