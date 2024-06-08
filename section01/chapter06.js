let num = 10;
let str = "20";

const result = num + str;
console.log(result); // 1020

let str2 = "10개임";
let strToNum = parseInt(str2);
// parseInt() 함수는 문자열을 정수로 변환한다. 
// 글자가 숫자로 시작하지 않으면 NaN을 반환한다. 
// 숫자 뒤에 글자가 붙어있어도 숫자만 변환한다.

let num1 = 20;
let numToStr = String(num1);

console.log(num1+"입니다"); // 10
//num1을 문자열로 변환 안했어도 자동으로 문자열로 변환되는 이유는 