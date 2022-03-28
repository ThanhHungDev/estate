import * as React from "react";

const SvgSirenOn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M512 320h-1.88l-23.24-185.93A80.13 80.13 0 00407.5 64h-175a80.13 80.13 0 00-79.38 70.08L129.88 320H128a32 32 0 00-32 32v64a32 32 0 0032 32h384a32 32 0 0032-32v-64a32 32 0 00-32-32zM184.88 138a48.07 48.07 0 0147.62-42h175a48.07 48.07 0 0147.62 42l22.76 182H231.82l24.11-180.83a8 8 0 00-6.87-9l-15.86-2.13a8 8 0 00-9 6.87L199.54 320h-37.42zM512 416H128v-64h384zM80 160H16a16 16 0 000 32h64a16 16 0 000-32zm544 0h-64a16 16 0 000 32h64a16 16 0 000-32zM40.84 30.3l64 32a16 16 0 0014.32-28.63l-64-32A16 16 0 0040.84 30.3zM528 64a16.17 16.17 0 007.16-1.69l64-32a16 16 0 00-14.32-28.64l-64 32A16 16 0 00528 64z" />
  </svg>
);

SvgSirenOn.displayName = "SvgSirenOn";
SvgSirenOn.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSirenOn;
