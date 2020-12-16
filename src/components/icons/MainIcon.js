import React from 'react';

function MainIcon(props) {
  return (
    <svg
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        x={1}
        y={1}
        width={10}
        height={10}
        rx={0.1}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={1}
        y={18}
        width={10}
        height={10}
        rx={0.1}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={18}
        y={1}
        width={10}
        height={10}
        rx={0.1}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x={18}
        y={18}
        width={10}
        height={10}
        rx={0.1}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default MainIcon
