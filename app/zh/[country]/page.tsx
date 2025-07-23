import SalaryCalculator from '../../../components/calculator';
import pppFactors from '@/components/pppFactors';
import { countryNames } from '@/components/countryNames';
import { Metadata } from 'next';

// 获取国家中文名（用于SEO链接）
function getCountrySlug(code: string): string {
  // 优先用中文名，转小写、替换空格为-，去除特殊字符
  let name = countryNames["zh"][code] || code;
  return name.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-").toLowerCase();
}

// 为静态导出生成所有可能的路径参数
export async function generateStaticParams() {
  // 获取所有有 PPP 数据的国家代码
  const countries = Object.keys(pppFactors).filter(code => pppFactors[code]);
  
  return countries.map((code) => ({
    country: getCountrySlug(code),
  }));
}

// 生成动态元数据
export async function generateMetadata({ params }: { params: Promise<{ country: string }> | undefined }): Promise<Metadata> {
  const resolvedParams = params ? await params : { country: '' };
  const countryParam = resolvedParams.country;
  
  // 默认使用中文
  let countryName = countryParam;
  
  // 支持从 URL slug 解析国家名称
  // 例如：vietnam -> 越南, canada -> 加拿大
  const normalizedParam = countryParam.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  
  // 先查中文名（支持 slug 格式）
  for (const [code, name] of Object.entries(countryNames.zh)) {
    const normalizedName = name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    if (normalizedName === normalizedParam) {
      // 找到对应的中文名
      countryName = name;
      break;
    }
  }
  
  // 如果没找到，再查英文名
  if (countryName === countryParam) {
    for (const [code, name] of Object.entries(countryNames.en)) {
      if (name === countryParam) {
        // 找到对应的中文名
        countryName = countryNames.zh[code] || name;
        break;
      }
    }
  }
  
  // 如果还是没找到，再查国家代码
  if (countryName === countryParam) {
    const upperCode = countryParam.toUpperCase();
    if (countryNames.zh[upperCode]) {
      countryName = countryNames.zh[upperCode];
    }
  }
  
  // 如果还是没找到，使用原始参数
  if (countryName === countryParam) {
    countryName = countryParam;
  }
  
  return {
    title: `工作价值计算器 | ${countryName} | 这班上得值不值`,
    description: `在${countryName}工作，你的薪资性价比如何？输入年薪，计算工作价值，了解你的工作是否值得。支持购买力平价(PPP)计算。`,
    keywords: `${countryName}, 工作价值, 薪资计算, 购买力平价, PPP, 工作性价比, jobworth, 这班上得值不值, salary worth, salary worth calculator`,
    alternates: {
      languages: {
        "en-US": `/${countryParam}`,
        "zh-CN": `/zh/${countryParam}`,
      },
    },
  };
}

export default async function ChineseCountryPage({ 
  params 
}: { 
  params: Promise<{ country: string }> | undefined 
}) {
  // 在服务器组件中，我们可以直接使用 params
  const resolvedParams = params ? await params : { country: '' };
  const country = resolvedParams.country;
  
  if (!country) {
    return <div>Loading...</div>;
  }
  
  return <SalaryCalculator countryParam={country} />;
} 