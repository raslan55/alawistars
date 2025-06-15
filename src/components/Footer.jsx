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
    <Footer container className="bg-[#F0F8FD] text-text-color  shadow-lg">
      <div className="w-full px-4 py-8 ">
        {/* Top Section: 4 Columns */}
        {/* <div className="flex flex-wrap  items-center  ">
          <div className="w-full flex flex-col items-center ">
            <FooterBrand
              className="w-100 h-auto "
              href=""
              src={Logo}
              alt="alawistars Logo"
              name="alawistars"
            />
            <p className="py-2.5  mb-2">{t("footertext")}</p>
          </div>
        </div> */}

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
            <FooterLinkGroup className="flex ">
              <FooterLink href="#" className="m-0">
                {t("FAQs")}
              </FooterLink>
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
