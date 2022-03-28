import * as React from "react";

const SvgSensor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M384 32H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zM96 272a16 16 0 01-32 0V112a16 16 0 0132 0zm64 0a16 16 0 01-32 0V112a16 16 0 0132 0zm64 0a16 16 0 01-32 0V112a16 16 0 0132 0z"
      opacity={0.4}
    />
    <path
      d="M80 96a16 16 0 00-16 16v160a16 16 0 0032 0V112a16 16 0 00-16-16zm64 0a16 16 0 00-16 16v160a16 16 0 0032 0V112a16 16 0 00-16-16zm64 0a16 16 0 00-16 16v160a16 16 0 0032 0V112a16 16 0 00-16-16z"
      className="sensor_svg__fa-primary"
    />
  </svg>
);

SvgSensor.displayName = "SvgSensor";
SvgSensor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensor;
