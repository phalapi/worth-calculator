'use client';

export default function HorizontalBanner() {
  return (
    <div className="w-full bg-gray-100">
      {/* 横向 Banner - 7:1 比例 */}
      <div 
        className="relative w-full bg-gray-200 overflow-hidden"
        style={{
          aspectRatio: '7/1'
        }}
      >
        {/* 占位内容 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-gray-500 text-base sm:text-lg">广告横幅</div>
            <div className="text-gray-400 text-xs sm:text-sm">7:1 横向广告</div>
          </div>
        </div>
        
        {/* 实际广告图片占位 */}
        <img 
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 700 100'%3E%3Crect fill='%23e5e7eb' width='700' height='100'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle' font-family='Arial' font-size='20' fill='%236b7280'%3E横幅广告占位图%3C/text%3E%3C/svg%3E"
          alt="横幅广告"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}