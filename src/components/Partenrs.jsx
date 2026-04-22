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
import Four from "../assets/Images/Testmonial/Logos/AHM.jpg";
import Five from "../assets/Images/Partenrs/26.jpg";
import Six from "../assets/Images/Partenrs/27.jpg";
import seven from "../assets/Images/Testmonial/Logos/Ahmed.png";
import eight from "../assets/Images/Testmonial/Logos/ACMS.png";
import nine from "../assets/Images/Testmonial/Logos/Nawa.png";
import ten from "../assets/Images/Testmonial/Logos/BlueMark.png";
import eleven from "../assets/Images/Testmonial/Logos/Parts&More.png";
import twelve from "../assets/Images/Testmonial/Logos/MJC.png";
import thirteen from "../assets/Images/Testmonial/Logos/Medical_cites.png";
import fourteen from "../assets/Images/Testmonial/Logos/MML.png";
import fifteen from "../assets/Images/Testmonial/Logos/Doors.png";
import sixteen from "../assets/Images/Testmonial/Logos/GG.png";
import seventeen from "../assets/Images/Testmonial/Logos/Hadid.png";
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
  { id: "seven", src: seven, alt: "Image Eight" },
  { id: "eight", src: eight, alt: "Image Eight" },
  { id: "nine", src: nine, alt: "Image Nine" },
  { id: "ten", src: ten, alt: "Image Ten" },
  { id: "eleven", src: eleven, alt: "Image Eleven" },
  { id: "twelve", src: twelve, alt: "Image Twelve" },
  { id: "thirteen", src: thirteen, alt: "Image Thirteen" },
  { id: "fourteen", src: fourteen, alt: "Image Fourteen" },
  { id: "fifteen", src: fifteen, alt: "Image Fifteen" },
  { id: "sixteen", src: sixteen, alt: "Image Sixteen" },
  { id: "seventeen", src: seventeen, alt: "Image Seventeen" },
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 relative z-10 overflow-hidden bg-white font-['Cairo',sans-serif]">
      {/* Premium Subtle Depth Layers */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-Main-color/[0.03] rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/[0.02] rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto px-6 lg:px-16">
        {/* Top: Image and Text */}
        <div className="flex flex-col lg:flex-row items-center gap-20 mb-24">
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 40 : -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[45%]"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-slate-50 border border-slate-100 rounded-[3rem] transform rotate-3 -z-10 transition-transform group-hover:rotate-6 duration-500"></div>
              <div className="absolute inset-0 bg-Main-color/[0.05] rounded-[3rem] transform -rotate-3 -z-10 transition-transform group-hover:-rotate-6 duration-500"></div>
              <img
                src={Handshake}
                alt="Our Partners"
                className="rounded-[3rem] w-full object-cover shadow-2xl border-8 border-white relative z-10"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-[55%] space-y-8 text-start"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-3 py-2 px-5 rounded-full bg-Main-color/[0.07] text-Main-color font-black text-xs tracking-widest uppercase border border-Main-color/10">
                <span className="w-2 h-2 rounded-full bg-Main-color animate-pulse"></span>
                {t("Our_Partners")}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-Main-color leading-[1.1]">
                {t("Partners_Heading")}
              </h2>
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
                {t("Our_Partners_p")}
              </p>
            </div>

            {/* Premium Expertise Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              {[
                { title: t("pc"), count: "500+", color: "bg-blue-500" },
                { title: t("ERP"), count: "1000+", color: "bg-indigo-500" },
                { title: t("PS"), count: "2000+", color: "bg-emerald-500" },
                { title: t("maintenance"), count: "300+", color: "bg-orange-500" }
              ].map((stat, i) => (
                <div 
                  key={i} 
                  className="group p-7 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-Main-color/20 transition-all duration-500 relative overflow-hidden"
                >
                  <div className={`absolute top-0 ${isRTL ? 'right-0' : 'left-0'} w-1.5 h-full ${stat.color} opacity-40 group-hover:opacity-100 transition-opacity`}></div>
                  <div className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} w-12 h-12 ${stat.color} opacity-[0.05] rounded-full transform group-hover:scale-[3] transition-transform duration-700`}></div>
                  
                  <h4 className="text-3xl font-black text-Main-color mb-1 relative z-10 transition-transform group-hover:translate-x-1">{stat.count}</h4>
                  <p className="text-slate-500 text-sm font-black uppercase tracking-wider relative z-10">{stat.title}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Title above slider */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="max-w-2xl mx-auto space-y-4">
             {/* <h3 className="text-2xl md:text-3xl font-bold text-slate-800 tracking-tight">
               {t("Partners_text")}
             </h3> */}
             <div className="w-16 h-1 bg-brand-accent mx-auto rounded-full"></div>
          </div>
        </motion.div>

        {/* Logo Slider */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Swiper
            key={i18n.language}
            dir={dir}
            modules={[Thumbs, Keyboard, Autoplay]}
            spaceBetween={20}
            slidesPerView={6}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            keyboard={{ enabled: true }}
            breakpoints={{
              320: { slidesPerView: 2 },
              480: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 6 },
            }}
            className="pb-8"
          >
            {images.map((img) => (
              <SwiperSlide
                key={img.id}
                className="bg-white p-6 min-h-[120px] rounded-2xl shadow-sm border border-slate-50 flex items-center justify-center hover:shadow-md transition-all duration-300"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="max-w-full h-[60px] object-contain transition-transform duration-300 hover:scale-110"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Action Link */}
        <div className="flex items-center justify-center">
          <MotionLink
            className="flex items-center group px-10 py-4 rounded-xl shadow-lg text-white font-bold text-lg bg-Main-color hover:bg-Main-color/90 transition-all gap-4"
            whileHover={{ scale: 1.05 }}
            to={"/AllClients"}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t("ReadMore")}</span>
            {isRTL ? (
              <FaArrowLeftLong size={20} className="transition-transform duration-300 group-hover:-translate-x-2" />
            ) : (
              <FaArrowRightLong size={20} className="transition-transform duration-300 group-hover:translate-x-2" />
            )}
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
