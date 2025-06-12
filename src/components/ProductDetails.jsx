import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import products from "../data/products";
import CTA from "./CTA";
import ProductsSlider from "./ProductsSlider";

export default function ProductDetails() {
  const { slug } = useParams();
  const { t } = useTranslation();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="text-center py-16 text-red-600 text-xl font-semibold">
        {t("Product_Not_Found")}
      </div>
    );
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white  p-6 sm:p-10">
          <h1 className="text-4xl font-bold text-Main-color mb-6 text-center">
            {t(product.title)}
          </h1>

          <div className="w-full mb-8">
            <img
              src={product.image}
              alt={t(product.title)}
              className="w-full rounded-xl shadow-lg object-cover max-h-[500px] mx-auto"
            />
          </div>

          <p className="text-lg text-gray-700 text-center mb-6 leading-relaxed">
            {t(product.description)}
          </p>

          {product.features && (
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                {t("Features")}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-3 text-gray-700">
                {product.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg shadow-sm"
                  >
                    <span className="text-green-600 text-xl">✓</span>
                    <span>{t(feature)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
        <ProductsSlider />
      
       <CTA 
  heading={t("Tech_Started")} 
  subheading={t("Tech_CTA_Text")} 
/>
    </>
  );
}
