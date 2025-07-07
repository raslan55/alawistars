import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTwitter ,FaInstagram ,FaFacebook } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


const FloatingWhatsAppButton  = () =>  {
const contacts = [
    {
      href: "https://wa.me/201234567890?text=السلام عليكم، لدي استفسار...",
      icon: <FaWhatsapp className="w-5 h-5" />,
      bg: "bg-[#41c052]",
      label: "واتساب",
    },
     
    {
      href: "tel:+966506194863",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      bg: "bg-[#1b6ba9]",
      label: "اتصال مباشر",
    },

     {
      href: "https://www.facebook.com/alawistars/",
      icon: <FaFacebook className="w-5 h-5" />,
      bg: "bg-[#0866ff]",
      label: "facebook",
    },

     {
      href: "https://www.instagram.com/alawistarsest/#",

      icon: <FaInstagram  className="w-5 h-5" />,
      bg: "bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]",
      label: "instagram",
    },
 {
      href: "https://x.com/alawistars?lang=ar",

      icon: <FaXTwitter className="w-5 h-5" />,
      bg: "bg-[#0866ff]",
      label: "twitter",
    },
    {
      href: "mailto:info@alawistars.com",
      icon: <FaEnvelope className="w-5 h-5" />,
      bg: "bg-[#ffc704]",
      label: "إيميل",
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
          className={`${contact.bg} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center justify-center`}
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