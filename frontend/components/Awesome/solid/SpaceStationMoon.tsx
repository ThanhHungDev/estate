import * as React from "react";

const SvgSpaceStationMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119.033 8 8 119.033 8 256a250.016 250.016 0 001.725 28.266C81.197 306.77 165.479 320 256 320s174.803-13.23 246.275-35.734A250.016 250.016 0 00504 256C504 119.033 392.967 8 256 8zm-64 232a80 80 0 1180-80 80 80 0 01-80 80zM16.71 320.264C45.06 426.02 141.3 504 256 504s210.941-77.98 239.29-183.736C424.712 340.539 343.341 352 256 352S87.287 340.54 16.71 320.264zM192 136a24 24 0 1024 24 24 24 0 00-24-24z" />
  </svg>
);

SvgSpaceStationMoon.displayName = "SvgSpaceStationMoon";
SvgSpaceStationMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpaceStationMoon;
