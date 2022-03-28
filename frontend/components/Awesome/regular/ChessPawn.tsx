import * as React from "react";

const SvgChessPawn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M304 464H16a16 16 0 00-16 16v16a16 16 0 0016 16h288a16 16 0 0016-16v-16a16 16 0 00-16-16zM48 288h32v29.5c0 40.29-3.51 81.23-23.43 114.5h53.57c15-37 17.86-77.35 17.86-114.5V288h64v29.5c0 37.15 2.91 77.49 17.86 114.5h53.57C243.51 398.73 240 357.79 240 317.5V288h32a16 16 0 0016-16v-16a16 16 0 00-16-16h-31c23.8-21.93 39-53.08 39-88a120 120 0 00-240 0c0 34.92 15.16 66.07 39 88H48a16 16 0 00-16 16v16a16 16 0 0016 16zM160 80a72 72 0 11-72 72 72.08 72.08 0 0172-72z" />
  </svg>
);

SvgChessPawn.displayName = "SvgChessPawn";
SvgChessPawn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessPawn;