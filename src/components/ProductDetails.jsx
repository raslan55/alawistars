import React, { useState, useEffect, lazy, Suspense } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import products from "../data/products";
const CTA = lazy(() => import("./CTA"));
const ProductsSlider = lazy(() => import("./ProductsSlider"));
const FAQ = lazy(() => import("./FAQ"));
const Testimonial = lazy(() => import("./Testimonial"));
import { getRoutePath } from "../utils/i18nHelpers";
import ProductService from "../services/productService";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { FiCheckCircle, FiXCircle, FiClock, FiShield, FiTrendingUp, FiZap, FiCheck, FiLayers, FiBriefcase, FiShoppingBag, FiTruck, FiHome, FiUsers, FiClipboard, FiCreditCard } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { productSectionsData, defaultSections } from "../data/productSections";

export default function ProductDetails() {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const [apiProduct, setApiProduct] = useState(null);
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";
  const isRTL = i18n.dir() === "rtl";
  const MotionLink = motion(Link);

  const getPublicAssetUrl = (assetPath) => {
    if (!assetPath) return null;
    if (/^(https?:|data:)/.test(assetPath)) return assetPath;
    const normalized = assetPath.replace(/^\//, "");
    return `${import.meta.env.BASE_URL || "/"}${normalized}`;
  };

  const placeholderSrc = `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675"><rect width="100%" height="100%" fill="%23f8fafc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="48" font-family="Arial,sans-serif">No image available</text></svg>`;

  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const load = async () => {
      setApiProduct(null); // Reset state to prevent stale data
      const data = await ProductService.fetchBySlug(slug);
      if (data) setApiProduct(data);
    };
    load();
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => setShowSticky(window.scrollY > 450);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const staticProduct = products.find((p) => p.slug === slug);
  const product = apiProduct ? {
    ...apiProduct,
    title: lang === 'ar' ? apiProduct.title_ar : apiProduct.title_en,
    description: lang === 'ar' ? apiProduct.description_ar : apiProduct.description_en,
    features: (apiProduct.features || []).map(f => lang === 'ar' ? f.ar : f.en),
    image: apiProduct.image || staticProduct?.image,
    isApi: true
  } : staticProduct;

  // ─── All content is driven exclusively from productSections.js ───
  // Edit productSectionsData[slug] in src/data/productSections.js to customize each page.

  const currentSections = productSectionsData[slug] || defaultSections;
  // Data extractors (handling new object structure vs old array fallback)
  const productUseCases = currentSections?.useCases?.list || currentSections?.useCases || [];
  const productErpModules = currentSections?.erpModules?.list || currentSections?.erpModules || [];
  const productStrengths = currentSections?.strengths?.list || currentSections?.strengths || [];

  // Hero Section
  const heroEyebrow = currentSections.hero?.eyebrow?.[lang] ?? "";
  const heroSubtitle = currentSections.hero?.title?.[lang] ?? "";
  const heroDesc = currentSections.hero?.desc?.[lang] ?? (product.isApi ? product.description : "");
  const heroBullets = currentSections.hero?.bullets ?? [];

  // Definition / "What is" Section
  const whatTitle = currentSections.definition?.title?.[lang] ?? "";
  const whatP1 = currentSections.definition?.p1?.[lang] ?? "";
  const whatP2 = currentSections.definition?.p2?.[lang] ?? "";

  // Features Section — reads from productSections.js features.list
  const featuresList = currentSections.features?.list ?? [];

  // Integration Section (ZATCA)
  const integrationTitle = currentSections.integration?.title?.[lang] ?? "";
  const integrationDesc = currentSections.integration?.desc?.[lang] ?? "";
  const integrationLeftBlocks = currentSections.integration?.leftBlocks ?? [];
  const integrationRightBlocks = currentSections.integration?.rightBlocks ?? [];

  // Social Proof Section
  const socialProofTitle = currentSections.socialProof?.title?.[lang] ?? "";
  const socialProofStats = currentSections.socialProof?.stats ?? [];

  // FAQs — read directly from productSections.js per product
  const getProductFaqs = () => {
    const faqs = currentSections.faqs ?? [];
    return faqs.map(item => ({
      question: item.q?.[lang] ?? "",
      answer: item.a?.[lang] ?? ""
    }));
  };

  // CTA Section
  const ctaTag = currentSections.cta?.tag?.[lang] ?? t("Prod_Limited_Time");
  const ctaTitle = currentSections.cta?.title?.[lang] ?? t("Prod_Ready_Next");
  const ctaDesc = currentSections.cta?.desc?.[lang] ?? t("Prod_Free_Consult");
  const ctaBtn1 = currentSections.cta?.btn1?.[lang] ?? t("Prod_Start_Now");
  const ctaBtn2 = currentSections.cta?.btn2?.[lang] ?? t("Prod_Request_Quote");

  // Testimonials — read from productSections.js testimonialIds per product
  const getProductTestimonials = () => {
    return currentSections.testimonialIds ?? null;
  };

  if (!product) {
    return (
      <div className="text-center py-16 text-red-600 text-xl font-semibold">
        {t("Product_Not_Found")}
      </div>
    );
  }

  const showProductSections = true;

  const contactPath = `/${getRoutePath("contact", t)}`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const displayTitle = product?.isApi ? product.title : (product?.title ? t(product.title) : "");

  return (
    <div key={slug} className="relative pb-24 md:pb-0 font-['Cairo',sans-serif]">
      <Helmet>
        <title>{displayTitle ? `${displayTitle} | Alawistars` : "Product Details | Alawistars"}</title>
      </Helmet>
      {/* 1. Hero Section (Outcome-Driven) */}
      <section className="bg-gradient-to-b from-[#eef5ffb0] to-[#eef5ffb0] pt-12 pb-20 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 overflow-hidden border-b border-gray-100">
        <div className="md:w-1/2 relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col"
          >
            <motion.span variants={itemVariants} className="inline-block py-1.5 px-4 rounded-full bg-[#F0F4FA] text-text-color font-bold text-sm mb-6 border border-[#1b6ba9]/20 shadow-sm w-fit">
              {heroEyebrow}
            </motion.span>
            <motion.h1 variants={itemVariants} className="text-3xl sm:text-4xl lg:text-5xl font-extrabold capitalize text-Main-color leading-tight mb-6">
              {product.isApi ? product.title : t(product.title)} <br />
              <span className="text-text-color text-2xl sm:text-3xl mt-2 block font-bold leading-relaxed">{heroSubtitle}</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-slate-600 mb-8 leading-relaxed max-w-xl text-lg lg:text-xl font-medium">
              {heroDesc}
            </motion.p>

            {/* Benefit Bullets */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4 mb-10 w-fit">
              {heroBullets.map((bullet, idx) => {
                const iconMap = {
                  FiClock: <FiClock className="text-Main-color w-6 h-6 shrink-0" />,
                  FiTrendingUp: <FiTrendingUp className="text-Main-color w-6 h-6 shrink-0" />,
                  FiShield: <FiShield className="text-Main-color w-6 h-6 shrink-0" />,
                };
                const label = bullet[lang];
                if (!label) return null;
                return (
                  <div key={idx} className="flex items-center gap-3 bg-white px-5 py-3 rounded-2xl shadow-sm border border-slate-50">
                    {iconMap[bullet.icon] ?? <FiCheck className="text-Main-color w-6 h-6 shrink-0" />}
                    <span className="text-slate-700 font-bold">{label}</span>
                  </div>
                );
              })}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col flex-wrap sm:flex-row items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/966504139243?text=%D8%B4%D9%83%D8%B1%D8%A7%20%D9%84%D9%83%20%D8%B9%D9%84%D9%89%20%D8%AA%D9%88%D8%A7%D8%B5%D9%84%D9%83%20%D9%85%D8%B9%20%D8%A8%D8%B1%D8%A7%D9%85%D8%AC%20%D8%B3%D9%86%D9%85%D8%A7%D8%B1%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D8%A3%D8%AE%D8%A8%D8%B1%D9%86%D8%A7%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D8%AE%D8%AF%D9%85%D8%AA%D9%83%20%D9%88%D8%B3%D9%86%D9%82%D9%88%D9%85%20%D8%A8%D8%A7%D9%84%D8%B1%D8%AF%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%81%D9%8A%20%D8%A7%D9%82%D8%B1%D8%A8%20%D9%88%D9%82%D8%AA%20%D9%85%D8%AA%D8%A7%D8%AD%0A%0AThank%20you%20for%20contacting%20Sinmar%20Programs.%20Please%20tell%20us%20how%20we%20can%20serve%20you%20and%20we%20will%20respond%20to%20you%20as%20soon%20as%20possible."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl shadow-xl shadow-Main-color/20 text-white font-extrabold text-lg bg-Main-color hover:opacity-90 transition-all flex items-center justify-center gap-2"
              >
                {t("Prod_Book_Demo")}
                {isRTL ? <FaArrowLeftLong /> : <FaArrowRightLong />}
              </motion.a>

              <MotionLink
                whileHover={{ scale: 1.05 }}
                to={contactPath}
                className="w-full sm:w-auto px-8 py-4 rounded-xl border-[2.5px] border-slate-200 text-slate-700 font-extrabold text-lg bg-white hover:border-Main-color hover:text-Main-color transition-all flex items-center justify-center gap-2"
              >
                {t("Prod_See_Action")}
              </MotionLink>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="md:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1b6ba9]/20 rounded-full blur-3xl opacity-50 z-0 scale-90"></div>
          <img
            src={product.image && !product.image.includes("placeholder.png") ? getPublicAssetUrl(product.image) : placeholderSrc}
            alt={product.isApi ? product.title : t(product.title)}
            width="1200"
            height="675"
            decoding="async"
            className="relative z-10 w-full h-auto floating-anim"
          />
        </motion.div>
      </section>



      {/* 1.5. What is this Product Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#1b6ba9]/5 rounded-full blur-[100px] -z-10 translate-y-[-50%]"></div>
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-[0_20px_50px_rgba(27,107,169,0.06)] border border-slate-100 relative overflow-hidden flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* Abstract Graphic Side */}
          <div className="w-full lg:w-1/3 flex justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1b6ba9]/20 to-blue-300/20 rounded-full blur-3xl scale-150"></div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-10 w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] bg-gradient-to-tr from-[#1b6ba9] to-[#154080] flex items-center justify-center shadow-2xl shadow-[#1b6ba9]/30 border-4 border-white overflow-hidden group"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.3),transparent_50%)]"></div>
              {/* Icon */}
              <FiLayers className="w-24 h-24 text-white opacity-90 drop-shadow-lg group-hover:scale-110 transition-transform duration-500" />
            </motion.div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 lg:-right-10 bg-white px-5 py-3 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3 z-20"
            >
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse"></div>
              <span className="font-bold text-slate-700 text-sm whitespace-nowrap">{t([`Prod_ZATCA_Badge_${slug}`, "Prod_ZATCA_Badge"])}</span>
            </motion.div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-2/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0F4FA] text-Main-color font-bold text-sm mb-6 border border-[#1b6ba9]/10">
              <span className="w-2 h-2 rounded-full bg-Main-color animate-pulse"></span>
              {whatTitle}
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-800 mb-8 leading-tight">
              {whatTitle}
            </h2>

            <div className="relative">
              <div className={`md:${isRTL ? "pr-8" : "pl-8"} space-y-6`}>
                <p className="text-slate-700 text-xl md:text-2xl font-bold leading-relaxed">
                  {whatP1}
                </p>
                <p className="text-slate-500 text-lg md:text-xl leading-relaxed font-medium">
                  {whatP2}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section (الصورة التوضيحية لواجهة البرنامج) */}
      {currentSections.dashboardPreview && (
        <section className="py-24 px-4 bg-gradient-to-b from-white to-[#F8FAFF] overflow-hidden border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-[#F0F4FA] px-5 py-2 mb-4 text-sm font-bold text-Main-color border border-[#1b6ba9]/20 shadow-sm">
                {lang === "ar" ? "نظرة عامة على النظام" : "System Overview"}
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-Main-color mb-4">
                {currentSections.dashboardPreview.title?.[lang] || (lang === "ar" ? "واجهات البرنامج الذكية" : "Smart Interfaces")}
              </h2>
              <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">
                {currentSections.dashboardPreview.desc?.[lang] || ""}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative mx-auto max-w-5xl rounded-[2.5rem] border border-slate-200 bg-white p-4 shadow-[0_30px_70px_rgba(27,107,169,0.15)] group hover:shadow-[0_40px_90px_rgba(27,107,169,0.25)] transition-all duration-500"
            >
              {/* Browser Frame Effect */}
              <div className="flex items-center gap-2 px-4 pb-4 border-b border-slate-100 mb-4">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-400"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-400"></div>
                <div className="h-5 bg-slate-100 rounded-lg flex-1 max-w-md mx-auto text-[10px] text-slate-400 flex items-center justify-center font-mono select-none">
                  {lang === "ar" ? "برنامج سنمار — لوحة التحكم" : "Sinmar Programs — Dashboard"}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.8rem] bg-slate-50 relative group">
                <img
                  src={getPublicAssetUrl(
                    currentSections.dashboardPreview.image !== "Productes/dashboard-mockup.png" 
                      ? currentSections.dashboardPreview.image 
                      : (product?.image || currentSections.dashboardPreview.image)
                  )}
                  alt="Dashboard Preview"
                  loading="lazy"
                  className="w-full h-auto block transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>
            </motion.div>
          </div>
        </section>
      )}


      {showProductSections && (
        <>
          {/* 2. Product use cases */}
          <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-[#F0F4FA] px-5 py-2 mb-4 text-sm font-bold text-Main-color border border-[#1b6ba9]/20 shadow-sm">
                {currentSections.useCases?.tag?.[lang] || t("Prod_Use_Cases_Tag")}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color mb-4">{currentSections.useCases?.title?.[lang] || t("Prod_Use_Cases_Title")}</h2>
              <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">{currentSections.useCases?.desc?.[lang] || t("Prod_Use_Cases_Desc")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productUseCases.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="group relative overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_20px_50px_rgba(27,107,169,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_25px_70px_rgba(27,107,169,0.16)]">
                    <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-gradient-to-br from-[#1b6ba9]/20 to-transparent opacity-80 blur-2xl"></div>
                    <div className="relative z-10 flex items-center justify-between gap-4 mb-8">
                      <div className="inline-flex items-center justify-center h-14 w-14 rounded-3xl bg-gradient-to-br from-[#1b6ba9] to-[#4f84ff] text-white shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[13px] tracking-[0.24em] uppercase text-[#1b6ba9] font-semibold">{currentSections.useCases?.cardTag?.[lang] || t("Prod_Use_Cases_Card")}</span>
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">{item.title[lang]}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description[lang]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* 3. ERP integration modules */}
          <section className="py-24 px-4 bg-[#F8FAFF]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-14">
                <div className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 mb-4 text-sm font-bold text-[#1b6ba9] border border-[#1b6ba9]/20 shadow-sm">
                  {currentSections.erpModules?.tag?.[lang] || t("Prod_Module_Tag")}
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color mb-4">{currentSections.erpModules?.title?.[lang] || t("Prod_ERP_Title")}</h2>
                <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">{currentSections.erpModules?.desc?.[lang] || t("Prod_ERP_Desc")}</p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {productErpModules.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="group overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(27,107,169,0.15)]">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1b6ba9] to-[#154080] text-white shadow-lg">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title[lang]}</h3>
                      <p className="text-slate-600 leading-relaxed">{item.description[lang]}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>


          {/* 4. Why this product works best */}
          <section className="py-24 px-4 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center rounded-full bg-[#F0F4FA] px-5 py-2 mb-4 text-sm font-bold text-Main-color border border-[#1b6ba9]/20 shadow-sm">
                {currentSections.strengths?.tag?.[lang] || t("Prod_Why_Tag")}
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-Main-color mb-4">{currentSections.strengths?.title?.[lang] || t("Prod_Why_Title")}</h2>

              {/* <p className="text-slate-600 max-w-3xl mx-auto font-medium text-lg leading-relaxed">{currentSections.strengths?.desc?.[lang] || t("Prod_Why_Desc")}</p> */}
            </div>


            <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] items-start">
              <div className="relative overflow-hidden rounded-[3rem] border border-slate-200 bg-[#f7f7ff] p-10 shadow-[0_20px_60px_rgba(27,107,169,0.08)]">
                <div className="absolute -right-10 top-10 h-40 w-40 rounded-full bg-[#1b6ba9]/10 blur-3xl"></div>
                <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[#4f84ff]/10 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-Main-color text-white text-2xl mb-6">★</div>
                  <p className="text-slate-900 text-2xl md:text-3xl font-bold leading-tight mb-4">{currentSections.strengths?.quote?.[lang] || t("Prod_Why_Quote")}</p>
                  <p className="text-slate-600 text-lg leading-relaxed">{currentSections.strengths?.quoteText?.[lang] || t("Prod_Why_Quote_Text")}</p>
                </div>
              </div>


              <div className="grid gap-5">
                {productStrengths.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex gap-5 overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-[0_15px_35px_rgba(27,107,169,0.08)] transition-all duration-300 hover:-translate-y-1">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-3xl bg-gradient-to-br from-[#1b6ba9] to-[#4f84ff] text-white text-2xl shadow-lg">
                        <Icon />
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold leading-tight mb-1">{item.title[lang]}</p>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.description[lang]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      )}

      {/* 2. ZATCA & Integration Section */}
      {currentSections.integration && (
        <section className="py-24 px-4 bg-[#154080] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">{integrationTitle}</h2>
              <p className="text-blue-100 max-w-3xl mx-auto font-medium text-lg leading-relaxed">{integrationDesc}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Left Blocks */}
              <div className="flex flex-col gap-6">
                {integrationLeftBlocks.map((block, idx) => {
                  const Icon = block.icon === "FiCheckCircle" ? FiCheckCircle : FiShield;
                  return (
                    <div key={idx} className="bg-[#1b6ba9]/40 border-2 border-amber-400/80 rounded-2xl p-8 text-center sm:text-start flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:bg-[#1b6ba9]/60 transition-colors">
                      <div className="w-16 h-16 shrink-0 bg-white/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-amber-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3">{block.title[lang]}</h3>
                        <p className="text-blue-100 leading-relaxed text-lg">{block.desc[lang]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Blocks */}
              <div className="flex flex-col gap-4">
                {integrationRightBlocks.map((block, idx) => {
                  return (
                    <div key={idx} className="bg-[#1b6ba9]/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 hover:bg-[#1b6ba9]/60 transition-colors">
                      <div className="w-12 h-12 shrink-0 bg-amber-500 rounded-full flex items-center justify-center text-xl font-black text-[#154080] sm:order-2">
                        {idx + 1}
                      </div>
                      <div className="sm:order-1 flex-1 text-center sm:text-end">
                        <h3 className="text-xl font-bold mb-2">{block.title[lang]}</h3>
                        <p className="text-blue-100 leading-relaxed text-[15px]">{block.desc[lang]}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Features Section (Benefit-driven) */}
      {featuresList && featuresList.length > 0 && (
        <section className="py-24 bg-gradient-to-b from-[#F0F4FA]/50 to-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-Main-color mb-4">{currentSections.features?.title?.[lang] || t("Prod_Feat_Success")}</h2>
              <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg">{currentSections.features?.desc?.[lang] || t("Prod_Feat_Desc")}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {featuresList.map((feature, idx) => {
                // Alternating high-converting micro-benefits natively injected 
                const microBenefitKey = `Prod_Micro_Benefit_${idx % 6}`;
                const shortResult = t(microBenefitKey);

                const isRich = typeof feature === "object" && feature.title;
                const featureTitle = isRich ? (feature.title[lang] ?? "") : (typeof feature === "object" ? (feature[lang] ?? "") : t(feature));
                const featureDesc = isRich ? (feature.desc?.[lang] ?? "") : "";
                const featurePoints = isRich ? (feature.points ?? []) : [];

                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-2xl hover:border-[#1b6ba9]/20 transition-all duration-300 group flex flex-col items-start w-full"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#F0F4FA] text-Main-color flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-Main-color group-hover:text-white transition-all shadow-sm">
                      <FiZap className="w-6 h-6" />
                    </div>
                    {isRich ? (
                      <div className="w-full flex-1 flex flex-col">
                        <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug">{featureTitle}</h3>
                        {featureDesc && <p className="text-slate-500 text-sm mb-4 leading-relaxed font-medium">{featureDesc}</p>}
                        {featurePoints.length > 0 && (
                          <ul className="space-y-2 mb-6 text-slate-600 text-sm font-semibold flex-1">
                            {featurePoints.map((pt, pIdx) => (
                              <li key={pIdx} className="flex items-start gap-2">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1b6ba9] mt-2 shrink-0"></span>
                                <span>{pt[lang]}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ) : (
                      <h3 className="text-xl font-bold text-slate-800 mb-6 leading-snug">{featureTitle}</h3>
                    )}
                    <p className="text-Main-color mt-auto font-bold text-[15px] flex items-center gap-2 bg-[#F0F4FA] px-3 py-1.5 rounded-lg border border-slate-100">
                      <FiCheck className="w-4 h-4 text-emerald-500" /> {shortResult}
                    </p>
                  </motion.div>
                )
              })}
            </div>

            <div className="mt-16 text-center flex justify-center">
              <Link to={contactPath} className="inline-flex items-center gap-3 justify-center px-10 py-5 rounded-full shadow-[0_10px_40px_rgba(27,107,169,0.3)] text-white font-bold text-lg bg-gradient-to-r from-[#1b6ba9] to-[#154080] hover:opacity-90 transition-all hover:scale-105">
                {t("Prod_See_30mins")} <FiClock className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* 4. Social Proof Section */}
      <section className="py-16 max-w-7xl mx-auto px-4 border-b border-slate-100">
        <div className="bg-[#1E5FAD] rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden text-white shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>

          <h2 className="text-3xl md:text-5xl font-extrabold mb-12 relative z-10 leading-tight">{socialProofTitle || t("Prod_Partners_Trust")}</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 relative z-10 divide-x divide-x-reverse divide-white/20 md:divide-x-0">
            {socialProofStats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className={`text-4xl md:text-6xl font-black mb-3 ${idx === 1 || idx === 2 ? 'text-emerald-400' : 'text-white'}`}>{stat.value}</span>
                <span className="font-bold text-blue-100 text-lg max-w-[120px] mx-auto leading-tight">{stat.label?.[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Testimonials (Dynamic) */}
      <Suspense fallback={<div className="py-10 text-center">{t("loading") || 'Loading...'}</div>}>
        <Testimonial
          customTitle={t("testi_prod_title")}
          customSubtitle={t("testi_prod_subtitle")}
          filterIds={getProductTestimonials()}
        />
      </Suspense>

      {/* 6. FAQ (Dynamic) */}
      <Suspense fallback={<div className="py-10 text-center">{t("loading") || 'Loading...'}</div>}>
        <FAQ
          customFaqs={getProductFaqs()}
          customTitle={t("faq_prod_title")}
        />
      </Suspense>

      {/* 7. Pricing / Offer Urgency */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="bg-gradient-to-tr from-white to-slate-50 border-4 border-white rounded-[3rem] p-8 md:p-16 text-center shadow-[0_20px_60px_rgba(27,107,169,0.15)] relative overflow-hidden">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#1b6ba9]/10 rounded-full blur-3xl"></div>

          <span className="inline-flex items-center gap-2 px-5 py-2 bg-green-50 border border-green-100 text-Main-color font-bold rounded-full text-sm mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            {ctaTag}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-Main-color mb-6 leading-snug">{ctaTitle}</h2>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">{ctaDesc}</p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 relative z-10">
            <Link to={contactPath} className="w-full sm:w-auto px-10 py-5 rounded-2xl shadow-xl shadow-Main-color/20 text-white font-extrabold text-lg bg-Main-color hover:opacity-90 hover:-translate-y-1 transition-all">
              {ctaBtn1}
            </Link>
            <Link to={contactPath} className="w-full sm:w-auto px-10 py-5 rounded-2xl border-2 border-Main-color text-Main-color font-extrabold text-lg bg-white hover:bg-slate-50 hover:-translate-y-1 transition-all">
              {ctaBtn2}
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Slider Add-on */}
      <Suspense fallback={<div className="py-10 text-center">{t("loading") || 'Loading...'}</div>}>
        <ProductsSlider />
      </Suspense>
      <Suspense fallback={<div className="py-6 text-center">{t("loading") || 'Loading...'}</div>}>
        <CTA
          heading={t("Tech_Started")}
          subheading={t("Tech_CTA_Text")}
          btnText={t("Start_btn")}
        />
      </Suspense>


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
                <div className="font-extrabold text-Main-color text-xl">{product.isApi ? product.title : t(product.title)}</div>
                <div className="text-slate-500 font-semibold text-sm mt-1">{t("Prod_Start_Auto_Conf")}</div>
              </div>
              <a href="https://wa.me/966504139243?text=%D8%B4%D9%83%D8%B1%D8%A7%20%D9%84%D9%83%20%D8%B9%D9%84%D9%89%20%D8%AA%D9%88%D8%A7%D8%B5%D9%84%D9%83%20%D9%85%D8%B9%20%D8%A8%D8%B1%D8%A7%D9%85%D8%AC%20%D8%B3%D9%86%D9%85%D8%A7%D8%B1%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D8%A3%D8%AE%D8%A8%D8%B1%D9%86%D8%A7%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D8%AE%D8%AF%D9%85%D8%AA%D9%83%20%D9%88%D8%B3%D9%86%D9%82%D9%88%D9%85%20%D8%A8%D8%A7%D9%84%D8%B1%D8%AF%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%81%D9%8A%20%D8%A7%D9%82%D8%B1%D8%A8%20%D9%88%D9%82%D8%AA%20%D9%85%D8%AA%D8%A7%D8%AD%0A%0AThank%20you%20for%20contacting%20Sinmar%20Programs.%20Please%20tell%20us%20how%20we%20can%20serve%20you%20and%20we%20will%20respond%20to%20you%20as%20soon%20as%20possible." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 text-center px-10 py-4 rounded-xl shadow-lg shadow-[#1b6ba9]/30 text-white font-bold text-[17px] bg-gradient-to-r from-[#1b6ba9] to-[#154080] hover:opacity-90 hover:scale-[1.02] transition-all">
                {t("Prod_Book_Offer_Now")}
                <FiZap className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
