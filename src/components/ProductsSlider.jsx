import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import { IoIosArrowRoundForward } from "react-icons/io";

import { Link } from "react-router-dom";

const products = [
  {
    title: "Inv_acc",
    image: "/Productes/سنمار للمحاسبة والمخزون العام.webp",
    slug: "accounting-inventory",
    description: "acc_Inv_Disc",
  },
  {
    title: "acc",
    image: "/Productes/سنمار للمحاسبة.webp",
    slug: "general-accounting",
    description: "acc_desc",
  },
  {
    title: "Inv",
    image: "/Productes/سنمار للمخزون العام .webp",
    slug: "inventory-system",
    description: "Inv_Disc",
  },
  {
    title: "Pr",
    image: "/Productes/ادارة املاك.webp",
    slug: "real-estate-management",
    description: "Pr_Disc",
  },
  {
    title: "Furn",
    image: "/Productes/سنمار للشقق.webp",
    slug: "furnished-apartments",
    description:
      "Furn_Disc",
  },
  {
    title: "Med",
    image: "/Productes/سنمار الطبي.webp",
    slug: "medical-system",
    description:
      "Med_Disc",
  },
  {
    title: "Maintenance",
    image: "/Productes/سنمار لصيانة السيارات.webp",
    slug: "car-maintenance",
    description: "Maintenance_Disc",
  },
  {
    title: "Car_sale",
    image: "/Productes/سنمار لمبيعات السيارات.webp",
    slug: "car-sales",
    description:
      "Car_sale_Disc",
  },
  {
    title: "Hr",
    image: "/Productes/موظفين 2 .png",
    slug: "hr-system",
    description: "Hr_Disc",
  },
  {
    title: "Commu",
    image: "/Productes/سنمار للاتصالات.webp",
    slug: "telecom-system",
    description:
      "commu_Disc",
  },
  {
    title: "serv",
    image: "/Productes/سنمار للخدمات .webp",
    slug: "services-system",
    description:
      "serv_Disc",
  },
  {
    title: "Fuel",
    image: "/Productes/سنمار للمحطات.webp",
    slug: "fuel-station",
    description:
      "Fule_Disc",
  },
];

export default function ProductsSlider() {
  const { t,i18n } = useTranslation();

  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto" >
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
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 h-full flex flex-col">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-grow text-center">
                <h3 className="text-lg font-bold text-Main-color mb-2 ">
                  {t(product.title)}
                </h3>
                <p className="text-sm text-text-color mb-4 ">
                  {t(product.description)}
                </p>
                <Link
                  to={`/products/${product.slug}`}
                  className="mt-auto flex justify-center items-center  text-Main-color px-4 py-2 rounded hover:underline transition text-center"
                >

                  {t("Show")}

                  <IoIosArrowRoundForward className="ml-2 font-bold text-2xl" />

                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
