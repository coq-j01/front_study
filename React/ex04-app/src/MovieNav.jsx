function MovieNav() {
  return (
    <div className=" ml-[9%] mr-[9%]">
      <p className="text-3xl font-extrabold mt-10 mb-10">전체영화</p>
      <div className="flex justify-between w-full h-10 mb-10">
        <div className="flex w-[20%] border-t-2 border-l-2 border-r-2 border-t-purple-900 border-l-purple-900 border-r-purple-900 justify-center items-center">
          박스오피스
        </div>

        <div className="flex w-[20%] border-t-2 border-b-2 border-r-2 border-t-gray-200 border-r-gray-200 border-b-purple-900 justify-center items-center">
          상영예정작
        </div>

        <div className="flex w-[20%] border-t-2 border-b-2 border-r-2 border-t-gray-200 border-r-gray-200 border-b-purple-900 justify-center items-center">
          단독
        </div>

        <div className="flex w-[20%] border-t-2 border-b-2 border-r-2 border-t-gray-200 border-r-gray-200 border-b-purple-900 justify-center items-center">
          필름소사이어티
        </div>

        <div className="flex w-[20%] border-t-2 border-b-2 border-r-2 border-t-gray-200 border-r-gray-200 border-b-purple-900 justify-center items-center">
          클래식소사이어티
        </div>
      </div>
    </div>
  );
}
export default MovieNav;
