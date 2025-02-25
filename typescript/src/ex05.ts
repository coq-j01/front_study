// ex05.ts

// 열거형 타입(js에서는 존재하지 않음)
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

// ex) 자동차 게임
let myCarType = 0; //0 세단, 1 스포츠카, 2 SUV, 3 지프

enum CarType{
  // 기본값 0부터 자동 대입
  Sedan, //0
  Sport, //1
  SUV, //2
  Jeep //3
}
myCarType=CarType.Sedan
myCarType=CarType.Sport
myCarType=CarType.SUV
myCarType=CarType.Jeep

enum Lang {
  korean='ko',
  english='en',
}
let user={
  name:'홍길동',
  Lang:Lang.korean,
  car:CarType.Sedan,
}