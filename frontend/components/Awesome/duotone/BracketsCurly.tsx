import * as React from "react";

const SvgBracketsCurly = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 576 512" {...props}>
    <path
      d="M566.64 233.37a32 32 0 010 45.25l-45.25 45.25a32 32 0 00-9.39 22.64V384a96 96 0 01-96 96h-48a16 16 0 01-16-16v-32a16 16 0 0116-16h48a32 32 0 0032-32v-37.48a96 96 0 0128.13-67.89L498.76 256l-22.62-22.62A96 96 0 01448 165.47V128a32 32 0 00-32-32h-48a16 16 0 01-16-16V48a16 16 0 0116-16h48a96 96 0 0196 96v37.48a32 32 0 009.38 22.65l45.25 45.24z"
      opacity={0.4}
    />
    <path
      d="M208 32h-48a96 96 0 00-96 96v37.48a32.12 32.12 0 01-9.38 22.65L9.38 233.37a32 32 0 000 45.25l45.25 45.25A32.05 32.05 0 0164 346.51V384a96 96 0 0096 96h48a16 16 0 0016-16v-32a16 16 0 00-16-16h-48a32 32 0 01-32-32v-37.48a96 96 0 00-28.13-67.89L77.26 256l22.63-22.63A96 96 0 00128 165.48V128a32 32 0 0132-32h48a16 16 0 0016-16V48a16 16 0 00-16-16z"
      className="brackets-curly_svg__fa-primary"
    />
  </svg>
);

SvgBracketsCurly.displayName = "SvgBracketsCurly";
SvgBracketsCurly.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgBracketsCurly;
