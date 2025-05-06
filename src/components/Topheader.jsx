import React from "react";
import { FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import { BsYoutube , BsFacebook,  BsInstagram, BsTwitterX  } from "react-icons/bs";
export default function Topheader() {
   const { t } = useTranslation();
  return (
    <div className="container">
      <div className=" flex items-center justify-between h-[50px] bg-gradient-to-bl from-amber-300 to-amber-400 shadow-sm  p-4">
        <div className="flex items-center gap-8">
          <div className=" md:flex items-center gap-2 hidden">

            <h6 className=" text-lg text-white ">
              <FaPhone />
            </h6>
            
            <a
              className="text-[15px] text-amber-50 hover:text-white font-medium"
              href="/"
            >
             {t("HeadOfficeRiyadh")}   <span dir="ltr">  +966 50 619 4863</span> 

            </a>
          </div>

          <div className=" sm:flex items-center gap-2 hidden">
            <h6 className="text-lg text-white">
              <FaPhone />
            </h6>
            <a
              className="font-medium text-[15px]  text-amber-50 transition-all duration-500 hover:text-white"
              href="/"
            >
              {t("Jeddah_Branch")} <span dir="ltr"> +966 50 413 9243 </span> 
            </a>
          </div>
        </div>
        
        <div className="flex items-center gap-5">
          <h5 className="font-medium  text-sm uppercase  text-amber-50">{t("Follow_us")} :</h5>
          <ul className="flex gap-5 items-center   text-amber-50">
            <li>
              <a
                className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
                href="/"
              >
            <BsFacebook />

              </a>
            </li>
            <li>
              <a
                className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
                href="/"
              >
              <BsInstagram />
  
              </a>
            </li>
            <li>
              <a
                className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
                href="/"
              >
               <BsTwitterX />

              </a>
            </li>
            <li>
              <a
                className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
                href="/"
              >
               <BsYoutube />

              </a>
            </li>
        
          </ul>
        </div>
      </div>
    </div>
  );
}
