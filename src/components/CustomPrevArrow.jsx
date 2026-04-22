import React from "react";

export default function CustomPrevArrow(props) {
  const { className, style, onClick, isRTL } = props;
  
  // In RTL, the "Prev" button physically resides on the RIGHT side of the screen
  const positionStyle = isRTL 
    ? { right: "-60px", left: "auto" } 
    : { left: "-60px", right: "auto" };

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        ...positionStyle,
        zIndex: 100,
        cursor: "pointer",
        top: "50%",
        transform: "translateY(-50%)",
      }}
      onClick={onClick}
    >

      <div className="hover:scale-110 transition-transform duration-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          fill="none"
        >

          <rect width={50} height={50} fill="#1b6ba9" rx={25} className="shadow-lg" />
          <path
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={2}
            // Flip path if RTL: Prev points RIGHT in Arabic flow
            d={isRTL 
              ? "m19.91 35 8.15-8.15c.96-.96.96-2.54 0-3.5L19.91 15.2" 
              : "m30.09 35-8.15-8.15c-.96-.96-.96-2.54 0-3.5L30.09 15.2"}
          />
          
        </svg>
      </div>
    </div>
  );
}
