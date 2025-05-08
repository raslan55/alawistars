import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Thumbs, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import Handshake from "../assets/Images/embracing-erp-system-development-business_18660-6835.avif"
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
  const { i18n ,t  } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <>
    <section className="py-12 relative z-10 overflow-hidden">
  <div className="container mx-auto px-4">

    <div className="flex flex-col lg:flex-row items-center gap-12 mb-10">
      <div className="w-full lg:w-1/2">
        <img
          src={Handshake} 
          alt="Handshake"
          className="rounded-xl w-full h-auto object-cover p-5"
        />
      </div>

      <div className="w-full lg:w-1/2 relative text-center lg:text-left">
        <h2 className="text-3xl sm:text-4xl font-bold capitalize text-Main-color  mb-4">
          Our Partners
        </h2>
        <p className="text-[#063232] mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg">
        Our clients are our partners in success, thanks to God; Alawi Stars for Computer Systems has more than 10,000 clients so far in all disciplines, and achieved a great success in a short time through the production of the distinct software, these are some of our clients that we had the honor to serve them
        </p>
      </div>
    </div>

    <div className="text-center mb-8 px-4">
      <h5 className="font-bold text-2xl text-Main-color uppercase mb-3">
        {t("Partners_Heading")}
      </h5>
      <h1 className="font-semibold text-[#063232] text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] max-w-4xl mx-auto">
        {t("Partners_text")}
      </h1>
    </div>

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
            className="bg-white p-4 rounded-2xl shadow transition-transform duration-300 hover:scale-105 cursor-grab"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="text-center">
      <button className="btn-primary ">
        {t("ReadMore")}
      </button>
    </div>

  </div>
</section>

    </>
  );
}
