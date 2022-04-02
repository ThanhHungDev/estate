import * as React from "react";

const SvgBreadLoaf = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 640 512" {...props}>
    <path d="M480 192c0-88.37-107.45-160-240-160S0 103.63 0 192c0 35.35 26.86 64 60 64h4v192a32 32 0 0032 32h288a32 32 0 0032-32V256h4c33.14 0 60-28.65 60-64zM400 32c-2.43 0-4.78.2-7.19.24C465.2 66.39 512 124.62 512 192c0 42.75-26.92 79.06-64 91.46V448a63.27 63.27 0 01-8.9 32H544a32 32 0 0032-32V256h4c33.14 0 60-28.65 60-64 0-88.37-107.45-160-240-160z" />
  </svg>
);

SvgBreadLoaf.displayName = "SvgBreadLoaf";
SvgBreadLoaf.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBreadLoaf;
