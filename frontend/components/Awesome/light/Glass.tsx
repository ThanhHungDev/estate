import * as React from "react";

const SvgGlass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M352 0H32A32 32 0 00.06 34l32 448A32 32 0 0064 512h256a32 32 0 0031.94-30l32-448A32 32 0 00352 0zm0 32l-9.15 128H41.14L32 32zM64 479.72L43.43 192h297.14L320 480z" />
  </svg>
);

SvgGlass.displayName = "SvgGlass";
SvgGlass.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlass;
