/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2;

/**
 * 객체 타입간의 호환성
 * -> 어떤 객체타입을 다른 객체타입으로 취급해도 괜찮을까?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌돌이",
  color: "brown",
  breed: "진도",
};

animal = dog;
//dog = animal; // 오류발생

type Book = { //슈퍼
  name: string,
  price : number,
}

type ProgrammingBook = { //서브
  name: string,
  price:number,
  skill : string,
}

let book : Book;
let programmingBook : ProgrammingBook = {
  name:"한 입 크기로 잘라먹는 리액트",
  price : 33000,
  skill : "reactjs",
}
book = programmingBook;
//programmingBook = book; // 오류발생

/**
 * 초과 프로퍼티 검사
 */

let book2 : Book = {
  name:"한 입 크기로 잘라먹는 리액트",
  price : 33000,
  //skill : "reactjs", // 초과 프로퍼티 검사로 인한 오류발생
}

//변수 활용하여 초과 프로퍼티 검사 피할 수 있음음
let book3: Book = programmingBook;

function func(book : Book){}

func({
  name:"한 입 크기로 잘라먹는 리액트",
  price : 33000,
  //skill : "reactjs", // 이 경우에도 초과 프로퍼티 검사 실행됨
})

func(programmingBook); // 변수 사용하면 마찬가지로 가능함
