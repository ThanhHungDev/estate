import * as React from "react";

const SvgMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M448 240v32a32 32 0 01-32 32H32a32 32 0 01-32-32v-32a32 32 0 0132-32h384a32 32 0 0132 32z"
      opacity={0.4}
    />
  </svg>
);

SvgMinus.displayName = "SvgMinus";
SvgMinus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMinus;
