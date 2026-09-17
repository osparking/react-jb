import React, { useCallback, useState } from "react";

// 1. 자식 컴포넌트를 React.memo로 감싸 props가 변하지 않으면 리렌더링을 건너뛰도록 합니다.
const Item = React.memo(({ name, onIncrement }) => {
  console.log(`${name} 컴포넌트가 렌더링되었습니다!`);
  return (
    <div
      style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}
    >
      <span>{name}</span>
      <button onClick={onIncrement}>+ 1 추가</button>
    </div>
  );
});

export default function App() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. useCallback이 없다면, 다크 모드를 토글할 때마다 이 함수가 새로 생성됩니다.
  // 이 함수를 useCallback으로 감싸면, 의존성 배열인 [count]가 바뀔 때만 새 함수를 만듭니다.
//   const handleIncrement = useCallback(() => {
//     setCount(count + 1);
//   }, [count]);

  // (참고: 의존성 배열에서 count를 없애고 싶다면 함수형 업데이트를 씁니다)
  //   const handleIncrement = useCallback(() => {
  //     setCount(prev => prev + 1);
  //   }); // 이렇게 하면 처음 한 번만 생성되고 고정됩니다.
  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  }, []);

  return (
    <div
      style={{
        background: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#000",
        padding: "20px",
      }}
    >
      <h3>장바구니 수량: {count}</h3>

      {/* handleIncrement 함수 주소가 고정되므로, 다크 모드를 바꿀 때 Item은 리렌더링되지 않습니다. */}
      <Item name="🎁 추천 사은품" onIncrement={handleIncrement} />

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        테마 변경 ({isDarkMode ? "라이트 모드로" : "다크 모드로"})
      </button>
    </div>
  );
}
