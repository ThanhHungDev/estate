import * as React from "react";

const SvgSensorSmoke = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M572.67 321.28a47.81 47.81 0 00-82.4-46.63 79.94 79.94 0 00-152.63 45.52c-.56 0-1.08-.17-1.64-.17a80 80 0 000 160h224a79.85 79.85 0 0012.67-158.72zm-268.08-28.8A112.15 112.15 0 01416 192c11.14 0 21.74 2.15 32 5.22V96a64 64 0 00-64-64H64A64 64 0 000 96v320a64 64 0 0064 64h193.86a111.81 111.81 0 0146.73-187.52zM96 272a16 16 0 01-32 0V112a16 16 0 0132 0zm64 0a16 16 0 01-32 0V112a16 16 0 0132 0zm48 16a16 16 0 01-16-16V112a16 16 0 0132 0v160a16 16 0 01-16 16z" />
  </svg>
);

SvgSensorSmoke.displayName = "SvgSensorSmoke";
SvgSensorSmoke.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensorSmoke;
