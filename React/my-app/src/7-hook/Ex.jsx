// Ex.jsx
//연습문제 1: 숫자 배열의 평균값 구하기 (useMemo 사용)
// 목표:
// 사용자가 입력하는 숫자들을 배열에 추가하고, 배열의 평균값을 **useMemo**로
//   최적화하여 불필요한 재계산을 방지하세요.
// 힌트:
// 배열에 새로운 숫자가 추가될 때만 평균값을 재계산해야 합니다.

import { useState, useMemo, useCallback, useRef } from "react";

// 평균값을 구하려면 배열의 합을 배열의 길이로 나누면 됩니다.
export function Ex1() {
  const [num, setnum] = useState(0);
  const [numlist, setlist] = useState([]);

  const average = useMemo(() => {
    let sum = 0;
    if (numlist.length == 0) return 0;
    {
      /* map()=>{}이 아닌 map()=>()를 사용하면 암묵적으로 return이 적용  */
    }
    {
      numlist.map((value, index) => (sum += value));
    }
    return sum / numlist.length;
  }, [numlist]);

  function addnum() {
    setlist([...numlist, num]);
  }
  return (
    <div>
      <input type="number" onChange={(e) => setnum(parseInt(e.target.value))} />
      <button onClick={addnum}>배열추가</button>

      <h1>배열의 평균 값은 : {average}</h1>
    </div>
  );
}

// useEffect: 의존성배열이 바뀌면 업데이트 됨. 코드가 수행
// useMemo: 의존성배열이 바뀌면 업데이트된 값을 반환.
// useCallback: 의존성배열이 바뀌면 업데이트된 함수를 반환.

// 연습문제 2: 버튼 클릭 시 숫자 증가하기 (useCallback)
// 목표:
// 1. 숫자를 상태로 관리하고, 버튼을 클릭할 때마다 숫자가 1씩 증가합니다.
// 2. useCallback을 사용하여 버튼 클릭 핸들러가 컴포넌트가 리렌더링될 때마다 새로 생성되지 않도록 최적화하세요.
export function Ex2() {
  const [count, setcount] = useState(0);

  const handleIncrement = useCallback(() => {
    setcount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <p>count : {count}</p>
      <button onClick={handleIncrement}>숫자증가</button>
    </div>
  );
}

// 연습문제 3: 입력창 초기화하기 (useRef)
// 목표:
// 사용자가 입력한 텍스트를 버튼 클릭 시 초기화하고, 입력창에 포커스를 다시 설정합니다.
// **useRef**를 사용하여 입력창을 제어하세요.
// 힌트:
// 입력창에 접근하기 위해 **useRef**로 참조를 생성하세요.
// **inputRef.current.value**를 이용해 입력 값을 초기화하고, **inputRef.current.focus()**로 포커스를 설정합니다.
export function Ex3() {
  const inputRef = useRef(null); // 입력창에 대한 참조 생성

  const handleClear = () => {
    inputRef.current.value = ""; // 입력값 초기화
    inputRef.current.focus(); // 입력창에 포커스 설정
  };

  return (
    <div>
      <h1>입력창 초기화</h1>
      <input ref={inputRef} type="text" placeholder="텍스트를 입력하세요" />
      <button onClick={handleClear}>초기화 및 포커스</button>
    </div>
  );
}
