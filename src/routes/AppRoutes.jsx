import {  Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import About from "../pages/About";
import News from "../pages/News";
import Contact from "../pages/Contact";
import ProductDetails from "../components/ProductDetails";
import ClientGrid from "../pages/ClientGrid";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import NotFound from "../pages/NotFound";

function App() {
  return (
 
      <Routes>

          <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails/>} />

          <Route path="/AllClients" element={<ClientGrid/>} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News/>} />
          <Route path="contact" element={<Contact />} />

          <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
         <Route path="TermsAndConditions" element={<TermsAndConditions />} />
              <Route path="*" element={<NotFound />} />
          </Route>

      </Routes>

  );
}

export default App;
