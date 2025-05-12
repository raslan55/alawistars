import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaPhone } from "react-icons/fa6";
import { FaFax } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";

import Logo from "../assets/Images/ngom2.png";
import { BsYoutube, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";
import { BiMap } from "react-icons/bi";

export default function AppFooter() {
  const { t } = useTranslation();

  return (
    <Footer
    container
      className="bg-[#F0F8FD] text-text-color  shadow-lg"
    >
      <div className="w-full px-4 py-8 ">
        {/* Top Section: 4 Columns */}
        <div className="flex flex-wrap justify-between gap-6 md:gap-8">
          {/* Column 1: Branding */}
          <div className="flex-1 min-w-[250px] md:max-w-[24%]">
            <FooterBrand
              className="w-60 h-auto"
              href=""
              src={Logo}
              alt="alawistars Logo"
              name="alawistars"
              
            />
            <p className="py-2.5 mt-3 mb-2">

            {t("footertext")}
              
            </p>
            <p>{t("Fax")}: <span dir="ltr"> +966 11 2913688 </span>  </p>

            <p> {t("Email")}:  Admin@AlawiStars.com</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex-1 min-w-[150px] md:max-w-[18%]">
            <FooterTitle title= {t("QuickLinks")} className="font-bold text-[##FFD702]" />
            <FooterLinkGroup col>
              <Link to="/" className="font-bold">
                {t("home")}
              </Link>
              <Link to="/products" className="font-bold">
                {t("products")}
              </Link>
              <Link to="/services" className="font-bold">
                {t("services")}
              </Link>
              <Link to="/about" className="font-bold">
                {t("about")}
              </Link>
              <Link to="/news" className="font-bold">
                {t("news")}
              </Link>
              <Link to="/contact" className="font-bold">
                {t("contact")}
              </Link>
            </FooterLinkGroup>
          </div>

          {/* Column 3: Services */}
          <div className="flex-1 min-w-[150px] md:max-w-[18%]">
            <FooterTitle title={t("HeadOfficeRiyadh")} className="font-bold text-text-color" />
            <FooterLinkGroup col>
           
              <a
                href="https://maps.app.goo.gl/24SqFP2WSBwKQ56v9"
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <BiMap className="text-lg" />
                <span> {t("address_1")} </span>
              </a>

              <a
                href=""
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaPhone className="text-lg" />
                <span>011 4731844 - 011 4760967</span>
              </a>
              <a
                href=""
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaFax className="text-lg" />
                <span>011 4771876
                </span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=966506194863&lang=en"
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaWhatsapp  className="text-lg" />
                <span> 0506194863
                </span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=966506194863&lang=en"
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FiClock   className="text-lg " />
                <span className="text-[12px]">
                {t("time")}   
                </span>
              </a>

   

            </FooterLinkGroup>
          </div>

          {/* Column 4: Legal */}
          <div className="flex-1 min-w-[150px] md:max-w-[18%]">
            <FooterTitle title={t("Jeddah_Branch")}  className="font-bold text-text-color" />
            <FooterLinkGroup col>
              <a
                href="https://maps.app.goo.gl/24SqFP2WSBwKQ56v9"
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <BiMap className="text-lg" />
                <span> {t("address_2")}</span>
              </a>

              <a
                href=""
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaPhone className="text-lg" />
                <span>012 6040680 - 012 6040681</span>
              </a>
              <a
                href=""
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaFax className="text-lg" />
                <span>
                012 6452986
                </span>
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=966504139243&lang=en"
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FaWhatsapp  className="text-lg" />
                <span>  0504139243
                </span>
              </a>

              <a
                href="https://api.whatsapp.com/send?phone=966506194863&lang=en"
                target="blank"
                className="flex items-center gap-2 text-sm hover:underline"
              >
                <FiClock   className="text-lg" />
                <span className="text-[12px]">
                {t("time")}    
                </span>
              </a>

   

            </FooterLinkGroup>
          </div>
        </div>

        <FooterDivider className="my-6" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <FooterCopyright
            href="https://sinmarsoftco.com/"
            by=" all Copyright are reserved to Sinmarsoft"
            year={new Date().getFullYear()}
            className="capitalize"
          />

          <div className="flex flex-wrap items-center gap-4">
            <FooterLinkGroup className="flex gap-4">
              <FooterLink href="#">{t("FAQs")}</FooterLink>
              <FooterLink href="#"> {t("Privacy_Policy")} </FooterLink>
              <FooterLink href="#">{t("Terms_Conditions")} </FooterLink>
            </FooterLinkGroup>

            <div className="flex gap-4">
              <FooterIcon
                href="https://www.facebook.com/alawistars/"
                target="blank"
                icon={BsFacebook}
              />
              <FooterIcon
                href="https://www.instagram.com/alawistarsest"
                target="blank"
                icon={BsInstagram}
              />
              <FooterIcon
                href="https://x.com/i/flow/login?redirect_after_login=%2Falawistars"
                target="blank"
                icon={BsTwitterX}
              />
              <FooterIcon
                href="https://www.youtube.com/channel/UCCtcpoFpthrM_CcjZZ6XT6Q"
                target="blank"
                icon={BsYoutube}
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
