import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import { Thumbs, Keyboard, Autoplay } from "swiper/modules";
import 'swiper/css';
import Marquee from "react-fast-marquee";

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


export default function Partenrs() {
  const { i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";
  return (
    <>
      <section className="pt-28 pb-[98px] bg-[#FAFDFF] relative z-10 overflow-hidden">


      <div class="text-center mb-5">
        <h5 class="font-bold text-2xl  text-amber-400 uppercase mb-3">
        MEET OUR PARTNERS
        </h5>
        <h1 className=" font-semibold text-[#063232] text-[16px] leading-[26px] sm:text-[25px] sm:leading-[35px] md:text-[30px] md:leading-[40px] lg:text-[34px] lg:leading-[44px] xl:text-[40px] xl:leading-[50px] 2xl:text-[42px] 2xl:leading-[52px] mb-4">
            We’ve 36+ Dedicated PARTNERS
         </h1>
        </div>
            
       
        <div className="container">
          <Swiper
            className="p-20"
            key={i18n.language}
            dir={dir}
            modules={[Thumbs, Keyboard, Autoplay]}
            spaceBetween={10}
            slidesPerView={6}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            keyboard={{
              enabled: true,
            }}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="bg-white p-4 rounded-2xl cursor-all-scroll shadow-2xl ">
              <img src={One} />
          
            </SwiperSlide>

            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={Two} />
          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={Three} />
          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={Four} />
          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={Five} />
          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={Six} />
          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={z} />

          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={q} />

          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={U} />

          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={M} />

          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={P} />

          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={O} />

          
            </SwiperSlide>
            <SwiperSlide className="bg-white p-4 rounded-2xl shadow-2xl ">
              <img src={I} />

          
            </SwiperSlide>

          </Swiper>
          
        </div>
        <Marquee gradient={true} className="relative z-10 overflow-hidden pt-28 lg:pt-[160px] pb-[120px] bg-white">
  <span style={{ marginRight: 50 }}>Individuals Professional Offer</span>
  <span style={{ marginRight: 50 }}>Business Consultant</span>
  <span style={{ marginRight: 50 }}>Marketing Strategy</span>
  <span style={{ marginRight: 50 }}>Marketing Strategy</span>
  <span style={{ marginRight: 50 }}>Marketing Strategy</span>
  <span style={{ marginRight: 50 }}>Marketing Strategy</span>
  <span style={{ marginRight: 50 }}>Marketing Strategy</span>
  <span style={{ marginRight: 50 }}>Marketing Strategy</span>
</Marquee>
      </section>

   
    </>
  );
}
