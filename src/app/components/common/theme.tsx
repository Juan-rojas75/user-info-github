// components/ThemeToggle.js
"use client"; // Necesario para el uso de useState en componentes de cliente
import { useEffect, useState } from 'react';

const Theme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Verifica el tema en el almacenamiento local o en la preferencia del sistema
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    // Aplica el tema al body
    if (isDarkMode) {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <button
      className="p-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition duration-200"
      onClick={() => setIsDarkMode(prev => !prev)}
    >
      <span className="material-symbols-outlined">
        dark_mode
        </span>
    </button>
  );
};

export default Theme;
