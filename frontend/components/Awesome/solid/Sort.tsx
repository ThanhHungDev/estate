import * as React from "react";

const SvgSort = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z" />
  </svg>
);

SvgSort.displayName = "SvgSort";
SvgSort.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSort;
