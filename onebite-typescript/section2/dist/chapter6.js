// any
// 특정 변수의 타입을 우리가 확실히 모를 때 사용
let anyVar = 10;
anyVar = "hello";
// 모든 타입이 될 수 있다.
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();
anyVar.toFixed();
let num = 10;
num = anyVar;
export {};
