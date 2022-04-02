import * as React from "react";

const SvgTvAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M536 480H104a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zM608 0H32A32 32 0 000 32v352a32 32 0 0032 32h576a32 32 0 0032-32V32a32 32 0 00-32-32zm0 384H32V32h576z" />
  </svg>
);

SvgTvAlt.displayName = "SvgTvAlt";
SvgTvAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTvAlt;
