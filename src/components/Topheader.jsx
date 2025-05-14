import React from "react";
import { FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

import { BsYoutube , BsFacebook,  BsInstagram, BsTwitterX  } from "react-icons/bs";
export default function Topheader() {
   const { t } = useTranslation();
  return (
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-0 h-auto md:h-[50px] bg-gradient-to-r from-Main-color to-sky-600 shadow-sm p-4">

    {/* Contact Info */}
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 md:gap-8">
      
      {/* Riyadh */}
      <div className="flex items-center gap-2">
        <h6 className="text-lg text-white">
          <FaPhone />
        </h6>
        <a
          className="text-[15px] text-amber-50 hover:text-white font-medium"
          href="/"
        >
          {t("HeadOfficeRiyadh")} <span dir="ltr">+966 50 619 4863</span>
        </a>
      </div>

      {/* Jeddah */}
      <div className="flex items-center gap-2">
        <h6 className="text-lg text-white">
          <FaPhone />
        </h6>
        <a
          className="text-[15px] text-amber-50 hover:text-white font-medium"
          href="/"
        >
          {t("Jeddah_Branch")} <span dir="ltr">+966 50 413 9243</span>
        </a>
      </div>

    </div>

    {/* Social Icons */}
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
      <h5 className="font-medium text-sm uppercase text-amber-50 whitespace-nowrap">
        {t("Follow_us")}:
      </h5>
      <ul className="flex gap-4 sm:gap-5 items-center text-amber-50">
        <li>
          <a className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0" href="/">
            <BsFacebook />
          </a>
        </li>
        <li>
          <a className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0" href="/">
            <BsInstagram />
          </a>
        </li>
        <li>
          <a className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0" href="/">
            <BsTwitterX />
          </a>
        </li>
        <li>
          <a className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0" href="/">
            <BsYoutube />
          </a>
        </li>
      </ul>
    </div>

  </div>

  );
}
