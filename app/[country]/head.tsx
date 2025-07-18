import { countryNames } from '@/components/LanguageContext';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { country: string } }): Promise<Metadata> {
  // 这里假设默认语言为中文，可以根据你的国际化策略调整
  const lang = 'zh'; // 或动态获取
  let countryName = params.country;
  // 支持英文名、中文名、代码
  for (const [cc, name] of Object.entries(countryNames[lang])) {
    if (name.toLowerCase() === params.country.toLowerCase()) countryName = name;
    if (cc.toLowerCase() === params.country.toLowerCase()) countryName = name;
  }
  return {
    title: `这班上得值不值·测算版 - ${countryName}`,
  };
}
