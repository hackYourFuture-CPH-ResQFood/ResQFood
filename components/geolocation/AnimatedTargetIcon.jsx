import React from "react";

const AnimatedTargetIcon = ({ size = 24 }) => {
  return (
    <div className={`target-container`} style={{ width: size, height: size }}>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        className="target-svg"
      >
        <circle
          cx="100"
          cy="100"
          r="15"
          fill="currentColor"
          className="target-center-dot"
        />

        <g
          className="target-crosshairs"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
        >
          <line x1="100" y1="50" x2="100" y2="20" />
          <line x1="100" y1="150" x2="100" y2="180" />
          <line x1="50" y1="100" x2="20" y2="100" />
          <line x1="150" y1="100" x2="180" y2="100" />
        </g>

        <circle
          cx="100"
          cy="100"
          r="60"
          stroke="currentColor"
          strokeWidth="12"
          strokeLinecap="round"
          fill="none"
          pathLength="100"
          strokeDasharray="15 10"
          strokeDashoffset="20"
          className="target-outer-circle"
        />
      </svg>
    </div>
  );
};

export default AnimatedTargetIcon;
