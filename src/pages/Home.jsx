import { useTranslation } from "react-i18next";
import Testimonial from "../components/Testimonial";
import Partenrs from "../components/Partenrs";

function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome")}</h1>
      <Testimonial/>
      <Partenrs/>
    </div>
  );
}

export default Home;