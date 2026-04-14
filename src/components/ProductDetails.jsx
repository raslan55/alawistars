import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import products from "../data/products";
import CTA from "./CTA";
import ProductsSlider from "./ProductsSlider";
import { getRoutePath } from "../utils/i18nHelpers";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function ProductDetails() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const product = products.find((p) => p.slug === slug);
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);

  if (!product) {
    return (
      <div className="text-center py-16 text-red-600 text-xl font-semibold">
        {t("Product_Not_Found")}
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white sm:py-16 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 about-section">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-xl sm:text-3xl font-bold capitalize text-Main-color leading-normal mb-4">
            {t(product.title)}
          </h1>
          
          <h3 className="text-text-color mb-2 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg font-bold">
            حلول متكاملة لإدارة أعمالك بكفاءة واحترافية
          </h3>

          <p className="text-[#6b6b6e] mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg">
            {t(product.description)}
          </p>

          <p className="text-[#6b6b6e] mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 text-base">
            يوفر نظامنا حلاً شاملاً ومتكاملاً مصمماً خصيصاً لتلبية احتياجات الشركات السعودية، مع ضمان الامتثال الكامل للمتطلبات التنظيمية والقانونية.
          </p>

          {product.features && product.features.length > 0 && (
            <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
              {product.features.slice(0, 3).map((feature, idx) => (
                <motion.div
                  key={idx}
                  className="bg-Main-color text-white px-3 py-1 rounded-full text-sm font-medium"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "easeIn", tween: 300 }}
                >
                  {t(feature)}
                </motion.div>
              ))}
            </div>
          )}


          <div className="flex justify-center lg:justify-start">
            <MotionLink
              className="btn-primary flex items-center group text-center justify-center px-6 py-3 rounded-md shadow-md text-white font-bold bg-Main-color hover:bg-Main-color-dark transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              to={`/${getRoutePath("contact", t)}`}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {isRTL ? (
                <>
                  {t("Start_btn")}
                  <FaArrowLeftLong className="ms-3 transition-transform duration-300 group-hover:-translate-x-1" />
                </>
              ) : (
                <>
                  {t("Start_btn")}
                  <FaArrowRightLong className="ms-3 transition-transform duration-300 group-hover:translate-x-1" />
                </>
              )}
            </MotionLink>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          className="md:w-1/2 flex justify-center mt-1 md:mt-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "easeIn", tween: 300 }}
        >
          <img
            src={product.image}
            alt={t(product.title)}
            className="max-w-full h-auto rounded-lg shadow-lg "
          />
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white p-6 sm:p-10">
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
      <CTA heading={t("Tech_Started")} subheading={t("Tech_CTA_Text")} />
    </>
  );
}
