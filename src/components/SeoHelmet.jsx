import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function SeoHelmet({ pageKey = "default" }) {
  const { t, i18n } = useTranslation();
  const title = t(`meta_${pageKey}_title`);
  const description = t(`meta_${pageKey}_description`);
  const currentUrl = window.location.href; // عشان og:url يكون ديناميكي

  return (
    <Helmet>
      <html lang={i18n.language} dir={i18n.language === "ar" ? "rtl" : "ltr"} />
      
      <title>{title}</title>

      {/* Meta Description */}
      <meta name="description" content={description} />
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content={i18n.language} />
      <meta property="og:image" content="https://alawistars.com/Logo-preview.jpg" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://alawistars.com/Logo-preview.jpg" />

      {/* Robots (اختياري داخل Helmet) */}
      <meta name="robots" content="index, follow" />
    </Helmet>

  );
}




