import type { SVGProps } from "react";

const Bash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <rect
      width="96"
      height="72"
      x="16"
      y="28"
      rx="8"
      fill="#121011"
    />
    <path
      fill="#4EAA25"
      d="M35 52l18 12-18 12v-8l10-4-10-4V52Z"
    />
    <rect
      width="20"
      height="5"
      x="61"
      y="72"
      fill="#4EAA25"
    />
  </svg>
);

export { Bash };