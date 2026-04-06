import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTwitter ,FaInstagram ,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FloatingWhatsAppButton  = () =>  {
const contacts = [

    {
      href: "https://wa.me/966504139243?text=%D8%B4%D9%83%D8%B1%D8%A7%20%D9%84%D9%83%20%D8%B9%D9%84%D9%89%20%D8%AA%D9%88%D8%A7%D8%B5%D9%84%D9%83%20%D9%85%D8%B9%20%D8%A8%D8%B1%D8%A7%D9%85%D8%AC%20%D8%B3%D9%86%D9%85%D8%A7%D8%B1%20%D9%85%D9%86%20%D9%81%D8%B6%D9%84%D9%83%20%D8%A3%D8%AE%D8%A8%D8%B1%D9%86%D8%A7%20%D9%83%D9%8A%D9%81%20%D9%8A%D9%85%D9%83%D9%86%D9%86%D8%A7%20%D8%AE%D8%AF%D9%85%D8%AA%D9%83%20%D9%88%D8%B3%D9%86%D9%82%D9%88%D9%85%20%D8%A8%D8%A7%D9%84%D8%B1%D8%AF%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%81%D9%8A%20%D8%A7%D9%82%D8%B1%D8%A8%20%D9%88%D9%82%D8%AA%20%D9%85%D8%AA%D8%A7%D8%AD%0A%0AThank%20you%20for%20contacting%20Sinmar%20Programs.%20Please%20tell%20us%20how%20we%20can%20serve%20you%20and%20we%20will%20respond%20to%20you%20as%20soon%20as%20possible.",
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
          ${contact.mobileOnly ? "block md:hidden" : " "}`}    
          aria-label={contact.label} >
          {contact.icon}

        </a>

      ))}
    </div>
  );
};

// Export the component for use in other parts of your React application.
export default FloatingWhatsAppButton;