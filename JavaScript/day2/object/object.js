
//객체 object
// - 사용자 정의 자료형
// - 내가 담고 싶은 변수(데이터)를 묶는다
// - 여러가지 프로퍼티(key : value)로 구성돼있다.
// 객체를 선언할떄는 const 변수를 이용해서 주소값을 변경 못하게 고정시킨다.

const yeongchan = {
    name1 : "김영찬",
    age : 26,
    address : "seoul"
}
console.log(yeongchan)

console.log(yeongchan.address);
console.log(yeongchan.name1);
console.log(yeongchan.age);



let yeongchan2 = {
    name1 : "김영찬2",
    age : 30,
    address : "Busan"
}

console.log(yeongchan2)

console.log(yeongchan2.age);
console.log(yeongchan2.name1);
console.log(yeongchan2.address);
console.log(typeof(yeongchan2))

function property(){
    console.log("hi")
    return "hi"
}

const obj1 = {
    welcome : property()
}
console.log(obj1);

//프로퍼티 다루기
// .닷연산, 객체의 키를 통해 값을 가져온다.
// 대괄호 연산 , 객체의 키를 조작하여 값을 가지고 올 수 있다.

const ramen = {
    name : "신라면",
    price : 1000
}

// . 으로 접근
ramen.price += 1000;
console.log(ramen.price);
// 대괄호 []로 접근
ramen['price'] += 1000;
console.log(ramen.price);


//객체안의 정보들에 접근하는 방법.
const cookie = {
    cookie_name : "cookie1",
    cookie_level : 10,
    cookie_grad : "S",
    cookie_skills : ["몸통 박치기", "파괴광선"]
}

// for each문을 이용해서 접근한다.
for ( tmp in cookie){

    console.log(cookie[tmp]); // 딕셔너리명 [키값] 의 형태로 value에 접근할 수 있다.
}

// 객체배열 생성 및 순회
// 객체도 배열에 저장될 수 있다.
// for of 로 접근할 시에는 객체의 value값을 가지고 오게 된다.

const arr = [

    {name1 : "강아지"}, // 0번방
    {name2 : "고양이"}, // 1번방
    {name3 : "토끼"},  // 2번방

]

for (let tmp2 of arr){

    for (let tmp3 in tmp2){
        console.log(tmp2[tmp3]);
    }
}

// for in 과 for of의 차이점.
// for in 은 그 요소들의 key값에 접근한다
// for of는 그 요소의 value값에 접근한다.
// 즉 우리가 일반적으로 java에서 알고 있던 for each문은 for of에 해당하는 것이다.
// 리스트에 for in으로 접근시에 인덱스 번호를 가지고 오고
// for of로 접근시 값에 접근한다
// 객체에 접근시에는 for in 접근시 key값을 가져오고 for of로는 접근할 수 없으므로 (not iterable type)
// 객체['key']의 형태로 접근해야 한다.
const num_arr = [11,22,33,44];

for (i of num_arr){
    console.log(i)
}


const user_list = [
    {id : "a" , name : "박신우", pw : "aa", email : "aaa@aaa.aaa", gender : "F", age : 33},
    {id : "b" , name : "김영찬1", pw : "aa1", email : "aaa1@aaa.aaa", gender : "M", age : 43},
    {id : "c" , name : "김영찬2", pw : "aa2", email : "aaa2@aaa.aaa", gender : "F", age : 53},
    {id : "d" , name : "김영찬3", pw : "aa3", email : "aaa3@aaa.aaa", gender : "M", age : 63}
]


// for (user of user_list){
//     for(user_inform in user){
//         console.log(user[user_inform]);
//     }
// }

// 자바스크립트는 자바와 다르게 객체를 생성하고 나서도
// 멤버변수를 추가할 수 있다.
// 추가하는 방법

// 변수명 ['key'] = 값 // 객체에 대괄호로 접근하는 방법을 이용해 키값을 정해주는 것
// .으로 접근해서 생성해도 된다. java에서는 put으로 map에 key와 value를 집어넣었음.
// 그냥 파이썬의 딕셔너리랑 같은 것 같은데?
// 중간에 변수를 추가하는 것은 좋으나 나중에 유지보수가 많이 힘들다


const example = {
    name : "example1",
    type : "object"
}

example['new_key'] = "new_key";
example.new_key2 = "new_key2"

console.log(example);

//delete 객체명.필드명(키값)으로 접근하게 되면 삭제가 가능하다
delete example.name
console.log(example);


//매개변수 받아서 객체를 생성하는 함수
//매개변수 값이랑 멤버 key이름이 같을 경우에는 key부분을 생략해도 된다.
function makePerson(name1, age){

    return{
        name1, // 매개변수값을 멤버명으로 설정하게 되면 키값을 생략하게 되면 된다.
        age
    }
}

const person1 = makePerson("홍길동",30);
console.log(person1);

// 생성자 object
// constructor function
//아래 있는 것은 생성자 function
const person5 = new Person("good",50);
function Person(name2, age2){
    // 객체 생성할 때 각각의 주소값을 주기 위해서 this를 사용한다.
    // this = {}  -> 얘뭐지?
    this.name2 = name2;
    this.age2 = age2;
    // return this; 가 생략됨.
}
console.log(person5);

/*
* 생성자 함수를 이용해서 객체를 생성해 배열에 저장하고
* 그 배열의 객체들을 출력하는 프로그램.
*
*
* */


function Student(name, subject, score){

    return {
        name,
        subject,
        score
    }
}

const s_list = [];
s_list.push(Student("김영찬1","수학",100));
s_list.push(Student("김영찬2","과학",100));
s_list.push(Student("김영찬3","영어",100));


for (tmp1 of s_list){
    for (tmp2 in tmp1){
        console.log(tmp1[tmp2]);
    }
}

