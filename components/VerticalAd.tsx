'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function VerticalAd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 延迟显示广告，避免影响首屏加载
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="relative">
        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -right-2 z-10 rounded-full bg-white p-1 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="关闭广告"
        >
          <X className="h-5 w-5 text-gray-700" />
        </button>

        {/* 广告内容 - 3:5 比例（宽:高） */}
        <a 
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative bg-gray-200 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
          style={{
            width: 'min(300px, 60vw)',
            aspectRatio: '3/5'
          }}
        >
          {/* 占位内容 */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="text-center">
              <div className="text-gray-500 text-lg mb-2">广告位</div>
              <div className="text-gray-400 text-sm">3:5 竖向广告</div>
            </div>
          </div>
          
          {/* 实际广告图片占位 */}
          <img 
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 500'%3E%3Crect fill='%23e5e7eb' width='300' height='500'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-size='24' fill='%236b7280'%3E广告占位图%3C/text%3E%3C/svg%3E"
            alt="广告"
            className="w-full h-full object-cover"
          />
        </a>
      </div>
    </div>
  );
}