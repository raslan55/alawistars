import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

import Logo from "../assets/Images/ngom2.png";
import Topheader from "./Topheader";
import products from "../data/products"; // used for products dropdown
import { slugify, getProductSlug, getRoutePath, findRouteKeyFromSlug } from "../utils/i18nHelpers";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // ✅ للتحكم في حالة القائمة
  const [isProductsOpen, setIsProductsOpen] = useState(false); // control dropdown visibility

  const navigate = useNavigate();

  const changeLanguage = (lng) => {
    const oldPath = window.location.pathname;
    let newPath = oldPath;

    // all URLs stay in English, just reconstruct with current language routes
    const parts = oldPath.split("/").filter(Boolean);
    if (parts.length > 0) {
      const first = parts[0];
      const key = findRouteKeyFromSlug(first, t);
      if (key) {
        const newBase = getRoutePath(key, t, lng);
        newPath = `/${newBase}`;
        if (parts.length >= 2) {
          newPath += `/${parts.slice(1).join("/")}`;
        }
      }
    }

    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setIsOpen(false); // ✅ قفل القائمة عند تغيير اللغة
    if (newPath !== oldPath) {
      // delay navigation to allow routes to update
      setTimeout(() => {
        navigate(newPath, { replace: true });
      }, 100);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false); // ✅ تستخدم بعد الضغط على أي عنصر
    setIsProductsOpen(false);
  };
  return (
    <>
      <Topheader />

      <header
        className={`sticky top-0 bg-white z-110 transition-all
           duration-300 ease-in-out ${
             isScrolled ? "shadow-lg  bg-gray-50" : ""
           }`}
      >
        <Navbar fluid rounded>
          <NavbarBrand as={Link} to="/">
            <img src={Logo} className="sm:w-50 w-40" />
          </NavbarBrand>
          {/* ✅ نربط toggle بالحالة */}
          <NavbarToggle onClick={() => setIsOpen(!isOpen)} />

          <NavbarCollapse
            className={`text-text-color gap-7 mobile-menu-custom ${
              isOpen ? "block" : "hidden"
            } sm:flex`}
          >
            <NavLink to="/" className="AL_Link font-bold" onClick={closeMenu}>
              {t("home")}
            </NavLink>
            {/* Products menu with dropdown */}
            <div className="relative">
              {/* button toggles dropdown on click (mobile or desktop) */}
              <button
                className="AL_Link font-bold flex items-center"
                onClick={() => setIsProductsOpen((prev) => !prev)}
              >
                {t("products")}
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* dropdown panel for desktop */}
              <div
                className={`absolute left-0 mt-2 w-48 bg-Main-color text-white shadow-lg z-50 ${
                  isProductsOpen ? "" : "hidden"
                }`}>
                <Link
                  to={`/${getRoutePath("products", t)}`}
                  onClick={() => {
                    closeMenu();
                    setIsProductsOpen(false);
                  }}
                  className="block px-4 py-2 "
                >
                  {t("all_products")}
                </Link>
                {products.map((p) => (
                  <Link
                    key={p.id}
                    to={`/${getRoutePath("products", t)}/${getProductSlug(p, i18n.language, t)}`}
                    onClick={() => {
                      closeMenu();
                      setIsProductsOpen(false);
                    }}
                    className="block px-4 py-2 "
                  >
                    {t(p.title)}
                  </Link>
                ))}
              </div>

              {/* mobile submenu (collapsible) */}
              {isProductsOpen && (
                <div className="flex flex-col sm:hidden pl-4">
                  <Link
                    to={`/${getRoutePath("products", t)}`}
                    onClick={() => {
                      closeMenu();
                      setIsProductsOpen(false);
                    }}
                    className="AL_Link py-1"
                  >
                    {t("all_products")}
                  </Link>
                  {products.map((p) => (
                    <Link
                      key={p.id}
                      to={`/${getRoutePath("products", t)}/${getProductSlug(p, i18n.language, t)}`}
                      onClick={() => {
                        closeMenu();
                        setIsProductsOpen(false);
                      }}
                      className="AL_Link py-1"
                    >
                      {t(p.title)}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <NavLink
              to={`/${getRoutePath("services", t)}`}
              className="AL_Link font-bold"
              onClick={closeMenu}
            >
              {t("services")}
            </NavLink>
            <NavLink
              to={`/${getRoutePath("about", t)}`}
              className="AL_Link font-bold"
              onClick={closeMenu}
            >
              {t("about")}
            </NavLink>
            <NavLink
              to={`/${getRoutePath("blog", t)}`}
              className="AL_Link font-bold"
              onClick={closeMenu}
            >
              {t("blog")}
            </NavLink>
            <NavLink
              to={`/${getRoutePath("contact", t)}`}
              className="AL_Link font-bold"
              onClick={closeMenu}
            >
              {t("contact")}
            </NavLink>

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
                  className="sm:w-6 sm:h-4 object-cover"
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
