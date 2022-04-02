import * as React from "react";

const SvgBatterySlash = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M36 3.51A16 16 0 0013.51 6l-10 12.49A16 16 0 006 41l598 467.49a16 16 0 0022.49-2.49l10-12.49A16 16 0 00634 471zM616 160h-8v-16a48 48 0 00-48-48H232.24l61.39 48H560v64h32v96h-32v48.25l44.18 34.53A47.74 47.74 0 00608 368v-16h8a24 24 0 0024-24V184a24 24 0 00-24-24zM48 368V134.74l-32.79-25.63A47.74 47.74 0 000 144v224a48 48 0 0048 48h359.76l-61.39-48z" />
  </svg>
);

SvgBatterySlash.displayName = "SvgBatterySlash";
SvgBatterySlash.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBatterySlash;
