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
        width="40"
        height="41"
        viewBox="0 0 40 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.874512" width="40" height="40" rx="20" fill="#1b6ba9" />
        <path
          d="M16.91 28.7946L23.43 22.2746C24.2 21.5046 24.2 20.2446 23.43 19.4746L16.91 12.9546"
          stroke="white"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
