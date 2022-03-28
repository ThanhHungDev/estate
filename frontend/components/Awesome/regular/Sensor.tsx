import * as React from "react";

const SvgSensor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M200 128a24 24 0 00-24 24v112a24 24 0 0048 0V152a24 24 0 00-24-24zm-80 0a24 24 0 00-24 24v112a24 24 0 0048 0V152a24 24 0 00-24-24zm264-96H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zm16 384a16 16 0 01-16 16H64a16 16 0 01-16-16V96a16 16 0 0116-16h320a16 16 0 0116 16z" />
  </svg>
);

SvgSensor.displayName = "SvgSensor";
SvgSensor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensor;
