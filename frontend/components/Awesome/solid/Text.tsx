import * as React from "react";

const SvgText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 32a16 16 0 0116 16v96a16 16 0 01-16 16h-32a16 16 0 01-16-16v-32H264v304h40a16 16 0 0116 16v32a16 16 0 01-16 16H144a16 16 0 01-16-16v-32a16 16 0 0116-16h40V112H64v32a16 16 0 01-16 16H16a16 16 0 01-16-16V48a16 16 0 0116-16z" />
  </svg>
);

SvgText.displayName = "SvgText";
SvgText.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgText;
