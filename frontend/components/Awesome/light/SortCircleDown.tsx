import * as React from "react";

const SvgSortCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M350.88 26.94A247.21 247.21 0 00256.1 8C158.8 8 66.49 65.64 26.94 161.12c-52.4 126.51 7.67 271.54 134.18 323.94A247.21 247.21 0 00255.9 504c97.3 0 189.61-57.64 229.16-153.12 52.4-126.51-7.67-271.54-134.18-323.94zm104.62 311.7A215.73 215.73 0 01173.37 455.5C63.36 409.93 10.94 283.37 56.5 173.36A215.73 215.73 0 01338.63 56.5c110.01 45.57 162.43 172.13 116.87 282.14zM347.25 288H164.89c-16.4 0-24.59 19.85-13 31.41L243 410.59a18.36 18.36 0 0013 5.41 18.15 18.15 0 0013-5.41l91.25-91.18c11.59-11.56 3.4-31.41-13-31.41zM256 378.33L197.7 320h116.71zm11.27-277.64a16 16 0 00-22.62 0l-96 96a16 16 0 0022.62 22.62L256 134.63l84.69 84.68a16 16 0 0022.62-22.62z" />
  </svg>
);

SvgSortCircleDown.displayName = "SvgSortCircleDown";
SvgSortCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircleDown;