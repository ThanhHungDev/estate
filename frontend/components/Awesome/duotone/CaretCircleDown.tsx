import * as React from "react";

const SvgCaretCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm131.5 220.5l-123 123a12 12 0 01-17 0l-123-123A12 12 0 01133 208h246a12 12 0 018.5 20.5z"
      opacity={0.4}
    />
    <path
      d="M387.5 228.5l-123 123a12 12 0 01-17 0l-123-123A12 12 0 01133 208h246a12 12 0 018.5 20.5z"
      className="caret-circle-down_svg__fa-primary"
    />
  </svg>
);

SvgCaretCircleDown.displayName = "SvgCaretCircleDown";
SvgCaretCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleDown;
