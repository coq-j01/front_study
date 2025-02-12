import megabox from "./megabox.png";
function Top() {
  return (
    <div>
      <div className="flex justify-between m-3 ml-[11%] mr-[11%]">
        <div className="flex flex-row">
          <a href="#" className="text-gray-500 mr-3 text-xs">
            VIP LOUNAGE
          </a>
          <a href="#" className="text-gray-500 mr-3 text-xs">
            멤버쉽
          </a>
          <a href="#" className="text-gray-500 text-xs">
            고객센터
          </a>
        </div>
        <div className="flex flex-row ">
          <a href="#" className="text-gray-500 mr-3 text-xs">
            로그인
          </a>
          <a href="#" className="text-gray-500 mr-3 text-xs">
            회원가입
          </a>
          <a href="#" className="text-gray-500 text-xs">
            빠른예매
          </a>
        </div>
      </div>
      <div className="flex justify-between m-3 ml-[10%] mr-[10%]">
        <div className="flex flex-row mt-3 ">
          <a href="#">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-sitemap.png"
              alt=""
              className="mr-5 h-5"
            />
          </a>
          <a href="#">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-search.png"
              alt=""
              className="h-5"
            />
          </a>
        </div>
        <a href="#" className="text-lg mt-2 ">
          영화{" "}
        </a>
        <a href="#" className="text-lg mt-2 ">
          예매{" "}
        </a>
        <a href="#" className="text-lg mt-2 ">
          극장{" "}
        </a>
        <img src={megabox} alt="" className="w-50" />
        <a href="#" className="text-lg mt-2 ">
          이벤트{" "}
        </a>
        <a href="#" className="text-lg mt-2 ">
          스토어{" "}
        </a>
        <a href="#" className="text-lg mt-2 ">
          혜택{" "}
        </a>
        <div className="flex flex-row ">
          <a href="#">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-schedule.png"
              alt=""
              className="mr-4 h-9 mt-1"
            />
          </a>
          <a href="#">
            <img
              src="https://img.megabox.co.kr/static/pc/images/common/ico/ico-mymega.png"
              alt=""
              className="h-6 mt-2"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Top;
