import * as React from "react";

const SvgMinus = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
  </svg>
);

SvgMinus.displayName = "SvgMinus";
SvgMinus.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgMinus;
