import * as React from "react";

const SvgSortCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M350.88 26.94A247.21 247.21 0 00256.1 8C158.8 8 66.49 65.64 26.94 161.12c-52.4 126.51 7.67 271.54 134.18 323.94A247.21 247.21 0 00255.9 504c97.3 0 189.61-57.64 229.16-153.12 52.4-126.51-7.67-271.54-134.18-323.94zm89.84 305.57a199.74 199.74 0 01-261.23 108.21C77.63 398.53 29.1 281.34 71.28 179.49A199.74 199.74 0 01332.51 71.28c101.85 42.19 150.4 159.38 108.21 261.23zM347.25 288H164.89c-16.4 0-24.59 19.85-13 31.41L243 410.59a18.31 18.31 0 0026 0l91.25-91.18c11.59-11.56 3.4-31.41-13-31.41zM269 101.41a18.31 18.31 0 00-26 0l-91.18 91.18c-11.56 11.56-3.38 31.41 13 31.41h182.43c16.4 0 24.59-19.85 13-31.41zM197.7 192l58.3-58.33L314.41 192z" />
  </svg>
);

SvgSortCircleDown.displayName = "SvgSortCircleDown";
SvgSortCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircleDown;
