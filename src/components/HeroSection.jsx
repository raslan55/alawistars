import React from "react";
import Hero from "../assets/Images/vecteezy_invoice-report-data-analysis_5648209.jpg";
import gazt from "../assets/Images/gazt-vector-logo-seeklogo/gazt-seeklogo.png";
import ZATCA from "../assets/Images/ZATCA-logo-1024x309.jpg";
import VAT from "../assets/Images/VAT.png";
import { Link } from "react-router-dom";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);

  return (
    <div>
      <section className="bg-white sm:py-16 px-6 md:px-16 
            flex flex-col-reverse md:flex-row items-center justify-between gap-10 hero">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h1 className="text-xl sm:text-3xl font-bold capitalize text-Main-color leading-normal mb-4">
            {t("Hero_heading")}
          </h1>
          <h3 className="text-text-color mb-2 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg font-bold">
            {t("Hero_text")}
          </h3>
          <p className="text-[#6b6b6e] mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg">
            {t("Hero_P")}
          </p>
          <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-6">
            <motion.img
              src={ZATCA}
              alt="ZATCA"
              className="h-16 max-w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "easeIn", tween: 300 }}
            />
            <motion.img
              src={VAT}
              alt="VAT Certified"
              className="h-16 max-w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "easeIn", tween: 300 }}
            />
            <motion.img
              src={gazt}
              alt="GAZT"
              className="h-16 max-w-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "easeIn", tween: 300 }}
            />
          </div>
          <div className="flex justify-center lg:justify-start">
            <MotionLink
              className="btn-primary flex items-center group text-center justify-center px-6 py-3 rounded-md shadow-md text-white font-bold bg-Main-color hover:bg-Main-color-dark transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              to={"/contact"}
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
            src={Hero}
            alt="Inventory Management"
            className="max-w-full h-auto"
          />

        </motion.div>
      </section>
    </div>
  );
}
