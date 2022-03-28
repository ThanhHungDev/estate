import * as React from "react";

const SvgSensor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M384 32H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zm32 384a32 32 0 01-32 32H64a32 32 0 01-32-32V96a32 32 0 0132-32h320a32 32 0 0132 32zM112 128a16 16 0 00-16 16v128a16 16 0 0032 0V144a16 16 0 00-16-16zm64 0a16 16 0 00-16 16v128a16 16 0 0032 0V144a16 16 0 00-16-16zm64 0a16 16 0 00-16 16v128a16 16 0 0032 0V144a16 16 0 00-16-16z" />
  </svg>
);

SvgSensor.displayName = "SvgSensor";
SvgSensor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensor;
