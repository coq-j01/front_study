// ex03.ts

// 객체 타입
let user:object = {
  id:1,
  name:'홍길동'
}
// 'object' 형식에 'id' 속성이 없습니다.
// user.id

// 객체 리터럴 타입
let user2: {
  id: number,
  name: string
}={
  id:1,
  name:'홍길동'
}
// (property) id:number
user2.id

let user3: {
  // 선택적 프로퍼티를 통해 속성 생략 가능
  id?: number,
  name: string
}={
  // id:1, //둘 중 하나라도 지워버리면 오류, 선택적 프로퍼티 ? 사용하여 오류 방지
  name:'홍길동'
}

let config:{
  // 읽기 전용 속성으로 지정
  readonly apiKey:string
} = {
  apiKey:"MY API KEY"
}
//config.apiKey="12233444" //읽기 전용이라 key 바꾸려고 하면 오류