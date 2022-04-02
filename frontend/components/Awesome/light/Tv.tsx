import * as React from "react";

const SvgTv = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M592 0H48A48 48 0 000 48v320a48 48 0 0048 48h256v64H136a8 8 0 00-8 8v16a8 8 0 008 8h368a8 8 0 008-8v-16a8 8 0 00-8-8H336v-64h256a48 48 0 0048-48V48a48 48 0 00-48-48zm16 368a16 16 0 01-16 16H48a16 16 0 01-16-16V48a16 16 0 0116-16h544a16 16 0 0116 16z" />
  </svg>
);

SvgTv.displayName = "SvgTv";
SvgTv.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTv;
