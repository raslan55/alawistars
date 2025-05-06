import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import One from "../assets/Images/Testmonial/1.webp";
import Two from "../assets/Images/Testmonial/2.webp";
import Three from "../assets/Images/Testmonial/3.webp";
import Four from "../assets/Images/Testmonial/4.webp";
import Five from "../assets/Images/Testmonial/5.webp";
import Six from "../assets/Images/Testmonial/6.webp";
import seven from "../assets/Images/Testmonial/7.webp";
import { Thumbs, Keyboard, Autoplay } from "swiper/modules";
import { Rating, RatingStar } from "flowbite-react";

export default function Testimonial() {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <>
      <section className="pt-28 pb-[98px] bg-gradient-to-r from-[#F0F8FD] to-[#B8E0F4] relative z-10 overflow-hidden">
        <div className="container px-8">
          <div className="flex ">
            <div className="w-55 flex-auto ">
              <h5 className="  font-bold text-2xl  text-amber-400 uppercase mb-3 ">
                Testimonial
              </h5>
              <h1 className="  font-semibold text-[#063232] text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
              Real Stories, Real Results
              </h1>
              <p className="  text-[#6b7a7a] mb-7">
              Hear what our clients have to say about their journey with us.
              <br className="hidden sm:block lg:hidden xl:block" /> We’re proud to deliver value that speaks for itself.
              </p>
            </div>
            <div className="w-45 flex-auto ">
              <Swiper
                className="p-20"
                key={i18n.language}
                dir={dir}
                modules={[Thumbs, Keyboard, Autoplay]}
                spaceBetween={30}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
                keyboard={{
                  enabled: true,
                }}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
              >
                <SwiperSlide className="bg-white p-4 rounded-2xl cursor-all-scroll ">
                  <img src={One} />
                  <Rating className="flex gap-[6px] items-center justify-center mt-3">
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </Rating>
                </SwiperSlide>

                <SwiperSlide className="bg-white p-4 rounded-2xl">
                  <img src={Two} />
                  <Rating className="flex gap-[6px] items-center justify-center mt-3">
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </Rating>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-4 rounded-2xl">
                  <img src={Three} />
                  <Rating className="flex gap-[6px] items-center justify-center mt-3">
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </Rating>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-4 rounded-2xl">
                  <img src={Four} />
                  <Rating className="flex gap-[6px] items-center justify-center mt-3">
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </Rating>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-4 rounded-2xl">
                  <img src={Five} />
                  <Rating className="flex gap-[6px] items-center justify-center mt-3">
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </Rating>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-4 rounded-2xl">
                  <img src={Six} />
                  <Rating className="flex gap-[6px] items-center justify-center mt-3">
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </Rating>
                </SwiperSlide>
                <SwiperSlide className="bg-white p-4 rounded-2xl">
                  <img src={seven} />

                  <Rating className="flex gap-[6px] items-center justify-center mt-3">
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                    <RatingStar />
                  </Rating>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
