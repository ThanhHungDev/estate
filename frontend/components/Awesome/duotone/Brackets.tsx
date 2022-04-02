import * as React from "react";

const SvgBrackets = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 448 512" {...props}>
    <path
      d="M448 64v384a32 32 0 01-32 32H304a16 16 0 01-16-16v-32a16 16 0 0116-16h80V96h-80a16 16 0 01-16-16V48a16 16 0 0116-16h112a32 32 0 0132 32z"
      opacity={0.4}
    />
    <path
      d="M144 32H32A32 32 0 000 64v384a32 32 0 0032 32h112a16 16 0 0016-16v-32a16 16 0 00-16-16H64V96h80a16 16 0 0016-16V48a16 16 0 00-16-16z"
      className="brackets_svg__fa-primary"
    />
  </svg>
);

SvgBrackets.displayName = "SvgBrackets";
SvgBrackets.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBrackets;
