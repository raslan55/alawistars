import React from "react";
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
import CTA from "./CTA";

const AboutUs = () => {
  const { t } = useTranslation();

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
    },
    {
      icon: <FaChartLine className="text-2xl text-white" />,
      title: t("reason_2_title"),
    },
    {
      icon: <FaInfinity className="text-2xl text-white" />,
      title: t("reason_3_title"),
    },
    {
      icon: <FaTags className="text-2xl text-white" />,
      title: t("reason_4_title"),
    },
  ];

  return (
    <>
    
    <section className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-3xl font-bold text-blue-900 mb-6 border-b-2 border-blue-200 pb-2 inline-block">
       {t("about")}  
       
        </h2>

        <div className="text-gray-800 leading-loose text-lg space-y-6 mb-6">
       <p className="text-gray-800 leading-loose text-lg space-y-6 mb-6">

        {t("companyDescription")}
       
        </p>

        </div>

        </div>
      <div className="max-w-7xl mx-auto text-center space-y-20">
        {/* Vision & Mission */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* Vision */}
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-8 text-start border-l-4 border-Main-color">
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-Main-color text-2xl" />
              <h3 className="text-2xl font-bold text-Main-color capitalize">
                {t("our_vision")}
              </h3>
            </div>
            <p className="text-gray-600">{t("vision_text")}</p>
          </div>

          {/* Mission */}
          <div className="flex-1 bg-white shadow-lg rounded-2xl p-8 text-start border-l-4 border-Main-color">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-Main-color text-2xl" />
              <h3 className="text-2xl font-bold text-Main-color capitalize">
                {t("our_mission")}
              </h3>
            </div>
            <p className="text-gray-600">{t("mission_text")}</p>
          </div>
        </div>

        {/* Our Values */}
        <div>
          <h2 className="text-4xl font-bold text-Main-color mb-10">
            {t("our_values")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((item, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md rounded-xl p-6 text-start border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-tr from-Main-color to-indigo-500 shadow-md">
                    {item.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-2 text-text-color capitalize">
                  {item.title}
                </h4>
                <p className="text-text-color  text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center space-y-8">
          <h2 className="text-4xl font-bold text-Main-color uppercase">
            {t("why_choose_us")}
          </h2>
          <p className="text-text-color  max-w-2xl mx-auto text-lg">
            {t("why_choose_us_desc")}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
            {reasons.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
              >
                <div className="w-14 h-14 flex items-center justify-center mb-4 rounded-full bg-gradient-to-tr from-Main-color to-indigo-500 text-white shadow-md mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold text-text-color text-center">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
       
      </div>

    </section>

   <CTA 
  heading={t("About_Started")} 
  subheading={t("About_CTA_Text")} 
/>

     </>
  );
};

export default AboutUs;
