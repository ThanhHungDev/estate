import * as React from "react";

const SvgVacuum = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M143.27 256l-41.15 192H48a48 48 0 00-48 48 16 16 0 0016 16h160a16 16 0 0016-16v-32a16 16 0 00-16-16h-8.41l41.14-192zM640 128A128.14 128.14 0 00512 0H301.61C241.64 0 189 42.56 176.44 101.19L150.12 224h65.47L239 114.59A64.33 64.33 0 01301.61 64H512a64 64 0 0113.47 126.51A191.27 191.27 0 00384 128a32 32 0 00-32 32v161.62a109.65 109.65 0 0116-1.62 111.83 111.83 0 0178.14 192H512a64 64 0 0064-64V320a191.27 191.27 0 00-15.06-74.65C607.17 226.11 640 181.13 640 128zM368 352a80 80 0 1080 80 80 80 0 00-80-80zm0 96a16 16 0 1116-16 16 16 0 01-16 16z" />
  </svg>
);

SvgVacuum.displayName = "SvgVacuum";
SvgVacuum.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgVacuum;
