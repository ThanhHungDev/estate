import * as React from "react";

const SvgCaretCircleUp = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm379.5 27.5l-123-123c-4.7-4.7-12.3-4.7-17 0l-123 123c-7.6 7.6-2.2 20.5 8.5 20.5h246c10.7 0 16.1-12.9 8.5-20.5z" />
  </svg>
);

SvgCaretCircleUp.displayName = "SvgCaretCircleUp";
SvgCaretCircleUp.defaultProps = {
  width: 24,
  height: 24,
  fill: "currentcolor",
};
export default SvgCaretCircleUp;
