import * as React from "react";

const SvgBatteryQuarter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M544 160v64h32v64h-32v64H64V160h480m16-64H48c-26.51 0-48 21.49-48 48v224c0 26.51 21.49 48 48 48h512c26.51 0 48-21.49 48-48v-16h8c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24h-8v-16c0-26.51-21.49-48-48-48zm-336 96H96v128h128V192z" />
  </svg>
);

SvgBatteryQuarter.displayName = "SvgBatteryQuarter";
SvgBatteryQuarter.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBatteryQuarter;
