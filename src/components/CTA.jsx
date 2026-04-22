import React from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { getRoutePath } from "../utils/i18nHelpers";

export default function CTA({ heading, subheading, btnText }) {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <section className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 font-['Cairo',sans-serif]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto bg-white rounded-[2.5rem] relative overflow-hidden border border-Main-color/10 shadow-xl shadow-Main-color/5"
      >
        {/* 1. Refined Background Texture */}
        <div className="absolute inset-0 pointer-events-none">
           {/* Subtle Dot Pattern */}
           <div className="absolute inset-0 opacity-[0.03]" 
                style={{ backgroundImage: `radial-gradient(circle, var(--color-Main-color) 1.5px, transparent 1.5px)`, backgroundSize: '32px 32px' }}>
           </div>

           {/* Brand-Infused Mesh Gradients (Soft & Professional) */}
           <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] bg-Main-color/[0.04] rounded-full blur-[100px]"></div>
           <div className="absolute -bottom-1/2 -left-1/4 w-[500px] h-[500px] bg-brand-accent/[0.04] rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 py-16 px-8 sm:px-16 lg:px-24">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            
            {/* Text Content (Right in RTL, Left in LTR) */}
            <div className={`flex-1 text-center lg:text-start lg:order-1 ${isRTL ? 'lg:text-end' : 'lg:text-start'}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <span className="inline-block py-1.5 px-5 rounded-full bg-Main-color/5 text-Main-color font-bold text-sm tracking-wide uppercase border border-Main-color/10">
                  {t("Ready_To_Start")}
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-Main-color leading-[1.1] mb-6">
                {heading}
              </h2>
              <p className="text-slate-500 font-medium text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl lg:mx-0">
                {subheading}
              </p>
            </div>

            {/* Action Button (Left in RTL, Right in LTR) */}
            <div className={`w-full lg:w-auto flex ${isRTL ? 'lg:justify-start lg:order-2' : 'lg:justify-end lg:order-2'}`}>
               <motion.div
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="w-full sm:w-auto"
               >
                 <Link
                   to={`/${getRoutePath("contact", t)}`}
                   className="bg-Main-color text-white px-12 py-6 rounded-2xl shadow-lg hover:bg-[#165a8e] hover:shadow-xl transition-all duration-300 font-black text-xl w-full sm:w-auto flex items-center justify-center gap-4 group"
                 >
                   <span>{btnText || t("Choose_Field")}</span>
                   <motion.span
                     animate={{ x: isRTL ? [-4, 4] : [4, -4] }}
                     transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                   >
                     {isRTL ? <FaArrowLeftLong /> : <FaArrowRightLong />}
                   </motion.span>
                 </Link>
               </motion.div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
