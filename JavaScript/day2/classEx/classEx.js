
//클래스
//- 객체를 만들기 위한 설계도
//- 객체를 찍어내는 틀!


//클래스
// 데이터(저장해야 되는 것)
// 메서드
//키워드 class

//캡슐화
// - 클래스와 관련된 것들을 하나로 묶어서 관리
// - 정보를 은닉

class Hero{
    //fields(상태)
    name;
    level;
    hp;
}


// 동물 저장 클래스


//클래스 안에서는 변수를 생성할때 let, var const를 선언해주지 않아도 된다.
//Object멤버는 원래 key(변수명): value(값)의 형태로 작성되는데
//key가 파이썬의 딕셔너리처럼 어떠한 문자열이나 숫자나 이런 게 아니라 변수명이 된다는 것이
//조금은 다른 차이점이다.
class Dog {
    _name;
    _breed;
    _age;

    bark(){
        console.log("wal wal");
    }
    sit(){
        console.log("앉았다");
    }
    lieDown(){
        console.log("엎드리기");
    }
    //생성자 작성방식이 자바와 다르다. 키워드 constructor를 사용한다
   constructor(name,breed, age){
        this._name = name;
        this._breed = breed;
        this._age = age;

   }
}

const dog1 = new Dog("호두","웰시코기",20);
console.log(dog1)
dog1.bark();
dog1.sit();
dog1.lieDown();

dog1._age += 10;
dog1['_age'] += 10;

console.log(dog1._age)

// 상속구조 만들기

class Animal {
    _name;
    _breed;
    _age;

    walk(){
        console.log("걷는다");
    }

    constructor(name, breed, age){
        this._name = name;
        this._breed = breed;
        this._age = age;
}
}

class Cat extends Animal{

    walk(){
        console.log("사뿒사뿐 걷는다"); //오버라이딩
    }
}

const cat1 = new Cat("냥이","러시안?",7);
console.log(cat1);
cat1.walk();


//instanceOf()
//왼쪽에 있는 객체가 오른쪽에 있는 클래스의 인스턴스 인지 확인

class Shape{
    _width;
    _height;
    _color;
    constructor(width, height, color){
        this._width = width;
        this.width = width*width;
        this._height = height;
        this._color = color;
        // _width  = width;

        //생성자에서는 this의 변수로 꼭 인스턴스 멤버, 즉 위의 변수 3개(_width, _height, _color)로
        //지정해야만 하는 것은 아니다. 위와 같이 this.width를 생성하게 되면 아래 메서드에서도
        //사용이 가능하다.
        //내가 궁금한 것은 자바에서는 기존에 인스턴스 멤버는 굳이 this없이도 접근이 가능했는데
        //(this)를 사용하는 이유가 매개변수와 구분하기 위함도 있고(어차피 저장되는 변수는 본인의 인스턴스 멤버가 우선순위임)
        //코드의 가독성을 높여주기 떄문이었는데 여기서는 변수에 this를 붙여주지 않으면 아예 접근이 안된다.
    }

    draw(){
        console.log(this._width+"의 길이로 그립니다");
        console.log(this.width);
        //자바에서 인스턴스 메서드에 위치한 이 메서드는
        //width
    }

    getArea(){
        console.log(this._width*this.height);
    }
}



class Circle extends Shape{

    getArea() {
        console.log(this._width *this._height *2)
    }
}

class Rectangle extends Shape{

    toString(){// toString메서드 오버라이딩.
        return this.width +"만큼 너비입니다";
}

}
const circle1 = new Circle(30,50,"red");
console.log(circle1 instanceof Shape);
console.log(circle1 instanceof Rectangle);
circle1.draw();
circle1.getArea()

//toString 오버라이딩 메서드 테스트
const rect1 = new Rectangle(50,50,"green");
console.log(rect1.toString());
console.log(circle1.toString())
console.log(rect1);
console.log(typeof(rect1))
// java와의 차이점이라면 참조변수의 toString은 생략되는 것이 아닌 직접적으로 불러줘야 한다.
// toString을 이용해 출력하지 않을시에는 그 객체가 담고 있는 키와 value값을 보여주게 된다.
// 마치 java에서 toString을 오버라이딩 하지 않았을 때 인스턴스의 주소값이 나온것과 같은 형태이다.
// 아마 내 생각에 java에서는 print메서드의 매개변수로 인스턴스가 들어왔다면 그 인스턴스의
// toString을 실행시키기 때문에 toString이 생략돼있는 것과 마찬가지이고
// 자바스크립트에서는 log창에서 인스턴스를 출력한다고 하면 toString이 아닌
// 다른 메서드?를 통해 key와 value를 보여주는 방법을 사용하고 있는 것 같다.
// toString과 그냥 객체를 출력했을 때 출력값이 다른 것이 그 증거이다.