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
      d="m23 28.795-6.52-6.52c-.77-.77-.77-2.03 0-2.8l6.52-6.52"
    />
  </svg>
    </div>
  );
}
