"use client";
import { useEffect, useRef } from "react";

export default function GoogleBannerAd() {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        // 忽略广告加载错误
      }
    }
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-4086960815369796"
        data-ad-slot="5597288448"
        data-ad-format="auto"
        data-full-width-responsive="true"
        ref={adRef as any}
      ></ins>
    </div>
  );
}
