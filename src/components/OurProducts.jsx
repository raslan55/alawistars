import React from "react";
import ProductsSlider from "./ProductsSlider";
import CTA from "./CTA";
import Testimonial from "./Testimonial";

export default function OurProducts() {
  return (
    <>
      <ProductsSlider />
      <CTA/>
      <Testimonial/>
       <hr className="h-10 border-0"/>

    </>
  );
}
