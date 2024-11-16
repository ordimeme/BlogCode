"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  // 使用 null 作为初始值，避免服务端和客户端不匹配
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // 在客户端初始化主题
    const initTheme = () => {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        setTheme(savedTheme);
      } else {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    };

    initTheme();
  }, []);

  useEffect(() => {
    // 只在主题值存在时更新
    if (theme) {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggle = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  // 在主题未初始化时返回加载状态
  if (theme === null) {
    return null; // 或者返回一个加载指示器
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
