import * as React from "react";

const SvgJoystick = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M200 64a24 24 0 1024 24 24 24 0 00-24-24zm216 288H240V222.39c54.21-7.83 96-54 96-110.39a112 112 0 00-224 0c0 56.38 41.79 102.56 96 110.39V352h-80v-16a16 16 0 00-16-16H80a16 16 0 00-16 16v16H32a32 32 0 00-32 32v96a32 32 0 0032 32h384a32 32 0 0032-32v-96a32 32 0 00-32-32zM144 112a80 80 0 1180 80 80.09 80.09 0 01-80-80zm272 368H32v-96h384z" />
  </svg>
);

SvgJoystick.displayName = "SvgJoystick";
SvgJoystick.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgJoystick;
