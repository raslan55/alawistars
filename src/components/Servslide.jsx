import React from "react";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Servslide() {
const { t } = useTranslation();


  return (
    <div>
  <Marquee pauseOnHover={true} direction="left" className="sm:py-4 bg-gradient-to-r from-Main-color to-sky-600">
  {[
    "SERVICES_WE_PROVIDE",
    "Cloud_Based_Solutions",
    "Desktop_Applications",
    "ERP",
    "Inv_acc",
    "acc",
    "Inv",
    "Med",
    "Furn",
    "Pr",
    "Maintenance",
  ].map((key, index) => (
    <div key={index} className="mx-3">
      <div className="bg-[#fff] text-Main-color px-3 py-3 rounded-sm shadow-lg  min-w-max text-center">
        <h1 className="text-base font-semibold whitespace-nowrap">{t(key)}</h1>
      </div>
    </div>
  ))}
</Marquee>
    </div>
  );
}
