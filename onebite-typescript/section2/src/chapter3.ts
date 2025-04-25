//object
let user: {
  id?: number;
  name: string;
} = {
  id: 1,
  name: "이정환",
};

user.name = "정채빈";

user = {
  //id를 모를 때
  name: "홍길동",
};

// let dog: {
//   name: string;
//   color: string;
// } = {
//   name: "돌돌이",
//   color: "brown",
// };

let config: {
  readonly apiKey: string; //절대 값이 수정되면 안되는 경우에 사용
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "hacked";
