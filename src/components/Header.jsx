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
import Logo from "../assets/Images/main-logo_1.png";
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
        className={`sticky top-0 bg-white py-4 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-lg py-2 bg-gray-50" : "shadow-md"
        }`}
      >
     
          <Navbar fluid rounded>

            <NavbarBrand as={Link} to="/">
              {/* Logo */}
                <img src={Logo} className="w-50" />
            </NavbarBrand>

            <NavbarToggle />

            <NavbarCollapse className="text-gray-700 gap-7">
              <NavLink to="/" className="font-bold">
                {t("home")}
              </NavLink>
              <NavLink to="/products" className="font-bold">
                {t("products")}
              </NavLink>
              <NavLink to="/services" className="font-bold">
                {t("services")}
              </NavLink>
              <NavLink to="/about" className="font-bold">
                {t("about")}
              </NavLink>
              <NavLink to="/news" className="font-bold">
                {t("news")}
              </NavLink>
              <NavLink to="/contact" className="font-bold">
                {t("contact")}
              </NavLink>
              {/* Language Switcher */}
              <div className="flex gap-2">
                 <button
                  onClick={() => changeLanguage("en")}
                  className="px-2 py-1 rounded "
                >
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="English"
                    className="w-6 h-4 object-cover"
                  />
                 </button>

                 <button
                  onClick={() => changeLanguage("ar")}
                  className="px-2 py-1 rounded "
                >

                  <img
                    src="https://flagcdn.com/w40/sa.png"
                    alt="Arabic"
                    className="w-6 h-4 object-cover"
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
