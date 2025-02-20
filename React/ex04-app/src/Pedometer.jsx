import { useState, useEffect } from "react";

function Pedometer() {
  const [steps, setSteps] = useState(0);
  const [lastY, setLastY] = useState(null);
  const [permissionGranted, setPermissionGranted] = useState(false);

  const requestPermission = async () => {
    if (typeof DeviceMotionEvent.requestPermission === "function") {
      const response = await DeviceMotionEvent.requestPermission();
      if (response === "granted") {
        setPermissionGranted(true);
      } else {
        alert("가속도 센서 접근이 거부되었습니다.");
      }
    } else {
      setPermissionGranted(true);
    }
  };

  useEffect(() => {
    if (!permissionGranted) return;

    const handleMotion = (event) => {
      const { accelerationIncludingGravity } = event;
      if (accelerationIncludingGravity) {
        const y = accelerationIncludingGravity.y;
        if (lastY !== null && Math.abs(y - lastY) > 3) {
          setSteps((prev) => prev + 1);
        }
        setLastY(y);
      }
    };

    window.addEventListener("devicemotion", handleMotion);

    return () => {
      window.removeEventListener("devicemotion", handleMotion);
    };
  }, [permissionGranted, lastY]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">만보기 웹 앱</h1>
      <p className="text-2xl">
        걸음 수: <span className="font-bold text-blue-500">{steps}</span>
      </p>
      {!permissionGranted ? (
        <button
          onClick={requestPermission}
          className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          가속도 센서 활성화
        </button>
      ) : (
        <button
          onClick={() => setSteps(0)}
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
        >
          리셋
        </button>
      )}
    </div>
  );
}
export default Pedometer;
