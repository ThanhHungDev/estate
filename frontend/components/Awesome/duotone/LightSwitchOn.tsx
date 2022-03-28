import * as React from "react";

const SvgLightSwitchOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path
      d="M96 256V144a48 48 0 0148-48h96a48 48 0 0148 48v112z"
      opacity={0.4}
    />
    <path
      d="M64 512h256a64 64 0 0064-64V64a64 64 0 00-64-64H64A64 64 0 000 64v384a64 64 0 0064 64zm128-32a16 16 0 1116-16 16 16 0 01-16 16zm0-448a16 16 0 11-16 16 16 16 0 0116-16zM96 256V144a48 48 0 0148-48h96a48 48 0 0148 48v224a48 48 0 01-48 48h-96a48 48 0 01-48-48z"
      className="light-switch-on_svg__fa-primary"
    />
  </svg>
);

SvgLightSwitchOn.displayName = "SvgLightSwitchOn";
SvgLightSwitchOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLightSwitchOn;
