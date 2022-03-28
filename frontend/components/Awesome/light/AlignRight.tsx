import * as React from "react";

const SvgAlignRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 48H168a8 8 0 00-8 8v16a8 8 0 008 8h272a8 8 0 008-8V56a8 8 0 00-8-8zm0 384H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H168a8 8 0 00-8 8v16a8 8 0 008 8h272a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H8a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgAlignRight.displayName = "SvgAlignRight";
SvgAlignRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignRight;
