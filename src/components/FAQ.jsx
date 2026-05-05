import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5";

export default function FAQ({ customFaqs, customTitle }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(null);

  const defaultFaqs = [
    { question: t("faq.q1"), answer: t("faq.a1") },
    { question: t("faq.q2"), answer: t("faq.a2") },
    { question: t("faq.q3"), answer: t("faq.a3") },
    { question: t("faq.q4"), answer: t("faq.a4") },
    { question: t("faq.q5"), answer: t("faq.a5") },
    { question: t("faq.q6"), answer: t("faq.a6") },
    { question: t("faq.q7"), answer: t("faq.a7") },
    { question: t("faq.q8"), answer: t("faq.a8") },
    { question: t("faq.q9"), answer: t("faq.a9") },
    { question: t("faq.q10"), answer: t("faq.a10") },
    { question: t("faq.q11"), answer: t("faq.a11") },
    { question: t("faq.q12"), answer: t("faq.a12") },
  ];

  const faqs = customFaqs || defaultFaqs;

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h2 className="text-4xl font-extrabold text-Main-color mb-10 leading-tight text-center">
        {customTitle || t("faq.title")}
      </h2>

      <div className="space-y-4" dir="auto">
        {faqs.map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl border border-gray-200 overflow-hidden shadow-sm transition-all duration-300 ${
              activeIndex === index ? "bg-gray-50 shadow-md" : "bg-white"
            }`}
          >
            <button
              type="button"
              id={`faq-button-${index}`}
              className="w-full flex justify-between items-center text-left p-5 font-semibold text-Main-color focus:outline-none"
              aria-expanded={activeIndex === index}
              aria-controls={`faq-panel-${index}`}
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg">{item.question}</span>
              {activeIndex === index ? (
                <IoChevronUpOutline className="text-Main-color text-2xl transition-transform duration-300" />
              ) : (
                <IoChevronDownOutline className="text-Main-color text-2xl transition-transform duration-300" />
              )}
            </button>

            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-button-${index}`}
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === index
                  ? "max-h-[400px] opacity-100 p-5 pt-0"
                  : "max-h-0 opacity-0 p-0"
              }`}
            >
              <p className="text-gray-700 leading-relaxed">{item.answer}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
