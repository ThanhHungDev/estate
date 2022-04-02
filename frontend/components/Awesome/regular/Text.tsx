import * as React from "react";

const SvgText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path d="M432 32a16 16 0 0116 16v80a16 16 0 01-16 16h-16a16 16 0 01-16-16V96H256v336h48a16 16 0 0116 16v16a16 16 0 01-16 16H144a16 16 0 01-16-16v-16a16 16 0 0116-16h48V96H48v32a16 16 0 01-16 16H16a16 16 0 01-16-16V48a16 16 0 0116-16z" />
  </svg>
);

SvgText.displayName = "SvgText";
SvgText.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgText;
