// ex06.ts

// unknown 타입 : 모든 타입의 수퍼셋(모집합)

let unknownVar:unknown

// 모든 타입의 값이 들어갈 수 있다.
unknownVar =123
unknownVar='hong'
unknownVar=()=>{}

unknownVar =123
let num:number
// 타입 좁히기
if(typeof unknownVar == 'number'){
  num = unknownVar
}

// any 타입
// 타입을 무시하는 타입 - 가급적 제한적인 상황에서만 사용
// 어떠한 타입이든 값이 들어간다.
let anyVar : any = 10

let num2:number=20
num2 = anyVar
let str:string
str =anyVar
// *어떤 타입인지 전혀 모르는 상황에서 일단 값을 받아야 될 때같은 제한적인 상황에서만 사용

// void
// 공허한 상태 - 아무것도 없는 상태
// 함수의 반환값의 타입이 없을 때 사용
function myFunc():void{
  console.log('hello');
  return;
}
function myFunc2():number{
  return 10;
}

// never 타입
// 존재하지 않는, 말도 안되는, 불가능한
function myFunc3():never{
  // ex) 무한루프 -> 반환할 수 없는 상황
  while(true){}
}

function myFunc4():never{
  throw new Error() // 강제 예외(오류) 발생
}