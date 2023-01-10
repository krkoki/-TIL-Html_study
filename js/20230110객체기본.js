// 배열 - 객체
let arrayPersonInfo = ['제임스', 28, '남자'];

// 딕셔너리 - 객체
let personalIfo = {
    'name' : '제임스', 'age':28, 'gender':'남자'
}

console.log(personalIfo['name']);
// >>결과값은 제임스

let maria = {name:'마리아', age:24, gender:'여자'};
console.log(maria.age);
// 이런방법으로도 접근 가능.

// key 값을 변수(문자열)로 받는경우
const key = 'age';
// maria.key 와 같이 사용하면 안됨.
console.log(maria[key], maria['gen'+'der']);

// for 반복문을 사용하여 key값 가져오기
for (let key in maria) {
    console.log(key, maria[key]);
}

const james = {'name' : '제임스', 'age':28, 'gender':'남자'};
const persons = [james, maria];
for (let person of persons){ // persons은 배열이기에 for ~ of
    for (let key in person){ // person은 객체이므로 for ~ in
        console.log(key, person[key]);
    }
}

// 객체 안에 사용되는 함수를 메소드(method)라 한다.
// 객체 : 속성 (property, attribute) + 메소드(method)

const maria2 = {
    name: '마리아', 
    age: 24, 
    gender: '여자',
    intro : function(){
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`)
    }; // 배열안에 함수를 넣어줄 수 있다.
}
console.log(maria2)
maria2.intro()

const james2 = {
    name: '제임스', 
    age: 28, 
    gender: '남자',
    intro : function(){
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`)
    }; // 배열안에 함수를 넣어줄 수 있다.
}
console.log(james2)
james2.intro()

// prototype - 옛날 javascript에서 제공하는 방법
// 파이썬에서 Class를 만드는 방식과 유사
function Person(name, age, gender) { // 생성자
    this.name = name;
    this.age = age;
    this.gender = gender;

    Person.prototype.intro = function(){
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`)
    }
}
var james3 = new Person('제임스', 28, '남성');
var maria3 = new Person('마리아', 24, '여성');
james3.intro();
maria3.intro();

// 요즘 클래스를 사용해서 객체를 찍어내는 틀 만들기
class Person2 {
    constructor (name, age, gender) { // 속성
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    intro() { // 메소드
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`)
    }
}
var james3 = new Person2('제임스', 28, '남성');
var maria3 = new Person2('마리아', 24, '여성');
console.log(james3);
console.log(maria3);
james3.intro();
maria3.intro();



// 상속(Inheritance), 오버라이딩(Overriding)
class Person3 {
    constructor (name = '홍길동', age=25, gender='남자') { // 속성값 직접넣음.
        this.name = name;
        this.age = age;
        this.gender = gender; 
    }
        toString () {
            console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`)
        }
}
const hong = new Person3();
console.log(hong.toString);

class Student extends Person3 { // 상속
    constructor (name, age, gender, scholarship=100000){
        super(name, age, gender);
        this.scholarship = scholarship;
    }
    toString() {
        return super.toString() + `\n 장학금은 ${this.scholarship}원을 받았습니다.`
    }
}
const student = new Student('성춘향', 17 , '여자', 200000);
console.log(student.toString());


// 상속(Inheritance) 해보기
// Teacher 클래스 = Person3 상속해오고, 속성에다가 담당부서를 추가해보기, toString()메소드를 재정의
// 담당부서 = dept
// 제임스, 40, 남자, JS_B반 '담당반은 JS_B반 입니다.'
class Teacher extends Person3 {
    constructor(name, age, gender, dept){
        super(name, age, gender);
        this.dept = dept;
    }
    toString() {
        return super.toString() + `\n 담당반은 ${this.dept}입니다.`
    }
}
const teacher = new Teacher('제임스', 40, '남자', 'JS_B반');
console.log(teacher.toString());

// 연습문제 : 장바구니
// Product 클래스를 정의
// 속성은 (이름, 가격)
// 메소드는 (toString()) >> return값이 제품명 : 000, 가격 : 0000원
// 5가지 상품을 만듦(instance)
// 마우스 3000, 키보드 20000, USB 32g 15000, 모니터 200000, 헤드셋 35000
// json을 반복문으로 가져와서 추가(push)하고 합을 구하기

class Product {
    constructor (name, price){
        this.name = name;
        this.price = price;
    }
    toString(){
        return `제품명 : ${this.name},\t 가격 : ${this.price} 원`;
    }
}

const mouse = new Product ('마우스', 3000);
const keyboard = new Product ('키보드', 20000);
const usb = new Product ('USB 32giga', 15000);
const monitor = new Product ('모니터', 200000)
const headset = new Product ('헤드셋', 35000);

// Cart 클래스 정의(속성 : 상품, 수량 
// 메소드 : add(), sum())
// Cart에 물건을 다 담은 후 총 가격을 구하세요.

class Cart{
    constructor(){
        this.cart = [];
    }
    add(product, quantity){
        if (quantity <= 0)
            return;
        this.cart.push({product, quantity});
    }
    sum(){
        let totalPrice = 0;
        for (let item of this.cart){
            totalPrice += item.quantity * item.product.price
        }
        return totalPrice;
    }
    toString(){
        let result = '';
        for (let item of this.cart){
            result += item.product.toString() + `\t 수량 : ${item.quantity}\n`
        }
        result += `합계 : ${this.sum()}`;
        return result;
    }
}
let cart = new Cart();
cart.add(mouse, 4);
cart.add(usb, 10);
cart.add(monitor, 2);
console.log(cart.toString());