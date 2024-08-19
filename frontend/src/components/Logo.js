import React from "react";

const Logo = ({ w, h }) => {
  return (
    <svg
      width="100"
      height="300"
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g fill="#000000">
        <path d="M50 50 L150 50 L100 150 Z" />

        <circle cx="200" cy="100" r="50" />

        <rect x="300" y="50" width="50" height="100" />

        <path
          d="M30 170 C100 190, 300 190, 370 170"
          stroke="#000000"
          strokeWidth="10"
          fill="none"
        />
        <path
          d="M360 175 L370 170 L360 165"
          stroke="#000000"
          stroke-width="10"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default Logo;
