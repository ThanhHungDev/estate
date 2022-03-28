import * as React from "react";

const SvgSirenOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M90.69 76a24 24 0 1026.62-39.92l-48-32A24 24 0 1042.69 44zM536 80a23.87 23.87 0 0013.29-4l48-32a24 24 0 10-26.6-39.94l-48 32A24 24 0 00536 80zM112 192a24 24 0 00-24-24H24a24 24 0 000 48h64a24 24 0 0024-24zm504-24h-64a24 24 0 000 48h64a24 24 0 000-48zM512 336l-22.12-208.93A72 72 0 00418.44 64H221.56a72 72 0 00-71.44 63.07L128 336a32 32 0 00-32 32v80a32 32 0 0032 32h384a32 32 0 0032-32v-80a32 32 0 00-32-32zM197.75 133a24 24 0 0123.81-21h196.88a24 24 0 0123.82 21l21.37 203H252.09l19.84-180.82a8 8 0 00-6.87-9l-15.86-2.13a7.79 7.79 0 00-1.07-.07 8 8 0 00-7.92 6.94L219.8 336h-43.43zM496 432H144v-48h352z" />
  </svg>
);

SvgSirenOn.displayName = "SvgSirenOn";
SvgSirenOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSirenOn;
