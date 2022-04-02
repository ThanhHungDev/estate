import * as React from "react";

const SvgSortCircleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M350.88 26.94c-126.5-52.4-271.54 7.67-323.94 134.18s7.67 271.54 134.18 323.94 271.54-7.67 323.94-134.18-7.67-271.54-134.18-323.94zM151.73 192.59L243 101.41a18.31 18.31 0 0126 0l91.18 91.18c11.56 11.56 3.38 31.41-13 31.41H164.75c-16.4 0-24.58-19.85-13.02-31.41zm208.41 126.82L269 410.59a18.31 18.31 0 01-26 0l-91.25-91.18c-11.56-11.56-3.38-31.41 13-31.41h182.36c16.41 0 24.59 19.85 13.03 31.41z"
      opacity={0.4}
    />
    <path
      d="M151.73 192.59L243 101.41a18.31 18.31 0 0126 0l91.18 91.18c11.56 11.56 3.38 31.41-13 31.41H164.76c-16.41 0-24.59-19.85-13.03-31.41z"
      className="sort-circle-up_svg__fa-primary"
    />
  </svg>
);

SvgSortCircleUp.displayName = "SvgSortCircleUp";
SvgSortCircleUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortCircleUp;
