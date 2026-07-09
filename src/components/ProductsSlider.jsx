import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import products from "../data/products";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

import { Link } from "react-router-dom";
import { getRoutePath, getProductSlug } from "../utils/i18nHelpers";
import ProductService from "../services/productService";
import { useState, useEffect } from "react";

export default function ProductsSlider() {
  const { t, i18n } = useTranslation();
  const [apiProducts, setApiProducts] = useState([]);
  const isRTL = i18n.dir() === "rtl";
  const lang = i18n.language.startsWith("ar") ? "ar" : "en";

  const getPublicAssetUrl = (assetPath) => {
    if (!assetPath) return null;
    if (/^(https?:|data:)/.test(assetPath)) return assetPath;
    const normalized = assetPath.replace(/^\//, "");
    return `${import.meta.env.BASE_URL || "/"}${normalized}`;
  };

  const placeholderSrc = `data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400"><rect width="100%" height="100%" fill="%23f8fafc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-size="24" font-family="Arial,sans-serif">No image available</text></svg>`;

  useEffect(() => {
    ProductService.fetchAll().then(data => {
      if (data && data.length > 0) setApiProducts(data);
    });
  }, []);

  const apiMapped = apiProducts.map(p => {
    const staticProduct = products.find((sp) => sp.slug === p.slug);
    return {
      ...p,
      title: lang === 'ar' ? p.title_ar : p.title_en,
      description: lang === 'ar' ? p.description_ar : p.description_en,
      image: p.image || staticProduct?.image,
      isApi: true
    };
  });

  const staticRemaining = products.filter(sp => !apiProducts.some(ap => ap.slug === sp.slug));
  const displayProducts = [...staticRemaining, ...apiMapped];
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-Main-color mb-4">
        {t("Ourproducts")}
      </h2>
      
      <h3 className="text-2xl font-bold text-center text-text-color mb-12">
       {t("Ourproducts_text")}
      </h3>

      <Swiper
        modules={[Pagination, Autoplay]}
        dir={dir}
        key={i18n.language}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        
        className="!pb-16 cursor-grab"
      >
        {displayProducts.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 h-full flex flex-col">
              <Link to={`/${getRoutePath("products", t)}/${product.slug}`}>
                <img
                  src={product.image && !product.image.includes("placeholder.png") ? getPublicAssetUrl(product.image) : placeholderSrc}
                  alt={product.title}
                  loading="lazy"
                  decoding="async"
                  width="560"
                  height="315"
                  className="w-full h-56 object-cover"
                />
              </Link>

              <div className="p-4 flex flex-col justify-between flex-grow text-center">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors duration-300">
                  {product.isApi ? product.title : t(product.menuTitle || product.title)}
                </h3>
                <p className="text-sm text-text-color mb-4 line-clamp-3">
                  {product.isApi ? product.description : t(product.description)}
                </p>
                <Link
                  to={`/${getRoutePath("products", t)}/${product.slug}`}
                  className="mt-auto flex justify-center items-center  text-Main-color px-4 py-2 rounded hover:underline transition text-center"
                >
                  {isRTL ? (
                    <>
                      {t("Show")}
                      <FaArrowLeftLong className="ms-3 transition-transform duration-300 group-hover:-translate-x-1" />
                    </>
                  ) : (
                    <>
                      {t("Show")}
                      <FaArrowRightLong className="ms-3 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}


