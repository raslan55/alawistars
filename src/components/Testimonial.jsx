import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import CustomPrevArrow from "./CustomPrevArrow";
import CustomNextArrow from "./CustomNextArrow";
import { FaQuoteRight,FaQuoteLeft } from "react-icons/fa6";
import TestimonialService from "../services/testimonialService";

import One_img from "../assets/Images/Testmonial/Logos/BlueMark.png";
import Two_img from "../assets/Images/Testmonial/Logos/ACMS.png";
import Three_img from "../assets/Images/Testmonial/Logos/Spert.png";
import Four_img from "../assets/Images/Testmonial/Logos/Adam.png";
import Five_img from "../assets/Images/Testmonial/Logos/Medical_cites.png";
import Six_img from "../assets/Images/Testmonial/Logos/AHM.jpg";
import Seven_img from "../assets/Images/Testmonial/Logos/Ahmed.png";
import Eight_img from "../assets/Images/Testmonial/Logos/Tabark.png";
import Nine_img from "../assets/Images/Testmonial/Logos/Al-Jasser.png";
import Ten_img from "../assets/Images/Testmonial/Logos/Parts&More2.png";
import Eleven_img from "../assets/Images/Testmonial/Logos/MJC.png";
import Twelve_img from "../assets/Images/Testmonial/Logos/MML.png";


export default function Testimonial({ customTestimonials, customTitle, customSubtitle, filterIds }) {
  const { i18n, t } = useTranslation();
  const [apiTestimonials, setApiTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const isRTL = i18n.language === 'ar';
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />, 
    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows: true, // Ensure arrows are true for this breakpoint
        },
      },

      { 
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false, // Currently no arrows on mobile. Change to true if desired.
        },
      },
    ],
  };

const defaultTestimonials = [
  {
    id: "testimonial_0", 
    name: "Testimonial_name_1",
    location: "Testimonial_Location_1",
    text: "Testimonial_text_1",
    image: One_img,
  },

 {
    id: "testimonial_1",
    name: "Testimonial_name_2",
    location: "Testimonial_Location_2",
    text: "Testimonial_text_2",
    image: Two_img,
  },

  {
    id: "testimonial_2",
    name: "Testimonial_name_3",         
    location: "Testimonial_Location_3",
    text: "Testimonial_text_3",   
   image: Three_img,
  },

  {
    id: "testimonial_3",
    name: "Testimonial_name_4",
    location: "Testimonial_Location_4",
    text: "Testimonial_text_4",
   image:   Four_img,
  },


  {
    id: "testimonial_4",
    name: "Testimonial_name_5",
    location: "Testimonial_Location_5",
    text: "Testimonial_text_5",
   image:     Five_img,
  },


  {
    id: "testimonial_5",
    name: "Testimonial_name_6",
    location: "Testimonial_Location_6",
    text: "Testimonial_text_6",
   image: Six_img,
  },


  {
    id: "testimonial_6",
    name: "Testimonial_name_7",
    location: "Testimonial_Location_7",
    text: "Testimonial_text_7",
    image: Seven_img,
  },


  {
    id: "testimonial_7",
    name: "Testimonial_name_8",
    location: "Testimonial_Location_8",
    text: "Testimonial_text_8",
  image: Eight_img,
  },


  {
    id: "testimonial_8",
    name: "Testimonial_name_9",
    location: "Testimonial_Location_9",
    text: "Testimonial_text_9",
    image: Nine_img,
  },

  {
    id: "testimonial_9",
    name: "Testimonial_name_10",
    location: "Testimonial_Location_10",
    text: "Testimonial_text_10",
    image: Ten_img,
  },

    {
    id: "testimonial_10",
    name: "Testimonial_name_11",
    location: "Testimonial_Location_11",
    text: "Testimonial_text_11",
    image: Eleven_img,
  },

   {
    id: "testimonial_11",
    name: "Testimonial_name_12",
    location: "Testimonial_Location_12",
    text: "Testimonial_text_12",
      },
  ];  

  useEffect(() => {
    TestimonialService.fetchAll().then(data => {
      if (data && data.length > 0) setApiTestimonials(data);
      setLoading(false);
    });
  }, []);

  // Map API items to component format
  const mappedApiTestimonials = apiTestimonials.map(item => ({
    id: item.id,
    name: i18n.language === 'ar' ? item.name_ar : item.name_en,
    location: i18n.language === 'ar' ? item.location_ar : item.location_en,
    text: i18n.language === 'ar' ? item.text_ar : item.text_en,
    image: item.image,
    isApi: true
  }));

  let testimonials = customTestimonials || (mappedApiTestimonials.length > 0 ? mappedApiTestimonials : defaultTestimonials);

  if (filterIds && filterIds.length > 0) {
    testimonials = defaultTestimonials.filter(item => filterIds.includes(item.id));
  }
  
  if (testimonials.length === 0) testimonials = defaultTestimonials;

  return (
    <section className="py-20 bg-gradient-to-b from-[#eef5ffb0] to-white px-4 sm:px-6 lg:px-8 overflow-hidden font-['Cairo',sans-serif]">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="relative inline-block mb-4">
          <span className="block w-12 h-1 bg-brand-accent mx-auto mb-4 rounded-full"></span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-Main-color">
            {customTitle || t("Testimonial")}
          </h2>
        </div>

        <p className="text-lg md:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed mt-4">
            {customSubtitle || t("Testimonial_text")}     
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative max-w-7xl mx-auto px-12"
      >
         <Slider {...{...settings, rtl: isRTL, dots: true, prevArrow: <CustomPrevArrow isRTL={isRTL} />, nextArrow: <CustomNextArrow isRTL={isRTL} />}}>
        {testimonials.map((item, index) => (
          <div key={item.id || index} className="px-4 py-10">
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white p-10 rounded-[3rem] relative shadow-xl shadow-slate-200/50 border border-slate-50 h-full flex flex-col justify-between transition-all duration-500"
            >
              {/* SVG icon positioning based on RTL/LTR */}
              <span className={`absolute top-1 ${isRTL ? 'right-8' : 'left-8'} opacity-[0.08]`}>
                {isRTL ? <FaQuoteRight size={80} className="text-Main-color"/> : <FaQuoteLeft size={80} className="text-Main-color"/>}
              </span>

              {/* Text alignment based on RTL/LTR */}
              <p className={`${isRTL ? 'text-end' : 'text-start'} text-slate-700 leading-relaxed pt-10 text-lg font-medium relative z-10`}>
                {item.isApi ? item.text : t(item.text)}
              </p>

              <div className="flex items-center gap-5 mt-10 pt-8 border-t border-slate-50">
                <div className="flex-shrink-0"> 
                  <div className="w-20 h-20 rounded-3xl overflow-hidden bg-slate-50 p-2 border border-slate-100 shadow-inner">
                    <img
                      src={item.image}
                      alt={item.isApi ? item.name : t(item.name)}
                      className="w-full h-full object-contain"
                    /> 
                  </div>
                </div>
              
                <div className={`${isRTL ? 'text-end' : 'text-start'} flex-grow`}>
                  <p className="font-black text-Main-color text-lg">
                    {item.isApi ? item.name : t(item.name)}
                  </p>
                  <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">
                    {item.isApi ? item.location : t(item.location)}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </Slider>
      </motion.div>
    </section>
  );
}
