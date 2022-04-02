import * as React from "react";

const SvgTablet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M256 416c0 17.7-14.3 32-32 32s-32-14.3-32-32c0-21.3 14.3-32 32-32s32 14.3 32 32zM448 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V48C0 21.5 21.5 0 48 0h352c26.5 0 48 21.5 48 48zm-48 410V54c0-3.3-2.7-6-6-6H54c-3.3 0-6 2.7-6 6v404c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
  </svg>
);

SvgTablet.displayName = "SvgTablet";
SvgTablet.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTablet;
