// const currentTime = new Date();
// if (currentTime.getHours() < 12){
//     console.log(`${currentTime.toLocaleString()} 은/는 오전입니다.\n`);
// }else{
//     console.log(`${currentTime.toLocaleString()} 은/는 오후입니다.\n`);
// }


// a = 값1 if 조건 else 값2 ==> (js) a 조건 ? 값1 : 값2
//            파이썬                 자바스크립트

const ampm = currentTime.getHours < 12 ? '오전' : '오후';
console.log(`${currentTime.toLocaleString()} 은/는 ${ampm}입니다.\n`);