import React, { lazy, Suspense } from 'react'
import TechSolutions from '../components/TechSolutions'
import { useTranslation } from "react-i18next";
import SeoHelmet from '../components/SeoHelmet';

const CTA = lazy(() => import('../components/CTA'));

const LoadingFallback = () => (
  <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-50 animate-pulse" />
);

export default function Services() {
      const { t } = useTranslation();
  
  return (
    <div>
       <SeoHelmet pageKey="services" />
   <TechSolutions/>
  <Suspense fallback={<LoadingFallback />}>
    <CTA 
      heading={t("Tech_Started")} 
      subheading={t("Tech_CTA_Text")} 
      btnText={t("Explore_More")}
    />
  </Suspense>
    </div>
  )
}
