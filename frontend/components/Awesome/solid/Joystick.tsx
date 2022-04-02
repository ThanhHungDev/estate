import * as React from "react";

const SvgJoystick = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 352H128v-16a16 16 0 00-16-16H80a16 16 0 00-16 16v16H32a32 32 0 00-32 32v96a32 32 0 0032 32h384a32 32 0 0032-32v-96a32 32 0 00-32-32zM192 218.8V320h64V218.8c46.15-13.8 80-56.14 80-106.8a112 112 0 00-224 0c0 50.66 33.85 93 80 106.8zM200 48a24 24 0 11-24 24 24 24 0 0124-24z" />
  </svg>
);

SvgJoystick.displayName = "SvgJoystick";
SvgJoystick.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgJoystick;
