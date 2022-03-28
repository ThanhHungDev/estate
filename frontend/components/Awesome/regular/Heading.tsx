import * as React from "react";

const SvgHeading = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M432 80v352h32a16 16 0 0116 16v16a16 16 0 01-16 16H336a16 16 0 01-16-16v-16a16 16 0 0116-16h32V280H144v152h32a16 16 0 0116 16v16a16 16 0 01-16 16H48a16 16 0 01-16-16v-16a16 16 0 0116-16h32V80H48a16 16 0 01-16-16V48a16 16 0 0116-16h128a16 16 0 0116 16v16a16 16 0 01-16 16h-32v152h224V80h-32a16 16 0 01-16-16V48a16 16 0 0116-16h128a16 16 0 0116 16v16a16 16 0 01-16 16z" />
  </svg>
);

SvgHeading.displayName = "SvgHeading";
SvgHeading.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgHeading;
