import * as React from "react";

const SvgH1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M312 96H200a8 8 0 00-8 8v16a8 8 0 008 8h40v112H80V128h40a8 8 0 008-8v-16a8 8 0 00-8-8H8a8 8 0 00-8 8v16a8 8 0 008 8h40v256H8a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8H80V272h160v112h-40a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8h-40V128h40a8 8 0 008-8v-16a8 8 0 00-8-8zm256 288h-70.34V112a16 16 0 00-16-16h-16a16 16 0 00-11.31 4.69L412 143a8 8 0 000 11.31l11.31 11.31a8 8 0 0011.32 0l31-31V384H392a8 8 0 00-8 8v16a8 8 0 008 8h176a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgH1.displayName = "SvgH1";
SvgH1.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgH1;
