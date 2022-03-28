import * as React from "react";

const SvgHeadSideMask = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M320.06 160a32 32 0 1032 32 32 32 0 00-32-32zm189.23 115c-20.94-47.12-48.44-151.73-73.09-186.75A207.93 207.93 0 00266.14 0H198.2C93.68 0 3.67 80.86.11 185.31A191.26 191.26 0 0064 334.81V496a16 16 0 0016 16h16a16 16 0 0016-16V313.39l-16-14.31a144.19 144.19 0 01-47.64-98.94L224 319.29V480a32 32 0 0032 32h115a88.21 88.21 0 0082.81-58.2l54.6-151.63a31.4 31.4 0 00.88-27.17zm-69.76 77H336.06a16 16 0 100 32H428l-11.52 32h-80.42a16 16 0 100 32H403a40.09 40.09 0 01-31.92 16h-99V320h179zm-199.7-80L55.62 147a146.1 146.1 0 017.58-19.12C88.22 77.53 142.1 48 198.36 48h67.78a160.12 160.12 0 01130.8 67.88c11.19 15.9 28.07 65.67 40.39 102 6.54 19.31 12.86 37.92 19 54.12z" />
  </svg>
);

SvgHeadSideMask.displayName = "SvgHeadSideMask";
SvgHeadSideMask.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeadSideMask;