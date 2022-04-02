import * as React from "react";

const SvgSiren = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M416 336l-22.12-208.93A72 72 0 00322.44 64H125.56a72 72 0 00-71.44 63.07L32 336a32 32 0 00-32 32v80a32 32 0 0032 32h384a32 32 0 0032-32v-80a32 32 0 00-32-32zM101.75 133a24 24 0 0123.81-21h196.88a24 24 0 0123.82 21l21.37 203H156.09l19.84-180.82a8 8 0 00-6.87-9l-15.86-2.13a7.79 7.79 0 00-1.07-.07 8 8 0 00-7.92 6.94L123.8 336H80.37zM400 432H48v-48h352z" />
  </svg>
);

SvgSiren.displayName = "SvgSiren";
SvgSiren.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSiren;
