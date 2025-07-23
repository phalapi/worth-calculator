"use client";

import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';

export const HtmlLangProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // 根据当前语言设置html的lang属性
    const htmlElement = document.documentElement;
    const langMap = {
      'en': 'en',
      'zh': 'zh-CN',
      'ja': 'ja'
    };
    
    htmlElement.lang = langMap[language] || 'en';
  }, [language]);

  return <>{children}</>;
}; 