import React, { SVGProps } from "react";

const ArrowLeft = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      //   width="36"
      //   height="28"
      {...props}
      viewBox="0 0 36 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35.9156 14.6249L3.0216 14.6241M3.0216 14.6241L16.4536 26.8588M3.0216 14.6241L16.4536 1.19208"
        stroke="#1DDD42"
        strokeWidth="3"
      />
    </svg>
  );
};

export default ArrowLeft;
