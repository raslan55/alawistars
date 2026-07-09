import React, { useState, useEffect } from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const FloatingWhatsAppButton = () => {
  const [showButtons, setShowButtons] = useState(false);
  const { i18n } = useTranslation();
  const lang = i18n.language?.startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    const handleScroll = () => setShowButtons(window.scrollY > 450);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contacts = [
    {
      href: "https://wa.me/966506194863",
      icon: <FaWhatsapp className="w-5 h-5" />,
      bg: "bg-[#41c052]",
      label: { ar: "فرع الرياض", en: "Riyadh Branch" },
    },
    {
      href: "https://wa.me/966504139243",
      icon: <FaWhatsapp className="w-5 h-5" />,
      bg: "bg-[#41c052]",
      label: { ar: "فرع جدة", en: "Jeddah Branch" },
    },
    {
      href: "tel:+966506194863",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      bg: "bg-[#1b6ba9]",
      label: { ar: "فرع الرياض", en: "Riyadh Branch" },
      mobileOnly: true,
    },
    {
      href: "tel:+966504139243",
      icon: <FaPhoneAlt className="w-5 h-5" />,
      bg: "bg-[#1b6ba9]",
      label: { ar: "فرع جدة", en: "Jeddah Branch" },
      mobileOnly: true,
    },
  ];

  return (
    <AnimatePresence>
      {showButtons && (
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 200, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed bottom-6 right-6 flex flex-col gap-3 z-[100]"
        >
          {contacts.map((contact, idx) => (
            <a
              key={idx}
              id={`floating-contact-${idx}`}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              dir={lang === "ar" ? "rtl" : "ltr"}
              className={`${contact.bg} text-white px-4 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all duration-300 gap-2 
              ${contact.mobileOnly ? "flex md:hidden" : "flex"} items-center justify-center`}
              aria-label={contact.label[lang]}
            >
              {contact.icon}
              <span className="text-sm font-medium whitespace-nowrap">{contact.label[lang]}</span>
            </a>
          ))}
        </motion.div>
      )}
    </AnimatePresence>

  );
};

// Export the component for use in other parts of your React application.
export default FloatingWhatsAppButton;