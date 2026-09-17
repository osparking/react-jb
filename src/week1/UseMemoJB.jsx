// useMemo 후크: 무거운 연산의 결과(값) 캐싱 및 재사용
import { useMemo, useState } from "react";

// 엄청나게 느린 필터링 함수 (예시)
const filterExpensiveProducts = (products, query) => {
  console.log("⏳ 5,000개 상품 필터링 중... (매우 무거운 연산)");
  for (let i = 0; i < 99999999; i++) {} // 의도적인 지연 시간
  return products.filter((p) => p.name.includes(query));
};

export default function UseMemoShop() {
  const [products] = useState([
    { name: "아이폰" },
    { name: "맥북" },
    { name: "갤럭시" },
    { name: "샤오미" },
    { name: "레드미" },
  ]);
  const [searchQuery, setSearchQuery] = useState("");
  const [fixedSearchQuery, setFixedSearchQuery] = useState("");

  const [isDarkMode, setIsDarkMode] = useState(false); // 필터링과 무관한 상태

  // ❌ useMemo가 없다면: 다크모드 버튼만 눌러도 filterExpensiveProducts가
  // 매번 실행되어 화면이 뚝뚝 끊깁니다.
  //   const visibleProducts = filterExpensiveProducts(products, searchQuery);

  // ✨ useMemo 사용: products나 searchQuery가 바뀔 때만 이 무거운 함수를 실행합니다.
  const visibleProducts = useMemo(() => {
    return filterExpensiveProducts(products, searchQuery);
  }, [products, fixedSearchQuery]); // 의존성 배열

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      // 엔터키가 눌렸을 때 실행할 코드를 여기에 작성합니다.
      console.log("엔터키가 눌렸습니다. 검색어:", searchQuery);
      setFixedSearchQuery(searchQuery); // 검색어를 고정 상태로 저장
      // 예: handleSearch(); (검색 실행 함수)
    }
  };

  return (
    <div style={{ background: isDarkMode ? "#333" : "#fff" }}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>테마 변경</button>
      <input
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul>
        {visibleProducts.map((p, i) => (
          <li key={i}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}
