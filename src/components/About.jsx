import React from "react";
import AboutImage from "../assets/Images/[freepicdownloader.com]-counting-number-contents-atm-medium.jpg";
import { FaRegFileCode } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdOutlineLaptopChromebook } from "react-icons/md";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function About() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);

  return (
    <section className="sm:py-12 relative z-10 overflow-hidden about-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 px-4">
          {/* Images */}
          <motion.div
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "easeIn", tween: 300 }}
          >
            <img
              src={AboutImage}
              alt="Team working"
              className="w-full max-w-full h-auto object-cover rounded-xl"
            />
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-bold text-Main-color uppercase mb-2">
              {t("About_Us")}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-text-color mb-4 leading-normal">
              {t("About_text")}
            </h2>
            <div className="w-24 h-1 text-Main-color b-4 rounded"></div>

            <p className="text-gray-700 text-base leading-relaxed mb-6">
              {t("About_p")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <motion.div
                  className="bg-Main-color py-3 px-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "easeIn", tween: 300 }}
                >
                  <FaRegFileCode className="text-4xl text-white" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-text-color">{t("Serv_h")}</h4>
                  <p className="text-sm text-gray-600">{t("serv_p")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <motion.div
                  className="bg-Main-color py-3 px-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "easeIn", tween: 300 }}
                >
                  <MdOutlineLaptopChromebook className="text-4xl text-white" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-text-color">{t("ERP")}</h4>
                  <p className="text-sm text-gray-600">{t("serv2_p")}</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <MotionLink
                to="/about"
                className="btn-primary flex items-center group text-center justify-center px-6 py-3 rounded-md shadow-md text-white font-bold bg-Main-color hover:bg-Main-color-dark transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {isRTL ? (
                  <>
                    {t("CTA_About")}
                    <FaArrowLeftLong className="ms-3 transition-transform duration-300 group-hover:-translate-x-1" />
                  </>
                ) : (
                  <>
                    {t("CTA_About")}
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
