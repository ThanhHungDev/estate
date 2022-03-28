import * as React from "react";

const SvgBatterySlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M637 485.25L23 1.75A8 8 0 0011.76 3l-10 12.51A8 8 0 003 26.75l614 483.5a8 8 0 0011.24-1.25l10-12.51a8 8 0 00-1.24-11.24zM48 384a16 16 0 01-16-16V144a16 16 0 0116-16h31.85L40.21 96.79A47.9 47.9 0 000 144v224a48 48 0 0048 48h397.58L405 384zm568-224h-8v-16a48 48 0 00-48-48H194.4l40.6 32h325a16 16 0 0116 16v48h32v128h-32v48a16 16 0 01-15.89 16l28.45 22.41A47.81 47.81 0 00608 368v-16h8a24 24 0 0024-24V184a24 24 0 00-24-24z" />
  </svg>
);

SvgBatterySlash.displayName = "SvgBatterySlash";
SvgBatterySlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBatterySlash;
