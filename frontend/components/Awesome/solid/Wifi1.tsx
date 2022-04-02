import * as React from "react";

const SvgWifi1 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M384 416c0 35.35-28.65 64-64 64s-64-28.65-64-64 28.65-64 64-64 64 28.65 64 64z" />
  </svg>
);

SvgWifi1.displayName = "SvgWifi1";
SvgWifi1.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgWifi1;
