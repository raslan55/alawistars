import {  Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Services from "../pages/Services";
import About from "../pages/About";
import News from "../pages/News";
import Contact from "../pages/Contact";
import ProductDetails from "../components/ProductDetails";

function App() {
  return (
 
      <Routes>

          <Route path="/" element={<MainLayout />}>

          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetails/>} />
          <Route path="services" element={<Services />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News/>} />
          <Route path="contact" element={<Contact />} />
          
          </Route>

      </Routes>

  );
}

export default App;
