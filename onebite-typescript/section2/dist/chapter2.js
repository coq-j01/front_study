// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "chaebin"];
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr = [1, "hello"];
//다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
// 튜플
// 길이와 타입이 고정된 배열
let tup1 = [1, 2];
// tup1 = [1,2,3];
// tup1 = [1, "hello"];
let tup2 = [1, "2", true];
tup1.push(1); // 배열 메서드를 사용할 때 오류 발생하지 않음
tup1.pop();
export {};
// const users=[
//   ["정채빈",1],
//   ["이아무개",2],
//   ["김아무개",3],
//   ["박아무개",4],
//   [5,"최아무개"], // 순서와 위치가 다름
// ]
// const users2: [string,number][]=[
//   ["정채빈",1],
//   ["이아무개",2],
//   ["김아무개",3],
//   ["박아무개",4],
//   [5,"최아무개"], // 오류 발생!
// ]
