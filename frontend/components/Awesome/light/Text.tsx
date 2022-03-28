import * as React from "react";

const SvgText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 48v72a8 8 0 01-8 8h-16a8 8 0 01-8-8V64H240v384h72a8 8 0 018 8v16a8 8 0 01-8 8H136a8 8 0 01-8-8v-16a8 8 0 018-8h72V64H32v56a8 8 0 01-8 8H8a8 8 0 01-8-8V48a16 16 0 0116-16h416a16 16 0 0116 16z" />
  </svg>
);

SvgText.displayName = "SvgText";
SvgText.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgText;
