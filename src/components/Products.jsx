import React from "react";
import OurProduct from "../assets/Images/18949370-dc8f-4480-a629-d6717ee5e7ce_large.webp";
import StatsSection from "./StatsSection";

export default function Products() {
  return (
    <section className="py-12  relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 px-4">
  {/* Left: Image */}
  <div className="w-full lg:w-1/2">
    <img
      src={OurProduct}
      alt="Our Product"
      className="rounded-xl w-full h-auto object-cover shadow-xl"
    />
  </div>

  {/* Right: Content */}
  <div className="w-full lg:w-1/2 relative text-center lg:text-left">
    <h2 className="text-sm font-bold text-amber-400 uppercase mb-2">
      Our Product
    </h2>

    <h3 className="text-3xl md:text-4xl font-bold text-[#063232] mb-4">
      The Role of Al-Alawi Star for Computer Systems
    </h3>

    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Supporting the work and production environment and enhancing the value of
      modern technologies, software, and systems that serve companies,
      institutions, entrepreneurs, and the economy in Saudi Arabia and our
      customers abroad by providing innovative, high-quality technical
      solutions at competitive prices.
    </p>

    {/* Stats Section */}
    <div className="mb-6">
      <StatsSection />
    </div>

    {/* CTA Button */}
    <div className="flex justify-center lg:justify-start">
      <button className=" btn-primary">
        Explore More Products
      </button>
    </div>
  </div>
</div>

      </div>
    </section>
  );
}
