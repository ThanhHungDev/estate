import * as React from "react";

const SvgRobot = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M192 416h64v-32h-64zm384-192h-32v-32a96 96 0 00-96-96H336V16a16 16 0 00-32 0v80H192a96 96 0 00-96 96v32H64a32 32 0 00-32 32v128a32 32 0 0032 32h32a96 96 0 0096 96h256a96 96 0 0096-96h32a32 32 0 0032-32V256a32 32 0 00-32-32zM96 384H64V256h32zm416 32a64.19 64.19 0 01-64 64H192a64.19 64.19 0 01-64-64V192a64 64 0 0164-64h256a64 64 0 0164 64zm64-32h-32V256h32zM416 192a64 64 0 1064 64 64.073 64.073 0 00-64-64zm0 96a32 32 0 1132-32 31.972 31.972 0 01-32 32zm-32 128h64v-32h-64zm-96 0h64v-32h-64zm-64-224a64 64 0 1064 64 64.073 64.073 0 00-64-64zm0 96a32 32 0 1132-32 31.972 31.972 0 01-32 32z" />
  </svg>
);

SvgRobot.displayName = "SvgRobot";
SvgRobot.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgRobot;
