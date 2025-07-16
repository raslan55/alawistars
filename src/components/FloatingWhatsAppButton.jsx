import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTwitter ,FaInstagram ,FaFacebook } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


const FloatingWhatsAppButton  = () =>  {
const contacts = [
    {
      href: "https://wa.me/201234567890?text= Hello, I need support from the Alawi Stars team regarding one of your services. Thank you in advance.",
      icon: <FaWhatsapp className="w-5 h-5" />,
      bg: "bg-[#41c052]",
      label: "WhatsApp",
    },
    {
      href: "tel:+966506194863",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      bg: "bg-[#1b6ba9]",
      label: "Direct Call",
      mobileOnly: true,
    },

     {
      href: "https://www.facebook.com/alawistars/",
      icon: <FaFacebook className="w-5 h-5" />,
      bg: "bg-[#0866ff]",
      label: "Facebook",
    },
     {
      href: "https://www.instagram.com/alawistarsest/#",

      icon: <FaInstagram  className="w-5 h-5" />,
      bg: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      label: "Instagram",
    },
    {
      href: "https://x.com/alawistars?lang=ar",

      icon: <FaXTwitter className="w-5 h-5" />,
      bg: "bg-[#000000]",
      label: "Twitter",
    },
    {
      href: "mailto:info@alawistars.com",
      icon: <FaEnvelope className="w-5 h-5" />,
      bg: "bg-[#ffc704]",
      label: "Email",
    },
   
  ];

  return (
  <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-100">
      {contacts.map((contact, idx) => (
         <a
    key={idx}
    href={contact.href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${contact.bg} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center 
      ${contact.mobileOnly ? "block md:hidden" : ""}`}    
    aria-label={contact.label}
  >
    {contact.icon}
  </a>
      ))}
    </div>
  );
};

// Export the component for use in other parts of your React application.
export default FloatingWhatsAppButton;