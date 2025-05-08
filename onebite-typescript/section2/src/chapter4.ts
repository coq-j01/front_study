// 타입 별칭
type User = {
  //객체타입을 정의할 것이므로 중괄호 열어주기!
  id: number;
  name: String;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

//동일한 스코프에 타입 별칭 중복 불가능!
//type User = {} //오류 발생!!

// 따로 함수 선언 시 선언한 User는 해당 함수에서만 사용가능하여 중복 허용
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "정채빈",
  nickname: "winterlood",
  birth: "2001.11.03",
  bio: "안녕하세요",
  location: "서울시",
};

let user2: User = {
  id: 2,
  name: "홍길동",
  nickname: "gildong",
  birth: "1999.01.01",
  bio: "안녕하세요",
  location: "서울시",
};

// 인덱스 시그니처
type CountryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
}; // 여러국가에 대해 코드가 존재한다면 그 많은 국가들을 다 하나하나 타입 지정해야하나?

//규칙 확인 -> key,value 모두 string 타입임을 확인
type CountryCodes2 = {
  [key: string]: string;
};

let countryCodes: CountryCodes2 = {
  //key:국가이름 value: 영문두자리인 객체
  Korea: "ko",
  UnitedState: "us",
  UnitedKingdom: "uk",
};

type CountryNumberCodes = {
  [key: string]: number;
  Korea: number; // Korea 프로퍼티를 반드시 가지고 있어야함
};

let countryNumberCodes: CountryNumberCodes = {
  //국가별 숫자 코드
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 826,
};

// 주의점!
let countryNumberCodes2: CountryNumberCodes = {
  Korea: 410,
};
// 타입오류 발생하지 않음!
// 인덱스 시그니처는 위 규칙을 위반하지만 않으면 모든 객체 허용(빈 객체까지)

// type CountryNumberAndStringCodes = {
//   [key: string]: number;
//   Korea : string; // Korea 프로퍼티를 반드시 가지고 있어야함
// };

// let countryNumberAndStringCodes: CountryNumberAndStringCodes = {
//   Korea : "ko",
// }
