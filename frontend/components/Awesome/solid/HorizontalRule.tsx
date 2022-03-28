import * as React from "react";

const SvgHorizontalRule = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M640 239.87v31.26A15.88 15.88 0 01624.14 287H15.87A15.88 15.88 0 010 271.13v-31.26A15.88 15.88 0 0115.87 224h608.27A15.88 15.88 0 01640 239.87z" />
  </svg>
);

SvgHorizontalRule.displayName = "SvgHorizontalRule";
SvgHorizontalRule.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHorizontalRule;
