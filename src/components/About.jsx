import React from "react";
import AboutImage from "../assets/Images/[freepicdownloader.com]-counting-number-contents-atm-medium.jpg";
import { FaRegFileCode } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

import { MdOutlineLaptopChromebook } from "react-icons/md";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="py-12  relative z-10 overflow-hidden about-section">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 px-4">
          {/* Images */}
          <motion.div
            className=" w-full lg:w-1/2 "
            whileHover={{ scale: 1.05 }}
            transition={{ type: "easeIn", tween: 300 }}
          >
            <img
              src={AboutImage}
              alt="Team working"
              className="w-full h-auto object-cover rounded-xl"
            />
          </motion.div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-bold text-Main-color  uppercase mb-2">
              {t("About_Us")}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-color  mb-4 leading-normal  ">
              {t("About_text")}
            </h2>
            <div className="w-24 h-1 text-Main-color b-4 rounded"></div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {t("About_p")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <motion.div
                  className=" bg-Main-color  py-3 px-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "easeIn", tween: 300 }}
                >
                  <FaRegFileCode className="text-4xl text-[#fff]" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-text-color ">{t("Serv_h")}</h4>
                  <p className="text-sm text-gray-600">{t("serv_p")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <motion.div
                  className=" bg-Main-color py-3 px-3 rounded-full"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "easeIn", tween: 300 }}
                >
                  <MdOutlineLaptopChromebook className="text-4xl text-[#fff]" />
                </motion.div>
                <div>
                  <h4 className="font-bold text-text-color "> {t("ERP")} </h4>
                  <p className="text-sm text-gray-600">{t("serv2_p")}</p>
                </div>
              </div>
            </div>


              <motion.button
                        className="btn-primary flex items-center group"
                        whileHover={{ scale: 1.1}}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
            
                        {t("CTA_About")}
                        <FaArrowLeftLong  className="ms-3 transition-transform duration-300 group-hover:-translate-x-1"/>
            
                      </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
