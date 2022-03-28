import * as React from "react";

const SvgSausage = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M447.83 69.83L463 24.18A18.36 18.36 0 00445.62 0h-59.24A18.36 18.36 0 00369 24.18l15.21 45.65C346.88 83 320 118.2 320 160c0 88.22-71.78 160-160 160-41.8 0-77 26.88-90.17 64.17L24.18 369A18.36 18.36 0 000 386.38v59.24A18.37 18.37 0 0024.18 463l45.65-15.21C83 485.12 118.2 512 160 512c194.09 0 352-157.91 352-352 0-41.8-26.88-77-64.17-90.17zM160 464a48 48 0 010-96c114.69 0 208-93.31 208-208a48 48 0 0196 0c0 167.63-136.37 304-304 304z" />
  </svg>
);

SvgSausage.displayName = "SvgSausage";
SvgSausage.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSausage;
