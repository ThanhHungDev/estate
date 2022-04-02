import * as React from "react";

const SvgBatteryQuarter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M224 320H96V192h128v128zm336-176H48v224h512v-64h32v-96h-32v-64m0-48c26.51 0 48 21.49 48 48v16h8c13.255 0 24 10.745 24 24v144c0 13.255-10.745 24-24 24h-8v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V144c0-26.51 21.49-48 48-48h512z" />
  </svg>
);

SvgBatteryQuarter.displayName = "SvgBatteryQuarter";
SvgBatteryQuarter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBatteryQuarter;
