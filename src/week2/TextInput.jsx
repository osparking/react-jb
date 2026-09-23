import { useRef } from "react";

function TextInput() {
  const inputRef = useRef(null);

  const focusInput = () => {
    inputRef.current.focus(); // 실제 DOM 노드에 접근
  };

  return (
    <div style={{marginTop: "30px"}}>
      <p style={{ fontSize: 12, fontWeight: "bold" }}>
        포커스 버튼 클릭 &gt; 촛점 상자 내로 이동
      </p>
      <input ref={inputRef} />
      <button onClick={focusInput}>포커스</button>
    </div>
  );
}

export default TextInput;
