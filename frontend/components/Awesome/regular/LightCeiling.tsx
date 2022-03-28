import * as React from "react";

const SvgLightCeiling = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 512a64 64 0 0064-64H192a64 64 0 0064 64zm24-350.9V0h-48v161.1C112.78 172 17 263.19.32 379.62-2.43 398.81 13 416 32.56 416h446.88c19.56 0 35-17.19 32.24-36.38C495 263.19 399.22 172 280 161.1zM51.35 368c22.13-92.42 107-160 204.65-160s182.52 67.58 204.65 160z" />
  </svg>
);

SvgLightCeiling.displayName = "SvgLightCeiling";
SvgLightCeiling.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightCeiling;
