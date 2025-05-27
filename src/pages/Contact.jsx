import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFax,
  FaRegClock 
} from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";

import { useTranslation } from "react-i18next";
import contact_img from "../assets/Images/7016016.jpg";
import { motion } from "framer-motion";
import ContactInfoCard from "../components/ContactInfoCard"; // Import the new component

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <div className="px-4 py-12 max-w-7xl mx-auto text-justify">
      <h2 className="text-3xl font-bold text-center mb-12 text-Main-color">
        {t("contact")}
      </h2>

      {/* Branches Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        {/* Jeddah Branch */}
        <div className="flex-1 shadow-md rounded-lg overflow-hidden bg-white p-6">
          
          {/* Added bg-white and p-6 for consistency */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.4265415714046!2d39.1820463!3d21.5433367!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d2f9a7b9c9f7%3A0x6b7a5a8a1f6a1e5!2sJeddah%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1678880000000!5m2!1sen!2sus" // Replaced with a more generic Jeddah map embed for demonstration. Please update with your actual map link.
            className="w-full h-64 rounded-md mb-4" // Added rounded-md and mb-4 for map
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="text-justify">
            <h3 className="font-bold mb-4 text-Main-color text-xl">
              
              {/* Increased heading size */}
              {t("Jeddah_Branch")}
            </h3>

            {/* Address */}
            <ContactInfoCard
              icon={<FaMapMarkerAlt />}
              title={t("Our_Location")}
              detail={t("address_2_contact")}
            />
            <hr className="my-2 border-gray-200" />
            {/* Phone 1 */}
            <ContactInfoCard
              icon={<FaPhone />}
              title={t("Phones")}
              detail={
                <>
                  <a
                    href="tel:+966 12 6040680"
                    className="text-Main-color hover:underline"
                    dir="ltr"
                  >
                    +966 12 6040680
                  </a>
                  &nbsp; 
                  / 
                  &nbsp;
                  <a
                    href="tel:+966 12 6040681"
                    className="text-Main-color hover:underline"
                    dir="ltr"
                  >
                    +966 12 6040681
                  </a> 
            
                </>
              }
            />

            <hr className="my-2 border-gray-200" />

            {/* WhatsApp */}
            <ContactInfoCard
              icon={<FaWhatsapp  />}
              title={t("WhatsApp")}
              detail={
                <a
                  href="https://api.whatsapp.com/send/?phone=0504139243&text&type=phone_number&app_absent=0"
                  className="text-Main-color hover:underline"
                  dir="ltr"
                >
                  0504139243
                </a>
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Fax */}
            <ContactInfoCard
              icon={<FaFax />}
              title={t("Fax")}
              detail={
                <p
              
                  className="text-Main-color "
                  dir="ltr"
                >
                  +966 12 6452986
                </p>
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Email */}
            <ContactInfoCard
              icon={<FaEnvelope />}
              title={t("Email")}
              detail={
                         <>

                  <a
                  href="mailto:Admin@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                  Admin@AlawiStars.com

                </a>
                 &nbsp;
                /
                &nbsp;

                <a
                  href="mailto:SalesJdh@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                  SalesJdh@AlawiStars.com
                </a>
                <br/>
                
                  <a
                  href="mailto:Support@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                 Support@AlawiStars.com
                </a>
                &nbsp;
                /
                &nbsp;

                <a  href="mailto:Career@AlawiStars.com"
                  className="text-Main-color hover:underline" >
Career@AlawiStars.com

                </a>
                </>
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Working Hours */}

            <ContactInfoCard
              icon={<FaRegClock   />}
              title={t("working_hours")}
              detail={<p>{t("Jeddah_working_hours")} </p>}
            />
          </div>
        </div>

        {/* Riyadh Branch */}
        <div className="flex-1 shadow-md rounded-lg overflow-hidden bg-white p-6">
          
          {/* Added bg-white and p-6 for consistency */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3715.4265415714046!2d46.721852!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0x4ba89d1c9e89d5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1678880000000!5m2!1sen!2sus" // Replaced with a more generic Riyadh map embed. Please update with your actual map link.
            className="w-full h-64 rounded-md mb-4" // Added rounded-md and mb-4 for map
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="text-justify">
            <h3 className="font-bold mb-4 text-Main-color text-xl">
            
              {/* Increased heading size */}
              {t("HeadOfficeRiyadh")}
            </h3>

            {/* Address */}
            <ContactInfoCard
              icon={<FaMapMarkerAlt />}
              title={t("Our_Location")}
              detail={t("address_1_contact")}
            />
            <hr className="my-2 border-gray-200" />

            {/* Phone 1 */}
            <ContactInfoCard
              icon={<FaPhone />}
              title={t("Phones")}
              detail={
                <>
                  <a
                    href="tel:966 11 4731844"
                    className="text-Main-color hover:underline"
                    dir="ltr"
                  >
                    +966 11 4731844

                  </a>
                &nbsp; 
                  / 
                  &nbsp;
                  <a
                    href="tel:+966 11 4771876"
                    className="text-Main-color hover:underline"
                    dir="ltr"
                  >
                   +966 11 4771876

                  </a>
                 &nbsp; 
                  / 
                  &nbsp;
                  <a
                    href="tel:+966 11 4760967"
                    className="text-Main-color hover:underline"
                    dir="ltr"
                  >
                    +966 11 4760967
                  </a>
                </>
              }
            />

            <hr className="my-2 border-gray-200" />

            {/* WhatsApp */}
            <ContactInfoCard
              icon={<FaWhatsapp />}
              title={t("WhatsApp")}
              detail={
                <a
                  href="https://api.whatsapp.com/send/?phone=0506194863&text&type=phone_number&app_absent=0"
                  className="text-Main-color hover:underline"
                  dir="ltr"
                >
                  0506194863
                </a>
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Fax */}
            <ContactInfoCard
              icon={<FaFax />}
              title={t("Fax")}
              detail={
               
                  <p
              
                  className="text-Main-color "
                  dir="ltr"
                > +966 11 2913688 </p> 
              
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Email */}
            <ContactInfoCard
              icon={<FaEnvelope />}
              title={t("Email")}
              detail={
                <>

                  <a
                  href="mailto:Admin@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                  Admin@AlawiStars.com

                </a>
                 &nbsp;
                /
                &nbsp;

                <a
                  href="mailto:SalesRyd@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                  SalesRyd@AlawiStars.com
                </a>
                <br/>
                
                  <a
                  href="mailto:Support@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                 Support@AlawiStars.com
                </a>
                &nbsp;
                /
                &nbsp;

                <a  href="mailto:Career@AlawiStars.com"
                  className="text-Main-color hover:underline" >
Career@AlawiStars.com

                </a>
                </>

              
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Working Hours */}

            <ContactInfoCard
              icon={<FaRegClock  />}
              title={t("working_hours")}
              detail={<p>{t("Jeddah_working_hours")} </p>}
            />
          </div>
        </div>
      </div>

      {/* Contact Form Section (remains the same as it's already well-styled) */}
      <div className="flex flex-col md:flex-row items-center gap-8 bg-white rounded-lg shadow-md p-6">
        <div className="md:w-1/2">
          <motion.img
            src={contact_img}
            alt="Contact Us"
            className="w-full rounded-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "easeIn", duration: 0.3 }}
          />
        </div>

        <form className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold mb-4 text-justify text-Main-color">
            {t("contact")}
          </h3>
          <input
            type="text"
            placeholder={t("Full_Name")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <input
            type="email"
            placeholder={t("Email")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <input
            type="text"
            placeholder={t("Phone")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <input
            type="text"
            placeholder={t("Subject")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <textarea
            placeholder={t("Message")}
            className="w-full border border-gray-300 rounded px-4 py-2 h-32 resize-none text-justify focus:ring-Main-color focus:border-Main-color"
          ></textarea>
          <button
            type="submit"
            className="bg-Main-color hover:bg-indigo-950 cursor-pointer text-white font-semibold py-2 px-6 rounded w-full transition-colors duration-200"
          >
            {t("contact")}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
