import * as React from "react";

const SvgBlackTie = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M0 32v448h448V32H0zm316.5 325.2L224 445.9l-92.5-88.7 64.5-184-64.5-86.6h184.9L252 173.2l64.5 184z" />
  </svg>
);

SvgBlackTie.displayName = "SvgBlackTie";
SvgBlackTie.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBlackTie;
