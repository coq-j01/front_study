// ex09.ts

//타입좁히기

function func1(value:number|string){
  //value.toFixed() //number타입 실수형으로 바꾸기, string타입에서 사용 불가로 오류
  //value.toUpperCase() //대문자로 바꾸기, string타입에서 사용, number타입 사용 불가로 오류
  if(typeof value === 'number'){
    value.toFixed()
  }
  else if(typeof value ==='string'){
    value.toUpperCase()
  }
}