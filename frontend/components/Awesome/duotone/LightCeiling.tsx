import * as React from "react";

const SvgLightCeiling = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M224.24 162.07V0h64.07v162.05a258.93 258.93 0 00-32-2.22 257.16 257.16 0 00-32.07 2.24zm32 349.93a64 64 0 0064.07-64h-128.1a64 64 0 0064.06 64z"
      opacity={0.4}
    />
    <path
      d="M256.28 159.83c-127.93 0-238 94.42-255.95 219.62A32 32 0 0032 416l448-.17a32 32 0 0031.72-36.39c-17.4-125.2-127.2-219.61-255.44-219.61z"
      className="light-ceiling_svg__fa-primary"
    />
  </svg>
);

SvgLightCeiling.displayName = "SvgLightCeiling";
SvgLightCeiling.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightCeiling;
