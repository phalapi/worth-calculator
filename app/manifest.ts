import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Job Worth Calculator | Is My Job Worth the Grind?',
    short_name: 'Job Worth',
    description: 'Calculate your job worth and understand salary value with PPP support for 180+ countries',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
    categories: ['productivity', 'business', 'finance'],
    lang: 'en',
    dir: 'ltr',
  }
} 