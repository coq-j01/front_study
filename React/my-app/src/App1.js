//       default     추가
// import E1, { E2, E3, E4, E5, E6 } from "./1-element/Element";
//  모든것 다 가져오기
// import * as E from "./1-element/Element";
// E1은 디폴트 E2는 부가적인 거

import * as E from "./1-element/Ex";

function App() {
  // 이 방식은 JSX로 렌더링하지 않고
  // React 컴퍼넌트 자체 또는 JSX 요소로 작성된 변수를 반환하는 경우
  // return E.E6;
  // 이 방식은 React의 함수형(클래스형) 컴퍼런트를
  // JSX 문법으로 호출하여 반환하는 경우.
  // return <E.Hello name="정채빈" />;
  //    function  props  value
  // return <E.Button color="red" />;
  // return <E.Namecard />;
  // return <E.Greeting name="정채빈" age="25" />;
  return <E.data />;
}

export default App;
