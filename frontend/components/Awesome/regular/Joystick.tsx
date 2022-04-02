import * as React from "react";

const SvgJoystick = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 352H248V221.28a112 112 0 10-48 0V352h-72v-16a16 16 0 00-16-16H80a16 16 0 00-16 16v16H32a32 32 0 00-32 32v96a32 32 0 0032 32h384a32 32 0 0032-32v-96a32 32 0 00-32-32zM160 112a64 64 0 1164 64 64.07 64.07 0 01-64-64zm240 352H48v-64h352z" />
  </svg>
);

SvgJoystick.displayName = "SvgJoystick";
SvgJoystick.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgJoystick;
