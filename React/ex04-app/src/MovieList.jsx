function MovieList() {
  return (
    <div className="ml-[9%] mr-[9%]">
      <div className="flex flex-row">
        <div className="relative mt-1 mr-1 mb-10">
          {/* 커스텀 스위치 */}
          <label
            htmlFor="toggle"
            className="flex items-center cursor-pointer w-7 h-4 bg-gray-400 border rounded-full"
          >
            {/* 스위치 안의 원 */}
            <span className="block w-3 h-3 ml-0.5 bg-white rounded-full"></span>
          </label>
        </div>
        <p className="mr-5">개봉작만</p>
        <p>90개의 영화가 검색되었습니다.</p>
      </div>
    </div>
  );
}
export default MovieList;
