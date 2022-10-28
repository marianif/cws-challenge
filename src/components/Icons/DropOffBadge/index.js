import * as React from "react";

const DropOffBadge = ({ circle, path }) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
    <title>{"dropOffBadgeBlank"}</title>
    <g fillRule="nonzero" fill="none">
      <circle fill={circle} cx={16} cy={16} r={16} />
      <path
        d="M10 7a1 1 0 0 1 1 1v16a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Zm2 1h11.117a.5.5 0 0 1 .429.757l-2.237 3.729a1 1 0 0 0 0 1.029l2.237 3.728a.5.5 0 0 1-.43.757H12V8Z"
        fill={path}
      />
    </g>
  </svg>
);

export default DropOffBadge;
