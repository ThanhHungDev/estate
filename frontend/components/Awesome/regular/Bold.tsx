import * as React from "react";

const SvgBold = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M314.52 238.78A119.76 119.76 0 00232 32H48a16 16 0 00-16 16v16a16 16 0 0016 16h16v352H48a16 16 0 00-16 16v16a16 16 0 0016 16h208a128 128 0 00128-128c0-49.49-28.38-91.92-69.48-113.22zM128 80h88a72 72 0 010 144h-88zm112 352H128V272h112a80 80 0 010 160z" />
  </svg>
);

SvgBold.displayName = "SvgBold";
SvgBold.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBold;
