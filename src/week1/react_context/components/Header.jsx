import { useTheme } from '../context/ThemeContext';

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '16px',
      }}
    >
      <h1>My App ({theme})</h1>
      <button onClick={toggleTheme}>테마 변경</button>
    </header>
  );
}