import * as React from "react";

const SvgAdjust = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M504 256c0 137-111 248-248 248V8c137 0 248 111 248 248z"
      opacity={0.4}
    />
    <path
      d="M256 8v496C119 504 8 393 8 256S119 8 256 8z"
      className="adjust_svg__fa-primary"
    />
  </svg>
);

SvgAdjust.displayName = "SvgAdjust";
SvgAdjust.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgAdjust;
