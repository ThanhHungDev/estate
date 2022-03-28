import * as React from "react";

const SvgGlass = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 384 512" {...props}>
    <path d="M352 0H32A32 32 0 00.06 34l32 448A32 32 0 0064 512h256a32 32 0 0031.94-30l32-448A32 32 0 00352 0zm-17.19 48l-8 112H57.18l-8-112zM305.1 464H78.9L60.61 208h262.77z" />
  </svg>
);

SvgGlass.displayName = "SvgGlass";
SvgGlass.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgGlass;
