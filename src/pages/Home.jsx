import Testimonial from "../components/Testimonial";
import Partenrs from "../components/Partenrs";
import Products from "../components/Products";
import About from "../components/About";
import Servslide from "../components/Servslide";
import HeroSection from "../components/HeroSection";
import CTA from "../components/CTA";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();


  return (
    <div>
     <HeroSection/>
      <About/>
      <Servslide/>
      <Products/>
      <Testimonial/>
      <Partenrs/>
        <CTA 
          heading={t("Started")} 
         subheading={t("CTA_Text")} />


    </div>
  );
}

export default Home;