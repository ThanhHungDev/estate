import * as React from "react";

const SvgArrowToRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M448 88v336c0 13.3-10.7 24-24 24h-24c-13.3 0-24-10.7-24-24V88c0-13.3 10.7-24 24-24h24c13.3 0 24 10.7 24 24zm-280.5 66.4l65.6 65.6H24c-13.3 0-24 10.7-24 24v24c0 13.3 10.7 24 24 24h209.1l-65.6 65.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L353.9 273c9.4-9.4 9.4-24.6 0-33.9L218.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9z" />
  </svg>
);

SvgArrowToRight.displayName = "SvgArrowToRight";
SvgArrowToRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgArrowToRight;
