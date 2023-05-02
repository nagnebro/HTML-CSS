class Person{

    _name;
    _age;
    _height;
    _weight;
    constructor(name, age, height, weight) {

        this._name = name;
        this._age = age;
        this._height = height;
        this._weight = weight;

    }

    toString(){
        return "이름 : " + this._name + " 나이 : " + this._age + "몸무게 : " + this._height + "키 : " + this._weight;
    }

}


var s_list = []

s_list.push(new Person("김영찬1",20,60,170))
s_list.push(new Person("김영찬2",30,70,180))
s_list.push(new Person("김영찬3",40,80,190))

for( tmp of s_list){
    console.log(tmp.toString());
}