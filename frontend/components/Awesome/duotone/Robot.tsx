import * as React from "react";

const SvgRobot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M288 416h64v-32h-64zm-96 0h64v-32h-64zM0 256v128a31.962 31.962 0 0032 32h32V224H32a31.962 31.962 0 00-32 32zm384 160h64v-32h-64zm224-192h-32v192h32a31.962 31.962 0 0032-32V256a31.962 31.962 0 00-32-32zM320 0a32 32 0 00-32 32v64h64V32a32 32 0 00-32-32z"
      opacity={0.4}
    />
    <path
      d="M464 96H176a79.974 79.974 0 00-80 80v272a64.063 64.063 0 0064 64h320a64.063 64.063 0 0064-64V176a79.974 79.974 0 00-80-80zM256 416h-64v-32h64zm-32-120a40 40 0 1140-40 39.997 39.997 0 01-40 40zm128 120h-64v-32h64zm96 0h-64v-32h64zm-32-120a40 40 0 1140-40 39.997 39.997 0 01-40 40z"
      className="robot_svg__fa-primary"
    />
  </svg>
);

SvgRobot.displayName = "SvgRobot";
SvgRobot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRobot;
