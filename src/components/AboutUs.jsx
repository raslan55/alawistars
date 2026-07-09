import React, { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaHandsHelping,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaInfinity,
  FaTags,
  FaEye,
  FaBullseye,
} from "react-icons/fa";
import CTO from "../assets/Images/CTO.jpg";         // Adjust the path as necessary
import Manger from "../assets/Images/10102644.jpg"; // Adjust the path as necessary
import { motion } from "framer-motion";
import SettingsService from "../services/settingsService";
import { useState, useEffect } from "react";

const CTA = lazy(() => import("./CTA"));

const LoadingFallback = () => (
  <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-50 animate-pulse" />
);

const AboutUs = () => {
  const { t, i18n } = useTranslation();
  const [settings, setSettings] = useState(null);
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    SettingsService.fetchAll().then(data => {
      if (data) setSettings(data);
    });
  }, []);

  const getS = (key, fallback) => {
    if (!settings || !settings[key]) return t(fallback);
    const val = lang === 'ar' ? settings[key].value_ar : settings[key].value_en;
    return val || t(fallback);
  };

  const values = [
    {
      icon: <FaCheckCircle className="text-2xl text-white" />,
      title: t("value_1_title"),
      desc: t("value_1_text"),
    },
    {
      icon: <FaShieldAlt className="text-2xl text-white" />,
      title: t("value_2_title"),
      desc: t("value_2_text"),
    },
    {
      icon: <FaHandsHelping className="text-2xl text-white" />,
      title: t("value_3_title"),
      desc: t("value_3_text"),
    },
    {
      icon: <FaLightbulb className="text-2xl text-white" />,
      title: t("value_4_title"),
      desc: t("value_4_text"),
    },
    {
      icon: <FaCogs className="text-2xl text-white" />,
      title: t("value_5_title"),
      desc: t("value_5_text"),
    },
    {
      icon: <FaRocket className="text-2xl text-white" />,
      title: t("value_6_title"),
      desc: t("value_6_text"),
    },
  ];

  const reasons = [
    {
      icon: <FaUsers className="text-2xl text-white" />,
      title: t("reason_1_title"),
      desc: t("reason_1_desc"),
    },
    {
      icon: <FaChartLine className="text-2xl text-white" />,
      title: t("reason_2_title"),
      desc: t("reason_2_desc"),
    },
    {
      icon: <FaInfinity className="text-2xl text-white" />,
      title: t("reason_3_title"),
      desc: t("reason_3_desc"),
    },
    {
      icon: <FaTags className="text-2xl text-white" />,
      title: t("reason_4_title"),
      desc: t("reason_4_desc"),
    },
  ];

  return (
    <>
      {/* Premium Hero Banner */}
      <section className="bg-gradient-to-b from-[#F0F4FA] to-white pt-16 pb-20 px-6 md:px-16 overflow-hidden border-b border-gray-100 font-['Cairo',sans-serif]">
        <div className="max-w-6xl mx-auto relative">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#1b6ba9]/10 rounded-full blur-3xl"></div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-white text-text-color font-bold text-sm mb-6 border border-[#1b6ba9]/20 shadow-sm">
              {t("About_Us")}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-Main-color mb-6 leading-tight">
              {t("about")}
            </h1>
            <div className="max-w-4xl text-slate-600 text-lg leading-relaxed space-y-5 font-medium">
              <p>{t("companyDescriptionPart1")}</p>
              <p>{t("companyDescriptionPart2")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#F8F9FA] py-12 px-4 md:px-16">
        <div className="max-w-7xl mx-auto text-center space-y-14">
          {/* Vision & Mission */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-stretch">
            {/* Vision */}
            <div className="flex-1 bg-white shadow-sm rounded-2xl p-8 text-start border-l-4 border-Main-color transition-shadow duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FaEye className="text-Main-color text-2xl" />
                <h3 className="text-2xl md:text-3xl font-bold text-Main-color capitalize">
                  {t("our_vision")}
                </h3>
              </div>
              <p className="text-gray-600">{t("vision_text")}</p>
            </div>

            {/* Mission */}
            <div className="flex-1 bg-white shadow-sm rounded-2xl p-8 text-start border-l-4 border-Main-color transition-shadow duration-300 hover:shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <FaBullseye className="text-Main-color text-2xl" />
                <h3 className="text-2xl md:text-3xl font-bold text-Main-color capitalize">
                  {t("our_mission")}
                </h3>
              </div>
              <p className="text-gray-600">{t("mission_text")}</p>
            </div>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color mb-8">
              {t("our_values")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {values.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-sm rounded-2xl p-6 text-start border border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-Main-color"
                >
                  <div className="mb-4">
                    <div className="w-14 h-14 flex items-center justify-center rounded-full bg-Main-color shadow-md">
                      {item.icon}
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-text-color capitalize">
                    {item.title}
                  </h4>
                  <p className="text-text-color text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color uppercase">
              {t("why_choose_us")}
            </h2>
            <p className="text-text-color max-w-2xl mx-auto text-lg leading-8">
              {t("why_choose_us_desc")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-transparent shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-Main-color"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-4 rounded-full bg-Main-color text-white shadow-md mx-auto">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-semibold text-text-color text-center mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>

      <section className=" py-6 px-4 md:px-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* المدير العام */}
          <article className="group overflow-hidden rounded-[16px] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
            <div className="relative overflow-hidden h-56">
              <img
                src={settings?.team1_image?.value_en || Manger}
                alt="المدير العام"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 rounded-full bg-[#0F2D5E] px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                {getS("team1_date", "MANAGER_DATE")}
              </span>
            </div>
            <div className="bg-white p-5">
              <h2 className="text-right text-[18px] font-bold text-slate-900 mb-2">{getS("team1_name", "MANAGER_TITLE")}</h2>
              <p className="text-right text-[14px] text-slate-600 leading-relaxed whitespace-pre-line">
                {getS("team1_bio", "MANAGER_PARAGRAPH")}
              </p>
            </div>
          </article>

          {/* المدير الفني */}
          <article className="group overflow-hidden rounded-[16px] shadow-[0_8px_18px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_24px_rgba(0,0,0,0.12)]">
            <div className="relative overflow-hidden h-56">
              <img
                src={settings?.team2_image?.value_en || CTO}
                alt="المدير الفني"
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <span className="absolute top-3 right-3 rounded-full bg-[#0F2D5E] px-3 py-1 text-[11px] font-bold text-white shadow-lg">
                {getS("team2_date", "TECHNICAL_MANAGER_DATE")}
              </span>
            </div>
            <div className="bg-white p-5">
              <h2 className="text-right text-[18px] font-bold text-slate-900 mb-2"> {getS("team2_name", "TECHNICAL_MANAGER_TITLE")} </h2>
              <p className="text-right text-[14px] text-slate-600 leading-relaxed whitespace-pre-line">
                {getS("team2_bio", "TECHNICAL_MANAGER_PARAGRAPH")}
              </p>
            </div>
          </article>
        </div>
      </section>

      <Suspense fallback={<LoadingFallback />}>
        <CTA
          heading={t("About_Started")}
          subheading={t("About_CTA_Text")}
          btnText={t("read_more")}
        />
      </Suspense>

    </>
  );
};

export default AboutUs;
