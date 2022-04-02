import * as React from "react";

const SvgLightCeiling = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M288 162.39V0h-64v162.39C108.51 176.59 16.56 266 .31 379.85-2.41 399 13.07 416 32.54 416h446.92c19.47 0 34.95-17 32.23-36.15C495.44 266 403.49 176.59 288 162.39zM256 512a64 64 0 0064-64H192a64 64 0 0064 64z" />
  </svg>
);

SvgLightCeiling.displayName = "SvgLightCeiling";
SvgLightCeiling.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightCeiling;
