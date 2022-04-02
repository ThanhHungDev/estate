import * as React from "react";

const SvgCaretCircleLeft = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M256 504C119 504 8 393 8 256S119 8 256 8s248 111 248 248-111 248-248 248zm27.5-379.5l-123 123c-4.7 4.7-4.7 12.3 0 17l123 123c7.6 7.6 20.5 2.2 20.5-8.5V133c0-10.7-12.9-16.1-20.5-8.5z" />
  </svg>
);

SvgCaretCircleLeft.displayName = "SvgCaretCircleLeft";
SvgCaretCircleLeft.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleLeft;
