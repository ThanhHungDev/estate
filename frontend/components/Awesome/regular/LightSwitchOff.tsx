import * as React from "react";

const SvgLightSwitchOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64A64 64 0 000 64v384a64 64 0 0064 64h256a64 64 0 0064-64V64a64 64 0 00-64-64zm16 448a16 16 0 01-16 16H214.38a23.65 23.65 0 00-44.76 0H64a16 16 0 01-16-16V64a16 16 0 0116-16h105.62a23.65 23.65 0 0044.76 0H320a16 16 0 0116 16zM256 96H128a32 32 0 00-32 32v256a32 32 0 0032 32h128a32 32 0 0032-32V128a32 32 0 00-32-32zm-16 160h-96V144h96z" />
  </svg>
);

SvgLightSwitchOff.displayName = "SvgLightSwitchOff";
SvgLightSwitchOff.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightSwitchOff;
