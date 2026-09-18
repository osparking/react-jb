import Content from './components/Content';
import Header from './components/Header';
import { ThemeProvider } from './context/ThemeContext';

export default function AppContext() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  );
}