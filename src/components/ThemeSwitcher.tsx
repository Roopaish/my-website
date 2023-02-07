'use client';

import { useEffect, useState } from 'react';
import Icon from './icons';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setTheme('light');
    }
  }, [mounted]);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    }
  };

  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? <Icon type="moon" /> : <Icon type="sun" />}
    </button>
  );
}
