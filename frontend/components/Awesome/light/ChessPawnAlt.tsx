import * as React from "react";

const SvgChessPawnAlt = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M247.16 435.58L224 424v-16a24 24 0 00-24-24h1.41a519 519 0 01-9.31-96H216a8 8 0 008-8v-16a8 8 0 00-8-8h-16.91A95.86 95.86 0 1032 192a95.3 95.3 0 0024.91 64H40a8 8 0 00-8 8v16a8 8 0 008 8h23.9a519 519 0 01-9.31 96H56a24 24 0 00-24 24v16L8.85 435.58A16 16 0 000 449.89V496a16 16 0 0016 16h224a16 16 0 0016-16v-46.11a16 16 0 00-8.84-14.31zM160.09 288a552.7 552.7 0 008.75 96H87.16a552.7 552.7 0 008.75-96zM128 128a64 64 0 11-64 64 64.07 64.07 0 0164-64zm96 352H32v-20.22l32-16V416h128v27.78l32 16z" />
  </svg>
);

SvgChessPawnAlt.displayName = "SvgChessPawnAlt";
SvgChessPawnAlt.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgChessPawnAlt;
