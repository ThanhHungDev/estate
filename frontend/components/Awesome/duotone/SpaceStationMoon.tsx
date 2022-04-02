import * as React from "react";

const SvgSpaceStationMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M16.71 320.264C45.06 426.02 141.298 504 256 504s210.941-77.98 239.29-183.736C424.71 340.539 343.343 352 256 352S87.29 340.54 16.71 320.264zM256 8C119.031 8 8 119.033 8 256a250.017 250.017 0 001.727 28.266C81.195 306.77 165.477 320 256 320s174.805-13.23 246.273-35.734A250.017 250.017 0 00504 256C504 119.033 392.969 8 256 8zm-64 232a80 80 0 1180-80 80 80 0 01-80 80z"
      opacity={0.4}
    />
    <path
      d="M256 320c-90.523 0-174.805-13.23-246.273-35.734a246.114 246.114 0 006.984 35.998C87.289 340.539 168.656 352 256 352s168.71-11.46 239.29-31.736a246.114 246.114 0 006.983-35.998C430.805 306.77 346.523 320 256 320zm-64-80a80 80 0 10-80-80 80 80 0 0080 80zm0-104a24 24 0 11-24 24 24 24 0 0124-24z"
      className="space-station-moon_svg__fa-primary"
    />
  </svg>
);

SvgSpaceStationMoon.displayName = "SvgSpaceStationMoon";
SvgSpaceStationMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpaceStationMoon;
