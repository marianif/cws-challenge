import * as React from "react";

const PickUpBadge = ({ circle, path }) => (
  <svg width={32} height={32} xmlns="http://www.w3.org/2000/svg">
    <title>{"pickUpBadgeBlank"}</title>
    <g fill="none" fillRule="evenodd">
      <circle fill={circle} fillRule="nonzero" cx={16} cy={16} r={16} />
      <path d="M4 4h24v24H4z" />
      <path
        d="M25 17v6.083c0 .507-.41.917-.917.917H8.07A1.07 1.07 0 0 1 7 22.93V17H6v-2l1-4h18l1 4v2h-1ZM7.23 8h17.54a.23.23 0 0 1 .23.23V10H7V8.23A.23.23 0 0 1 7.23 8Zm2.02 10a.25.25 0 0 0-.25.25v3.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25v-3.5a.25.25 0 0 0-.25-.25h-6.5Zm8.98 0a.23.23 0 0 0-.23.23V24h4v-5.77a.23.23 0 0 0-.23-.23h-3.54Z"
        fill={path}
        fillRule="nonzero"
      />
    </g>
  </svg>
);

export default PickUpBadge;
