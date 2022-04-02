import * as React from "react";

const SvgBatteryFull = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M560 128c8.823 0 16 7.177 16 16v48h32v128h-32v48c0 8.823-7.177 16-16 16H48c-8.823 0-16-7.177-16-16V144c0-8.823 7.177-16 16-16h512m0-32H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zM128 314V198a6 6 0 00-6-6h-20a6 6 0 00-6 6v116a6 6 0 006 6h20a6 6 0 006-6zm64 0V198a6 6 0 00-6-6h-20a6 6 0 00-6 6v116a6 6 0 006 6h20a6 6 0 006-6zm64 0V198a6 6 0 00-6-6h-20a6 6 0 00-6 6v116a6 6 0 006 6h20a6 6 0 006-6zm64 0V198a6 6 0 00-6-6h-20a6 6 0 00-6 6v116a6 6 0 006 6h20a6 6 0 006-6zm64 0V198a6 6 0 00-6-6h-20a6 6 0 00-6 6v116a6 6 0 006 6h20a6 6 0 006-6zm64 0V198a6 6 0 00-6-6h-20a6 6 0 00-6 6v116a6 6 0 006 6h20a6 6 0 006-6zm64 0V198a6 6 0 00-6-6h-20a6 6 0 00-6 6v116a6 6 0 006 6h20a6 6 0 006-6z" />
  </svg>
);

SvgBatteryFull.displayName = "SvgBatteryFull";
SvgBatteryFull.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBatteryFull;
