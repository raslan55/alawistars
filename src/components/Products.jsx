import React from "react";
import OurProduct from "../assets/Images/vecteezy_isometric-flat-3d-illustration-concept-of-business_21272468-1.jpg";
import { useTranslation } from "react-i18next";

import StatsSection from "./StatsSection";
import { motion } from "framer-motion";

export default function Products() {
    const { t } = useTranslation();
  
  return (

    <section className="py-12  relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 px-4">
  {/* Left: Image */}
  <motion.div className="w-full lg:w-1/2"
  whileHover={{ scale: 1.05 }}
  transition={{ type: "easeIn", tween: 300 }}
  >
    <img
      src={OurProduct}
      alt="Our Product"
      className="rounded-xl w-full h-auto object-cover "
    />
  </motion.div>

  {/* Right: Content */}
  <div className="w-full lg:w-1/2 relative ">
    <h2 className="text-sm font-bold text-Main-color  uppercase mb-2">
    {t("Our_Product")} 
    </h2>

    <h3 className="text-3xl md:text-4xl font-bold text-text-color  mb-4">
    {t("Our_Product_h")}   
    </h3>

    <p className="text-gray-700 text-lg leading-relaxed mb-6">
    {t("Our_Product_p")} 
  
    </p>

    {/* Stats Section */}
    <div className="mb-6">
      <StatsSection />
    </div>

    {/* CTA Button */}
    <div className="flex justify-center lg:justify-start">
     <motion.button className="btn-primary"
               whileHover={{ scale: 1.1  }}
               whileTap={{ scale: 0.95 }}
               transition={{ type: "spring", stiffness: 300 }}
               >
        {t("Explore_More")} 
      </motion.button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
