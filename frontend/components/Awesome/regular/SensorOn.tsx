import * as React from "react";

const SvgSensorOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M616 232h-80a24 24 0 000 48h80a24 24 0 000-48zm-80-88a23.87 23.87 0 0013.29-4l48-32a24 24 0 10-26.62-39.92l-48 32A24 24 0 00536 144zm13.29 228a24 24 0 10-26.6 40l48 32a24 24 0 1026.62-40zM120 128a24 24 0 00-24 24v112a24 24 0 0048 0V152a24 24 0 00-24-24zm80 0a24 24 0 00-24 24v112a24 24 0 0048 0V152a24 24 0 00-24-24zm184-96H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zm16 384a16 16 0 01-16 16H64a16 16 0 01-16-16V96a16 16 0 0116-16h320a16 16 0 0116 16z" />
  </svg>
);

SvgSensorOn.displayName = "SvgSensorOn";
SvgSensorOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensorOn;
