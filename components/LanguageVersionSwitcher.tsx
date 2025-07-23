"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const LanguageVersionSwitcher: React.FC = () => {
  const pathname = usePathname();

  // 获取当前路径对应的其他语言版本
  const getLanguageVersions = () => {
    const isChineseVersion = pathname.startsWith('/zh/');
    const isJapaneseVersion = pathname.startsWith('/ja/');
    
    if (isChineseVersion) {
      // 中文版本 -> 英文版本
      const englishPath = pathname.replace('/zh/', '/');
      return {
        current: '中文',
        other: 'English',
        otherPath: englishPath,
        currentPath: pathname
      };
    } else if (isJapaneseVersion) {
      // 日文版本 -> 英文版本
      const englishPath = pathname.replace('/ja/', '/');
      return {
        current: '日本語',
        other: 'English',
        otherPath: englishPath,
        currentPath: pathname
      };
    } else {
      // 英文版本 -> 中文版本
      const chinesePath = pathname.startsWith('/') ? `/zh${pathname}` : `/zh/${pathname}`;
      return {
        current: 'English',
        other: '中文',
        otherPath: chinesePath,
        currentPath: pathname
      };
    }
  };

  const versions = getLanguageVersions();

  return (
    <div className="flex items-center gap-2 text-sm">
      <span className="text-gray-500 dark:text-gray-400">Language:</span>
      <div className="flex items-center gap-1">
        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded">
          {versions.current}
        </span>
        <Link
          href={versions.otherPath}
          className="px-2 py-1 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors"
        >
          {versions.other}
        </Link>
      </div>
    </div>
  );
}; 