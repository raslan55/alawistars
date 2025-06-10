import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import AppFooter from "../components/Footer";

const MainLayout = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLang = i18n.language;
  
    // Save language to localStorage
    localStorage.setItem("language", currentLang);
  
    // Set the dir attribute
    document.documentElement.dir = currentLang === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <div className=" min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="">
        <Outlet />
      </main>

      {/* Footer */}
      <AppFooter />
    </div>
  );
};

export default MainLayout;
