import * as React from "react";

const SvgSquareFull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M480 32v448H32V32h448m32-32H0v512h512V0z" />
  </svg>
);

SvgSquareFull.displayName = "SvgSquareFull";
SvgSquareFull.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSquareFull;
