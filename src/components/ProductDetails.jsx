import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import products from "../data/products";
import CTA from "./CTA";
import ProductsSlider from "./ProductsSlider";
import FAQ from "./FAQ";
import Testimonial from "./Testimonial";
import { getRoutePath } from "../utils/i18nHelpers";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FiCheckCircle, FiXCircle, FiClock, FiShield, FiTrendingUp, FiZap, FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductDetails() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const product = products.find((p) => p.slug === slug);
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);
  
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 450);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) {
    return (
      <div className="text-center py-16 text-red-600 text-xl font-semibold">
        {t("Product_Not_Found")}
      </div>
    );
  }

  // --- Dynamic Content Logic ---
  
  // 1. FAQs Mapping
  const getProductFaqs = () => {
    const generalFaqs = [
      { question: t("faq.q1"), answer: t("faq.a1") },
      { question: t("faq.q4"), answer: t("faq.a4") },
      { question: t("faq.q9"), answer: t("faq.a9") },
      { question: t("faq.q11"), answer: t("faq.a11") },
    ];

    const specificFaqs = [];
    // Map each product slug to its relevant FAQ key from translation.js
    const faqMap = {
      "accounting-inventory": "inv_acc",
      "general-accounting": "general_acc",
      "inventory-system": "inventory",
      "medical-system": "med",
      "hr-system": "hr",
      "real-estate-management": "real_estate",
      "furnished-apartments": "furnished", 
      "car-maintenance": "car_maintenance",
      "car-sales": "car_sale",
      "telecom-system": "telecom",
      "services-system": "serv_system",
      "fuel-station": "fuel"
    };

    const faqPrefix = faqMap[slug];
    if (faqPrefix) {
      specificFaqs.push({ 
        question: t(`faq.${faqPrefix}_q1`), 
        answer: t(`faq.${faqPrefix}_a1`) 
      });
    }

    return [...specificFaqs, ...generalFaqs];
  };

  // 2. Testimonials Filtering logic
  const getProductTestimonials = () => {
    // Mapping product categories to relevant testimonial IDs
    const testimonialFilterMap = {
      "medical-system": ["testimonial_2", "testimonial_3", "testimonial_4"],
      "car-maintenance": ["testimonial_9", "testimonial_0"],
      "car-sales": ["testimonial_9", "testimonial_0"],
      "accounting-inventory": ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
      "general-accounting": ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
      "inventory-system": ["testimonial_0", "testimonial_5", "testimonial_7", "testimonial_8", "testimonial_10"],
      "hr-system": ["testimonial_5", "testimonial_10", "testimonial_11"],
      "real-estate-management": ["testimonial_11", "testimonial_7"],
      "furnished-apartments": ["testimonial_11", "testimonial_7"],
    };

    return testimonialFilterMap[slug] || null;
  };

  const contactPath = `/${getRoutePath("contact", t)}`;

  return (
    <div className="relative pb-24 md:pb-0 font-['Cairo',sans-serif]">
      {/* 1. Hero Section (Outcome-Driven) */}
      <section className="bg-gradient-to-b from-[#F0F4FA] to-white pt-12 pb-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 overflow-hidden border-b border-gray-100">
        <div className="md:w-1/2 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block py-1.5 px-4 rounded-full bg-[#F0F4FA] text-text-color font-bold text-sm mb-6 border border-[#1b6ba9]/20 shadow-sm">
              {t([`Prod_Ultimate_Solution_${slug}`, "Prod_Ultimate_Solution"])}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-Main-color leading-tight mb-6">
              {t(product.title)} <br/> 
              <span className="text-text-color text-2xl sm:text-3xl mt-2 block font-bold leading-relaxed">{t([`Prod_Efficient_Management_${slug}`, "Prod_Efficient_Management"])}</span>
            </h1>
            
            <p className="text-slate-600 mb-8 leading-relaxed max-w-xl text-lg lg:text-xl font-medium">
              {t([`Prod_Description_${slug}`, product.description])}
            </p>

            {/* Benefit Bullets */}
            <div className="flex flex-col gap-4 mb-10 w-fit">
              {[
                { key: "Prod_Save_Time", icon: <FiClock className="text-Main-color w-6 h-6 shrink-0" /> },
                { key: "Prod_Reduce_Errors", icon: <FiTrendingUp className="text-Main-color w-6 h-6 shrink-0" /> },
                { key: "Prod_Zatca_Compliant", icon: <FiShield className="text-Main-color w-6 h-6 shrink-0" /> },
              ].map((bullet, idx) => {
                const label = t([`${bullet.key}_${slug}`, bullet.key]);
                if (!label) return null;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-50">
                    {bullet.icon}
                    <span className="text-slate-700 font-bold">{label}</span>
                  </div>
                );
              })}
            </div>

            {/* CTAs */}
            <div className="flex flex-col flex-wrap sm:flex-row items-center gap-4">
              <MotionLink
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                to={contactPath}
                className="w-full sm:w-auto px-8 py-4 rounded-xl shadow-xl shadow-Main-color/20 text-white font-extrabold text-lg bg-Main-color hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {t("Prod_Book_Demo")} 
                {isRTL ? <FaArrowLeftLong /> : <FaArrowRightLong />}
              </MotionLink>
              
              <MotionLink
                whileHover={{ scale: 1.05 }}
                to={contactPath}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-[2.5px] border-slate-200 text-slate-700 font-extrabold text-lg bg-white hover:border-Main-color hover:text-Main-color transition-all flex items-center justify-center gap-2"
              >
                {t("Prod_See_Action")}
              </MotionLink>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: isRTL ? -30 : 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
          className="md:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1b6ba9]/20 rounded-full blur-3xl opacity-50 z-0 scale-90"></div>
          <img src={product.image} alt={t(product.title)} className="relative z-10 w-full h-auto " />
        </motion.div>
      </section>

      {/* 2. Before vs After (Problem & Solution) */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-Main-color mb-4">{t("Prod_Why_System")}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto font-medium text-lg leading-relaxed">{t("Prod_Diff_Desc")}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Before */}
          <div className="bg-red-50 border-2 border-red-100 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden transition-all hover:bg-red-100/50">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-bl-[4rem] -z-10 opacity-70"></div>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-red-200">
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center text-red-600 shadow-sm shrink-0">
                <FiXCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-red-900">{t("Prod_Trad_Methods")}</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Prod_Trad_Err1",
                "Prod_Trad_Err2",
                "Prod_Trad_Err3",
                "Prod_Trad_Err4"
              ].map((item, i) => {
                const label = t([`${item}_${slug}`, item]);
                if (!label) return null;
                return (
                  <li key={i} className="flex flex-start gap-4 text-slate-700 items-center">
                    <FiXCircle className="text-red-500 w-5 h-5 shrink-0" />
                    <span className="font-semibold text-[15px]">{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* After */}
          <div className="bg-[#F0F4FA] border-2 border-[#1b6ba9]/20 p-8 sm:p-12 rounded-[2.5rem] relative overflow-hidden shadow-xl shadow-[#1b6ba9]/10 transition-all hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#1b6ba9]/5 rounded-br-[4rem] -z-10 opacity-70"></div>
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-[#1b6ba9]/10">
              <div className="w-14 h-14 bg-Main-color rounded-2xl flex items-center justify-center text-emerald-400 shadow-md shrink-0">
                <FiCheckCircle className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-Main-color">{t("Prod_With_System")} {t(product.title)}</h3>
            </div>
            <ul className="space-y-6">
              {[
                "Prod_Auto_Adv1",
                "Prod_Auto_Adv2",
                "Prod_Auto_Adv3",
                "Prod_Auto_Adv4"
              ].map((item, i) => {
                const label = t([`${item}_${slug}`, item]);
                if (!label) return null;
                return (
                  <li key={i} className="flex flex-start gap-4 text-slate-800 items-center">
                    <FiCheckCircle className="text-emerald-500 w-5 h-5 shrink-0" />
                    <span className="font-bold text-[15px]">{label}</span>
                  </li>
                );
              })}
            </ul>
            
            <div className="mt-8 pt-8 text-center sm:text-start">
              <Link to={contactPath} className="inline-flex items-center justify-center sm:justify-start gap-3 w-full sm:w-auto px-6 py-3 rounded-xl bg-white border-2 border-Main-color text-Main-color font-bold hover:bg-Main-color hover:text-white transition-colors duration-300 shadow-sm">
                {t("Prod_Start_Org")} {isRTL ? <FaArrowLeftLong /> : <FaArrowRightLong/>}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Section (Benefit-driven) */}
      {product.features && product.features.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-[#F0F4FA]/50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-Main-color mb-4">{t("Prod_Feat_Success")}</h2>
              <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">{t("Prod_Feat_Desc")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {product.features.map((feature, idx) => {
                // Alternating high-converting micro-benefits natively injected 
                const microBenefitKey = `Prod_Micro_Benefit_${idx % 6}`;
                const shortResult = t(microBenefitKey);
                
                return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:border-[#1b6ba9]/20 transition-all duration-300 group flex flex-col items-start"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#F0F4FA] text-Main-color flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-Main-color group-hover:text-white transition-all shadow-sm">
                    <FiZap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 leading-snug">{t(feature)}</h3>
                  <p className="text-Main-color mt-auto font-bold text-[15px] flex items-center gap-2 bg-[#F0F4FA] px-3 py-1.5 rounded-lg border border-slate-100">
                    <FiCheck className="w-4 h-4 text-emerald-500"/> {shortResult}
                  </p>
                </motion.div>
              )})}
            </div>
            
            <div className="mt-16 text-center flex justify-center">
              <Link to={contactPath} className="inline-flex items-center gap-3 justify-center px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(27,107,169,0.3)] text-white font-bold text-lg bg-gradient-to-r from-[#1b6ba9] to-[#154080] hover:opacity-90 transition-all hover:scale-105">
                   {t("Prod_See_30mins")} <FiClock className="w-5 h-5"/>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. Social Proof Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 border-b border-slate-100">
        <div className="bg-[#1E5FAD] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 relative z-10 leading-tight">{t("Prod_Partners_Trust")}</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10 divide-x divide-x-reverse divide-white/20 md:divide-x-0">
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-3">+500</span>
              <span className="font-bold text-blue-100 text-lg">{t("Prod_Clients")}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-emerald-400 mb-3">99%</span>
              <span className="font-bold text-blue-100 text-lg">{t("Prod_Success_Rate")}</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-emerald-400 mb-3">100%</span>
              <span className="font-bold text-blue-100 text-lg max-w-[120px] mx-auto leading-tight">
                {t([`Prod_ZATCA_Badge_${slug}`, "Prod_ZATCA_Badge"])}
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-6xl font-black text-white mb-3">+10</span>
              <span className="font-bold text-blue-100 text-lg">{t("Prod_Years_Exp")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Testimonials (Dynamic) */}
      <Testimonial 
        customTitle={t("testi_prod_title")} 
        customSubtitle={t("testi_prod_subtitle")}
        filterIds={getProductTestimonials()}
      />

      {/* 6. FAQ (Dynamic) */}
      <FAQ 
        customFaqs={getProductFaqs()} 
        customTitle={t("faq_prod_title")}
      />

      {/* 7. Pricing / Offer Urgency */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-tr from-white to-slate-50 border-4 border-white rounded-[3rem] p-8 md:p-16 text-center shadow-[0_20px_60px_rgba(27,107,169,0.15)] relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#1b6ba9]/10 rounded-full blur-3xl"></div>
          
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-red-50 border border-red-100 text-red-600 font-bold rounded-full text-sm mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
            </span>
            {t("Prod_Limited_Time")}
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-Main-color mb-6 leading-snug">{t("Prod_Ready_Next")}</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">{t("Prod_Free_Consult")}</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <Link to={contactPath} className="w-full sm:w-auto px-10 py-5 rounded-2xl shadow-xl shadow-Main-color/20 text-white font-extrabold text-lg bg-Main-color hover:opacity-90 hover:-translate-y-1 transition-all">
              {t("Prod_Start_Now")}
            </Link>
            <Link to={contactPath} className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-Main-color text-Main-color font-extrabold text-lg bg-white hover:bg-slate-50 hover:-translate-y-1 transition-all">
              {t("Prod_Request_Quote")}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Slider Add-on */}
      <ProductsSlider />
      <CTA 
        heading={t("Tech_Started")} 
        subheading={t("Tech_CTA_Text")} 
        btnText={t("Start_btn")}
      />

     
      <AnimatePresence>
        {showSticky && (
          <motion.div 
            initial={{ y: 200 }}
            animate={{ y: 0 }}
            exit={{ y: 200 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className={`fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-10px_30px_rgba(0,0,0,0.1)] p-4 sm:px-8`}
          >
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="hidden sm:block">
                <div className="font-extrabold text-Main-color text-xl">{t(product.title)}</div>
                <div className="text-slate-500 font-semibold text-sm mt-1">{t("Prod_Start_Auto_Conf")}</div>
              </div>
              <Link to={contactPath} className="w-full sm:w-auto flex items-center justify-center gap-2 text-center px-10 py-4 rounded-xl shadow-lg shadow-[#1b6ba9]/30 text-white font-bold text-[17px] bg-gradient-to-r from-[#1b6ba9] to-[#154080] hover:opacity-90 hover:scale-[1.02] transition-all">
                {t("Prod_Book_Offer_Now")}
                <FiZap className="w-5 h-5"/>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
