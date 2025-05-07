import React from "react";
import Marquee from "react-fast-marquee";
import { FaStarOfLife } from "react-icons/fa6";

export default function Servslide() {
  return (
    <div>
      <Marquee className="shadow-2xl ">
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>SERVICES WE PROVIDE</h1>
        </div>
        <FaStarOfLife />
        <div class="content-slider-content">
          <h1> Cloud-Based Solutions</h1>
        </div>
        <FaStarOfLife />
        <div class="content-slider-content">
          <h1> Desktop Applications </h1>
        </div>
        <FaStarOfLife />
        <div class="content-slider-content">
          <h1>(ERP) Systems </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar For Accounting & Inventory </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar General Accounting </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar For Inventory </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar For Medical System</h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar For Furnished Flats System</h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar For Property Management </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar For Car Maintenance </h1>
        </div>
        <FaStarOfLife />

        <div class="content-slider-content">
          <h1>Sinmar for Communication System</h1>
        </div>
      </Marquee>
    </div>
  );
}
