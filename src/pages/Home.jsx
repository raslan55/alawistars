import { useTranslation } from "react-i18next";
import Testimonial from "../components/Testimonial";
import Partenrs from "../components/Partenrs";
import Products from "../components/Products";
import About from "../components/About";
import Servslide from "../components/Servslide";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <About/>
      <Servslide/>
      <Products/>
      <Testimonial/>
      <Partenrs/>
    </div>
  );
}

export default Home;