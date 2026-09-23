import { useEffect, useRef, useState } from "react";

const useLasest = (keyword) => {
  const keyRef = useRef(keyword);
  keyRef.current = keyword;
  return keyRef;
};

function SearchBoxGood() {
  const [keyword, setKeyword] = useState("");
  const keyRef = useLasest(keyword);

  useEffect(() => {
    const id = setInterval(() => {
      console.log("서버로 전송:", keyRef.current); // ❌ 항상 ''만 출력
    }, 3000);
    return () => clearInterval(id);
  }, []); // 의존성 배열이 비어 있음 → effect는 최초 1회만 실행

  return (
    <div>
      <p>빈 문자열("") 검색 키워드 반복 전송</p>
      <p>(콘솔 로그를 보라)</p>
      <input onChange={(e) => setKeyword(e.target.value)} />
    </div>
  );
}

export default SearchBoxGood;
