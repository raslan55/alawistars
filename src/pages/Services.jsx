import React from 'react'
import TechSolutions from '../components/TechSolutions'
import CTA from '../components/CTA'
import { useTranslation } from "react-i18next";
import SeoHelmet from '../components/SeoHelmet';

export default function Services() {
      const { t } = useTranslation();
  
  return (
    <div>
       <SeoHelmet pageKey="services" />
   <TechSolutions/>
  <CTA 
  heading={t("Tech_Started")} 
  subheading={t("Tech_CTA_Text")} 
/>
    </div>
  )
}
