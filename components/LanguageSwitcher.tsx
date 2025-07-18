"use client";

import React from 'react';
import { useLanguage } from './LanguageContext';

export const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="inline-flex items-center gap-0.5 p-1 bg-white/80 dark:bg-gray-800/80 rounded-lg shadow-sm">
      <button
        onClick={() => setLanguage('en')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'en'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        English
      </button>
      <button
        onClick={() => setLanguage('zh-TW')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'zh-TW'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        繁體中文
      </button>
      <button
        onClick={() => setLanguage('ko')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'ko'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        한국어
      </button>
      <button
        onClick={() => setLanguage('vi')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'vi'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        Tiếng Việt
      </button>
      <button
        onClick={() => setLanguage('hi')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'hi'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        हिन्दी
      </button>
      <button
        onClick={() => setLanguage('th')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'th'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        ไทย
      </button>
      <button
        onClick={() => setLanguage('ru')}
        className={`px-1.5 py-0.5 text-xs font-medium rounded-md transition-colors ${
          language === 'ru'
            ? 'bg-blue-500 text-white dark:bg-blue-600'
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        Русский
      </button>
    </div>
  );
}; 