import React from "react";
import ProductsSlider from "./ProductsSlider";
import CTA from "./CTA";
import Testimonial from "./Testimonial";
import { useTranslation } from "react-i18next";

export default function OurProducts() {
const { t } = useTranslation();
  return (
    <>
      <ProductsSlider />
       <CTA 
               heading={t("Digital_Started")} 
               subheading={t("Digital_CTA_Text")} />
      <Testimonial/>
       <hr className="h-10 border-0"/>

    </>
  );
}
