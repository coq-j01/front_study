function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow">
      <div className="flex-1">
        <a role="button" className="font-bold ml-3 text-xl text-blue-700">
          TechStore
        </a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-hover">
          <div
            tabindex="0"
            role="button"
            className="mr-10 bg-base-100 hidden sm:block"
          >
            제품
          </div>
          <ul
            tabindex="0"
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-0 shadow"
          >
            <li>
              <a className="hover:bg-blue-100">전자기기</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">의류</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">도서</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">액세서리</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabindex="0"
            role="button"
            className="mr-10 bg-base-100 hidden sm:block"
          >
            서비스
          </div>
          <ul
            tabindex="0"
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-0 shadow"
          >
            <li>
              <a className="hover:bg-blue-100">컨설팅</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">교육</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">고객지원</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">유지보수</a>
            </li>
          </ul>
        </div>
        <div className="dropdown dropdown-hover">
          <div
            tabindex="0"
            role="button"
            className="m-1 bg-base-100 hidden sm:block"
          >
            회사소개
          </div>
          <ul
            tabindex="0"
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-0 shadow"
          >
            <li>
              <a className="hover:bg-blue-100">회사정보</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">팀 소개</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">채용정보</a>
            </li>
            <li>
              <a className="hover:bg-blue-100">연락처</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
