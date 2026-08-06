import type { SVGProps } from "react";

const Linux = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#000"
      d="M64 12c-18 0-25 15-25 33 0 8-7 14-10 23-5 15 9 30 35 30s40-15 35-30c-3-9-10-15-10-23 0-18-7-33-25-33Z"
    />
    <ellipse
      cx="52"
      cy="48"
      rx="6"
      ry="8"
      fill="white"
    />
    <ellipse
      cx="76"
      cy="48"
      rx="6"
      ry="8"
      fill="white"
    />
    <circle
      cx="52"
      cy="50"
      r="3"
      fill="black"
    />
    <circle
      cx="76"
      cy="50"
      r="3"
      fill="black"
    />
    <path
      fill="#FFCC00"
      d="M45 70c12 8 26 8 38 0-5 14-33 14-38 0Z"
    />
  </svg>
);

export { Linux };