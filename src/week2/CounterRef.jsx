import { useRef, useState } from "react";

function CounterRef() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef(-1);

  const increaseCount = () => {
    setCount((prev) => (prev + 1));
  }

  const rememberCount = () => {
    prevCountRef.current = count; // 렌더링 후 이전 값 저장
  }

  const checkCount = () => {
    console.log("기억된 값:", prevCountRef.current)
  }

  return (
    <>
    <p style={{marginTop: "30px"}}>
      현재: {count}, 이전: {prevCountRef.current}
    </p>
    <button onClick={increaseCount}>증가</button>
    <button onClick={rememberCount}>기억</button>
    <button onClick={checkCount}>확인</button>
    </>
  );
}

export default CounterRef;