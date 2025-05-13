// enum 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//const user1 = {
//   name: "이정환",
//   role: 0, // 0 <= 관리자
// };
// const user2 = {
//   name: "홍길동",
//   role: 1, // 1 <= 일반 유저
// };
// const user3 = {
//   name: "아무개",
//   role: 3, // 2 <= 게스트
// };
// 어떤 번호가 관리자였는지 헷갈릴 수 있음
// 이런경우 enum을 활용하면 효율적으로 이러한 실수 막을 수 있음
var Role;
(function (Role) {
    Role[Role["ADMIM"] = 0] = "ADMIM";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
const user1 = {
    name: "이정환",
    role: Role.ADMIM,
};
const user2 = {
    name: "홍길동",
    role: Role.USER,
};
const user3 = {
    name: "아무개",
    role: Role.GUEST,
};
// console.log(user1, user2, user3);
// 숫자를 따로 지정하지 않아도 자동으로 순서대로 0,1,2가 지정된다.
var Role2;
(function (Role2) {
    Role2[Role2["ADMIM"] = 10] = "ADMIM";
    Role2[Role2["USER"] = 11] = "USER";
    Role2[Role2["GUEST"] = 12] = "GUEST";
})(Role2 || (Role2 = {}));
const user4 = {
    name: "이정환",
    role: Role2.ADMIM,
};
const user5 = {
    name: "홍길동",
    role: Role2.USER,
};
const user6 = {
    name: "아무개",
    role: Role2.GUEST,
};
// console.log(user4, user5, user6);
var Language;
(function (Language) {
    Language["korean"] = "ko";
    Language["english"] = "en";
})(Language || (Language = {}));
const user7 = {
    name: "이정환",
    role: Role2.ADMIM,
    language: Language.korean,
};
console.log(user7);
export {};
