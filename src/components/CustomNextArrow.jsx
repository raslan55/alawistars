import React from "react";
import {  FaArrowRight , } from "react-icons/fa"; // Import your desired arrow icons

export default function CustomNextArrow(props) {
const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // Positioning for the NEXT arrow (should be on the RIGHT)
      style={{
        ...style,
        display: "block",
        right: "-30px", // Adjust this value to move it further right or closer
        left: "auto", // Important: unset left if it was previously set, or let react-slick handle it.
        zIndex: 100,
        cursor: "pointer",
        // Center vertically (recommended)
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={41}
    fill="none"
    
  >
    <rect width={40} height={40} y={0.875} fill="#1b6ba9" rx={20} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="m16.91 28.795 6.52-6.52c.77-.77.77-2.03 0-2.8l-6.52-6.52"
    />
  </svg>
    </div>
  );
}
