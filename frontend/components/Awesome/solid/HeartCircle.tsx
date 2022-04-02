import * as React from "react";

const SvgHeartCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 496 512" {...props}>
    <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm123.5 272.3L260.9 394.5c-7.1 7.4-18.7 7.4-25.9 0L124.5 280.3c-32.1-33.2-30.2-88.2 5.7-118.8 31.3-26.7 77.9-21.9 106.6 7.7l11.3 11.6 11.3-11.6c28.7-29.6 75.3-34.4 106.6-7.7 35.8 30.6 37.7 85.6 5.5 118.8z" />
  </svg>
);

SvgHeartCircle.displayName = "SvgHeartCircle";
SvgHeartCircle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeartCircle;
