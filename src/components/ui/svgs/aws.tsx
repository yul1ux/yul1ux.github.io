import type { SVGProps } from "react";

const AWS = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#FF9900"
      d="M40 78c10 7 31 9 50-2 3-2 7 2 3 5-18 14-45 16-61 5-4-3 1-11 8-8Z"
    />
    <path
      fill="#232F3E"
      d="M86 48c-7-8-19-11-30-8-8 2-15 8-18 15-2 4 2 7 6 5 10-6 22-7 31-3 5 2 9 6 12 10 2 3 7 1 6-3-1-7-3-12-7-16Z"
    />
    <path
      fill="#232F3E"
      d="M55 34c-1-4-4-6-8-6H37v8h8c1 0 2 1 2 2v35h8V34Z"
    />
    <text
      x="45"
      y="70"
      fontSize="24"
      fontWeight="700"
      fill="#232F3E"
    >
      aws
    </text>
  </svg>
);

export { AWS };