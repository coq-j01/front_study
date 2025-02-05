//Ex.jsx
// 1. 문제 1: 단일 Props 전달하기
// 목표: 단일 `props`를 활용하여 간단한 문구를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `Greeting`이라는 자식 컴포넌트를 만드세요.
// - `name`이라는 `props`를 받아 "환영합니다,
//   [이름]님!"이라는 문구를 렌더링합니다.

import { Button } from "../1-element/Element";

// - 부모 컴포넌트에서 여러 사람의 이름을 넘겨 출력합니다.
function Greeting(props) {
  return (
    <div>
      <p>환영합니다, {props.name}님!</p>
    </div>
  );
}
export function Hello() {
  return (
    <>
      <Greeting name="정채빈" />
      <Greeting name="홍길동" />
    </>
  );
}

// 2. 문제 2: 여러 Props 전달하기
// 목표: 여러 개의 `props`를 활용하여 사용자의 정보를 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `UserCard`라는 자식 컴포넌트를 작성하세요.
// - `name`, `age`, `job`을 `props`로 받아 사용자 정보를 표시합니다.
// - 부모 컴포넌트에서 두 명의 사용자 정보를 전달해 렌더링합니다.
function UserCard(props) {
  return (
    <div>
      <p>
        {props.name}
        {props.age}살, 직업은 {props.job}입니다.
      </p>
    </div>
  );
}

export function Info() {
  return <UserCard name="정채빈" age={25} job="학생" />;
}

// 3. 문제 3: 배열 Props 전달하기
// 목표: 배열 데이터를 `props`로 전달하여 리스트 형태로 출력하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ItemList`라는 자식 컴포넌트를 작성하세요.
// - `items`라는 배열을 `props`로 받아 `<li>` 태그로 각 항목을 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 다른 배열을 전달해 두 개의 목록을 출력합니다.
function ItemList(props) {
  return (
    <ul>
      {props.item.map((value, index) => (
        <li key={index}>{value}</li>
      ))}
    </ul>
  );
}

export function Item() {
  const eng = ["A", "B", "C"];
  const kor = ["가", "나", "다"];
  return (
    <>
      <ItemList item={eng} />, <ItemList item={kor} />
    </>
  );
}

// 4. 문제 4: 이벤트 Props 전달하기
// 목표: 버튼을 클릭했을 때 이벤트를 처리하는 컴포넌트를 작성하세요.
// 요구사항:
// - `ClickButton`이라는 자식 컴포넌트를 작성하세요.
// - 부모 컴포넌트에서 클릭 시 경고창이 뜨도록 이벤트 핸들러를 전달하세요.
function ClickButton(props) {
  return <button onClick={props.ClickFunc}>눌러주세요</button>;
}

export function ClickFunc() {
  function EventHandle() {
    alert("경고");
  }
  return <ClickButton ClickFunc={EventHandle} />;
}

// 5. 문제 5: children을 이용한 컴포넌트 구성
// 목표: `children`을 활용하여 컴포넌트 내부에서 콘텐츠를 자유롭게 구성하는 연습을 합니다.
// 요구사항:
// - `InfoCard`라는 자식 컴포넌트를 작성하세요.
// - `title`이라는 `props`와 `children`을 사용하여 제목과 본문 콘텐츠를 렌더링합니다.
// - 부모 컴포넌트에서 두 개의 카드를 렌더링하세요.]
// 자식 컴퍼넌트(child component)
// 자식 요소 (child element)
function InfoCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h3>{props.children}</h3>
    </div>
  );
}
export function Card() {
  return (
    <InfoCard title="카드타이틀">
      <p>카드에 대한 부가적인 설명</p>
    </InfoCard>
  );
}
