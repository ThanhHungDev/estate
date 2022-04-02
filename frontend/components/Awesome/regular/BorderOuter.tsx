import * as React from "react";

const SvgBorderOuter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 32H32A32 32 0 000 64v384a32 32 0 0032 32h384a32 32 0 0032-32V64a32 32 0 00-32-32zm-16 400H48V80h352zM212 184h24a16 16 0 0016-16v-24a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm100 100h24a16 16 0 0016-16v-24a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm-200 0h24a16 16 0 0016-16v-24a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm100 0h24a16 16 0 0016-16v-24a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16zm0 100h24a16 16 0 0016-16v-24a16 16 0 00-16-16h-24a16 16 0 00-16 16v24a16 16 0 0016 16z" />
  </svg>
);

SvgBorderOuter.displayName = "SvgBorderOuter";
SvgBorderOuter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBorderOuter;
