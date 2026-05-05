import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";

const ProductsSlider = lazy(() => import("./ProductsSlider"));
const CTA = lazy(() => import("./CTA"));
const Testimonial = lazy(() => import("./Testimonial"));

const LoadingFallback = () => (
  <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-50 animate-pulse" />
);

export default function OurProducts() {
const { t } = useTranslation();
  return (
    <>
      <Suspense fallback={<LoadingFallback />}>
        <ProductsSlider />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <CTA 
               heading={t("Digital_Started")} 
               subheading={t("Digital_CTA_Text")}
               btnText={t("Show")} 
        />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Testimonial/>
      </Suspense>
       <hr className="h-10 border-0"/>

    </>
  );
}
