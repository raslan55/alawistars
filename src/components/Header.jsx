import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import Logo from "../assets/Images/ngom2.png";
import Topheader from "./Topheader";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <Topheader />

      <header
        className={`sticky top-0 bg-white z-110 transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-lg  bg-gray-50" : ""
        }`}
      >
        <Navbar fluid rounded>
          <NavbarBrand as={Link} to="/">
            {/* Logo */}
            <img src={Logo} className="sm:w-50 w-40" />
          </NavbarBrand>

          <NavbarToggle />

          <NavbarCollapse className="text-text-color gap-7 mobile-menu-custom">
            <NavLink to="/" className="AL_Link font-bold">
              {t("home")}
            </NavLink>
            <NavLink to="/products" className="AL_Link font-bold">
              {t("products")}
            </NavLink>
            <NavLink to="/services" className="AL_Link font-bold">
              {t("services")}
            </NavLink>
            <NavLink to="/about" className="AL_Link font-bold">
              {t("about")}
            </NavLink>
            {/* <NavLink to="/news" className="font-bold">
              {t("news")}
            </NavLink> */}
            <NavLink to="/contact" className="AL_Link font-bold">
              {t("contact")}
            </NavLink>
            {/* Language Switcher */}
            <div className="flex sm:flex-row flex-col items-center gap-2 sm:mt-0 mt-3">
              <button
                onClick={() => changeLanguage("en")}
                className="px-2 py-1 rounded "
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="English"
                  className="sm:w-6 sm:h-4 object-cover"
                />
              </button>

              <button
                onClick={() => changeLanguage("ar")}
                className="px-2 py-1 rounded "
              >
                <img
                  src="https://flagcdn.com/w40/sa.png"
                  alt="Arabic"
                  className="sm:w-6 sm:h-4  object-cover"
                />
              </button>
            </div>
          </NavbarCollapse>
        </Navbar>
      </header>
      
    </>
  );
};

export default Header;
