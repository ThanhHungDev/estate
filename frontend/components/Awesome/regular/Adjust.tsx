import * as React from "react";

const SvgAdjust = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 56c110.549 0 200 89.468 200 200 0 110.549-89.468 200-200 200-110.549 0-200-89.468-200-200 0-110.549 89.468-200 200-200m0-48C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 96c-83.947 0-152 68.053-152 152s68.053 152 152 152V104z" />
  </svg>
);

SvgAdjust.displayName = "SvgAdjust";
SvgAdjust.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAdjust;
