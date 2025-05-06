import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; 
import App from "./App";
import "./index.css";
import "./i18n/translation"; 

// Restore saved language before app loads
import i18n from "i18next";
const savedLang = localStorage.getItem("language");
if (savedLang) {
  i18n.changeLanguage(savedLang);
}



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
