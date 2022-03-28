import * as React from "react";

const SvgAlignJustify = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M439 48H7a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8V56a8 8 0 00-8-8zm0 384H7a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H7a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8zm0-128H7a8 8 0 00-8 8v16a8 8 0 008 8h432a8 8 0 008-8v-16a8 8 0 00-8-8z" />
  </svg>
);

SvgAlignJustify.displayName = "SvgAlignJustify";
SvgAlignJustify.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAlignJustify;
