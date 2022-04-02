import * as React from "react";

const SvgHorizontalRule = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M640 247.5v16a8 8 0 01-8 8H8a8 8 0 01-8-8v-16a8 8 0 018-8h624a8 8 0 018 8z" />
  </svg>
);

SvgHorizontalRule.displayName = "SvgHorizontalRule";
SvgHorizontalRule.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHorizontalRule;
