import { MetadataRoute } from 'next'
import pppFactors from '@/components/pppFactors'
import { countryNames } from '@/components/countryNames'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://worthjob.pdftool.cc'
  
  // 基础页面
  const basePages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/zh`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/share`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // 生成国家页面
  const countryPages = Object.keys(pppFactors)
    .filter(code => pppFactors[code])
    .flatMap(code => {
      const englishName = countryNames.en[code]
      const chineseName = countryNames.zh[code]
      
      const pages = []
      
      // 英文版本（默认）
      if (englishName) {
        const englishSlug = englishName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-").toLowerCase()
        pages.push({
          url: `${baseUrl}/${englishSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.8,
        })
      }
      
      // 中文版本
      if (chineseName) {
        const chineseSlug = chineseName.replace(/[^a-zA-Z0-9 ]/g, "").replace(/\s+/g, "-").toLowerCase()
        pages.push({
          url: `${baseUrl}/zh/${chineseSlug}`,
          lastModified: new Date(),
          changeFrequency: 'monthly' as const,
          priority: 0.7,
        })
      }
      
      return pages
    })

  return [...basePages, ...countryPages]
} 