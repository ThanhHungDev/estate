import * as React from "react";

const SvgAlignLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M280 48H8a8 8 0 00-8 8v16a8 8 0 008 8h272a8 8 0 008-8V56a8 8 0 00-8-8zm160 384H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zM280 304H8a8 8 0 00-8 8v16a8 8 0 008 8h272a8 8 0 008-8v-16a8 8 0 00-8-8zm160-128H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgAlignLeft.displayName = "SvgAlignLeft";
SvgAlignLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignLeft;
