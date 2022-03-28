import * as React from "react";

const SvgSpaceStationMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-93.572 0-173.207-59.918-203.146-143.314A892.19 892.19 0 00256 352a892.19 892.19 0 00203.146-23.314C429.207 412.082 349.572 472 256 472zM43.504 293.64A215.623 215.623 0 0140 256c0-119.104 96.896-216 216-216s216 96.896 216 216a215.623 215.623 0 01-3.504 37.64c-130.82 34.159-294.172 34.159-424.992 0zM200 80a88 88 0 1088 88 88 88 0 00-88-88zm0 144a56 56 0 1156-56 56.064 56.064 0 01-56 56zm0-80a24 24 0 1024 24 24 24 0 00-24-24z" />
  </svg>
);

SvgSpaceStationMoon.displayName = "SvgSpaceStationMoon";
SvgSpaceStationMoon.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSpaceStationMoon;
