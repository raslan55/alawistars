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
import products from "../data/products"; // used for products dropdown
import { getProductSlug, getRoutePath, findRouteKeyFromSlug } from "../utils/i18nHelpers";


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
      <header
        className={`sticky top-0 z-[110] transition-all duration-300 ease-in-out ${
          isScrolled 
            ? "glass-effect shadow-lg py-1" 
            : "bg-white border-b border-transparent py-2"
        }`}
      >
        <Navbar fluid rounded>
          <NavbarBrand as={Link} to="/">
            <img src={Logo} alt="Alawistars Logo" className="sm:w-50 w-40" />
          </NavbarBrand>

          {/* ✅ نربط toggle بالحالة */}

          <NavbarToggle onClick={() => setIsOpen(!isOpen)} />

          <NavbarCollapse
            className={`text-text-color gap-7 mobile-menu-custom w-full ${
              isOpen ? "flex flex-col items-stretch" : "hidden"
            } sm:flex sm:flex-row sm:items-center sm:justify-center`}
          >
            <NavLink
              to="/"
              className="AL_Link font-bold text-start hover:text-blue-600 transition duration-200 sm:flex sm:items-center"
              onClick={closeMenu}
            >
              {t("home")}
            </NavLink>
            <div className="relative w-full sm:w-auto sm:flex sm:items-center">
              <button
                className="AL_Link font-bold flex items-center justify-between sm:justify-center gap-1 w-full sm:w-auto text-start hover:text-blue-600 transition duration-200"
                onClick={() => setIsProductsOpen((prev) => !prev)}>
                {t("products")}

                <svg
                  className={`w-4 h-4 ml-1 rtl:mr-1 rtl:ml-0 transition-transform duration-300 ${isProductsOpen ? "rotate-180" : "rotate-0"}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>


              </button>

              {/* dropdown panel for desktop */}
              <div
                className={`hidden sm:block absolute rtl:right-0 ltr:left-0 top-full mt-2 w-64 rounded-lg shadow-lg overflow-hidden z-50 transition-all duration-300 ${
                  isProductsOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
           
                <div className="bg-[#1b6ba9] text-white">
                  <Link
                    to={`/${getRoutePath("products", t)}`}
                    onClick={() => {
                      closeMenu();
                      setIsProductsOpen(false);
                    }}
                    className="block px-6 py-3 text-sm font-semibold hover:bg-blue-700 border-b border-blue-500 transition duration-200 text-start"
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
                      className="block px-6 py-2.5 text-sm hover:bg-blue-700 border-b border-blue-500 transition duration-200 text-start"
                    >
                      {t(p.menuTitle || p.title)}
                    </Link>
                  ))}
                </div>
              </div>

              {/* mobile submenu (collapsible) */}
              <div className={`flex flex-col sm:hidden w-full bg-[#1b6ba9] rounded-lg shadow-lg overflow-hidden z-50 transition-all duration-300 ${
                  isProductsOpen ? "max-h-[500px] opacity-100 mt-2 border border-blue-500" : "max-h-0 opacity-0 mt-0 border-none"
                }`}>
             
                <div className="flex flex-col overflow-y-auto">
                  <Link
                    to={`/${getRoutePath("products", t)}`}
                    onClick={() => {
                      closeMenu();
                      setIsProductsOpen(false);
                    }}
                    className="block px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 border-b border-blue-500 transition duration-200 text-start"
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
                      className="block px-6 py-2.5 text-sm text-white hover:bg-blue-700 border-b last:border-b-0 border-blue-500 transition duration-200 text-start"
                    >
                      {t(p.menuTitle || p.title)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <NavLink
              to={`/${getRoutePath("services", t)}`}
              className="AL_Link font-bold text-start hover:text-blue-600 transition duration-200 sm:flex sm:items-center"
              onClick={closeMenu}
            >
              {t("services")}
            </NavLink>
            <NavLink
              to={`/${getRoutePath("about", t)}`}
              className="AL_Link font-bold text-start hover:text-blue-600 transition duration-200 sm:flex sm:items-center"
              onClick={closeMenu}
            >
              {t("about")}
            </NavLink>
            <NavLink
              to={`/${getRoutePath("blog", t)}`}
              className="AL_Link font-bold text-start hover:text-blue-600 transition duration-200 sm:flex sm:items-center"
              onClick={closeMenu}
            >
              {t("blog")}
            </NavLink>
            <NavLink
              to={`/${getRoutePath("contact", t)}`}
              className="AL_Link font-bold text-start hover:text-blue-600 transition duration-200 sm:flex sm:items-center"
              onClick={closeMenu}
            >
              {t("contact")}
            </NavLink>

            <div className="flex sm:flex-row flex-col items-center gap-3 sm:mt-0 mt-4">
              <button
                onClick={() => changeLanguage("en")}
                className="px-2.5 py-1.5 rounded-lg border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition duration-200"
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="English"
                  className="sm:w-7 sm:h-5 w-6 h-4 object-cover rounded-[2px]"
                />
              </button>

              <button
                onClick={() => changeLanguage("ar")}
                className="px-2.5 py-1.5 rounded-lg border-2 border-slate-300 hover:border-blue-500 hover:bg-blue-50 transition duration-200"
              >
                <img
                  src="https://flagcdn.com/w40/sa.png"
                  alt="Arabic"
                  className="sm:w-7 sm:h-5 w-6 h-4 object-cover rounded-[2px]"
                />

                  
              </button>
            </div>
          </NavbarCollapse>
          
        </Navbar>
      </header>
  );
};

export default Header;
