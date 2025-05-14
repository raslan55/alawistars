import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaLightbulb,
  FaCogs,
  FaHandsHelping,
  FaRocket,
} from "react-icons/fa";

const AboutUs = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <FaCheckCircle className="text-Main-color text-3xl" />,
      title: t("value_1_title"),
      desc: t("value_1_text"),
    },
    {
      icon: <FaShieldAlt className="text-Main-color text-3xl" />,
      title: t("value_2_title"),
      desc: t("value_2_text"),
    },
    {
      icon: <FaHandsHelping className="text-Main-color text-3xl" />,
      title: t("value_3_title"),
      desc: t("value_3_text"),
    },
    {
      icon: <FaLightbulb className="text-Main-color text-3xl" />,
      title: t("value_4_title"),
      desc: t("value_4_text"),
    },
    {
      icon: <FaCogs className="text-Main-color text-3xl" />,
      title: t("value_5_title"),
      desc: t("value_5_text"),
    },
    {
      icon: <FaRocket className="text-Main-color text-3xl" />,
      title: t("value_6_title"),
      desc: t("value_6_text"),
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        {/* الرؤية والرسالة */}
        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <div className="bg-white shadow-md rounded-2xl p-8 text-start">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {t("our_vision")}
            </h3>
            <p className="text-gray-600">{t("vision_text")}</p>
          </div>
          <div className="bg-white shadow-md rounded-2xl p-8 text-start">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              {t("our_mission")}
            </h3>
            <p className="text-gray-600">{t("mission_text")}</p>
          </div>
        </div>

        {/* القيم */}
        <h2 className="text-3xl font-extrabold mb-10 text-orange-600">
          {t("our_values")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-xl p-6 text-start hover:shadow-xl transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
