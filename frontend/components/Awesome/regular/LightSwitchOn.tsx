import * as React from "react";

const SvgLightSwitchOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64A64 64 0 000 64v384a64 64 0 0064 64h256a64 64 0 0064-64V64a64 64 0 00-64-64zm16 448a16 16 0 01-16 16H214.4a23.66 23.66 0 00-44.77 0H64a16 16 0 01-16-16V64a16 16 0 0116-16h105.63a23.66 23.66 0 0044.77 0H320a16 16 0 0116 16zM256 96H128a32 32 0 00-32 32v256a32 32 0 0032 32h128a32 32 0 0032-32V128a32 32 0 00-32-32zm-16 272h-96v-96h96z" />
  </svg>
);

SvgLightSwitchOn.displayName = "SvgLightSwitchOn";
SvgLightSwitchOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightSwitchOn;
