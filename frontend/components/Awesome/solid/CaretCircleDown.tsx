import * as React from "react";

const SvgCaretCircleDown = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-379.5-27.5l123 123c4.7 4.7 12.3 4.7 17 0l123-123c7.6-7.6 2.2-20.5-8.5-20.5H133c-10.7 0-16.1 12.9-8.5 20.5z" />
  </svg>
);

SvgCaretCircleDown.displayName = "SvgCaretCircleDown";
SvgCaretCircleDown.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleDown;
