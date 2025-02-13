import { useEffect, useState } from "react";

function MovieList() {
  const [isclick, setclick] = useState(false);
  const [btnstr, setstr] = useState("90개의 영화가 검색되었습니다.");
  function clickEvent() {
    setclick((prev) => !prev);
  }
  useEffect(() => {
    setstr(
      isclick
        ? "71개의 영화가 검색되었습니다."
        : "90개의 영화가 검색되었습니다."
    );
  }, [isclick]);
  return (
    <div className="ml-[14%] mr-[14%]">
      <div className="flex justify-between">
        <div className="flex flex-row ml-5">
          <div className="relative mt-1 mr-1 mb-10">
            {/* 커스텀 스위치 */}
            <label
              htmlFor="toggle"
              className={`flex items-center cursor-pointer w-10 h-5 border rounded-full transition-colors ${
                isclick ? "bg-green-400" : "bg-gray-400"
              }`}
              onClick={clickEvent}
            >
              {/* 스위치 안의 원 */}
              <span
                className={`block w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${
                  isclick ? "translate-x-5" : "translate-x-0.5"
                }`}
              ></span>
            </label>
          </div>
          <p className="mr-5">개봉작만</p>
          <p>{btnstr}</p>
        </div>
        <div className="flex flex-row border-2 mr-[1%] border-gray-400 mt-0 h-7">
          <input
            type="text"
            placeholder="영화명 검색"
            className="w-[90%] outline-none"
          />
          <img
            src="https://img.megabox.co.kr/static/pc/images/common/btn/btn-search-input.png"
            alt=""
            role="button"
            className="flex w-4 h-4 mt-1 mr-0.5"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="flex flex-col p-3 mb-5 w-60">
          <div className="relative">
            <div className="relative">
              <a href="#">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2025/02/06/y53MCmySDqKeFV1xoEFKAooM6huADn8u_420.jpg"
                  alt="캡틴 아메리카: 브레이브 뉴 월드"
                  className="rounded-md"
                ></img>
              </a>
              <p className="absolute top-2 left-3 text-white text-3xl ">1</p>
            </div>

            <div className="absolute p-4 rounded-md inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col justify-between h-full w-full">
                <p className="text-sm">
                  대통령이 된 새디우스 로스와 재회 후, 국제적인 사건의 중심에
                  서게 된 샘이 전 세계를 붉게 장악하려는 사악한 음모 뒤에 숨겨진
                  존재와 이유를 파헤쳐 나가는 액션 블록버스터
                </p>
                <div className="flex flex-row justify-center">
                  <p className="flex items-center mr-3 text-xs mt-2">관람평</p>
                  <p className="text-4xl font-bold text-cyan-600">8.2</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/txt/12_46x46.png"
              alt=""
              className="w-[10%] mr-3"
            />
            <p className="font-semibold text-l">캡틴 아메리카: 브레이...</p>
          </div>
          <p className="w-full text-sm mt-2">
            예매율 35.2% | 개봉일 2025.02.12
          </p>
          <div className="flex flex-row justify-between mt-2 pl-0 pr-1">
            <div
              role="button"
              className="flex flex-row h-7 w-[30%] border-2 border-gray-200 p-0.5 mb-1 mt-1 items-center"
            >
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-heart-toggle-gray.png"
                alt=""
                className="object-cover object-left w-5 h-4 ml-0.5 pr-0.5 "
              />
              <p className="flex ml-1 items-center text-sm">764</p>
            </div>
            <div
              role="button"
              className="flex w-[30%] justify-center items-center bg-purple-900 text-white rounded-md p-1"
            >
              에매
            </div>
            <div
              role="button"
              className="flex w-[30%] justify-center items-center bg-purple-900 text-white rounded-md p-1"
            >
              <img
                src="https://www.megabox.co.kr/static/pc/images/common/btn/mov_list_db_btn.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 mb-5 w-60">
          <div className="relative">
            <div className="relative">
              <a href="#">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2025/01/15/exwAlLGtwgUkmxxmIR0898l7XHoAo2n1_420.jpg"
                  alt="말할 수 없는 비밀"
                  className="rounded-md"
                ></img>
              </a>
              <p className="absolute top-2 left-3 text-white text-3xl ">2</p>
            </div>

            <div className="absolute p-4 rounded-md inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col justify-between h-full w-full">
                <p className="text-sm">
                  “연주할 때만 느껴지는 감정이 있거든. 그게 널 만나면 느껴져”
                  유학 중이던 피아니스트 유준은 팔목 치료를 위해 한국에 교환
                  학생으로 오게 된다. 학교에 처음 간 그날, 신비로운 피아노
                  선율에 이끌려 도착한 연습실에서
                </p>
                <div className="flex flex-row justify-center">
                  <p className="flex items-center mr-3 text-xs mt-2">관람평</p>
                  <p className="text-4xl font-bold text-cyan-600">8.5</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/txt/ALL_46x46.png"
              alt=""
              className="w-[10%] mr-3"
            />
            <p className="font-semibold text-l">말할 수 없는 비밀</p>
          </div>
          <p className="w-full text-sm mt-2">
            예매율 10.1% | 개봉일 2025.01.27
          </p>
          <div className="flex flex-row justify-between mt-2 pl-0 pr-1">
            <div
              role="button"
              className="flex flex-row items-center h-7 w-[30%] border-2 border-gray-200 p-0.5 mb-1 mt-1"
            >
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-heart-toggle-gray.png"
                alt=""
                className="object-cover object-left w-5 h-4 ml-0.5 pr-0.5"
              />
              <p className="flex ml-1 items-center text-sm">1.3k</p>
            </div>
            <div
              role="button"
              className="flex w-[65%] justify-center items-center bg-purple-900 text-white rounded-md p-1"
            >
              에매
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 mb-5 w-60">
          <div className="relative">
            <div className="relative">
              <a href="#">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2025/02/06/BEhkPL8lcW5kqDUlbaQN5HDVeKOmnjzN_420.jpg"
                  alt="미키 17"
                  className="rounded-md"
                ></img>
              </a>
              <p className="absolute top-2 left-3 text-white text-3xl ">3</p>
            </div>

            <div className="absolute p-4 rounded-md inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col justify-between h-full w-full">
                <p className="text-sm">
                  위험한 일에 투입되는 소모품(익스펜더블)으로, 죽으면 다시
                  프린트되는 ‘미키’가 17번째 죽음의 위기를 겪던 중, 그가 죽은 줄
                  알고 ‘미키 18’이 프린트되면서 벌어지는 예측불허의 이야기를
                  그리는 영화
                </p>
                {/* <div className="flex flex-row justify-center">
                  <p className="flex items-center mr-3 text-xs mt-2">관람평</p>
                  <p className="text-4xl font-bold text-cyan-600">8.2</p>
                </div> */}
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/txt/15_46x46.png"
              alt=""
              className="w-[10%] mr-3"
            />
            <p className="font-semibold text-l">미키 17</p>
          </div>
          <p className="w-full text-sm mt-2">예매율 7.8% | 개봉일 2025.02.28</p>
          <div className="flex flex-row justify-between mt-2 pl-0 pr-1">
            <div
              role="button"
              className="flex flex-row h-7 w-[30%] border-2 border-gray-200 p-0.5 mb-1 mt-1 items-center"
            >
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-heart-toggle-gray.png"
                alt=""
                className="object-cover object-left w-5 h-4 ml-0.5 pr-0.5 "
              />
              <p className="flex ml-1 items-center text-sm">1.1k</p>
            </div>
            <div
              role="button"
              className="flex w-[30%] justify-center items-center bg-purple-900 text-white rounded-md p-1"
            >
              에매
            </div>
            <div
              role="button"
              className="flex w-[30%] justify-center items-center bg-purple-900 text-white rounded-md p-1"
            >
              <img
                src="https://www.megabox.co.kr/static/pc/images/common/btn/mov_list_db_btn.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col p-3 mb-5 w-60">
          <div className="relative">
            <div className="relative">
              <a href="#">
                <img
                  src="https://img.megabox.co.kr/SharedImg/2025/01/15/alEbxmwou4a9mg9q0iTctMSyOCq3wGHp_420.jpg"
                  alt="미드나잇 인 파리"
                  className="rounded-md"
                ></img>
              </a>
              <p className="absolute top-2 left-3 text-white text-3xl ">4</p>
            </div>

            <div className="absolute p-4 rounded-md inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-col justify-between h-full w-full">
                <p className="text-sm">
                  낭만과 예술이 가득한 파리에서 펼쳐지는 마법 같은 로맨스 약혼자
                  ‘이네스’를 두고 홀로 파리의 밤거리를 걷던 ‘길’은 자정을 알리는
                  종소리와 함께 나타난 의문의 차를 타고 1920년대 파리에
                  도착하고, 그곳에서 시대를 대표
                </p>
                <div className="flex flex-row justify-center">
                  <p className="flex items-center mr-3 text-xs mt-2">관람평</p>
                  <p className="text-4xl font-bold text-cyan-600">8.7</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row mt-3">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/txt/ALL_46x46.png"
              alt=""
              className="w-[10%] mr-3"
            />
            <p className="font-semibold text-l">말할 수 없는 비밀</p>
          </div>
          <p className="w-full text-sm mt-2">예매율 7.6% | 개봉일 2025.02.12</p>
          <div className="flex flex-row justify-between mt-2 pl-0 pr-1">
            <div
              role="button"
              className="flex flex-row items-center h-7 w-[30%] border-2 border-gray-200 p-0.5 mb-1 mt-1"
            >
              <img
                src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-heart-toggle-gray.png"
                alt=""
                className="object-cover object-left w-5 h-4 ml-0.5 pr-0.5"
              />
              <p className="flex ml-1 items-center text-sm">714</p>
            </div>
            <div
              role="button"
              className="flex w-[65%] justify-center items-center bg-purple-900 text-white rounded-md p-1"
            >
              에매
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MovieList;
