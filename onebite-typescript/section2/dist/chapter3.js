//object
let user = {
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
let config = {
    apiKey: "MY API KEY",
};
export {};
// config.apiKey = "hacked"; //읽기 전용 속성이므로 apiKey에 할당 불가능!
