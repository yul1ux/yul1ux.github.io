import type { SVGProps } from "react";

const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#F05032"
      d="M121 58L70 7a10 10 0 0 0-14 0L45 18l13 13a12 12 0 0 1 15 15l13 13a12 12 0 0 1 15 15l17-17a10 10 0 0 0 0-14Z"
    />
    <path
      fill="#F05032"
      d="M7 70l51 51a10 10 0 0 0 14 0l12-12-13-13a12 12 0 0 1-15-15L43 68a12 12 0 0 1-15-15L11 37a10 10 0 0 0-4 33Z"
    />
    <circle cx="64" cy="64" r="8" fill="white" />
  </svg>
);

export { Git };