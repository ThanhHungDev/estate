import * as React from "react";

const SvgDryerAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M384-1H64A64 64 0 000 63v416a32 32 0 0032 32h384a32 32 0 0032-32V63a64 64 0 00-64-64zm32 480H32V63a32 32 0 0132-32h320a32 32 0 0132 32zM80 95a16 16 0 10-16-16 16 16 0 0016 16zm64 0a16 16 0 10-16-16 16 16 0 0016 16zm80 32a160 160 0 10160 160 160 160 0 00-160-160zm0 288a128 128 0 11128-128 128.14 128.14 0 01-128 128zm0-224a96 96 0 1096 96 96 96 0 00-96-96zm0 160a64 64 0 01-61.73-48H200a8 8 0 008-8v-16a8 8 0 00-8-8h-37.73A63.9 63.9 0 11224 351z" />
  </svg>
);

SvgDryerAlt.displayName = "SvgDryerAlt";
SvgDryerAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgDryerAlt;
