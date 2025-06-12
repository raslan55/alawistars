import React, { useState } from "react";
import axios from "axios";

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
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
    const [status, setStatus] = useState(""); // For feedback message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("sending");

  try {
    await axios.post("http://localhost:5000/api/contact", formData);
    setStatus("success");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  } catch (error) {
    console.error("Submission error:", error);
    setStatus("error");
  }
};
  return (
    <div className="px-4 py-12 max-w-7xl mx-auto text-justify">
      <h2 className="text-3xl font-bold text-center mb-12 text-Main-color">
        {t("contact")}
      </h2>

      {/* Branches Section */}
      <div className="flex flex-col lg:flex-row gap-8 mb-16">
        
        {/* Riyadh Branch */}
        <div className="flex-1 shadow-md rounded-lg overflow-hidden bg-white p-6">
          
          {/* Added bg-white and p-6 for consistency */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3625.7432910544403!2d46.730371!3d24.666963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f043fc3102965%3A0x966a077916c463df!2z2LTYsdmD2Kkg2YbYrNmI2YUg2KfZhNi52YTYp9mI2Yog2YTZhti42YUg2KfZhNmD2YXYqNmK2YjYqtixIEFsYXdpU3RhcnMgRm9yIEluZm9ybWF0aW9uIFN5c3RlbXM!5e0!3m2!1sen!2suk!4v1749041519184!5m2!1sen!2suk" // Replaced with a more generic Riyadh map embed. Please update with your actual map link.
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
              title={t("Sales_Email")}
              detail={
                <>


                <a
                  href="mailto:SalesRyd@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                  SalesRyd@AlawiStars.com
                </a>
              
                </>

              
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Working Hours */}

            <ContactInfoCard
              icon={<FaRegClock  />}
              title={t("working_hours")}
              detail={<p className="text-Main-color" >{t("Jeddah_working_hours")} </p>}
            />
          </div>
        </div>
        {/* Jeddah Branch */}
        <div className="flex-1 shadow-md rounded-lg overflow-hidden bg-white p-6">
          
          {/* Added bg-white and p-6 for consistency */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3712.047534049585!2d39.179435!3d21.505858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3cfa3e5cef8a5%3A0x9e6b5a7b163074b3!2z2LTYsdmD2Kkg2YbYrNmI2YUg2KfZhNi52YTYp9mI2Yog2YTZhti42YUg2KfZhNmD2YXYqNmK2YjYqtixIEFsYXdpU3RhcnMgRm9yIEluZm9ybWF0aW9uIFN5c3RlbXM!5e0!3m2!1sen!2suk!4v1749041604056!5m2!1sen!2suk" // Replaced with a more generic Jeddah map embed for demonstration. Please update with your actual map link.
            className="w-full h-64 rounded-md mb-4" // Added rounded-md and mb-4 for map
            loading="lazy"
            allowFullScreen
          ></iframe>
          <div className="text-justify">
            <h3 className="font-bold mb-4 text-Main-color text-xl lea">
              
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
              title={t("Sales_Email")}
              detail={
                         <>

       
                <a
                  href="mailto:SalesJdh@AlawiStars.com"
                  className="text-Main-color hover:underline"
                >
                  SalesJdh@AlawiStars.com
                </a>
          
                
      
      
                </>
              }
            />
            <hr className="my-2 border-gray-200" />

            {/* Working Hours */}

            <ContactInfoCard
              icon={<FaRegClock   />}
              title={t("working_hours")}
              detail={<p className="text-Main-color">{t("Jeddah_working_hours")} </p>}
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

        <form onSubmit={handleSubmit} className="md:w-1/2 space-y-4">
          <h3 className="text-2xl font-semibold mb-4 text-justify text-Main-color">
            {t("contact")}
          </h3>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("Full_Name")}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("Email")}
            required
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("Phone")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("Subject")}
            className="w-full border border-gray-300 rounded px-4 py-2 text-justify focus:ring-Main-color focus:border-Main-color"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("Message")}
            rows={4}
            resize={true}
            cols={50}
              className="w-full border border-gray-300 rounded px-4 py-2  text-justify focus:ring-Main-color focus:border-Main-color"
          ></textarea>

          <button
            type="submit"
            className="bg-Main-color hover:bg-indigo-950 cursor-pointer
                       text-white font-semibold 
                        py-2 px-6 rounded w-full transition-colors duration-200">
            {status === "sending" ? t("Sending...") : t("contact")}

          </button>


          {status === "success" && (
            <p className="text-green-600 mt-2">{t("Message_Sent_Successfully")}</p>
          )}


          {status === "error" && (
            <p className="text-red-600 mt-2">{t("Message_Sending_Failed")}</p>
          )}


        </form>
      </div>
    </div>
  );
};

export default ContactPage;


