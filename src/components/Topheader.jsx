import React from "react";
import { FaPhone } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import { BsYoutube, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
export default function Topheader() {
  const { t } = useTranslation();
  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-center md:justify-between
                 gap-4
                 md:gap-0 h-auto md:h-[50px] bg-gradient-to-r from-Main-color to-sky-600 shadow-sm p-4" >
      <div
        className="flex flex-col sm:flex-row sm:items-center
                 gap-2
                 md:gap-8" >
        <div className="flex items-center gap-2 ">
          <h6 className="text-lg text-white">
            <FaPhone />
          </h6>
          <a
            className="text-[15px] text-amber-50 hover:text-white font-medium"
            href="tel:+966506194863"
          >
            {t("HeadOfficeRiyadh")}
            <span dir="ltr" className="me-4">
              +966 50 619 4863
            </span>
          </a>
        </div>

        <div className="flex items-center gap-2">
          <h6 className="text-lg text-white">
            <FaPhone />
          </h6>
          <a
            className="text-[15px] text-amber-50 hover:text-white font-medium "
            href="tel:+966504139243"
          >
            {t("Jeddah_Branch")}

            <span dir="ltr" className="me-4">
              +966 50 413 9243
            </span>
          </a>
        </div>
      </div>

      <div
        className="flex flex-wrap sm:flex-row
                 justify-center
                 items-center
                 gap-3
                 sm:gap-5"
      >
        <h5 className="font-medium text-sm uppercase text-amber-50 whitespace-nowrap">
          {t("Follow_us")}:
        </h5>
        <ul className="flex gap-4 sm:gap-5 items-center text-amber-50">
          <li>
            <a
              className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
              href="https://www.facebook.com/alawistars/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
              href="https://www.instagram.com/alawistarsest"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram />
            </a>
          </li>
          <li>
            <a
              className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
              href="https://x.com/i/flow/login?redirect_after_login=%2Falawistars"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsTwitterX />
            </a>
          </li>
          <li>
            <a
              className="transition-all duration-500 text-TextColor-0 hover:text-PrimaryColor-0"
              href="https://www.youtube.com/channel/UCCtcpoFpthrM_CcjZZ6XT6Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsYoutube />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
