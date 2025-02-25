//ex12.ts
// 제네릭 : 타입을 동적으로 결정해주는 기능

function func1(value:number|string|null){}

function func2(value:any){}

function func3<T>(value:T){ //굳이 T일 필요없지만 T를 많이 씀
  console.log(typeof value);
}
func3<number>(10) //number
func3<string>('hong') //string
func3<number[]>([1,2,3]) // object
func3<Function>(()=>{}) //function
func3<{name:string}>({name:'hong'}) //object

function func4<T,U>(a:T, b:U){
  console.log(typeof a);
  console.log(typeof b);
}
func4<number,string>(10,'hong') //타입 명시적 선언
func4(10,'hong') //타입 추정