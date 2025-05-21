import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import contact_img from "../assets/Images/7016016.jpg";
import { motion } from "framer-motion";

const ContactPage = () => {
    const { t,  } = useTranslation();
  
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto text-justify">
      <h2 className="text-3xl font-bold text-center mb-12 text-Main-color"> {t("contact")} </h2>

      {/* Branches Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Jeddah Branch */}
        <div className="flex-1 shadow-md rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3625.7432910544403!2d46.730371!3d24.666963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f043fc3102965%3A0x966a077916c463df!2z2LTYsdmD2Kkg2YbYrNmI2YUg2KfZhNi52YTYp9mI2Yog2YTZhti42YUg2KfZhNmD2YXYqNmK2YjYqtixIEFsYXdpU3RhcnMgRm9yIEluZm9ybWF0aW9uIFN5c3RlbXM!5e0!3m2!1sen!2suk!4v1747833156799!5m2!1sen!2suk" // Replace with actual map embed
            className="w-full h-64"
            loading="lazy"
            allowFullScreen>
            </iframe>
          <div className="p-4 text-justify">
            <h3 className=" font-bold mb-2 text-Main-color">  {t("Jeddah_Branch")}      </h3>
            <p className="mb-1"><FaMapMarkerAlt className="inline ml-1" /> {t("address_2")}     </p>
            <p className="mb-1"><FaPhone className="inline ml-1" /> 012 6040861 / 012 6040860</p>
            <p className="mb-1"><FaPhone className="inline ml-1" /> 0504139842</p>
            <p className="mb-1"><FaEnvelope className="inline ml-1" /> SalesJdh@AlawiStars.com</p>
            <p className="text-sm mt-2">الدوام: 8:30 ص - 1:30 م / 4:00 م - 8:00 م</p>
          </div>
        </div>

        {/* Riyadh Branch */}
        <div className="flex-1 shadow-md rounded-lg overflow-hidden">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3625.7432910544403!2d46.730371!3d24.666963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f043fc3102965%3A0x966a077916c463df!2z2LTYsdmD2Kkg2YbYrNmI2YUg2KfZhNi52YTYp9mI2Yog2YTZhti42YUg2KfZhNmD2YXYqNmK2YjYqtixIEFsYXdpU3RhcnMgRm9yIEluZm9ybWF0aW9uIFN5c3RlbXM!5e0!3m2!1sen!2suk!4v1747833385589!5m2!1sen!2suk"  //Replace with actual map embed
            className="w-full h-64"
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="p-4 text-justify">
            <h3 className="text-Main-color font-bold mb-2">{t("HeadOfficeRiyadh")}  </h3>
            <p className="mb-1"><FaMapMarkerAlt className="inline ml-1" /> {t("address_1")} </p>
            <p className="mb-1"><FaPhone className="inline ml-1" /> 011 4731844 / 011 4778176 / 011 4760907</p>
            <p className="mb-1"><FaEnvelope className="inline ml-1" /> Admin@AlawiStars.com</p>
            <p className="text-sm mt-2">ال ص - 12:30 م / 3:00 م - 7:30 م</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
        <div className="md:w-1/2">
          <motion.img
           src={contact_img} 
            alt="Contact Us"
            className="w-full rounded-lg"
               whileHover={{ scale: 1.05 }}
          transition={{ type: "easeIn", tween: 300 }}
          />
        </div>
        <form className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold mb-4 text-justify text-Main-color">  {t("contact")}</h3>
          <input
            type="text"
            placeholder={t("Full_Name")}    
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify"
          />
          <input
            type="email"
            placeholder={t("Email")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify"
          />
          <input
            type="text"
            placeholder={t("Phone")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify"
          />
          <input
            type="text"
            placeholder={t("Subject")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify"
          />
          <textarea
            placeholder={t("Message")}
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none text-justify"
          ></textarea>
          <button
            type="submit"
            className="bg-Main-color hover:bg-indigo-950 cursor-pointer text-white font-semibold py-2 px-6 rounded w-full"
          >
            {t("contact")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
