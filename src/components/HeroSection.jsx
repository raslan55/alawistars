import React from "react";
import Hero from "../assets/Images/Herorm.png";
import gazt from "../assets/Images/gazt-vector-logo-seeklogo/gazt-seeklogo.png";
import ZATCA from "../assets/Images/ZATCA-logo-1024x309.jpg";
import VAT from "../assets/Images/VAT.png";
import { Link } from "react-router-dom";
import { getRoutePath } from "../utils/i18nHelpers";

import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function HeroSection() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-gradient-to-b from-[#eef5ffb0] to-[#eef5ffb0] pt-12 pb-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 overflow-hidden border-b border-gray-100 font-['Cairo',sans-serif]">
      {/* Left Text Content */}
      <div className="md:w-1/2 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-Main-color leading-relaxed"
          >
            {t("Hero_heading")}
          </motion.h1>
          
          <motion.h3 
            variants={itemVariants}
            className="text-text-color leading-relaxed max-w-xl text-lg sm:text-xl font-bold"
          >
            {t("Hero_text")}
          </motion.h3>

          <motion.p 
            variants={itemVariants}
            className="text-slate-600 leading-relaxed max-w-xl text-lg font-medium"
          >
            {t("Hero_P")}
          </motion.p>

          {/* Integrated & Compatible Entities */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3 sm:gap-5 mb-10 bg-white/40 backdrop-blur-md px-5 py-4 rounded-2xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-fit"
          >
            <motion.img
              src={ZATCA}
              alt="ZATCA"
              className="h-14 sm:h-16 max-w-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={VAT}
              alt="VAT Compatible"
              className="h-14 sm:h-16 max-w-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            />
            <motion.img
              src={gazt}
              alt="GAZT"
              className="h-14 sm:h-16 max-w-full transition-all duration-300"
              whileHover={{ scale: 1.05 }}
            />
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
            <MotionLink
              className="shimmer-btn flex items-center group text-center justify-center px-8 py-4 rounded-xl shadow-xl shadow-Main-color/20 text-white font-extrabold text-lg bg-Main-color hover:opacity-90 transition-all gap-2"
              whileHover={{ scale: 1.05 }}
              to={`/${getRoutePath("contact", t)}`}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t("Start_btn")}
              {isRTL ? (
                <FaArrowLeftLong className="transition-transform duration-300 group-hover:-translate-x-1" />
              ) : (
                <FaArrowRightLong className="transition-transform duration-300 group-hover:translate-x-1" />
              )}
            </MotionLink>
          </motion.div>

        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: isRTL ? -50 : 50 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="md:w-1/2 relative"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-Main-color/5 rounded-full blur-3xl -z-10"></div>
        <img
          src={Hero}
          alt="Inventory Management"
          className="relative z-10 w-full h-auto floating-anim"
        />
      </motion.div>
    </section>
  );
}
