//
// console.log(var1);
// var var1 = 10;
// console.log(var1);
//
// // console.log(var2);
// // let var2 = 10;
// // console.log(var2);
//

class User{

    _name;
    _age;

    constructor(name,age){
        this._name = name;
        this._age = age;
    }
}



let tmp = {
    name: "김영찬",
    age : 25
}

console.log(tmp);
console.log(typeof(tmp));

const tmp2 = new User("김영찬2",30);

console.log(tmp2);
console.log(typeof(tmp2));




const pro1 = {
    name : "user",
    age : 20
}

const a = pro1.name;
const b = pro1['name'];


let list = [11,22,33,44,55];
for (i in list){
    console.log(i);
}
for (j of list){
    console.log(j)
}

let obj1 = {
    name:'me',
    age : 30
}
for (k in obj1){
   console.log(obj1[k]);
}


const list2 = [
    {name : "kim" , age : 10},
    {name : "lee" , age : 20},
    {name : "park" , age : 30}
]

for (list_value of list2){
    for(property_value in list_value){
        console.log(list_value[property_value]);
    }
}