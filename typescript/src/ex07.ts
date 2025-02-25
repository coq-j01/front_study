// ex07.ts

// 합집합 타입 - Union
let a: string | number | boolean
a=123
a='hong'
a=true

let arr:(string | number | boolean)[] = [123,'hong',true]

// 객체 타입
type Dog={
  name:string,
  color:string,
}
type Person={
  name:string,
  Lang:string
}
type Union1 = Dog | Person
let union1:Union1={
  name:"",
  color:"",
}
let union2:Union1={
  name:"",
  Lang:"",
}
let union3:Union1={
  name:'',
  color:'',
  Lang:''
}
// let union4:Union1={
//   name:'', // 이 경우 오류
// }

// 교집합 타입 - intersection
let neverVar : string & number //never타입으로 추정

type Intersection = Dog&Person

let inter1 : Intersection={
  name:'',
  color:'',
  Lang:'',
  //3개 다 넣었을 때만 오류 안 남
}

// 객체 타입의 호환성
let dog:Dog
let person:Person

dog = inter1 //타입 호환됨
person = inter1 //타입 호환됨
//inter1 = dog //타입 호환안됨.
//inter1 = person //타입 호환안됨.