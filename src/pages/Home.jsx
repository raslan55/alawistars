import { lazy, Suspense } from "react";
import Partenrs from "../components/Partenrs";
import Products from "../components/Products";
import About from "../components/About";
import Servslide from "../components/Servslide";
import HeroSection from "../components/HeroSection";
import LatestBlogsSection from "../components/LatestBlogsSection";
import { useTranslation } from "react-i18next";
import SeoHelmet from "../components/SeoHelmet";
const Testimonial = lazy(() => import("../components/Testimonial"));
const CTA = lazy(() => import("../components/CTA"));

const LoadingFallback = () => (
  <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-50 animate-pulse" />
);


function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <SeoHelmet pageKey="home" />
      <HeroSection />
      <About />
      <Servslide />
      <Products />
      <LatestBlogsSection />
      <Suspense fallback={<LoadingFallback />}>
        <Testimonial />
      </Suspense>
      <Partenrs />

      <Suspense fallback={<LoadingFallback />}>

        <CTA 
          heading={t("Started")} 
          subheading={t("CTA_Text")} 
          btnText={t("Start_btn")}
        />


      </Suspense>
    </div>

  );
}

export default Home;