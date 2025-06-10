import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Thumbs, Keyboard, Autoplay } from "swiper/modules";
import { Rating, RatingStar } from "flowbite-react";
import "swiper/css";

import One from "../assets/Images/Testmonial/1.webp";
import Two from "../assets/Images/Testmonial/2.webp";
import Three from "../assets/Images/Testmonial/3.webp";
import Four from "../assets/Images/Testmonial/4.webp";
import Five from "../assets/Images/Testmonial/5.webp";
import Six from "../assets/Images/Testmonial/6.webp";
import Seven from "../assets/Images/Testmonial/7.webp";

const testimonials = [
  { id: "one", img: One, alt: "Client testimonial 1" },
  { id: "two", img: Two, alt: "Client testimonial 2" },
  { id: "three", img: Three, alt: "Client testimonial 3" },
  { id: "four", img: Four, alt: "Client testimonial 4" },
  { id: "five", img: Five, alt: "Client testimonial 5" },
  { id: "six", img: Six, alt: "Client testimonial 6" },
  { id: "seven", img: Seven, alt: "Client testimonial 7" },
];

export default function Testimonial() {
  const { i18n ,t } = useTranslation();
  
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section className="py-12 bg-[#F0F8FD] relative z-10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h5 className="text-Main-color  text-xl font-semibold uppercase tracking-wide mb-3">
            {t("Testimonial")} 
            </h5>
            <h2 className="text-text-color text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {t("Stories")}   
            </h2>
            <p className="text-[#6b7a7a] text-base sm:text-lg leading-relaxed">
            {t("Testimonial_text")}   
            
            </p>
          </div>

          {/* Right Slider */}
          <div className="lg:w-1/2 w-full">
            <Swiper
              className="px-2 sm:px-4"
              key={i18n.language}
              dir={dir}
              modules={[Thumbs, Keyboard, Autoplay]}
              spaceBetween={24}
              slidesPerView={2}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              keyboard={{ enabled: true }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 2 },
              }}
            >
              {testimonials.map(({ id, img, alt }) => (
                <SwiperSlide
                  key={id}
                  className="bg-white p-6 rounded-2xl shadow-lg  cursor-grab"
                >
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-auto object-contain rounded-lg mb-4"
                  />
                  <Rating className="flex gap-1 items-center justify-center">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <RatingStar key={index} />
                    ))}
                  </Rating>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
