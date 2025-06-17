import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

export default function SeoHelmet({ pageKey = "default" }) {
  const { t, i18n } = useTranslation();
  const title = t(`meta_${pageKey}_title`);
  const description = t(`meta_${pageKey}_description`);

  return (
    <Helmet>
      <html lang={i18n.language} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content={i18n.language} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
