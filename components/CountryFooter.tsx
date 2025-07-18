"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import { countryNames } from "./LanguageContext";
import countryToEmoji from "@/components/countryToEmoji";
import pppFactors from "@/components/pppFactors";

// 获取国家英文名（用于SEO链接）
function getCountrySlug(code: string, lang: string): string {
  // 优先用英文名，转小写、替换空格为-，去除特殊字符
  let name = countryNames["en"][code] || code;
  return name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-").toLowerCase();
}

const CountryFooter: React.FC = () => {
  const { language } = useLanguage();
  console.log('CountryFooter language', language);
  // 只展示有PPP数据的国家
  const countries = Object.keys(pppFactors)
    .map((code) => ({
      code,
      name: countryNames[language][code] || countryNames["en"][code] || code,
      ppp: pppFactors[code],
      emoji: countryToEmoji(code),
      slug: getCountrySlug(code, language),
    }))
    .filter((c) => c.ppp)
    .sort((a, b) => b.ppp - a.ppp);

  return (
    <div className="flex flex-wrap justify-center gap-3 py-2">
      {countries.map((c) => (
        <a
          key={c.code}
          href={`/${c.slug}`}
          className="flex items-center px-2 py-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition text-xs"
        >
          <span className="text-xl mr-1">{c.emoji}</span>
          <span>{c.name}</span>
          <span className="ml-1 text-gray-400 font-mono">PPP: {c.ppp}</span>
        </a>
      ))}
    </div>
  );
};

export default CountryFooter;
