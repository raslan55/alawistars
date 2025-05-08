import React from 'react'
import Hero from "../assets/Images/illustration-isometric-concept-maturity-data-accounting-tax-analysis-business-investment-company_18660-1678.avif";
import gazt from "../assets/Images/gazt-vector-logo-seeklogo/gazt-seeklogo.png";
import ZATCA from "../assets/Images/ZATCA-logo-1024x309.jpg";
import VAT from "../assets/Images/VAT.png";
export default function HeroSection() {
  return (
    <div>
     <section className="bg-white py-16 px-6 md:px-16 flex flex-col-reverse md:flex-row items-center justify-between gap-10 hero">
      {/* Left Text Content */}
      <div className="md:w-1/2">
        <h1 className="text-2xl sm:text-3xl font-bold capitalize text-Main-color  mb-4">
        The Smart Solution for Managing Your Business and Tracking Inventory with Ease
        </h1>
        <h3 className="text-[#063232] mb-2 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg font-bold">
        Certified by the Saudi Zakat, Tax and Customs Authority for Electronic Invoicing (Phase I & II) 
         </h3>
         <p className="text-[#6b6b6e] mb-6 leading-relaxed max-w-xl mx-auto lg:mx-0 text-lg ">
         Start your digital transformation today!
         Prepare your team → Test the system → Update your data → Review invoices → Stay up-to-date with official updates.
         </p>
        <div className="flex items-center gap-4 mb-6">
          <img src={ZATCA} alt="ZATCA" className="h-16" />
          <img src={VAT}   alt="VAT Certified" className="h-15" />
          <img src={gazt} alt="GAZT" className="h-15" />
        </div>
        <button className="btn-primary">
          Get Started Now 
        </button>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src={Hero}
          alt="Inventory Management"
          className="max-w-full h-auto"
        />
      </div>
    </section>
    </div>
  )
}
