function TechStore() {
  return (
    <div className="h-screen">
      <h1 className="text-3xl font-semibold m-3">추천 제품</h1>
      <div className="flex flex-row flex-wrap">
        <div className="flex m-0 p-2 w-[100%] md:w-1/3 sm:w-1/2">
          <div className="flex flex-col p-5 justify-center w-[100%] h-[150px] bg-base-100 rounded-md shadow">
            <div className="flex flex-row w-full justify-between mb-3">
              <div className="text-l font-bold">프리미엄 노트북</div>
              <div className="text-l font-bold text-blue-500">1,599,000원</div>
            </div>
            <div className="mb-3 text-gray-600">최신 사양의 고성능 노트북</div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex mt-2 mb-2 text-s justify-between bg-blue-100 text-blue-500 rounded-lg">
                전자기기
              </div>
              <div
                role="button"
                className="flex w-[120px] h-[40px] text-s text-base-100 bg-blue-500 justify-center items-center rounded-md"
              >
                장바구니 담기
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-0 p-2 w-[100%] md:w-1/3 sm:w-1/2">
          <div className="flex flex-col p-5 justify-center w-[100%] h-[150px] bg-base-100 rounded-md shadow">
            <div className="flex flex-row w-full justify-between mb-3">
              <div className="text-l font-bold">무선 헤드폰</div>
              <div className="text-l font-bold text-blue-500">299,000원</div>
            </div>
            <div className="mb-3 text-gray-600">
              프리미엄 사운드의 노이즈 캔슬링 헤드폰
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex mt-2 mb-2 text-s justify-between bg-blue-100 text-blue-500 rounded-lg">
                전자기기
              </div>
              <div
                role="button"
                className="flex w-[120px] h-[40px] text-s text-base-100 bg-blue-500 justify-center items-center rounded-md"
              >
                장바구니 담기
              </div>
            </div>
          </div>
        </div>
        <div className="flex m-0 p-2 w-[100%] md:w-1/3 sm:w-1/2">
          <div className="flex flex-col p-5 justify-center w-[100%] h-[150px] bg-base-100 rounded-md shadow">
            <div className="flex flex-row w-full justify-between mb-3">
              <div className="text-l font-bold">스마트 워치</div>
              <div className="text-l font-bold text-blue-500">399,000원</div>
            </div>
            <div className="mb-3 text-gray-600">
              피트니스 트래킹과 스마트 연결 기능
            </div>
            <div className="flex flex-row w-full justify-between">
              <div className="flex mt-2 mb-2 text-s justify-between bg-blue-100 text-blue-500 rounded-lg">
                액세서리
              </div>
              <div
                role="button"
                className="flex w-[120px] h-[40px] text-s text-base-100 bg-blue-500 justify-center items-center rounded-md"
              >
                장바구니 담기
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TechStore;
