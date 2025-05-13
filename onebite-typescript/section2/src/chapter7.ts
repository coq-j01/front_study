// void
// void -> 공허 -> 아무것도 없다
// 아무것도 없음을 의미하는 타입

function func1(): string {
  // 문자열 반환을 의미
  return "hello";
}

function func2(): void {
  console.log("hello");
}

let a: void;
// a=1;
// a="hello";
// a={};
// a= ()=>{};

a = undefined;

function func3(): undefined {
  console.log("hello");
}
function func4(): null {
  console.log("hello");
  return null;
}

// never
// never -> 존재하지 않는
// 불가능한 타입

function func5(): never {
  while (true) {} // 무한루프
}
function func6(): never {
  throw new Error();
}

let a2: never;
// a2 = 1;
// a2 = {};
// a2 = "";
// a2 = undefined;
// a2 = null;

let anyVar: any;
// a2 = anyVar;
