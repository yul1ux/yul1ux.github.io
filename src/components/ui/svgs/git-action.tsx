import type { SVGProps } from "react";

const GitHubActions = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 128 128"
    {...props}
  >
    <circle
      cx="64"
      cy="64"
      r="52"
      fill="#2088FF"
    />

    <path
      fill="white"
      d="M64 30c-19 0-34 15-34 34 0 15 10 28 24 33v-9c-6-2-10-6-10-13 0-5 3-9 8-11-2-2-3-5-3-8 0-8 7-14 15-14s15 6 15 14c0 3-1 6-3 8 5 2 8 6 8 11 0 7-4 11-10 13v9c14-5 24-18 24-33 0-19-15-34-34-34Z"
    />

    <path
      fill="#2088FF"
      d="M58 54h12v20H58z"
    />
  </svg>
);

export { GitHubActions };