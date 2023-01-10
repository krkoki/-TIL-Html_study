// 표준내장객체(built in objects) 알아보기

// Number
let number = 273.1;
let num = Number('273.1');
console.log(num === number);

let obj = new Number(273.1); // 인스턴스 >> 객체를 생성한거라 타입은 오브젝트이다. (객체의 자료형)
console.log(typeof(number), typeof(num), typeof(obj));

let pi = Math.PI;
console.log(pi);
console.log(pi.toExponential()); // 파이값 지수형태
console.log(pi.toFixed()); // 소숫점 이하 자리수가 2개까지만
console.log(pi.toPrecision()); // 유효숫자 6개

console.log(Math.pow(2, 53)-1);

//String
let hello = "안녕못하세요" // leteral로 생성
let helloFromConstructor = new String('안녕못하세요?') // 생성자 함수로 생성

console.log(hello.length);

console.log(hello.charAt(0));
console.log(hello.charAt(1));
console.log(hello.charAt(2));
console.log(hello.charAt(3));
console.log(hello.charAt(4));
console.log(hello.charAt(5)); // 인덱싱

console.log(hello.concat(' 여러분!!')); // hello + '여러분!!'

console.log(hello.indexOf('못'), hello.indexOf('요')); // 값으로 인덱스번호 찾기

// 연습문제
// 디지털 시계 (00:00 ~ 23:59) 가 있다.
// 디지털 시계에서 3이라는 숫자가 표시되는 시간은 하루에 총 몇초인가?

let totalSeconds = 0;
for (let hour = 0; hour = 24; hour++){
    for(let minute = 0; minute < 60; minute++){
        let display = String(hour) + ':' + String(minute);
        if (display.indexOf('3') >= 0)
            totalSeconds += 60;
    }
}
console.log(totalSeconds);

// 정규표현식(Regular Expression)
let sample = 'A quick brown for 갈색의 재빠른 여우가 over the lazy dog';
let newStr = sample.replace(/[A-Z]/, ' ');
console.log(newStr);
newStr = sample.replace(/[ㄱ-힣]/g, ''); // 여기서 g는 모두 찾으라는 뜻(global)
console.log(newStr);

// 문자열 일부분 추출
let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 7+6)); //Banana (시작인덱스, 끝인덱스)
console.log(str.slice(7)); //Banana, Kiwi (시작인덱스 ~ 끝)
console.log(str.substring(7, 13)); //Banana (시작인덱스, 끝인덱스)

const fruits = str.split(',');
console.log(fruits);

// 연습문제
// 1에서 1000까지 숫자중에서 0은 몇번 1은 몇번 ....9는 몇번 나오는지
let numbers = '';
for (let i = 1; i <= 1000; i++){
    numbers += String(i);
}
let obj1 = {}
for (let i = 0; i < 10; i++){
    obj1[String(i)] = numbers.split(String(i)).length-1;
}    
console.log(obj1)

// Date 객체
let today = new Date();
console.log(today.toDateString()); // 날짜, 요일
console.log(today.toLocaleDateString()); // Timezone을 반영한 현재시간

// 23-01-10 13:10:00 함수로 만들기
function myLocalTime(date) {
    let year = String(date.getFullYear()).substring(2); // 2023 > 23
    let month = String(date.getMonth() +1);
    month = month.length == 1 ? '0' + month : month; // 9 > 09
    let day = `${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}`; // 1 > 01
    let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours(); // 1 > 01
    let minute = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(); // 1 > 01
    let second = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds(); // 1 > 01
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}
console.log(myLocalTime(today));

// 문자열로 생성
const strDate = new Date('2022-09-14');
console.log(myLocalTime(strDate));

// 시간요소로 생성
const elementDate = new Date(2022, 9-1, 14, 9, 50); // 월은 1을 빼줘야함.
console.log(elementDate);
console.log(myLocalTime(elementDate));

// Array 생성
const car = ['Saab', 'Volvo', 'BMW'];
const persons = new Array('James', 'Maria'); // Array가 객체이므로 생성자 함수를 사용해서 생성이 가능하다.

// Array 속성
console.log(car.length, persons.length);
console.log(car[car.length-1]);

// 마지막 요소 제거 - 배열이 변함
let car1 =car.pop();
console.log(car1);

// 마지막 요소 추가 - 배열이 변함
car.push('Benz');
console.log(car);

// 배열의 요소 순서를 뒤집기(reverse) - 배열이 변함
console.log(car.reverse());
console.log(car);

// 배열의 요소를 정렬(sort) - 배열이 변함
console.log(car); // B V S
car.sort(); // 오름차순
console.log(car); // B S V

// 내림차순정렬
const number3 = [45, 67, 53, 97, 82];
number3.sort().reverse();
console.log(number3);