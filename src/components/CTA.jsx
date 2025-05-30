import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";


export default function CTA() {
   const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-r from-Main-color to-sky-600 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
    
    {/* النص التعريفي */}
    <div className="flex-1 w-full">
      <h2 className="text-base sm:text-lg lg:text-4xl   font-bold text-white text-justify">
        {t("Started")}
      </h2>
      <h3 className="text-2xl sm:text-3xl font-semibold mt-2 leading-snug text-justify">
        {t("CTA_Text")}
       
      </h3>
    </div>

    {/* أزرار التواصل */}
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto ">
      
      {/* زر الاتصال */}
      <a
        href="tel:0114760967"
        className="flex items-center gap-4 bg-white text-Main-color px-6 py-4 rounded-md shadow-md hover:scale-105 transition-transform duration-300 min-w-[220px] h-[80px]"
      >
        <div className="bg-Main-color text-white p-3 rounded-full shadow">
          <BsFillTelephoneFill className="w-5 h-5" />
        </div>
        <div className="text-left leading-tight">
          <p className="text-sm font-bold text-justify">    {t("Call_US")}  </p>
          <p className="text-lg font-bold " dir="ltr">011 4760967</p>
        </div>
      </a>

      {/* زر التواصل */}

      <a
        href="/contact"
        className="flex items-center justify-center gap-3 bg-white text-Main-color px-6 py-4 font-bold rounded-md shadow-md hover:scale-105 transition-transform duration-300  min-w-[220px] h-[80px]"
      >
        <span className="bg-Main-color text-white p-3 rounded-full shadow">   <FaRegPaperPlane className="w-5 h-5" /> </span>
        
        <span>{t("contact")} </span>
      </a>
    </div>
    </div>
</section>

  );
}
