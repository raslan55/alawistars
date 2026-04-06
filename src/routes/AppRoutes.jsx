import { Routes, Route } from "react-router-dom";
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
import FAQ from "../components/FAQ";
import Blog from "../pages/Blog";
import BlogPost from "../components/BlogPost";
import AdminBlog from "../pages/AdminBlog";
import { useTranslation } from "react-i18next";
import { getRoutePath } from "../utils/i18nHelpers"; 

function App() {
  
  const { t, i18n } = useTranslation();
  const productsBase = getRoutePath("products", t);
  const servicesBase = getRoutePath("services", t);
  const aboutBase = getRoutePath("about", t);
  const newsBase = getRoutePath("news", t);
  const contactBase = getRoutePath("contact", t);
  const privacyBase = getRoutePath("PrivacyPolicy", t);
  const termsBase = getRoutePath("TermsAndConditions", t);
  const faqBase = getRoutePath("FAQ", t);
  const clientsBase = getRoutePath("AllClients", t);

  return (
    <Routes key={i18n.language}>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={productsBase} element={<Products />} />
        <Route path={`${productsBase}/:slug`} element={<ProductDetails />} />
        <Route path={clientsBase} element={<ClientGrid />} />
        <Route path={servicesBase} element={<Services />} />
        <Route path={aboutBase} element={<About />} />
        <Route path={newsBase} element={<News />} />
        <Route path={contactBase} element={<Contact />} />
        <Route path={privacyBase} element={<PrivacyPolicy />} />
        <Route path={termsBase} element={<TermsAndConditions />} />
        <Route path={faqBase} element={<FAQ />} />
        <Route path={getRoutePath("blog", t)} element={<Blog />} />
        <Route path={`${getRoutePath("blog", t)}/:slug`} element={<BlogPost />} />
        <Route path="admin/blog" element={<AdminBlog />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
