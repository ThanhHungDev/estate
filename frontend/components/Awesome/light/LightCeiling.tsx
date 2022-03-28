import * as React from "react";

const SvgLightCeiling = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M272 192.74V0h-32v192.74C117.11 200.21 17.4 292.62.32 411.64-2.43 430.83 13 448 32.56 448h145.06a80 80 0 00156.76 0h145.06c19.56 0 35-17.18 32.24-36.37C494.6 292.62 394.89 200.21 272 192.74zM256 480a48 48 0 01-45.24-32h90.48A48 48 0 01256 480zM32 416.18C47.72 306.62 144 224 256 224s208.28 82.61 223.44 192z" />
  </svg>
);

SvgLightCeiling.displayName = "SvgLightCeiling";
SvgLightCeiling.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightCeiling;
