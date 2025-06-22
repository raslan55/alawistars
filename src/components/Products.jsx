import React from "react";
import OurProduct from "../assets/Images/vecteezy_isometric-flat-3d-illustration-concept-of-business_21272468-1.jpg";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import StatsSection from "./StatsSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Products() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);

  return (
    <section className="py-6 sm:py-12 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center  gap-3 sm:gap-12 sm:mb-10 px-4">
          {/* Left: Image */}
          <motion.div
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "easeIn", tween: 300 }}
          >
            <img
              src={OurProduct}
              alt="Our Product"
              className="rounded-xl w-full max-w-full h-auto object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2 relative">
            <h2 className="text-sm font-bold text-Main-color uppercase mb-2">
              {t("Our_Product")}
            </h2>

            <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-text-color mb-4">
              {t("Our_Product_h")}
            </h3>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {t("Our_Product_p")}
            </p>

            {/* Stats Section */}
            <div className="mb-6">
              <StatsSection />
            </div>

            {/* CTA Button */}
            <div className="flex justify-center lg:justify-start">
              <MotionLink
                className="btn-primary flex items-center group text-center justify-center px-6 py-3 rounded-md shadow-md text-white font-bold bg-Main-color hover:bg-Main-color-dark transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                to={"/products"}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isRTL ? (
                  <>
                    {t("Explore_More")}
                    <FaArrowLeftLong className="ms-3 transition-transform duration-300 group-hover:-translate-x-1" />
                  </>
                ) : (
                  <>
                    {t("Explore_More")}
                    <FaArrowRightLong className="ms-3 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </MotionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
