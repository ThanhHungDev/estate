import * as React from "react";

const SvgAngleDoubleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 320 512" {...props}>
    <path d="M168.5 84.2l148 146.8c4.7 4.7 4.7 12.3 0 17l-19.8 19.8c-4.7 4.7-12.3 4.7-17 0L160 149.3 40.3 267.8c-4.7 4.7-12.3 4.7-17 0L3.5 248c-4.7-4.7-4.7-12.3 0-17l148-146.8c4.7-4.7 12.3-4.7 17 0zm-17 160L3.5 391c-4.7 4.7-4.7 12.3 0 17l19.8 19.8c4.7 4.7 12.3 4.7 17 0L160 309.3l119.7 118.5c4.7 4.7 12.3 4.7 17 0l19.8-19.8c4.7-4.7 4.7-12.3 0-17l-148-146.8c-4.7-4.7-12.3-4.7-17 0z" />
  </svg>
);

SvgAngleDoubleUp.displayName = "SvgAngleDoubleUp";
SvgAngleDoubleUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAngleDoubleUp;
