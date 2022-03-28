import * as React from "react";

const SvgLightSwitch = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M256 96H128a32 32 0 00-32 32v256a32 32 0 0032 32h128a32 32 0 0032-32V128a32 32 0 00-32-32zm0 288H128V272h128zm0-144H128V128h128zM320 0H64A64 64 0 000 64v384a64 64 0 0064 64h256a64 64 0 0064-64V64a64 64 0 00-64-64zm32 448a32 32 0 01-32 32H214.38a23.7 23.7 0 001.61-8 24 24 0 00-48 0 23.47 23.47 0 001.62 8H64a32 32 0 01-32-32V64a32 32 0 0132-32h105.61a23.47 23.47 0 00-1.61 8 24 24 0 0048 0 23.7 23.7 0 00-1.61-8H320a32 32 0 0132 32z" />
  </svg>
);

SvgLightSwitch.displayName = "SvgLightSwitch";
SvgLightSwitch.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightSwitch;
