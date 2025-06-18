import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion"; 
import { useTranslation } from "react-i18next";
import CustomPrevArrow from "./CustomPrevArrow";
import CustomNextArrow from "./CustomNextArrow";

export default function Testimonial() {
  const { i18n, t } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
    swipeToSlide: true,
    speed: 3000,
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
    //image: "public/Logos/1.png", // Example image path
  },
  {
    id: "testimonial_1",
    name: "Testimonial_name_2",
    location: "Testimonial_Location_2",
    text: "Testimonial_text_2",
    //image: "public/Logos/2.png",
  },
  {
    id: "testimonial_2",
    name: "Testimonial_name_3",
    location: "Testimonial_Location_3",
    text: "Testimonial_text_3",
  //  image: "public/Logos/3.png",
  },
  {
    id: "testimonial_3",
    name: "Testimonial_name_4",
    location: "Testimonial_Location_4",
    text: "Testimonial_text_4",
  //  image: "public/Logos/4.png",
  },
  {
    id: "testimonial_4",
    name: "Testimonial_name_5",
    location: "Testimonial_Location_5",
    text: "Testimonial_text_5",
   // image: "public/Logos/5.png",
  },
  {
    id: "testimonial_5",
    name: "Testimonial_name_6",
    location: "Testimonial_Location_6",
    text: "Testimonial_text_6",
  //  image: "public/Logos/6.png",
  },
  {
    id: "testimonial_6",
    name: "Testimonial_name_7",
    location: "Testimonial_Location_7",
    text: "Testimonial_text_7",
   // image: "public/Logos/7.png",
  },
  {
    id: "testimonial_7",
    name: "Testimonial_name_8",
    location: "Testimonial_Location_8",
    text: "Testimonial_text_8",
  //  image: "public/Logos/8.png",
  },
  {
    id: "testimonial_8",
    name: "Testimonial_name_9",
    location: "Testimonial_Location_9",
    text: "Testimonial_text_9",
    image: "public/Logos/9.png",
  },
  {
    id: "testimonial_9",
    name: "Testimonial_name_10",
    location: "Testimonial_Location_10",
    text: "Testimonial_text_10",
 //   image: "public/Logos/10.png",
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
              <span className={`absolute top-4 ${isRTL ? 'right-4 ' : 'left-4'}`}>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M31.6803 20.698C31.6803 25.339 27.9213 29.098 23.2803 29.098H22.7203C21.4813 29.098 20.4803 28.097 20.4803 26.858C20.4803 25.619 21.4813 24.618 22.7203 24.618H23.2803C25.4433 24.618 27.2003 22.861 27.2003 20.698V20.138H22.7203C20.2493 20.138 18.2403 18.129 18.2403 15.658V11.178C18.2403 8.707 20.2493 6.698 22.7203 6.698H27.2003C29.6713 6.698 31.6803 8.707 31.6803 11.178V20.698ZM13.7603 20.698C13.7603 25.339 10.0013 29.098 5.36031 29.098H4.80031C3.56131 29.098 2.56031 28.097 2.56031 26.858C2.56031 25.619 3.56131 24.618 4.80031 24.618H5.36031C7.52331 24.618 9.28031 22.861 9.28031 20.698V20.138H4.80031C2.32931 20.138 0.320312 18.129 0.320312 15.658V11.178C0.320312 8.707 2.32931 6.698 4.80031 6.698H9.28031C11.7513 6.698 13.7603 8.707 13.7603 11.178V20.698Z"
                    fill="#1b6ba9"
                  />
                </svg>
              </span>
              {/* Text alignment based on RTL/LTR */}
              <p className={`${isRTL ? 'text-end' : 'text-start'} text-[#001E60] leading-relaxed pt-8 text-[15px] font-normal sm:text-base`}>
                {t(item.text)}
              </p>
              <div className={`flex items-center  mt-4 gap-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                {/* Image if available */}
                {/* You might conditionally render an image here or outside this div */}
             
                {/* <img
                  src={item.image} // Using a single avatar for all
                  alt={t(item.name)}
                  className="w-30 h-30 rounded-full object-fill" // Example styling
                />
                  */}
                <div className={`${isRTL ? 'text-end' : 'text-start'}`}>
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
