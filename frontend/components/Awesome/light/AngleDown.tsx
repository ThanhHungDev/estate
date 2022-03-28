import * as React from "react";

const SvgAngleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 256 512" {...props}>
    <path d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z" />
  </svg>
);

SvgAngleDown.displayName = "SvgAngleDown";
SvgAngleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAngleDown;
