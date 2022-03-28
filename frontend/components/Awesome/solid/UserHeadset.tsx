import * as React from "react";

const SvgUserHeadset = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M320 352h-23.1a174.08 174.08 0 01-145.8 0H128A128 128 0 000 480a32 32 0 0032 32h384a32 32 0 0032-32 128 128 0 00-128-128zM48 224a16 16 0 0016-16v-16c0-88.22 71.78-160 160-160s160 71.78 160 160v16a80.09 80.09 0 01-80 80h-32a32 32 0 00-32-32h-32a32 32 0 000 64h96a112.14 112.14 0 00112-112v-16C416 86.13 329.87 0 224 0S32 86.13 32 192v16a16 16 0 0016 16zm160 0h32a64 64 0 0155.41 32H304a48.05 48.05 0 0048-48v-16a128 128 0 00-256 0c0 40.42 19.1 76 48.35 99.47-.06-1.17-.35-2.28-.35-3.47a64.07 64.07 0 0164-64z" />
  </svg>
);

SvgUserHeadset.displayName = "SvgUserHeadset";
SvgUserHeadset.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgUserHeadset;
