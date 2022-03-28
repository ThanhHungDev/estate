import * as React from "react";

const SvgSquareFull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M512 512H0V0h512v512z" />
  </svg>
);

SvgSquareFull.displayName = "SvgSquareFull";
SvgSquareFull.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSquareFull;
