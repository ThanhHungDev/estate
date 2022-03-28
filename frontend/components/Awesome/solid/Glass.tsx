import * as React from "react";

const SvgGlass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M354 0H34A32 32 0 002.06 34l32 448A32 32 0 0066 512h256a32 32 0 0031.94-30l32-448A32 32 0 00354 0zm-34.37 64l-6.86 96H75.22l-6.86-96z" />
  </svg>
);

SvgGlass.displayName = "SvgGlass";
SvgGlass.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlass;
