import { useRef } from "react";

const IntervalTimer = () => {
  const intervalRef = useRef(null);

  const start = () => {
    intervalRef.current = setInterval(() => {
      console.log("짹깍"); // 변수를 올바르게 출력
    }, 1000);
  };

  const stop = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <p style={{ fontSize: 12, fontWeight: "bold" }}>
        시작: 콘솔에 '1초 경과' 메시지 반복 로깅
      </p>
      <p style={{ fontSize: 12, fontWeight: "bold" }}>정지: 메시지 로깅 중단</p>
      <button onClick={start}>시작</button>
      <button onClick={stop}>정지</button>
    </div>
  );
};

export default IntervalTimer;
