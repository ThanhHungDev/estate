import * as React from "react";

const SvgSensorSmoke = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M572.67 321.28a47.81 47.81 0 00-82.4-46.63 79.94 79.94 0 00-152.63 45.52c-.56 0-1.08-.17-1.64-.17a80 80 0 000 160h224a79.85 79.85 0 0012.67-158.72zM176 152v112a24 24 0 0048 0V152a24 24 0 00-48 0zM64 432a16 16 0 01-16-16V96a16 16 0 0116-16h320a16 16 0 0116 16v97.52a111 111 0 0116-1.52c11.14 0 21.74 2.15 32 5.22V96a64 64 0 00-64-64H64A64 64 0 000 96v320a64 64 0 0064 64h193.86a111.79 111.79 0 01-28.64-48zm32-280v112a24 24 0 0048 0V152a24 24 0 00-48 0z" />
  </svg>
);

SvgSensorSmoke.displayName = "SvgSensorSmoke";
SvgSensorSmoke.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSensorSmoke;
