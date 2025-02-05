// Ex.jsx
// 연습문제1: 컴포넌트 마운트 시 콘솔에 메시지 출력하기
// 목표: 컴포넌트가 마운트될 때 콘솔에 "컴포넌트가 마운트되었습니다." 메시지를 출력하세요.
// 요구사항:
// useEffect를 사용하여 컴포넌트가 마운트될 때 한 번만 실행되도록 설정하세요.

import { Component, useEffect, useState } from "react";
import axios from "axios";

// 힌트: 빈 배열 []을 의존성 배열로 사용하세요.
export function Mountcheck() {
  useEffect(() => {
    console.log("컴포넌트가 마운트되었습니다.");
  }, []);
}
// 연습문제2. 상태값이 변경될 때 메시지 출력하기
// 목표: 버튼을 클릭하여 상태값을 변경할 때마다 콘솔에 상태값이 출력되도록 만드세요.
// 요구사항:
// useEffect를 사용하여 상태값이 변경될 때마다 메시지를 출력하세요.
// 힌트: useEffect의 의존성 배열에 상태값을 넣으세요.
export function Updatecheck() {
  const [count, setcount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트가 업데이트되었습니다.");
  }, [count]);

  return (
    <div>
      <p>count : {count}</p>
      <button
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +1
      </button>
    </div>
  );
}

//연습문제3: 타이머 기능 (마운트 및 언마운트)
// 목표: 컴포넌트가 마운트되면 1초마다 상태값이 증가하는 타이머를 시작하고, 컴포넌트가 언마운트될 때 타이머를 정리하세요.
// 요구사항:
// useEffect를 사용하여 마운트 시 타이머를 시작하고, 언마운트 시 타이머를 정리하세요.
// 1초마다 상태값을 증가시키세요.
// 힌트: setInterval과 clearInterval 사용
export function Timer() {
  const [currenttime, settime] = useState(0);
  useEffect(() => {
    console.log("마운트됨");
    let timer = setInterval(() => {
      // prev는 이전 상채 값을 의미
      // prev 사용이유
      // prev를 사용하면 React가 보장하는 최신 상태 값에 기반해
      // 안전하게 상태를 업데이트할 수 있습니다.
      settime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <p>Timer : {currenttime}초 </p>;
}

// 4. 윈도우 크기 변경 감지
// 목표: 윈도우의 크기가 변경될 때마다 현재 창의 너비를 화면에 표시하세요.
// 요구사항:
// useEffect로 이벤트 리스너를 등록하고 창 크기가 변경될 때마다 상태를 업데이트하세요.
// 언마운트 시 이벤트 리스너를 해제하세요.
// 힌트: window.addEventListener와 window.removeEventListener
export function Windowwidth() {
  const [width, setwidth] = useState(window.innerWidth);
  useEffect(() => {
    // window.innerWidth 값을 즉시 setwidth에 전달하여
    // 이벤트 리스너가 아닌, 함수 실행 결과를 등록하는 문제가 발생
    // 해결 방법: 콜백 함수로 감싸야 함 → () => setwidth(window.innerWidth)
    window.addEventListener("resize", () => setwidth(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setwidth(window.innerWidth));
    };
  }, []); //매 렌더링마다 실행되어 이벤트 리스너가 계속 추가되는 문제 해결을 위해 []빈배열 추가
  return <p>width : {width}</p>;
}

//연습문제5: API 호출 및 데이터 로드
// 목표: 컴포넌트가 마운트될 때 API 호출을 통해 데이터를 가져와 화면에 표시하세요.
// 요구사항:
// 1. URL: https://jsonplaceholder.typicode.com/posts
// 2. 상위 10개의 포스트 테이터만 출력하세요.
// 3. useEffect를 사용하여 컴포넌트가 마운트될 때 데이터를 로드하세요.
// 4. 데이터를 로드한 후 상태에 저장하고 화면에 출력하세요.
// 힌트: fetch 또는 axios 모듈 사용 가능합니다.

// fetch
export function Openfetch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // 비동기 함수로 API 호출
    // async/await 구문 : JS에서 비동기적인 처리를 할 때 사용하는 구문.
    // promise/then 구문 :
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await response.json(); // JSON 변환
        setData(jsonData); // 상태 업데이트
        // 여기서 상위 10개 지정 가능 setData(jsonData.slice(0, 10));
      } catch (error) {
        console.error("데이터 가져오기 오류:", error);
      }
    };

    fetchData(); // 함수 실행
  }, []); // 빈 배열을 넣어 최초 1회만 실행

  return (
    <div>
      <h1>OpenAPI 데이터</h1>
      <ul>
        {data.slice(0, 10).map(
          (
            post // 상위 10개만 출력
          ) => (
            <li key={post.id}>
              <b>id:</b>
              {post.id}
              <br />
              <b>title:</b>
              {post.title}
              <br />
              <b>body:</b>
              {post.body}
            </li>
          )
        )}
      </ul>
    </div>
  );
}

// axios (강사님꺼 참고)
export function DataFetcherAxios() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // 비동기 함수로 API 호출
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(response.data.slice(0, 10)); // 상위 10개 항목만 표시
      } catch (error) {
        console.error("데이터 로드 중 오류 발생:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>데이터 로드</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <b>id:</b>
            {item.id}
            <br />
            <b>title:</b>
            {item.title}
            <br />
            <b>body:</b>
            {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}
