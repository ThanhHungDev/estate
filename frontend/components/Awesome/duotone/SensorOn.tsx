import * as React from "react";

const SvgSensorOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path
      d="M384 32H64A64 64 0 000 96v320a64 64 0 0064 64h320a64 64 0 0064-64V96a64 64 0 00-64-64zM96 272a16 16 0 01-32 0V112a16 16 0 0132 0zm64 0a16 16 0 01-32 0V112a16 16 0 0132 0zm64 0a16 16 0 01-32 0V112a16 16 0 0132 0z"
      opacity={0.4}
    />
    <path
      d="M616 232h-64a24 24 0 000 48h64a24 24 0 000-48zm-80-88a23.87 23.87 0 0013.29-4l48-32a24 24 0 10-26.62-39.92l-48 32A24 24 0 00536 144zm13.29 228a24 24 0 10-26.6 40l48 32a24 24 0 1026.62-40zM80 96a16 16 0 00-16 16v160a16 16 0 0032 0V112a16 16 0 00-16-16zm128 0a16 16 0 00-16 16v160a16 16 0 0032 0V112a16 16 0 00-16-16zm-64 0a16 16 0 00-16 16v160a16 16 0 0032 0V112a16 16 0 00-16-16z"
      className="sensor-on_svg__fa-primary"
    />
  </svg>
);

SvgSensorOn.displayName = "SvgSensorOn";
SvgSensorOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensorOn;
