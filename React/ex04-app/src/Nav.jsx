function Nav() {
  return (
    <div className="border-t border-purple-900 bg-gray-100">
      <div className="flex flex-row ml-[14%] p-2">
        <img
          src="https://img.megabox.co.kr/static/pc/images/common/bg/bg-location-home.png"
          alt=""
          className="w-3 h-3 mt-0.5"
        />
        <p className="text-xs ml-1">&gt;</p>
        <a href="#" className="text-xs ml-1">
          영화
        </a>
        <p className="text-xs ml-1">&gt;</p>
        <a href="#" className="text-xs ml-1">
          전체 영화
        </a>
      </div>
    </div>
  );
}
export default Nav;
