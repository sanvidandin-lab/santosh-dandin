import { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Process from './components/Process';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && prefersDark);

    setIsDark(shouldBeDark);
    if (shouldBeDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <div className="min-h-screen">
      <ThemeToggle isDark={isDark} toggle={toggleTheme} />
      <Hero />
      <Expertise />
      <Process />
      <Contact />
    </div>
  );
}

export default App;
