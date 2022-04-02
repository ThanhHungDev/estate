import * as React from "react";

const SvgCaretCircleRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm-27.5 379.5l123-123c4.7-4.7 4.7-12.3 0-17l-123-123c-7.6-7.6-20.5-2.2-20.5 8.5v246c0 10.7 12.9 16.1 20.5 8.5z" />
  </svg>
);

SvgCaretCircleRight.displayName = "SvgCaretCircleRight";
SvgCaretCircleRight.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleRight;
