import React from "react";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

export default function Servslide() {
  const { t } = useTranslation();

  return (
    <div>
      <Marquee className="shadow ">
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>{t("SERVICES_WE_PROVIDE")}</h1>
        </div>
        <FaStarOfLife />
        <div class="content-slider-content">
          <h1>{t("Cloud_Based_Solutions")}</h1>
        </div>
        <FaStarOfLife />
        <div class="content-slider-content">
          <h1> {t("Desktop_Applications")} </h1>
        </div>
        <FaStarOfLife />
        <div class="content-slider-content">
          <h1>{t("ERP")} </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>{t("Inv_acc")}</h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1> {t("acc")} </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1> {t("Inv")} </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>{t("Med")}</h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1> {t("Furn")} </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1> {t("Pr")} </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1> {t("Maintenance")} </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>{t("Maintenance")} </h1>
        </div>
      </Marquee>
    </div>
  );
}
