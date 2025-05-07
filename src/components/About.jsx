import React from "react";
import AboutImage from "../assets/Images/web-design-website-coding-concept-2025-02-11-01-35-27-utc.jpg";
import { FaRegFileCode } from "react-icons/fa";
import { MdOutlineLaptopChromebook } from "react-icons/md";

export default function About() {
  return (
    <section className="py-12  relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20 px-4">
          {/* Images */}
          <div className=" w-full lg:w-1/2">
            <img
              src={AboutImage}
              alt="Team working"
              className="w-full h-auto object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm font-bold text-amber-400 uppercase mb-2">
              About Us
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#063232] mb-4">
              We Help Drive the IT Industry Forward Since 1994
            </h2>
            <div className="w-24 h-1 bg-amber-400 mb-4 rounded"></div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Alawi Stars for Computer Systems provides advanced, secure
              solutions for enterprises across Saudi Arabia. With a proven track
              record since 1994, our software platforms are tailored to meet
              modern business needs with bilingual support and seamless
              scalability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <div className=" bg-amber-500 py-3 px-3 rounded-full">
                  <FaRegFileCode className="text-4xl text-[#fff]" />
                </div>

                <div>
                  <h4 className="font-bold text-gray-800">
                    Development of Business Systems
                  </h4>
                  <p className="text-sm text-gray-600">
                    Software solutions serving various business sectors and
                    industries.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className=" bg-amber-500 py-3 px-3 rounded-full">
                  <MdOutlineLaptopChromebook className="text-4xl text-[#fff]" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">(ERP) Systems</h4>
                  <p className="text-sm text-gray-600">
                    Comprehensive ERP solutions covering accounting, HR,
                    inventory, sales, and more
                  </p>
                </div>
              </div>
            </div>

            <button className=" mt-4 btn-primary">Get Started Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
