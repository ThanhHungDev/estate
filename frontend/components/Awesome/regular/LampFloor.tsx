import * as React from "react";

const SvgLampFloor = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M382 212.76l-71.13-192A31.63 31.63 0 00281.23 0H102.77a31.64 31.64 0 00-29.6 20.76L2 212.76C-5.71 233.68 9.57 256 31.64 256h136.65v208H113c-21.06 0-40.72 13.89-46.91 33.12-2.41 7.41 3.81 14.88 11.5 14.88H306.4c7.7 0 13.92-7.47 11.54-14.88C311.75 477.89 292.09 464 271 464h-55.29V256h136.65c22.07 0 37.35-22.32 29.64-43.24zM54.45 208l59.28-160h156.54l59.28 160z" />
  </svg>
);

SvgLampFloor.displayName = "SvgLampFloor";
SvgLampFloor.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgLampFloor;
