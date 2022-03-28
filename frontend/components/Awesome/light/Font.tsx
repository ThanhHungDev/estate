import * as React from "react";

const SvgFont = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M424 448h-36.6L247.13 42.77A16 16 0 00232 32h-16a16 16 0 00-15.12 10.77L60.6 448H24a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8H94.48l44.3-128h170.44l44.31 128H312a8 8 0 00-8 8v16a8 8 0 008 8h112a8 8 0 008-8v-16a8 8 0 00-8-8zM149.86 288L224 73.8 298.14 288z" />
  </svg>
);

SvgFont.displayName = "SvgFont";
SvgFont.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgFont;
