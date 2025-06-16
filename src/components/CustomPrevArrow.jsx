import React from "react";

export default function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      // Positioning for the PREV arrow (should be on the LEFT)
      style={{
        ...style,
        display: "block",
        left: "-30px", // Adjust this value to move it further left or closer
        right: "auto", // Important: unset right
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
          d="M23 28.7946L16.48 22.2746C15.71 21.5046 15.71 20.2446 16.48 19.4746L23 12.9546"
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
