import { useState, useEffect } from 'react';

export default function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('darkMode') === 'true' || 
           window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDark);
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return [isDark, toggleDarkMode];
}