import * as React from "react";

const SvgBagsShopping = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M544 256H224a32 32 0 00-32 32v192a32 32 0 0032 32h320a32 32 0 0032-32V288a32 32 0 00-32-32zm0 224H224V288h320zm-172.63-32.81A96.12 96.12 0 00480 352v-24a8 8 0 00-8-8h-16a8 8 0 00-8 8v24a64.07 64.07 0 01-70.38 63.69c-33.25-3.23-57.62-33.12-57.62-66.53V328a8 8 0 00-8-8h-16a8 8 0 00-8 8v20.66c0 48.79 35 92.34 83.37 98.53zM32 192h384v32h32v-32a32 32 0 00-32-32h-96V96a96 96 0 00-192 0v64H32a32 32 0 00-32 32v256a32 32 0 0032 32h128v-32H32zm128-96a64 64 0 01128 0v64H160z" />
  </svg>
);

SvgBagsShopping.displayName = "SvgBagsShopping";
SvgBagsShopping.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBagsShopping;
