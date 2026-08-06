import type { SVGProps } from "react";

const Terraform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#844FBA"
      d="M12 22l35 20v40L12 62V22Z"
    />
    <path
      fill="#7B42BC"
      d="M52 45l34 20v40L52 85V45Z"
    />
    <path
      fill="#5C4EE5"
      d="M52 5l34 20v40L52 45V5Z"
    />
    <path
      fill="#4040A0"
      d="M92 65l24 14v28l-24-14V65Z"
    />
  </svg>
);

export { Terraform };