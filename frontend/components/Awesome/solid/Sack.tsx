import * as React from "react";

const SvgSack = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M192 96h128l47.4-71.12A16 16 0 00354.09 0H157.94a16 16 0 00-13.31 24.88zm128 32H192C-10.38 243.4.09 396.64.09 416c0 53 49.11 96 109.68 96h292.48c60.58 0 109.68-43 109.68-96 0-19 9.35-173.24-191.93-288z" />
  </svg>
);

SvgSack.displayName = "SvgSack";
SvgSack.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSack;
