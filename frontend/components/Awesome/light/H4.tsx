import * as React from "react";

const SvgH4 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M312 96H200a8 8 0 00-8 8v16a8 8 0 008 8h40v112H80V128h40a8 8 0 008-8v-16a8 8 0 00-8-8H8a8 8 0 00-8 8v16a8 8 0 008 8h40v256H8a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8H80V272h160v112h-40a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8h-40V128h40a8 8 0 008-8v-16a8 8 0 00-8-8zm256 144h-24V104a8 8 0 00-8-8h-16a8 8 0 00-8 8v136H384V104a8 8 0 00-8-8h-16a8 8 0 00-8 8v152a16 16 0 0016 16h144v136a8 8 0 008 8h16a8 8 0 008-8V272h24a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgH4.displayName = "SvgH4";
SvgH4.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgH4;
