import * as React from "react";

const SvgGripLines = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M440 192H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H8c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h432c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8z" />
  </svg>
);

SvgGripLines.displayName = "SvgGripLines";
SvgGripLines.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripLines;
