import * as React from "react";

const SvgGripLines = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M496 288H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-128H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16z" />
  </svg>
);

SvgGripLines.displayName = "SvgGripLines";
SvgGripLines.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGripLines;
