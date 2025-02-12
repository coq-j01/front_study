// StyledComponent1.jsx

// styled-components 모듈 사용 : JSX-html 문법, SC는 css문법을 그대로 따름.
// 모듈 설치
// npm i styled-components

import styled from "styled-components";

const Button = styled.button`
  // css 문법 사용
  color: "red";
  background-color: "navy";
  border: 1px solid green;
`;

function StyledComponent1() {
  return (
    <div>
      <Button>Normal</Button>
      <Button dark="dark">Dark</Button>
    </div>
  );
}

export default StyledComponent1;
