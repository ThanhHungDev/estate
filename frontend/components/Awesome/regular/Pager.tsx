import * as React from "react";

const SvgPager = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M304 304h-80v48h80a16 16 0 0016-16v-16a16 16 0 00-16-16zM96 320v16a16 16 0 0016 16h80v-48h-80a16 16 0 00-16 16zm296-160H120a24 24 0 00-24 24v48a24 24 0 0024 24h272a24 24 0 0024-24v-48a24 24 0 00-24-24zm56-96H64a64 64 0 00-64 64v256a64 64 0 0064 64h384a64 64 0 0064-64V128a64 64 0 00-64-64zm16 320a16 16 0 01-16 16H64a16 16 0 01-16-16V128a16 16 0 0116-16h384a16 16 0 0116 16z" />
  </svg>
);

SvgPager.displayName = "SvgPager";
SvgPager.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgPager;
