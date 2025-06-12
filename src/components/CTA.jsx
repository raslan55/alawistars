import React from 'react';
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';


export default function CTA({ heading, subheading }) {
   const { t } = useTranslation();
  return (
    <section className="bg-gradient-to-r from-Main-color to-sky-600 text-white py-12 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
    
    {/* النص التعريفي */}
    <div className="flex-1 w-full">
      <h2 className="text-base sm:text-lg lg:text-3xl   font-bold text-white text-justify">
        {heading}
      </h2>
      <h3 className="text-sm sm:text-lg font-semibold mt-2 leading-snug text-justify">
       {subheading}
       
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
            <a href="tel:+966506194863" className="hover:underline">
               <BsFillTelephoneFill className="w-5 h-5" />
            </a>
        </div>

        <div className="text-left leading-tight">
          <p className="text-sm font-bold text-justify">    {t("Call_US")}  </p>
          <p className="text-lg font-bold " dir="ltr">
          <a href="tel:+966506194863" className="hover:underline">
            +966 50 619 4863
          </a>            
            </p>
        </div>
      </a>

      {/* زر التواصل */}

      <Link
        to="/contact"
        className="flex items-center justify-center gap-3 bg-white text-Main-color px-6 py-4 font-bold rounded-md shadow-md hover:scale-105 transition-transform duration-300  min-w-[220px] h-[80px]"
      >
        <span className="bg-Main-color text-white p-3 rounded-full shadow">   <FaRegPaperPlane className="w-5 h-5" /> </span>
        
        <span>{t("contact")} </span>
      </Link>
    </div>
    </div>
</section>

  );
}
