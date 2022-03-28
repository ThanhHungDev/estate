import * as React from "react";

const SvgBedAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M80 160a32 32 0 0132-32h96a32 32 0 0132 32v32h32v-32a32 32 0 0132-32h96a32 32 0 0132 32v32h48V64a32 32 0 00-32-32H64a32 32 0 00-32 32v128h48zm368 64H64a64 64 0 00-64 64v176a16 16 0 0016 16h16a16 16 0 0016-16v-48h416v48a16 16 0 0016 16h16a16 16 0 0016-16V288a64 64 0 00-64-64zm16 144H48v-80a16 16 0 0116-16h384a16 16 0 0116 16z" />
  </svg>
);

SvgBedAlt.displayName = "SvgBedAlt";
SvgBedAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBedAlt;
