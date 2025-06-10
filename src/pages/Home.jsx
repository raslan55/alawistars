import Testimonial from "../components/Testimonial";
import Partenrs from "../components/Partenrs";
import Products from "../components/Products";
import About from "../components/About";
import Servslide from "../components/Servslide";
import HeroSection from "../components/HeroSection";
import CTA from "../components/CTA";

function Home() {


  return (
    <div>
     <HeroSection/>
      <About/>
      <Servslide/>
      <Products/>
      <Testimonial/>
      <Partenrs/>
        <CTA/>
      
    </div>
  );
}

export default Home;