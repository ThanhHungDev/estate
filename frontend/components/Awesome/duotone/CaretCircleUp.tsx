import * as React from "react";

const SvgCaretCircleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path
      d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm123 296H133a12 12 0 01-8.5-20.5l123-123a12 12 0 0117 0l123 123A12 12 0 01379 304z"
      opacity={0.4}
    />
    <path
      d="M379 304H133a12 12 0 01-8.5-20.5l123-123a12 12 0 0117 0l123 123A12 12 0 01379 304z"
      className="caret-circle-up_svg__fa-primary"
    />
  </svg>
);

SvgCaretCircleUp.displayName = "SvgCaretCircleUp";
SvgCaretCircleUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleUp;
