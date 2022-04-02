import * as React from "react";

const SvgLightSwitchOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M320 0H64A64 64 0 000 64v384a64 64 0 0064 64h256a64 64 0 0064-64V64a64 64 0 00-64-64zM192 32a16 16 0 11-16 16 16 16 0 0116-16zm0 448a16 16 0 1116-16 16 16 0 01-16 16zm96-240v128a48 48 0 01-48 48h-96a48 48 0 01-48-48V144a48 48 0 0148-48h96a48 48 0 0148 48zm-64-112h-64a32 32 0 00-32 32v96h128v-96a32 32 0 00-32-32z" />
  </svg>
);

SvgLightSwitchOn.displayName = "SvgLightSwitchOn";
SvgLightSwitchOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightSwitchOn;
