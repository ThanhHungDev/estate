import * as React from "react";

const SvgHorizontalRule = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M640 247.5v17a16 16 0 01-16 16H16a16 16 0 01-16-16v-17a16 16 0 0116-16h608a16 16 0 0116 16z" />
  </svg>
);

SvgHorizontalRule.displayName = "SvgHorizontalRule";
SvgHorizontalRule.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHorizontalRule;
