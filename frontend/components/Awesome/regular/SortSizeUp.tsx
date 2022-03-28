import * as React from "react";

const SvgSortSizeUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M428 320H244a20 20 0 00-20 20v120a20 20 0 0020 20h184a20 20 0 0020-20V340a20 20 0 00-20-20zm-28 112H272v-64h128zm84-400H252a28 28 0 00-28 28v168a28 28 0 0028 28h232a28 28 0 0028-28V60a28 28 0 00-28-28zm-20 176H272V80h192zM104.72 35.76a12 12 0 00-17.44 0l-68 72A12 12 0 0028 128h44v336a16 16 0 0016 16h16a16 16 0 0016-16V128h44a12 12 0 008.73-20.24z" />
  </svg>
);

SvgSortSizeUp.displayName = "SvgSortSizeUp";
SvgSortSizeUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgSortSizeUp;
