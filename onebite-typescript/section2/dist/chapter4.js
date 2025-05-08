//동일한 스코프에 타입 별칭 중복 불가능!
//type User = {} //오류 발생!!
// 따로 함수 선언 시 선언한 User는 해당 함수에서만 사용가능하여 중복 허용
function func() {
}
let user = {
    id: 1,
    name: "정채빈",
    nickname: "winterlood",
    birth: "2001.11.03",
    bio: "안녕하세요",
    location: "서울시",
};
let user2 = {
    id: 2,
    name: "홍길동",
    nickname: "gildong",
    birth: "1999.01.01",
    bio: "안녕하세요",
    location: "서울시",
};
let countryCodes = {
    //key:국가이름 value: 영문두자리인 객체
    Korea: "ko",
    UnitedState: "us",
    UnitedKingdom: "uk",
};
let countryNumberCodes = {
    //국가별 숫자 코드
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};
// 주의점!
let countryNumberCodes2 = {
    Korea: 410,
};
export {};
// 타입오류 발생하지 않음!
// 인덱스 시그니처는 위 규칙을 위반하지만 않으면 모든 객체 허용(빈 객체까지)
// type CountryNumberAndStringCodes = {
//   [key: string]: number;
//   Korea : string; // Korea 프로퍼티를 반드시 가지고 있어야함
// };
// let countryNumberAndStringCodes: CountryNumberAndStringCodes = {
//   Korea : "ko",
// }
