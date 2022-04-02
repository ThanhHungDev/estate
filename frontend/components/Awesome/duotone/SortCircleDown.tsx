import * as React from "react";

const SvgSortCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M350.88 26.94C224.37-25.46 79.34 34.61 26.94 161.12s7.67 271.54 134.18 323.94 271.54-7.67 323.94-134.18-7.67-271.54-134.18-323.94zm9.39 292.47L269 410.59a18.31 18.31 0 01-26 0l-91.18-91.18c-11.56-11.56-3.38-31.41 13-31.41h182.43c16.4 0 24.58 19.85 13.02 31.41zm-13-95.41H164.89c-16.41 0-24.59-19.85-13-31.41L243 101.41a18.31 18.31 0 0126 0l91.25 91.18c11.58 11.56 3.4 31.41-13 31.41z"
      opacity={0.4}
    />
    <path
      d="M360.27 319.41L269 410.59a18.31 18.31 0 01-26 0l-91.18-91.18c-11.56-11.56-3.38-31.41 13-31.41h182.42c16.41 0 24.59 19.85 13.03 31.41z"
      className="sort-circle-down_svg__fa-primary"
    />
  </svg>
);

SvgSortCircleDown.displayName = "SvgSortCircleDown";
SvgSortCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircleDown;
