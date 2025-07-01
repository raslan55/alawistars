import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLinkGroup,
} from "flowbite-react";

import Logo from "../assets/Images/ngom2.png";
import { BsYoutube, BsFacebook, BsInstagram, BsTwitterX } from "react-icons/bs";

export default function AppFooter() {
  const { t } = useTranslation();

  return (
    <Footer container className="bg-[#F0F8FD] text-Main-color shadow-lg">
      <div className="w-full px-4 ">
        {/* Divider */}
        <FooterDivider className="sm:my-1" />

        {/* Bottom Section */}
        <div
          className="flex flex-col sm:flex-row justify-between items-center
                        gap-4 flex-wrap text-center sm:text-left"
        >
          {/* Copyright */}

          <FooterCopyright
            href="https://sinmarsoftco.com/"
            by={t("copyRights")}
            year={new Date().getFullYear()}
            className="capitalize text-Main-color text-base sm:text-lg"
          />

          {/* Links + Social Icons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 flex-wrap">
            {/* Policy Links */}
            <FooterLinkGroup className="flex flex-wrap justify-center sm:justify-start">
              <Link
                to="/PrivacyPolicy"
                className="text-Main-color text-base sm:text-lg ms-4 hover:underline"
              >
                {t("Privacy_Policy")}
              </Link>
              <Link
                to="/TermsAndConditions"
                className="text-Main-color text-base sm:text-lg ms-4 hover:underline"
              >
                {t("Terms_Conditions")}
              </Link>
            </FooterLinkGroup>

            {/* Social Icons */}
            <div className="flex gap-4 justify-center sm:justify-start">
              <FooterIcon
                href="https://www.facebook.com/alawistars/"
                target="_blank"
                icon={BsFacebook}
                className="text-Main-color hover:scale-110 transition-transform duration-300"
              />
              <FooterIcon
                href="https://www.instagram.com/alawistarsest"
                target="_blank"
                icon={BsInstagram}
                className="text-Main-color hover:scale-110 transition-transform duration-300"
              />
              <FooterIcon
                href="https://x.com/i/flow/login?redirect_after_login=%2Falawistars"
                target="_blank"
                icon={BsTwitterX}
                className="text-Main-color hover:scale-110 transition-transform duration-300"
              />
              <FooterIcon
                href="https://www.youtube.com/channel/UCCtcpoFpthrM_CcjZZ6XT6Q"
                target="_blank"
                icon={BsYoutube}
                className="text-Main-color hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </Footer>
  );
}
