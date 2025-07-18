import SalaryCalculator from '../../components/calculator';
import pppFactors from '@/components/pppFactors';
import { countryNames } from '@/components/countryNames';

// 获取国家英文名（用于SEO链接）
function getCountrySlug(code: string): string {
  // 优先用英文名，转小写、替换空格为-，去除特殊字符
  let name = countryNames["en"][code] || code;
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

export default async function CountryPage({ 
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
