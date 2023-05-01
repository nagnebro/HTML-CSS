//배열

//[값1,값2,값3]
//자바와 다르게 값이 고정돼있지 않고 다른 타입들을 저장할 수 있다.

let arr1 = [1,"java",3.14];

let arr2 = [];

let arr3 = Array(2,true);

let arr4 = ['javascript'];

arr4[1] = 10;
arr4[2] = "hi";

console.log(arr4);
console.log(arr4.length);

arr4.push(1000);

console.log(arr4);
arr4[arr4.length] = 123456; // 배열의 마지막 위치에 새로운 값 지정
console.log(arr4[arr4.length]); // 없는 값을 출력

document.write(arr4);

let arr5 = [5,3,1,7,2];
arr5.sort();
console.log(arr5)

//isArray()
//instanceof

// 틱택토




