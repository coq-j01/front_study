//ex10.ts
// 함수 타입

function func1(a: number, b:number):number{
  return a+b
}

//반환타입 생략 가능 : 타입추론
function func2(a: number, b:number){
  return a+b
}

//매개변수 기본값
function func3(name:string='홍길동'){ // 기본값 : 홍길동
  return name
}
console.log(func3()); // 홍길동 출력
console.log(func3('김철수')); //김철수 출력

// 선택적 매개변수
function func4(name:string, age?:number){
  return name
}
console.log(func3('홍길동'));

// 나머지 매개변수
function getSum2(a:number, b:number, c:number){}
function getSum(...rest:number[]){
  let sum=0
  rest.forEach((value)=>{sum+=value})
  return sum;
}
console.log(getSum(1,2,3))

// 함수 타입 표현식
const add = (a:number, b:number)=>a+b
const sub = (a:number, b:number)=>a-b
const mul = (a:number, b:number)=>a*b
const div = (a:number, b:number)=>a/b //a:number, b:number 공통됨

type Operation = (a:number, b:number)=>number
const add2:Operation = (a,b)=>a+b
const sub2:Operation = (a,b)=>a-b
const mul2:Operation = (a,b)=>a*b
const div2:Operation = (a,b)=>a/b 

// 호출 시그니처
type Operation2 = {
  (a:number, b:number):number
}
const add3:Operation2 = (a,b)=>a+b