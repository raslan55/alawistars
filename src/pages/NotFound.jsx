import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NotFoundImage from "../assets/Images/404_page-not-found-1024x576.webp"; 
const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col justify-center items-center text-center py-5">
           <div>
               <img src={NotFoundImage} alt="404 Not Found" className="min-w-4/6  mx-auto" />
           </div>

      <p className="text-lg md:text-xl text-gray-700 mb-4">
        {t("notFound_message")}
      </p>
      <Link
        to="/"
        className="text-white bg-Main-color hover:bg-Main-color/90 px-5 py-2 mb-4 rounded-md transition-all duration-300"
      >
        {t("notFound_backToHome")}
      </Link>
    </div>
  );
};

export default NotFound;