import * as React from "react";

const SvgWalker = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M400.85 386.53V80a80 80 0 00-80-80h-134a79.92 79.92 0 00-77.63 60.61L.24 498.18a8 8 0 005.83 9.7l15.53 3.88a8 8 0 009.7-5.82L85.57 288h283.28v98a64.18 64.18 0 1032 .53zM140.26 68.36A47.92 47.92 0 01186.82 32h134a48 48 0 0148 48v112H109.47zM93.53 256l8-32h267.32v32zM384 480a32 32 0 1132-32 32 32 0 01-32 32z" />
  </svg>
);

SvgWalker.displayName = "SvgWalker";
SvgWalker.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWalker;
