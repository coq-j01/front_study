//Ex.jsx

import { useState } from "react";

// 연습문제 1: 입력된 텍스트를 화면에 바로 보여주기
// 설명: 입력 필드에 사용자가 입력한 텍스트를 바로 화면에 표시하세요.
// 힌트: onChange 이벤트
export function Showtext() {
  const [inputtext, settext] = useState("");
  // 매개변수 'event'는 이벤트가 발생한 태그의 정보를 가져온다.
  function onChange(event) {
    // 값이 바뀔때마다 setname으로 name값을 변경해준다.
    settext(event.target.value);
  }
  return (
    <div>
      {/* onChange 이벤트가 발생하면 (input 값이 바뀌면) onChange 함수를 실행한다. */}
      <input type="text" onChange={onChange} />
      {/* onChange={(e)=>settext(e.target.value)} */}
      <p>{inputtext}</p>
    </div>
  );
}

// 연습문제 2: 버튼을 클릭할 때마다 색상 변경하기
// 설명: 버튼을 클릭할 때마다 배경 색상이 빨강, 초록, 파랑으로
//    순차적으로 변경되도록 만드세요.
export function Clickbtn() {
  const [color, setcolor] = useState("");
  function Changecolor() {
    if (color === "" || color === "blue") {
      setcolor("red");
    } else if (color == "red") {
      setcolor("green");
    } else {
      setcolor("blue");
    }
  }
  return (
    <div style={{ backgroundColor: color, height: 100 }}>
      <button onClick={Changecolor}>색깔 변경</button>
    </div>
  );
}

// 연습문제 3: 체크박스 상태 관리하기
// 설명: 체크박스를 클릭하면 "ON" 또는 "OFF"라는 텍스트가
//   화면에 표시되도록 만드세요.
// 힌트: onChange, checked 속성을 이용
export function Checkchk() {
  const [checked, setcheck] = useState(false);
  // function Checking() {
  //   setcheck(!checked);
  // }
  return (
    <div>
      {/* <input type="checkbox" checked={checked onChange={Checking} /> */}
      <input
        type="checkbox"
        checked={checked}
        onChange={() => {
          setcheck(!checked);
        }}
      />
      <p>{checked ? "ON" : "OFF"}</p>
    </div>
  );
}

// 연습문제 4: 숫자 제한 걸기
// 설명: 숫자를 증가시키되, 숫자가 10 이상이면
//   더 이상 증가하지 않도록 제한하세요.
export function Plusbtn() {
  const [count, setcount] = useState(0);

  function Counting() {
    if (count < 10) {
      setcount(count + 1);
    } else {
      alert("10개 개수제한입니다.");
    }
  }
  return (
    <div>
      <p>숫자 카운팅 : {count}</p>
      <button onClick={Counting}>+1</button>
    </div>
  );
}

// 연습문제 5: 버튼을 클릭할 때마다 리스트에 항목 추가하기
// 설명: 버튼을 클릭하면 입력 필드의 값을 리스트에 추가하고,
//   추가된 항목들을 화면에 표시하세요.
// 힌트: [], ["aaa", "bbb", "ccc"]
export function Addstr() {
  const [currentstr, addstr] = useState([]);
  const [currenttxt, addtxt] = useState("");

  const addItem = () => {
    if (currenttxt.trim() !== "") {
      //trim 공백제거
      addstr([...currentstr, currenttxt]);
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="리스트를 입력하세요"
        valule={currenttxt}
        onChange={(e) => addtxt(e.target.value)}
      />
      <button onClick={addItem}>리스트 추가</button>
      {/* <button
        onClick={() => {
          addstr([...currentstr, currenttxt]);
        }}
      >
        리스트 추가
      </button> */}
      <ul>
        {currentstr.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}
