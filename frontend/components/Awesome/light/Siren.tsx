import * as React from "react";

const SvgSiren = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 320h-1.88l-23.24-185.92A80.13 80.13 0 00311.5 64h-175a80.13 80.13 0 00-79.38 70.08L33.88 320H32a32 32 0 00-32 32v64a32 32 0 0032 32h384a32 32 0 0032-32v-64a32 32 0 00-32-32zM88.88 138.05A48.07 48.07 0 01136.5 96h175a48.07 48.07 0 0147.62 42.05l22.76 182H135.82l24.11-180.82a8 8 0 00-6.87-9l-15.86-2.13a8 8 0 00-9 6.87L103.54 320H66.12zM416 416H32v-64h384z" />
  </svg>
);

SvgSiren.displayName = "SvgSiren";
SvgSiren.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSiren;
