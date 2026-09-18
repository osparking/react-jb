import { useTheme } from '../context/ThemeContext';

export default function Content() {
  const { theme } = useTheme();

  return (
    <main
      style={{
        background: theme === 'light' ? '#f5f5f5' : '#1a1a1a',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '24px',
        minHeight: '300px',
      }}
    >
      <p>현재 테마: {theme}</p>
    </main>
  );
}