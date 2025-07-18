import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import CountryFooter from "@/components/CountryFooter";
import { Analytics } from "@vercel/analytics/next";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "Job Worth Calculator | 这班上得值不值",
    template: "%s"
  },
  alternates: {
    languages: {
      "en-US": "/en",
      "zh-CN": "/",
    },
  },
  description: "计算你的工作价值，了解薪资性价比。支持全球180+国家的购买力平价(PPP)计算，输入年薪即可获得详细的工作价值分析报告。Job Worth Calculator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4086960815369796" crossOrigin="anonymous"></script>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q2SCB8T8QH"></script>
        <script dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Q2SCB8T8QH');`
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <div className="pb-8"></div>
          <footer className="w-full py-3 border-t bg-white/90 dark:bg-gray-900/80 dark:border-gray-800/50">
            <div className="max-w-4xl mx-auto px-4">
              <CountryFooter />
              <div className="text-center">
                <span className="text-[10px] text-gray-400 dark:text-gray-500">Tool by <a href="https://www.pdftool.cc" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">pdftool.cc</a></span>
              </div>
            </div>
          </footer>
        </LanguageProvider>
      </body>
    </html>
  );
}
