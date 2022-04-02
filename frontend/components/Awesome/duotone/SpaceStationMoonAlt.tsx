import * as React from "react";

const SvgSpaceStationMoonAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M501.703 224H448v-64h-80V96h48V66.674A246.87 246.87 0 00256 8C119.031 8 8 119.033 8 256a250.017 250.017 0 001.727 28.266C81.195 306.77 165.477 320 256 320s174.805-13.23 246.273-35.734A250.017 250.017 0 00504 256a248.45 248.45 0 00-2.297-32zM192 240a80 80 0 1180-80 80 80 0 01-80 80zm192 103.139A940.338 940.338 0 01256 352c-87.344 0-168.71-11.46-239.29-31.736C45.06 426.02 141.298 504 256 504a247.458 247.458 0 00192-91.092V384h-64z"
      opacity={0.4}
    />
    <path
      d="M256 320c-90.523 0-174.805-13.23-246.273-35.734a246.114 246.114 0 006.984 35.998C87.289 340.539 168.656 352 256 352s168.71-11.46 239.29-31.736a246.114 246.114 0 006.983-35.998C430.805 306.77 346.523 320 256 320zm-64-80a80 80 0 10-80-80 80 80 0 0080 80zm0-104a24 24 0 11-24 24 24 24 0 0124-24z"
      className="space-station-moon-alt_svg__fa-primary"
    />
  </svg>
);

SvgSpaceStationMoonAlt.displayName = "SvgSpaceStationMoonAlt";
SvgSpaceStationMoonAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpaceStationMoonAlt;
