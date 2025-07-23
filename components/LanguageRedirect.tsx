"use client";

import { useEffect } from 'react';
import { useLanguage } from './LanguageContext';
import { usePathname } from 'next/navigation';

export const LanguageRedirect: React.FC = () => {
  const { setLanguage } = useLanguage();
  const pathname = usePathname();

  useEffect(() => {
    // 根据URL路径自动设置语言
    if (pathname.startsWith('/zh/')) {
      setLanguage('zh');
    } else if (pathname.startsWith('/ja/')) {
      setLanguage('ja');
    } else {
      // 默认英文
      setLanguage('en');
    }
  }, [pathname, setLanguage]);

  return null;
}; 