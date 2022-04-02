import * as React from "react";

const SvgAngleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 192 512" {...props}>
    <path d="M4.2 247.5L151 99.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17L69.3 256l118.5 119.7c4.7 4.7 4.7 12.3 0 17L168 412.5c-4.7 4.7-12.3 4.7-17 0L4.2 264.5c-4.7-4.7-4.7-12.3 0-17z" />
  </svg>
);

SvgAngleLeft.displayName = "SvgAngleLeft";
SvgAngleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAngleLeft;
