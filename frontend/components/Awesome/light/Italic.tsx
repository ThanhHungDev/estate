import * as React from "react";

const SvgItalic = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M320 40v16a8 8 0 01-8 8h-87.5l-96 384H216a8 8 0 018 8v16a8 8 0 01-8 8H8a8 8 0 01-8-8v-16a8 8 0 018-8h87.5l96-384H104a8 8 0 01-8-8V40a8 8 0 018-8h208a8 8 0 018 8z" />
  </svg>
);

SvgItalic.displayName = "SvgItalic";
SvgItalic.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgItalic;
