import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { 
  FaPhone, 
  FaEnvelope, 
  FaLocationDot, 
  FaClock, 
  FaFax 
} from "react-icons/fa6";
import { 
  BsYoutube, 
  BsFacebook, 
  BsInstagram, 
  BsTwitterX 
} from "react-icons/bs";

import Logo from "../assets/Images/ngom2.png";
import { getRoutePath } from "../utils/i18nHelpers";

export default function AppFooter() {
  const { t, i18n } = useTranslation();
  const isAr = i18n.language === "ar";

  const quickLinks = [
    { name: t("home"), path: "/" },
    { name: t("products"), path: `/${getRoutePath("products", t)}` },
    { name: t("services"), path: `/${getRoutePath("services", t)}` },
    { name: t("about"), path: `/${getRoutePath("about", t)}` },
    { name: t("blog"), path: `/${getRoutePath("blog", t)}` },
    { name: t("contact"), path: `/${getRoutePath("contact", t)}` },
  ];

  return (
    <footer className="relative bg-slate-50 text-slate-800 pt-20 pb-10 overflow-hidden font-['Cairo',sans-serif] border-t border-slate-200">
      
      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-8">
            <Link to="/" className="inline-block transform hover:opacity-80 transition-opacity duration-300">
              <img src={Logo} alt={t("CompanyName")} className="h-20 object-contain" />
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs font-medium">
              {t("companyDescriptionPart1").substring(0, 160)}...
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: <BsFacebook size={18} />, href: "https://www.facebook.com/alawistars/" },
                { icon: <BsInstagram size={18} />, href: "https://www.instagram.com/alawistarsest" },
                { icon: <BsTwitterX size={18} />, href: "https://x.com/alawistars" },
                { icon: <BsYoutube size={18} />, href: "https://www.youtube.com/channel/UCCtcpoFpthrM_CcjZZ6XT6Q" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 flex items-center justify-center bg-white rounded-xl text-slate-400 hover:bg-Main-color hover:text-white transition-all duration-300 border border-slate-200 shadow-sm">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-Main-color tracking-tight flex items-center gap-2">
              <span className="w-6 h-1 bg-brand-accent rounded-full"></span>
              {t("QuickLinks")}
            </h3>
            <ul className="space-y-4 font-semibold">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link to={link.path} className="text-slate-600 hover:text-Main-color transition-colors duration-300 flex items-center gap-3 group">
                    <span className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-brand-accent transition-all"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Riyadh */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-Main-color tracking-tight flex items-center gap-2">
              <span className="w-6 h-1 bg-brand-accent rounded-full"></span>
              {t("HeadOfficeRiyadh")}
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-Main-color/10 flex items-center justify-center text-Main-color shadow-sm">
                   <FaLocationDot size={16} />
                </div>
                <span className="text-slate-600 text-sm leading-relaxed font-semibold">{t("address_1")} <br/> <small className="text-slate-400">{t("address_1_contact")}</small></span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-Main-color/10 flex items-center justify-center text-Main-color shadow-sm transition-transform hover:scale-110">
                   <FaPhone size={16} />
                </div>
                <a href="tel:+966506194863" dir="ltr" className="text-slate-700 text-base font-bold hover:text-Main-color transition-colors">+966 50 619 4863</a>
              </li>
              <li className="flex items-center gap-5">
                 <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-Main-color/10 flex items-center justify-center text-Main-color shadow-sm">
                   <FaEnvelope size={16} />
                </div>
                <a href="mailto:info@alawistars.com" className="text-slate-600 hover:text-Main-color transition-all text-sm font-bold">info@alawistars.com</a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Jeddah */}
          <div className="space-y-6">
            <h3 className="text-xl font-extrabold text-Main-color tracking-tight flex items-center gap-2">
              <span className="w-6 h-1 bg-brand-accent rounded-full"></span>
              {t("Jeddah_Branch")}
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-xl bg-Main-color/10 flex items-center justify-center text-Main-color shadow-sm">
                   <FaLocationDot size={16} />
                </div>
                <span className="text-slate-600 text-sm leading-relaxed font-semibold">{t("address_2")} <br/> <small className="text-slate-400">{t("address_2_contact")}</small></span>
              </li>
              <li className="flex items-center gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-Main-color/10 flex items-center justify-center text-Main-color shadow-sm transition-transform hover:scale-110">
                   <FaPhone size={16} />
                </div>
                <a href="tel:+966504139243" dir="ltr" className="text-slate-700 text-base font-bold hover:text-Main-color transition-colors">+966 50 413 9243</a>
              </li>
              <li className="flex items-center gap-4">
                 <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-Main-color/10 flex items-center justify-center text-Main-color shadow-sm">
                   <FaClock size={16} />
                </div>
                <span className="text-slate-600 text-sm font-bold uppercase tracking-wide">{t("Jeddah_working_hours")}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm font-bold">
            &copy; {new Date().getFullYear()} <span className="text-Main-color">{t("CompanyName")}</span>. {t("copyRights")}
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-slate-400">
            <Link to="/PrivacyPolicy" className="hover:text-Main-color transition-colors">{t("Privacy_Policy")}</Link>
            <Link to="/TermsAndConditions" className="hover:text-Main-color transition-colors">{t("Terms_Conditions")}</Link>
            <Link to="/faq" className="hover:text-Main-color transition-colors">{t("FAQs")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
