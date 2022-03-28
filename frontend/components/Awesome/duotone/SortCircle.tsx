import * as React from "react";

const SvgSortCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M350.88 26.94c-126.5-52.4-271.54 7.67-323.94 134.18s7.67 271.54 134.18 323.94 271.54-7.67 323.94-134.18-7.67-271.54-134.18-323.94zm9.26 292L269 410.09a18.31 18.31 0 01-26 0l-91.25-91.18c-11.56-11.56-3.38-31.41 13-31.41h182.36c16.41 0 24.59 19.85 13.03 31.41zm-13-95.41H164.75c-16.4 0-24.58-19.85-13-31.42l91.25-91.2a18.31 18.31 0 0126 0l91.18 91.17c11.52 11.57 3.34 31.42-13.07 31.42z"
      opacity={0.4}
    />
    <path
      d="M164.75 224h182.36c16.41 0 24.59-19.85 13-31.42L269 101.41a18.31 18.31 0 00-26 0l-91.25 91.17c-11.59 11.57-3.4 31.42 13 31.42zm182.36 64H164.75c-16.4 0-24.59 19.85-13 31.41L243 410.59a18.31 18.31 0 0026 0l91.18-91.18c11.52-11.56 3.34-31.41-13.07-31.41z"
      className="sort-circle_svg__fa-primary"
    />
  </svg>
);

SvgSortCircle.displayName = "SvgSortCircle";
SvgSortCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircle;
