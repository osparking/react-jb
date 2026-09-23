import { useEffect, useRef, useState } from "react";

function SkipFirstRefHook() {
  const isFirstRender = useRef(true);
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      console.log("맨 처음 로깅 생략.....");
      return; // 첫 렌더링에서는 실행 안 함
    }
    console.log("둘째 혹은 그 후 랜더링되다.");
  });

  return (
    <>
      <div>useRef 용례 - 값 유지 기능 활용</div>
      <button onClick={increaseCount}>증가</button>
    </>
  );
}

export default SkipFirstRefHook;
