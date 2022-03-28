import * as React from "react";

const SvgGreaterThanEqual = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M32.84 318.95l14.29 28.62a7.986 7.986 0 0010.73 3.58l289.71-144.92a7.996 7.996 0 004.42-7.15v-12.91c0-3.02-1.7-5.78-4.4-7.14L57.87 32.85c-3.95-1.98-8.76-.37-10.73 3.58l-14.3 28.62a8.006 8.006 0 003.58 10.73L268.87 192 36.42 308.22a8.006 8.006 0 00-3.58 10.73zM376 432H8c-4.42 0-8 3.58-8 8v32c0 4.42 3.58 8 8 8h368c4.42 0 8-3.58 8-8v-32c0-4.42-3.58-8-8-8z" />
  </svg>
);

SvgGreaterThanEqual.displayName = "SvgGreaterThanEqual";
SvgGreaterThanEqual.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGreaterThanEqual;
