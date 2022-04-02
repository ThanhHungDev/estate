import * as React from "react";

const SvgUserRobot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M176 240h-32v32h32zm0 208a16 16 0 00-16 16v48h32v-48a16 16 0 00-16-16zM0 146v92a17.98 17.98 0 0018 18h30V128H18a17.978 17.978 0 00-18 18zm430-18h-30v128h30a17.977 17.977 0 0018-18v-92a17.976 17.976 0 00-18-18zM208 272h32v-32h-32zm64 0h32v-32h-32zm0 176a16 16 0 1016 16 16 16 0 00-16-16zM224 0a16 16 0 00-16 16v48h32V16a16 16 0 00-16-16z"
      opacity={0.4}
    />
    <path
      d="M116 320h216a36.036 36.036 0 0036-36V109a44.983 44.983 0 00-45-45H125a44.985 44.985 0 00-45 45v175a36.038 36.038 0 0036 36zm188-48h-32v-32h32zm-16-144a32 32 0 11-32 32 31.997 31.997 0 0132-32zm-80 112h32v32h-32zm-32 32h-32v-32h32zm-16-144a32 32 0 11-32 32 31.997 31.997 0 0132-32zm192 224H96a96 96 0 00-96 96v32a32.002 32.002 0 0032 32h96v-64a32 32 0 0132-32h128a32 32 0 0132 32v64h96a32.002 32.002 0 0032-32v-32a96 96 0 00-96-96z"
      className="user-robot_svg__fa-primary"
    />
  </svg>
);

SvgUserRobot.displayName = "SvgUserRobot";
SvgUserRobot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserRobot;
