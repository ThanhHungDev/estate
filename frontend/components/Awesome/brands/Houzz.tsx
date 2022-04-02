import * as React from "react";

const SvgHouzz = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M275.9 330.7H171.3V480H17V32h109.5v104.5l305.1 85.6V480H275.9z" />
  </svg>
);

SvgHouzz.displayName = "SvgHouzz";
SvgHouzz.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHouzz;
