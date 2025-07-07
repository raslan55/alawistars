import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Thumbs, Keyboard, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import { motion } from "framer-motion";

import Handshake from "../assets/Images/94840700-5748-4046-8c48-30862b81abd1.jpg";
import One from "../assets/Images/Partenrs/15.jpg";
import Two from "../assets/Images/Partenrs/16.jpg";
import Three from "../assets/Images/Partenrs/17.jpg";
import Four from "../assets/Images/Partenrs/1_1.jpg";
import Five from "../assets/Images/Partenrs/26.jpg";
import Six from "../assets/Images/Partenrs/27.jpg";
import z from "../assets/Images/Partenrs/30.jpg";
import q from "../assets/Images/Partenrs/2_0.jpg";
import U from "../assets/Images/Partenrs/9.jpg";
import M from "../assets/Images/Partenrs/8.jpg";
import P from "../assets/Images/Partenrs/6.jpg";
import O from "../assets/Images/Partenrs/5.jpg";
import I from "../assets/Images/Partenrs/31.jpg";

const images = [
  { id: "one", src: One, alt: "Image One" },
  { id: "two", src: Two, alt: "Image Two" },
  { id: "three", src: Three, alt: "Image Three" },
  { id: "four", src: Four, alt: "Image Four" },
  { id: "five", src: Five, alt: "Image Five" },
  { id: "six", src: Six, alt: "Image Six" },
  { id: "z", src: z, alt: "Image Z" },
  { id: "q", src: q, alt: "Image Q" },
  { id: "u", src: U, alt: "Image U" },
  { id: "m", src: M, alt: "Image M" },
  { id: "p", src: P, alt: "Image P" },
  { id: "o", src: O, alt: "Image O" },
  { id: "i", src: I, alt: "Image I" },
];

export default function Partenrs() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section className="py-4 sm:py-12 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Top: Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-5">
          <motion.div
            className="w-full lg:w-1/2 mt-10 lg:mt-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "easeIn", tween: 300 }}
          >
            <img
              src={Handshake}
              alt="Handshake"
              className="rounded-xl w-full object-cover p-5"
            />
          </motion.div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold capitalize text-Main-color mb-4">
              {t("Our_Partners")}
            </h2>
            <p className="text-text-color text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-6">
              {t("Our_Partners_p")}
            </p>
          </div>
        </div>

        {/* Title above slider */}
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold capitalize text-Main-color mb-4">
            {t("Partners_Heading")}
          </h2>
          <h2 className="text-text-color text-sm sm:text-xl md:text-[22px] font-normal text-text-two max-w-xl mx-auto mb-8 leading-relaxed">
            {t("Partners_text")}
          </h2>
        </div>

        {/* Slider */}
        <div className="px-4 mb-12">
          <Swiper
            key={i18n.language}
            dir={dir}
            modules={[Thumbs, Keyboard, Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            keyboard={{ enabled: true }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
          >
            {images.map((img) => (
              <SwiperSlide
                key={img.id}
                className="bg-white p-2 min-h-[100px]   border-Main-color rounded-2xl shadow-xl cursor-grab" >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-[80px] object-contain"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center">
          <MotionLink
            className="btn-primary flex items-center group text-center justify-center px-6 py-3 rounded-md shadow-md text-white font-bold bg-Main-color hover:bg-Main-color-dark transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            to={"/AllClients"}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {isRTL ? (
              <>
                {t("ReadMore")}
                <FaArrowLeftLong className="ms-3 transition-transform duration-300 group-hover:-translate-x-1" />
              </>
            ) : (
              <>
                {t("ReadMore")}
                <FaArrowRightLong className="ms-3 transition-transform duration-300 group-hover:translate-x-1" />
              </>
            )}
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
