'use client';

import React from 'react';

// 已移除广告和图片检测内容，此组件不再渲染任何内容
const HorizontalBanner: React.FC = () => null;

export default HorizontalBanner;

          rel="noopener noreferrer"
          className="block relative w-full bg-gray-200 dark:bg-gray-800 overflow-hidden hover:opacity-90 transition-opacity duration-300 cursor-pointer rounded-lg shadow-sm"
          style={{
            aspectRatio: '7/1'
          }}
        >
          {/* 实际广告图片 */}
          <Image 
            src="/banner.png"
            alt="横幅广告"
            fill
            className="object-cover"
            priority
          />
        </a>
      </div>
    </div>
  );
}