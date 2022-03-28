import * as React from "react";

const SvgSpaceStationMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm-80 104a32 32 0 11-32 32 32.037 32.037 0 0132-32zm-79.127 23.342A78.621 78.621 0 0096 144a80 80 0 1097.629-77.908A198.974 198.974 0 01256 56c110.281 0 200 89.719 200 200a199.64 199.64 0 01-2.777 31.8A504.546 504.546 0 01256 328a502.908 502.908 0 01-197.28-40.563 195.37 195.37 0 0138.153-152.095zM256 456c-77.771 0-145.148-44.715-178.215-109.697A551.902 551.902 0 00256 376a556.101 556.101 0 00178.086-29.434C400.973 411.408 333.666 456 256 456z" />
  </svg>
);

SvgSpaceStationMoon.displayName = "SvgSpaceStationMoon";
SvgSpaceStationMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpaceStationMoon;
