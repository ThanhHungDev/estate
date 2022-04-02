import * as React from "react";

const SvgBullseyePointer = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path d="M241.5 240.7L20.83 303.41c-15.63 4.44-17.46 25.86-2.82 32.89l55.27 26.54-60.59 60.59c-12.5 12.5-12.5 32.76 0 45.25l22.62 22.62c6.25 6.25 14.44 9.37 22.63 9.37s16.38-3.12 22.63-9.37l60.59-60.59 26.54 55.27c3.25 6.76 9.56 10.01 15.86 10.01 7.34 0 14.64-4.41 17.04-12.83l62.72-220.67c3.77-13.3-8.53-25.57-21.82-21.79zm-61.35 197.32l-29.7-61.85-92.51 92.51-22.62-22.62 92.51-92.51-61.84-29.71 159.5-45.33-45.34 159.51zM328 256c0-44.11-35.89-80-80-80-33.74 0-62.53 21.07-74.26 50.69C228.07 211.24 236.67 208 248 208c26.47 0 48 21.53 48 48 0 11.26-3.1 19.44-18.69 74.26C306.93 318.53 328 289.74 328 256zm-76.08 163.61C340.71 417.47 412 345.29 412 256c0-90.65-73.36-164-164-164-89.31 0-161.47 71.3-163.61 160.08l32.95-9.36C124.12 176.23 179.76 124 248 124c72.79 0 132 59.21 132 132 0 68.23-52.24 123.88-118.71 130.66l-9.37 32.95zM248 8C111.03 8 0 119.03 0 256c0 7.3.47 14.49 1.09 21.63 3.46-1.97 7-3.87 10.99-5l20.47-5.82c-.18-3.6-.55-7.16-.55-10.81 0-119.1 96.9-216 216-216s216 96.9 216 216-96.9 216-216 216c-3.65 0-7.21-.37-10.81-.55l-5.82 20.46c-1.14 4.02-3.15 7.5-5.14 10.98 7.19.63 14.42 1.1 21.77 1.1 136.97 0 248-111.03 248-248S384.97 8 248 8z" />
  </svg>
);

SvgBullseyePointer.displayName = "SvgBullseyePointer";
SvgBullseyePointer.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBullseyePointer;
