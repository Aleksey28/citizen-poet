import * as React from "react";

function LikePetition(props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 3.817a4.491 4.491 0 013.375-1.567A4.085 4.085 0 0116.5 6.375c0 2.833-2.546 5.141-6.403 8.639l-.01.009-1.087.99-1.088-.983-.03-.027C4.038 11.508 1.5 9.203 1.5 6.375A4.085 4.085 0 015.625 2.25c1.305 0 2.557.607 3.375 1.567zm0 10.17l.075-.075C12.645 10.68 15 8.543 15 6.375c0-1.5-1.125-2.625-2.625-2.625-1.155 0-2.28.742-2.67 1.77H8.303C7.905 4.493 6.78 3.75 5.625 3.75 4.125 3.75 3 4.875 3 6.375c0 2.168 2.355 4.305 5.925 7.537l.075.075z"
        fill="#818592"
      />
    </svg>
  );
}

export default LikePetition;
