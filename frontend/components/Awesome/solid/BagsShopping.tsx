import * as React from "react";

const SvgBagsShopping = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M448 224v-32a32 32 0 00-32-32h-96V96a96 96 0 00-192 0v64H32a32 32 0 00-32 32v256a32 32 0 0032 32h128V256a32 32 0 0132-32zM176 96a48 48 0 0196 0v64h-96zm368 160H224a32 32 0 00-32 32v192a32 32 0 0032 32h320a32 32 0 0032-32V288a32 32 0 00-32-32zm-64 96a96.12 96.12 0 01-108.63 95.19C323 441 288 397.45 288 348.66V328a8 8 0 018-8h16a8 8 0 018 8v21.16c0 33.41 24.37 63.3 57.62 66.53A64.07 64.07 0 00448 352v-24a8 8 0 018-8h16a8 8 0 018 8z" />
  </svg>
);

SvgBagsShopping.displayName = "SvgBagsShopping";
SvgBagsShopping.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBagsShopping;
