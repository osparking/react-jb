import { createContext, useContext, useState } from 'react';

// 1. Context 생성
const ThemeContext = createContext(null);

// 2. Provider 컴포넌트 정의
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const themeValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={themeValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. 커스텀 Hook으로 감싸기 (권장 패턴)
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme은 ThemeProvider 안에서 사용해야 합니다.');
  }
  return context;
}