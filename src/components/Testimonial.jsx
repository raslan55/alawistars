import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; 
import { useTranslation } from "react-i18next";
import CustomPrevArrow from "./CustomPrevArrow";
import CustomNextArrow from "./CustomNextArrow";
import { FaQuoteRight,FaQuoteLeft } from "react-icons/fa6";

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








export default function Testimonial() {
  const { i18n, t } = useTranslation();
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

const testimonials = [
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
    image: Twelve_img,
  },
];  

  return (
    <section className="py-12 bg-[#EEF5FF] px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <div className="relative inline-block mb-4">
          <h2 className="text-text-Main text-[25px] md:text-[42px] font-semibold text-Main-color leading">
            {t("Testimonial")}
          </h2>
        </div>

        <p className="text-sm sm:text-xl md:text-[22px] font-normal text-text-two max-w-xl mx-auto mb-8 leading-relaxed">
            {t("Testimonial_text")}     
       </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-4">

         <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={item.id || index} className="px-3 sm:px-4">
            <div className="bg-white p-5 sm:p-6 rounded-3xl relative YaShadow h-full min-h-[200px] flex flex-col justify-between">
              {/* SVG icon positioning based on RTL/LTR */}
              <span className={`absolute top-4  ${isRTL ? 'right-4 ' : 'left-4'} `}>

                {isRTL ? <FaQuoteRight className="text-Main-color text-5xl "/> : <FaQuoteLeft className="text-Main-color text-5xl"/>}

              </span>
              {/* Text alignment based on RTL/LTR */}
              <p className={`${isRTL ? 'text-end' : 'text-start'} text-[#001E60] leading-relaxed pt-10 text-[15px] font-normal sm:text-base`}>
                {t(item.text)}
              </p>
              <div className={`flex items-center justify-between  mt-4`}>
                {/* Image if available */}
                {/* You might conditionally render an image here or outside this div */}
                <div> 
                  <img
                  src={item.image} // Using a single avatar for all
                  alt={t(item.name)}
                  className="w-35 h-35   object-fill" // Example styling
                /> 
                </div>
              
                 
                <div className={`${isRTL ?'text-end':'text-start'}`}>
                  <p className="font-semibold text-[#001E60] text-sm sm:text-base">
                    {t(item.name)}
                  </p>
                  <p className="text-xs sm:text-sm text-text-two">
                    {t(item.location)}
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </Slider>
      </div>
    </section>
  );
}
