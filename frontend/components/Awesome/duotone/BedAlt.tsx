import * as React from "react";

const SvgBedAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M512 288v64H0v-64a64 64 0 0164-64h384a64 64 0 0164 64z"
      opacity={0.4}
    />
    <path
      d="M0 352v112a16 16 0 0016 16h32a16 16 0 0016-16v-48h384v48a16 16 0 0016 16h32a16 16 0 0016-16V352zm64-128v-64a32 32 0 0132-32h112a32 32 0 0132 32v64h32v-64a32 32 0 0132-32h112a32 32 0 0132 32v64a66.4 66.4 0 0132 8.88V64a32 32 0 00-32-32H64a32 32 0 00-32 32v168.88A66.51 66.51 0 0164 224z"
      className="bed-alt_svg__fa-primary"
    />
  </svg>
);

SvgBedAlt.displayName = "SvgBedAlt";
SvgBedAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedAlt;
