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

enum Role { //타입별칭과 달리 = 없이 바로 중괄호 열음
  ADMIM = 0,
  USER = 1,
  GUEST = 2,
}

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
enum Role2 {
  ADMIM = 10,
  USER,
  GUEST,
}
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
console.log(user4, user5, user6);
