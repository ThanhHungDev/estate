import * as React from "react";

const SvgTriangle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path d="M329.6 24c-18.4-32-64.7-32-83.2 0L6.5 440c-18.4 31.9 4.6 72 41.6 72H528c36.9 0 60-40 41.6-72l-240-416zM528 480H48c-12.3 0-20-13.3-13.9-24l240-416c6.1-10.6 21.6-10.7 27.7 0l240 416c6.2 10.6-1.5 24-13.8 24z" />
  </svg>
);

SvgTriangle.displayName = "SvgTriangle";
SvgTriangle.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgTriangle;
