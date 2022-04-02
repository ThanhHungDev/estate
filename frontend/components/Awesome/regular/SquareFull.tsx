import * as React from "react";

const SvgSquareFull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M0 0v512h512V0H0zm464 464H48V48h416v416z" />
  </svg>
);

SvgSquareFull.displayName = "SvgSquareFull";
SvgSquareFull.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSquareFull;
